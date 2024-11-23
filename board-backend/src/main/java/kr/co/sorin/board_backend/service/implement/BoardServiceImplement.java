package kr.co.sorin.board_backend.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import kr.co.sorin.board_backend.dto.request.board.PostBoardRequestDto;
import kr.co.sorin.board_backend.dto.response.ResponseDto;
import kr.co.sorin.board_backend.dto.response.board.PostBoardResponseDto;
import kr.co.sorin.board_backend.entity.BoardEntity;
import kr.co.sorin.board_backend.entity.ImageEntity;
import kr.co.sorin.board_backend.repository.BoardRepository;
import kr.co.sorin.board_backend.repository.ImageRepository;
import kr.co.sorin.board_backend.repository.UserRepository;
import kr.co.sorin.board_backend.service.BoardService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImplement implements BoardService {

    private final UserRepository userRepository;
    private final BoardRepository boardRepository;
    private final ImageRepository imageRepository;

    @Override
    public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email) {

        try {

            boolean existedEmail = userRepository.existsByEmail(email);
            if (!existedEmail)
                return PostBoardResponseDto.notExistUser();

            BoardEntity boardEntity = new BoardEntity(dto, email);
            boardRepository.save(boardEntity);

            int boardNumber = boardEntity.getBoardNumber();

            List<String> boardImageList = dto.getBoardImageList();
            List<ImageEntity> imageEntities = new ArrayList<>();

            for (String image : boardImageList) {
                ImageEntity imageEntity = new ImageEntity(boardNumber, image);
                imageEntities.add(imageEntity);
            }

            imageRepository.saveAll(imageEntities);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.databaseError();
        }

        return PostBoardResponseDto.success();
    }

}
