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





:open_file_folder: ch2. React Component

<details>
<summary> :pencil: React Component 만드는법  </summary>
<div markdown="1">

## React Component 만드는법 - 2가지
### class 컴포넌트
```js
import React from 'react';

// 정의
class ClassComponent extends React.Component {
    render() { 
        // 항상 return 해주어야 한다.
        return (<div>Hello</div>);
    }
}

// 사용
ReactDom.render(
    <ClassComponent />,
    document.querySelector('#root')
)
```

### function 컴포넌트
```js
import React from 'react';

// 정의 1
function FunctionComponent() {
    return <div>Hello</div>;
}
// 사용
ReactDOM.render(<FunctionComponent />, document.querySelector('#root'))

// 정의 2
const FunctionComponent = () => <div>Hello</div>;

// 사용
ReactDOM.render(<FunctionComponent />, document.querySelector('#root'))
```
</div>
</details>

<details>
<summary> :pencil: React.createElemet  </summary>
<div markdown="1">

## React.createElemet
사용형태
```js
React.createElemet(
    type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
    [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
    [...children] // 자식으로 넣어주는 요소들
);
```
:one: 태그 이름 문자열 type
```html
<div id="root"></div>
<script type="text/javascript">
    ReactDOM.render(
        React.createElement("h1", null, `type 이 "태그 이름 문자열" 입니다.`),
        document.querySelector("#root")
    );
</script>
```
:two: 리액트 컴포넌트 type
```html
<div id="root"></div>
<script type="text/javascript">
    const Component = () => {
        return React.createElement("p", null, `type이 "React 컴포넌트" 입니다.`)
    }

    // <Component></Component> => <Component /> => <p>type이 "React 컴포넌트" 입니다.</p>
    ReactDOM.render(
        React.createElement(Component, null, null),
        document.querySelector("#root")
    );
</script>
```
:three: React.Fragment
```html
<div id="root"></div>
<script type="text/javascript">
    ReactDOM.render(
        React.createElement(
            React.Fragment,
            null,
            `type 이 "React Fragment" 입니다.`
        ),
        document.querySelector("#root")
    );
</script>
```
</div>
</details>

<details>
<summary> :pencil: JSX  </summary>
<div markdown="1">

## JSX
복잡한 코드를 순수하게 실행할 수 있는 자바스크립트로 변환하는 과정이 필요하다.<br>
JSX 문법으로 작성된 코드는 순수한 JavaScript로 컴파일 하여 사용한다. <br>
이는 `babel` 에 의해 진행된다.
[babel 사이트](https://babeljs.io/)
아래의 코드를 추가해주면 자동으로 변환한다.
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<div id="root"></div>
<script type="text/babel">
    ReactDOM.render(
        <div>
            <div>
                <h1>주제</h1>
                <ul>
                    <li>React</li>
                    <li>Vue</li>
                </ul>
            </div>
        </div>,
        document.querySelector("#root")
    );
</script>
```

### JSX를 사용하는 이유
- React.createElement VS JSX
    - JSX가 가독성이 엄청 좋음
- babel 과 같은 컴파일 과정에서 문법적 오류를 인지하기 쉬움
### JSX 문법
- 최상위 요소가 하나여야 합니다.
- 최상위 요소 리턴하는 경우, () 로 감싸야 합니다.
- 자식들을 바로 랜더링하고 싶으면, <>자식들</>를 사용합니다. => Fragment
- 자바스크립트 표현식을 사용하려면, {표현식} 를 이용합니다.
- if 문은 사용할 수 없습니다.  
    - 삼항 연산자 혹은 &&를 사용합니다.
- style 을 이용해 인라인 스타일링이 가능합니다.
- class 대신 className 을 사용해 class 를 적용할 수 있습니다.
</div>
</details>

<details>
<summary> :pencil: Props와 State  </summary>
<div markdown="1">

## Props와 State
- Props는 컴포넌트 외부에서 컴포넌트에게 주는 데이터 입니다.
- State 는 컴포넌트 내부에서 변경할 수 있는 데이터 입니다.
- 둗다 변경이 발생하면, 랜더가 다시 일어날 수 있습니다.

## Render 함수
Props 와 State 를 바탕으로 컴포넌트를 그립니다. <br>
그리고 Props와 state가 변경되면, 컴포넌트를 다시 그립니다. <br>
컴포넌트를 그리는 방법을 기술하는 함수가 랜더합수 입니다.
![mainpage](img/props.png) 
## Props
### :pushpin: 코드로 살펴보기
:one: function Component 이용하기
```html
<div id="root"></div>
<script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    // {message: '안녕하세요!!!'}
    function Component(props) {
        return (
            <div>
                <h1>{props.message} 이것은 함수로 만든 컴포넌트 입니다.</h1>
            </div>
        );
        // 출력: 안녕하세요!!! 이것은 함수로 만든 컴포넌트 입니다.
    }

    ReactDOM.render(
        <Component message = "안녕하세요!!!" />,
        document.querySelector('#root')
    );
</script>
```
:two: class Component 이용하기
```html
<div id="root"></div>
<script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    class Component extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                </div>
            );
        }
    }

    ReactDOM.render(
        <Component message = "안녕하세요!!" />,
        document.querySelector('#root')
    );
</script>
```
- 기본값 지정해보기 1
```html
<div id="root"></div>
<script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    class Component extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                </div>
            );
        }
    }

    Component.defaultProps = {
        message: "기본값",
    };

    ReactDOM.render(
        <Component />,
        document.querySelector('#root')
    );
</script>
```
- 기본값 지정해보기 2
```html
<div id="root"></div>
<script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    class Component extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
                </div>
            );
        }

        static defaultProps = {
            message: "기본값",
        };
    }


    ReactDOM.render(
        <Component />,
        document.querySelector('#root')
    );
</script>
```
함수에서도 사용 가능하다.
## State
- State 정의 방법 1: 항상 객체 형태로 선언해야함
```html
<div id="root"></div>
<script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    class Component extends React.Component {
        state = {
            count: 0,
        }
        render() {
            return (
                <div>
                    <h1>
                        {this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.
                    </h1>
                    <p>{this.state.count}</p>
                </div>
            );
        }

        componentDidMount() { // 메서드 재정의
            setTimeout(() => {
                this.setState({
                    count: this.state.count + 1,
                });
            }, 1000);
        }

        static defaultProps = {
            message: "기본값",
        };
    }


    ReactDOM.render(
        <Component message="기본값 아님"/>,
        document.querySelector('#root')
    );
</script>
```

- State 정의 방법 2
```html
<div id="root"></div>
<script type="text/babel">
    console.log(React);
    console.log(ReactDOM);

    class Component extends React.Component {
        constructor(props) {
            super(props);

            // state 초기화
            this.state = {count: 0};
        }

        render() {
            return (
                <div>
                    <h1>
                        {this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.
                    </h1>
                    <p>{this.state.count}</p>
                </div>
            );
        }

        componentDidMount() { // 메서드 재정의
            setTimeout(() => {
                // this.setState({
                //     count: this.state.count + 1,
                // });
                this.setState((previousState) => {
                    const newState = { count: previousState.count + 1 }
                    return newState;
                })
            }, 1000);
        }

        static defaultProps = {
            message: "기본값",
        };
    }


    ReactDOM.render(
        <Component message="기본값 아님"/>,
        document.querySelector('#root')
    );
</script>
```

</div>
</details>


<details>
<summary> :pencil: Event Handling  </summary>
<div markdown="1">

## Event Handling
- HTML DOM 에 클릭하면 이벤트가 발생하고, 발생하면 그에 맞는 병경이 일어나도록 해야합니다.
- JSX 에 이벤트를 설정할 수 있습니다.
```js
class Comp extends React.Component {
    render() {
        return (
            <div>
                <button onClick={ () =>{
                    console.log('clicked');
                }}>클랙</button>
            </div>
        )
    }
}
```
- camelCase 로만 사용할 수 있습니다.
    - onClick, onMouseEnter
- 이벤트에 연결된 자바스트립트 코드는 함수입니다.
    - 이벤트={함수} 와 같이 사용합니다.
- 실제 DOM 요소들에만 사용 가능합니다.
    - 리액트 컴포넌트에 사용하면, 그냥 props로 전달합니다.
### :pushpin: 코드 예제
```html
<script type="text/babel">
    function Component() {
        return <div><button onClick={()=> {
            console.log("clicked");
        }}>클릭</button></div>
    }

    ReactCOM.render(<Component />, document.querySelector('#root'));
</script>
```
</div>
</details>