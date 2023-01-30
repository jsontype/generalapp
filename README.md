# 무비 앱

[스타일 이슈]
스타일: 앱 타이틀의 가운데 정렬
    "무비 리스트" 문구를 화면 중간으로 표시 (text-align: center)
스타일: 리스트 간의 간격 개선
    리스트 간의 간격을 10px 정도 주기 (좌우 주면 안되고 하단만 주기)

[로직 이슈]
로직: 영화 평점이 8점이상일 경우 hot icon 제목옆에 표시
    ctrl cmd space 를 통해서 불타는 아이콘 넣기
로직: 영화 장르 배열의 length가 0일때의 처리
    "장르: 정보없음"으로 표시
로직: 영화 상세정보 토글 만들기
    * 리스트를 클릭하면 a 태그로 이동하는 것이 아니라 리스트 아래쪽에, 이하 정보들의 표시를 토글로 on off한다.
    타이틀: title_long
    장르: genres
    런타임: runtime
    평점: rating
    줄거리: summary
    토렌트 다운로드 링크: torrents // 링크1 링크2 ... 

[리팩토링 이슈]
리팩토링: vue면 views, react면 pages로 components 폴더를 이동시키고 btn등의 components로 폴더 나누기
리팩토링: Title 컴포넌트화
    <h1>무비리스트</h1>
    text는 title props를 건네줄 것
리팩토링: MovieList 컴포넌트화
리팩토링: 컴포넌트 폴더 정리
    src/components/MovieList/index.js 형태로 바꿀 것
    src/components/MovieList/style.css
    src/components/Title/index.js
    src/components/Title/index.css
리팩토링: Typescript 도입
리팩토링: scss 도입 후, 변수를 글로벌화 해서 임포트하는 방식으로 변경
    1. npm i node-sass
    2. css 확장자를 모두 scss로 변경
    3. 다음 파일에 변수 선언
        src/style/font.scss
        src/style/color.scss
    4. 기존 cssㄹ모든 font-size와 color 변수화
        예 : $blue: '#??????'
        예 : $font-md: '15px' 사이즈는 임의로
        $font-xl, $font-lg, $font-md, $font-sm, $font-xs
    5. 루트글로벌변수파일 src/style/resources.scss 생성
            @import './font.scss'
            @import './color.scss'
    6. 기존 스타일 파일에 @import 글로벌 '~/style/resouces.scss'로 임포트시켜놓고 해당 변수 사용
리팩토링 : css-module 적용
    확장자 *.module.* 로 바꾸고 임포트 부분 설정도 같이 변경
리팩토링: MovieList 컴포넌트 랜더링의 퍼포먼스튜닝(최적화)

[기능 추가]
기능: TodoList API를 불러와서 투두리스트 메뉴 및 컴포넌트 구현
    API: https://jsonplaceholder.typicode.com/todos
기능: UserList API를 불러와서 유저리스트 메뉴 및 컴포넌트 구현
    API: https://jsonplaceholder.typicode.com/users



# 뉴스 앱
