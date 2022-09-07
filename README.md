ch1. React Getting Started

<details>
<summary> :pencil: 01. React Concept  </summary>
<div markdown="1">

Component Tree => DOM Tree
## Why virtual DOM?
- DOM 을 직접 제어하는 경우
    - 바뀐 부분만 정확히 바꿔야 한다.
- DOM을 직접 제어하지 않는 경우
    - 가상의 돔 트리를 사용해서,
    - 이전 상태를 비교하여, 
    - 바뀐 부분을 찾아내서 자동으로 바꾼다.
</div>
</details>

<details>
<summary> :pencil: 02. 개발 환경 체크  </summary>
<div markdown="1">

## 필요한 개발환경
- Node.js
    - installer
    - nvm
- Browser (Chrome)
- Git
- VSCode
</div>
</details>

<details>
<summary> :pencil: 03. React 라이브러리(1)  </summary>
<div markdown="1">

## 리액트가 하는 일
리액트의 핵심 모듈 2개로 리액트가 하는 일 알아보기
### :one: 리액트 컴포넌트 => HTMLElement 연결하기
"만들어진 리액트 컴포넌트"를 실제 HTMLElement에 연결할 때 ReactDOM 라이브러리를 이용한다.
```js
import ReactDOM from 'react-dom';
```
### :two: 리액트 컴포넌트 만들기
```js
import React from 'react';
```
## 파일 생성 예제
### :one: 프로젝트 시작하기
```
$ npm init -y
$ npx serve
```
### :two: index.html 파일 생성
[CDN 링크](https://reactjs.org/docs/cdn-links.html)
위 사이트에 접속하여 링크를 body 부분에 추가해준다
- index.html
```html
<body>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
```

</div>
</details>