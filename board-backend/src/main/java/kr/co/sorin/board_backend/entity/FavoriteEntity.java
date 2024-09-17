package kr.co.sorin.board_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import kr.co.sorin.board_backend.entity.primaryKey.FavoritePk;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="favorite")
@Table(name="favorite")
@IdClass(FavoritePk.class) // 복합키
public class FavoriteEntity {

    @Id
    private String userEmail;

    @Id
    private int boardNumber;

}
