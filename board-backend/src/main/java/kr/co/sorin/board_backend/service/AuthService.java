package kr.co.sorin.board_backend.service;

import org.springframework.http.ResponseEntity;

import kr.co.sorin.board_backend.dto.response.auth.SignInResponseDto;
import kr.co.sorin.board_backend.dto.response.auth.SignUpResponseDto;
import kr.co.sorin.board_backend.dto.request.auth.SignInRequestDto;
import kr.co.sorin.board_backend.dto.request.auth.SignUpRequestDto;

public interface AuthService {

    // 부모타입도 같이 반환 ? super
    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);

    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);
}
