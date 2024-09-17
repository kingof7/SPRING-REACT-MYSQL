package kr.co.sorin.board_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.co.sorin.board_backend.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> { // JpaRepository<Entity, primary_key Wrapper type>

    // query method
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);
    boolean existsByTelNumber(String telNumber);

}
