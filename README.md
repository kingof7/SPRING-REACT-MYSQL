# Board Project

프론트엔드(React + TypeScript)와 백엔드(Gradle 기반 JVM 앱) 기반의 게시판 프로젝트

## 아키텍쳐

### 1) 전체 구조(컨텍스트/컨테이너)

```mermaid

flowchart LR

    user[사용자<br/>브라우저] --> FE[React SPA<br/>board-frontend]

    FE -->|HTTP/JSON| API[Spring Boot API<br/>board-backend]

    API -->|JPA/JDBC| DB[(MySQL)]

```

### 2) 요청 흐름(시퀀스)

```mermaid

sequenceDiagram

    autonumber

    participant U as Browser

    participant FE as React App

    participant API as Spring Boot

    participant SVC as Service

    participant REP as Repository

    participant DB as MySQL


    U->>FE: 페이지 접속

    FE->>API: GET /api/... (Fetch/Axios)

    API->>SVC: 유효성 검사/비즈니스 로직

    SVC->>REP: 질의/갱신

    REP->>DB: SQL

    DB-->>REP: rows

    REP-->>SVC: entities

    SVC-->>API: DTO

    API-->>FE: 200 OK + JSON

    FE-->>U: 렌더링

```

## 요구 사항

- Node.js LTS, npm
- Java 17+ (권장), Gradle Wrapper는 리포지토리에 포함됨

## 빠른 시작

프론트엔드와 백엔드를 각각 별도 터미널에서 실행합니다.

### 프론트엔드 (board-frontend)

```sh

cd board-frontend

npm install

npm start

```

- 테스트:

  ```sh

  npm test

  ```
- 프로덕션 빌드:

  ```sh

  npm run build

  ```

자세한 스크립트는 [board-frontend/package.json](board-frontend/package.json) 참조.

### 백엔드 (board-backend)

```sh

cd board-backend

# 빌드

./gradlew build        # Windows: gradlew.bat build

# 테스트

./gradlew test

# 실행(프로젝트에 따라 아래 중 하나 사용)

./gradlew bootRun      # Spring Boot일 경우

./gradlew run          # application 플러그인 사용 시

# 또는 JAR 실행(빌드 후)

java -jar build/libs/<생성된-jar파일>.jar

```

Gradle 설정 및 태스크는 [board-backend/build.gradle](board-backend/build.gradle) 참고.

## VS Code 개발 환경

- 디버깅/실행 구성: [.vscode/launch.json](.vscode/launch.json)
- 편집기 설정: [.vscode/settings.json](.vscode/settings.json)
- 테스트

  - 프론트엔드: Jest(CRA 기본) — [board-frontend/src/App.test.tsx](board-frontend/src/App.test.tsx)
  - 백엔드: Gradle(Test) 태스크 — `./gradlew test`

## 빌드 산출물

- 프론트엔드: `board-frontend/build/`
- 백엔드: `board-backend/build/` (라이브러리: `build/libs/`)

## 참고 문서

- 도메인/설계/DB 관련 문서: [notes/concept_and_design/](notes/concept_and_design), [notes/database/](notes/database)
- 프론트엔드 패키지 참고: [notes/npm_packages/](notes/npm_packages)

## 라이선스

프로젝트 루트의 LICENSE 파일(있을 경우)을 참고하세요.

<style>#mermaid-1755103007581{font-family:sans-serif;font-size:16px;fill:#333;}#mermaid-1755103007581 .error-icon{fill:#552222;}#mermaid-1755103007581 .error-text{fill:#552222;stroke:#552222;}#mermaid-1755103007581 .edge-thickness-normal{stroke-width:2px;}#mermaid-1755103007581 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1755103007581 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1755103007581 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1755103007581 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1755103007581 .marker{fill:#333333;}#mermaid-1755103007581 .marker.cross{stroke:#333333;}#mermaid-1755103007581 svg{font-family:sans-serif;font-size:16px;}#mermaid-1755103007581 .label{font-family:sans-serif;color:#333;}#mermaid-1755103007581 .label text{fill:#333;}#mermaid-1755103007581 .node rect,#mermaid-1755103007581 .node circle,#mermaid-1755103007581 .node ellipse,#mermaid-1755103007581 .node polygon,#mermaid-1755103007581 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1755103007581 .node .label{text-align:center;}#mermaid-1755103007581 .node.clickable{cursor:pointer;}#mermaid-1755103007581 .arrowheadPath{fill:#333333;}#mermaid-1755103007581 .edgePath .path{stroke:#333333;stroke-width:1.5px;}#mermaid-1755103007581 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1755103007581 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1755103007581 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1755103007581 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1755103007581 .cluster text{fill:#333;}#mermaid-1755103007581 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:sans-serif;font-size:12px;background:hsl(80,100%,96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1755103007581:root{--mermaid-font-family:sans-serif;}#mermaid-1755103007581:root{--mermaid-alt-font-family:sans-serif;}#mermaid-1755103007581 flowchart-v2{fill:apa;}</style>
