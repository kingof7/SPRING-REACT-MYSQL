package kr.co.sorin.board_backend.service;

import org.springframework.http.ResponseEntity;

import kr.co.sorin.board_backend.dto.response.user.GetSignInUserResponseDto;

public interface UserService {

    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);



}
