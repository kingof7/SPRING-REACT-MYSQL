package kr.co.sorin.board_backend.service;

import org.springframework.http.ResponseEntity;

import kr.co.sorin.board_backend.dto.request.board.PostBoardRequestDto;
import kr.co.sorin.board_backend.dto.response.board.PostBoardResponseDto;

public interface BoardService {
    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);
}
