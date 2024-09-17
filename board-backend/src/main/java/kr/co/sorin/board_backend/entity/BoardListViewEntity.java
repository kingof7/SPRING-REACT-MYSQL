package kr.co.sorin.board_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="board_list_view")
@Table(name="board_list_view")
public class BoardListViewEntity {

    @Id // VIEW 테이블에 primary key가 없지만, java class에는 임시로 지정한다, 해당 뷰는 board 테이블이 근본이기 때문
    private int boardNumber;

    private String title;

    private String content;

    private String titleImage;

    private int viewCount;

    private int favoriteCount;

    private int commentCount;

    private String writeDatetime;

    private String writerEmail;

    private String writerNickname;

    private String writerProfileImage;

}
