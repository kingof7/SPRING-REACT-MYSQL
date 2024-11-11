package kr.co.sorin.board_backend.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import kr.co.sorin.board_backend.dto.response.ResponseDto;
import kr.co.sorin.board_backend.dto.response.user.GetSignInUserResponseDto;
import kr.co.sorin.board_backend.entity.UserEntity;
import kr.co.sorin.board_backend.repository.UserRepository;
import kr.co.sorin.board_backend.service.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {

    // userrepository 의존성 주입 필요
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email) {

        UserEntity userEntity = null;

        try {
            userEntity = userRepository.findByEmail(email);
            if (userEntity == null) return GetSignInUserResponseDto.notExistUser();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetSignInUserResponseDto.success(userEntity);

    }

}
