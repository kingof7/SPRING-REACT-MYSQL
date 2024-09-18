package kr.co.sorin.board_backend.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import kr.co.sorin.board_backend.common.util.StringSecurity;
import kr.co.sorin.board_backend.dto.request.auth.SignInRequestDto;
import kr.co.sorin.board_backend.dto.request.auth.SignUpRequestDto;
import kr.co.sorin.board_backend.dto.response.ResponseDto;
import kr.co.sorin.board_backend.dto.response.auth.SignInResponseDto;
import kr.co.sorin.board_backend.dto.response.auth.SignUpResponseDto;
import kr.co.sorin.board_backend.entity.UserEntity;
import kr.co.sorin.board_backend.provider.JwtProvider;
import kr.co.sorin.board_backend.repository.UserRepository;
import kr.co.sorin.board_backend.service.AuthService;

import lombok.RequiredArgsConstructor;

// [생성자 주입] ** 스프링 공식 document에서 추천 (비어있는 경우가 발생안함)
// @Autowired -> Autowired 생략 가능
// public AuthServiceImpl(UserRepository userRepository) {
//   this.userRepository = userRepository;
// }

// [필드 주입] -> 비어있는 경우가 발생하므로 추천 X
// @Autowired
// private final UserRepository userRepository;

// [셋터 주입] -> 비어있는 경우가 발생하므로 추천 X
// @Autowired
// public void setUserRepository(UserRepository userRepository) {
//     this.userRepository = userRepository;
// }

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    // 필드에 final을 붙이면 @RequiredArgsConstructor와 함께 동작하여 생성자를 자동으로 만들어 주고, 주입됨 (= 생성자
    // 주입)
    private final UserRepository userRepository;

    private final JwtProvider jwtProvider;

    private final StringSecurity stringSecurity;

    @Override
    public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {

        try {

            String email = dto.getEmail();
            boolean existedEmail = userRepository.existsByEmail(email);
            if (existedEmail)
                return SignUpResponseDto.duplicateEmail();

            String nickname = dto.getNickname();
            boolean existedNickname = userRepository.existsByNickname(nickname);
            if (existedNickname)
                return SignUpResponseDto.duplicateNickname();

            String telNumber = dto.getTelNumber();
            boolean existedTelNumber = userRepository.existsByTelNumber(telNumber);
            if (existedTelNumber)
                return SignUpResponseDto.duplicateTelNumber();

            // 패스워드 암호화
            String password = dto.getPassword();

            String encodedPassword = stringSecurity.encodePassword(password);
            dto.setPassword(encodedPassword);

            UserEntity userEntity = new UserEntity(dto);
            userRepository.save(userEntity);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }

        return SignUpResponseDto.success();
    }

    @Override
    public ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto) {

        String token = null;

        try {
            String email = dto.getEmail();
            UserEntity userEntity = userRepository.findByEmail(email);
            if (ObjectUtils.isEmpty(userEntity))
                return SignInResponseDto.signInFailed();

            String password = dto.getPassword();
            String encodedPassword = userEntity.getPassword();

            // 비교
            boolean isMatched = stringSecurity.isMatched(password, encodedPassword);
            if (!isMatched)
                return SignInResponseDto.signInFailed();

            // 토큰 생성
            token = jwtProvider.create(email);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }

        return SignInResponseDto.success(token);
    }

}
