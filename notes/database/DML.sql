INSERT INTO
    user
VALUES (
        'email@email.com',
        'P!ssw0rd',
        'nickname',
        '01012345678',
        '서울특별시 종로구',
        '그랑서울',
        null
    );

-- 로그인
SELECT * FROM user WHERE email = 'email@email.com';

-- 게시물 작성
INSERT INTO
    board (
        title,
        content,
        write_datetime,
        favorite_count,
        comment_count,
        view_count,
        writer_email
    )
VALUES (
        '제목',
        '내용',
        '2024-09-06 23:25:54',
        0,
        0,
        0,
        'email@email.com'
    );

INSERT INTO image VALUES (2, 'url2');

-- 댓글 작성
INSERT INTO
    comment (
        content,
        write_datetime,
        user_email,
        board_number
    )
VALUES (
        '반갑습니다',
        '2024-09-06 23:28:50',
        'email@email.com',
        1
    );

UPDATE board
SET
    comment_count = comment_count + 1
WHERE
    board_number = 3;

-- 좋아요 등록, 취소
INSERT INTO favorite VALUES ('email@email.com', 1);

UPDATE board
SET
    favorite_count = favorite_count + 1
WHERE
    board_number = 1;

DELETE FROM favorite
WHERE
    user_email = 'email@email.com'
    AND board_number = 1;

UPDATE board
SET
    favorite_count = favorite_count - 1
WHERE
    board_number = 1;

-- 게시물 수정
UPDATE board
SET
    title = '수정 제목',
    content = '수정 내용'
WHERE
    board_number = 1;

DELETE FROM image WHERE board_number = 1;

INSERT INTO image VALUES (2, 'url');

INSERT INTO image VALUES (3, 'url3');

-- 게시물 삭제
DELETE FROM comment WHERE board_number = 1;

DELETE FROM favorite WHERE board_number = 1;

DELETE FROM image WHERE board_number = 1;

DELETE FROM board WHERE board_number = 1;

-- 상세 게시물 불러오기
SELECT
    B.board_number AS board_number,
    B.title AS title,
    B.content AS content,
    B.write_datetime AS write_datetime,
    B.writer_email AS writer_email,
    U.nickname AS nickname,
    U.profile_image AS profile_image
FROM board AS B
    INNER JOIN user AS U ON B.writer_email = U.email
WHERE
    board_number = 1;

SELECT image FROM image WHERE board_number = 1;

SELECT
    U.email AS email,
    U.nickname AS nickname,
    U.profile_image AS profile_image
FROM favorite AS F
    INNER JOIN user AS U ON F.user_email = U.email
WHERE
    F.board_number = 1;

SELECT
    U.nickname AS nickname,
    U.profile_image AS profile_image,
    C.write_datetime AS write_datetime,
    C.content AS content
FROM comment AS C
    INNER JOIN user AS U ON C.user_email = U.email
WHERE
    C.board_number = 1
ORDER BY write_datetime DESC;

-- 최신 게시물 리스트 불러오기

SELECT *
FROM board AS B
    INNER JOIN user AS U ON B.writer_email = U.email
    LEFT JOIN image AS I ON B.board_number = I.board_number;

-- 최신 게시물 리스트 불러오기 (image row 중복 제거)
-- SELECT
--     B.board_number AS board_number
--   , B.title AS title
--   , B.content AS content
--   , I.image AS image
--   , B.favorite_count AS favorite_count
--   , B.comment_count AS comment_count
--   , B.view_count AS view_count
--   , B.write_datetime AS write_datetime
--   , U.nickname AS writer_nickname
--   , U.profile_image AS writer_profile_image
-- FROM board AS B
-- INNER JOIN user AS U
-- ON B.writer_email = U.email
-- LEFT JOIN (SELECT board_number, ANY_VALUE(image) AS image FROM image GROUP BY board_number) AS I
-- ON B.board_number = I.board_number
SELECT *
FROM board_list_view
ORDER BY write_datetime DESC
    -- LIMIT 0, 5; -- (페이지 - 1) * 5
LIMIT 5, 5;

-- 검색어 리스트
-- SELECT
--     B.board_number AS board_number
--   , B.title AS title
--   , B.content AS content
--   , I.image AS image
--   , B.favorite_count AS favorite_count
--   , B.comment_count AS comment_count
--   , B.view_count AS view_count
--   , B.write_datetime AS write_datetime
--   , U.nickname AS writer_nickname
--   , U.profile_image AS writer_profile_image
-- FROM board AS B
-- INNER JOIN user AS U
-- ON B.writer_email = U.email
-- LEFT JOIN (SELECT board_number, ANY_VALUE(image) AS image FROM image GROUP BY board_number) AS I
-- ON B.board_number = I.board_number
SELECT *
FROM board_list_view
WHERE
    title LIKE '%수정%'
    OR content LIKE '%수정%'
ORDER BY write_datetime DESC;

-- 검색어 주간 상위 TOP 3 불러오기
-- SELECT
--     B.board_number AS board_number
--   , B.title AS title
--   , B.content AS content
--   , I.image AS image
--   , B.favorite_count AS favorite_count
--   , B.comment_count AS comment_count
--   , B.view_count AS view_count
--   , B.write_datetime AS write_datetime
--   , U.nickname AS writer_nickname
--   , U.profile_image AS writer_profile_image
-- FROM board AS B
-- INNER JOIN user AS U
-- ON B.writer_email = U.email
-- LEFT JOIN (SELECT board_number, ANY_VALUE(image) AS image FROM image GROUP BY board_number) AS I
-- ON B.board_number = I.board_number
SELECT *
FROM board_list_view
WHERE
    write_datetime BETWEEN '2024-09-02 00:00:00' AND '2024-09-08 23:59:59'
ORDER BY
    favorite_count DESC,
    comment_count DESC,
    view_count DESC,
    write_datetime DESC
LIMIT 3;
-- 3개만
-- 특정 유저 게시물 리스트 불러오기
-- SELECT
--     B.board_number AS board_number
--   , B.title AS title
--   , B.content AS content
--   , I.image AS image
--   , B.favorite_count AS favorite_count
--   , B.comment_count AS comment_count
--   , B.view_count AS view_count
--   , B.write_datetime AS write_datetime
--   , U.nickname AS writer_nickname
--   , U.profile_image AS writer_profile_image
-- FROM board AS B
-- INNER JOIN user AS U
-- ON B.writer_email = U.email
-- LEFT JOIN (SELECT board_number, ANY_VALUE(image) AS image FROM image GROUP BY board_number) AS I
-- ON B.board_number = I.board_number
SELECT *
FROM board_list_view
WHERE
    writer_email = 'email@email.com'
ORDER BY write_datetime DESC, board_number DESC;

-- 인기 검색어 리스트
SELECT search_word, count(search_word) AS count -- search_word를 기준으로 count를 친다.
FROM search_log
WHERE
    relation IS FALSE -- 관계형이 아닌 것
GROUP BY
    search_word;
-- search_word로 group by 해준다.
ORDER BY count DESC LIMIT 15;

-- 관련 검색어 리스트
SELECT relation_word, count(relation_word) AS count
FROM search_log
WHERE
    search_word = '검색어'
GROUP BY
    relation_word
ORDER BY count DESC
LIMIT 15;

-- 유저 정보 불러오기 / 로그인 유저 정보 불러오기
SELECT * FROM user WHERE email = 'email@email.com';

-- 닉네임 수정하기
UPDATE user SET nickname = '수정 닉네임' WHERE email = 'email@email.com';

-- 프로필 이미지 수정
UPDATE user
SET
    profile_image = 'new_profile_url'
WHERE
    email = 'email@email.com';