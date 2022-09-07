# :sunflower: React-study
:open_file_folder: ch1. React Getting Started

<details>
<summary> :pencil: 01. React Concept  </summary>
<div markdown="1">

## 01. React Concept 
### :pushpin: React 란 무엇일까?
> React 는 사용자 인터페이스(User Interface)를 만들기 위한 Javascript 라이브러리이다. <br>
> React 를 이해하기 위해 DOM(Document Object Model)을 알아야한다. <br>
> DOM 은 자바스크립트에서 HTML에 접근할 수 있도록 요소들을 객체화하여 사용할 수 있도록 한다.<br>
> DOM은 HTML이나 XML 문서의 interface 이다.
### :pushpin: Virtual DOM
가상 DOM은 DOM이 생성되기 전, 이전 상태 값과 수정사항을 비교하여 달라진 부분만 DOM 에게 한번에 전달하여 한번만 렌더링을 진행한다.
### :pushpin: Why virtual DOM?
- DOM 을 직접 제어하는 경우
    - 바뀐 부분만 정확히 바꿔야 한다.
- DOM을 직접 제어하지 않는 경우
    - 가상의 돔 트리를 사용해서,
    - 이전 상태를 비교하여, 
    - 바뀐 부분을 찾아내서 자동으로 바꾼다.
### :pushpin: 컴포넌트
- React는 UI를 여러 컴포넌트로 만들어 사용하므로 재사용성이 높다.
- 프로젝트가 복잡해지더라도 코드 유지보수 및 관리에 용이하다.
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
