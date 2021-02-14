# #2 useEffect

useEffect는 componentWillUnmount와 componentDidMount, componentWillUpdate와 비슷합니다.

useEffect는 componentDidMount, componentWillUpdate, componentWillUnmount를 동시에 수행하는 역할을 합니다.

useEffect의 첫 번째 인자는 function으로서의 effent가 됩니다.

useEffect의 두 번째 인자는 function으로서의 deps가 됩니다.

만약 deps가 있다면, effent는 (deps)리스트에 있는 값일 때만 값이 변하도록 활성화됩니다.

## useEffect example

```javascript
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## useTitle

```javascript
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## useClick

reference는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법인데, `document.getElementByID()` 를 사용한 것과 동등합니다.

너가 function을 return받았다면, 그 function은 componentWillUnMount로부터 호출된 것입니다.

아래 코드에서 compoment가 mount가 되었을 때, EventListener를 추가해 줄 것 입니다.dependency가 없기 때문에 component양Mount때, 단 한번만 실행될 것입니다.

useEffect에서 return 부분은 componentWillUnMount때 호출될 것입니다.

```javascript
import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  const onHover = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <h1 ref={onHover}>Hi2</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
