package kr.co.sorin.board_backend.common.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class StringSecurity {

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }

    public boolean isMatched(String password, String encodedPassword) {
        return passwordEncoder.matches(password, encodedPassword);
    }

}
