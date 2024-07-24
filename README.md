# Project Name

JiPonent는 React에서 사용할 수 있는 다양한 컴포넌트와 커스텀 훅 기능을 제공하는 라이브러리입니다. 사용자는 주로 스타일을 커스텀하여 컴포넌트를 사용할 수 있습니다. JiPonent를 통해 개발자는 쉽고 빠르게 UI를 구성할 수 있으며, 반복되는 로직을 커스텀 훅으로 간소화할 수 있습니다.

## 설치 방법

아래의 명령어를 통해 JiPonent를 설치할 수 있습니다.

```
npm install jiponent
```

## 사용 예제

아래는 JiPonent에서 제공하는 컴포넌트와 커스텀 훅을 사용하는 간단한 예시입니다.

```jsx
import { ComponentName, HookName } from 'jiponent';

function App() {
  const customHookValue = HookName();

  return <ComponentName />;
}
```

## Components

JiPonent에서 제공하는 컴포넌트의 사용 방법 및 옵션에 대해서는 해당 [스토리북](https://6645a375b8bd5e22f2b27560-xjaadxtomi.chromatic.com/)에서 확인하실 수 있습니다. 스토리북을 통해 다양한 컴포넌트와 그 사용 예를 시각적으로 확인할 수 있습니다.

## Hooks

JiPonent는 반복되는 로직을 간단하게 사용할 수 있도록 여러 커스텀 훅을 제공합니다.

<details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
  useToggle은 토글 상태 관리를 위한 커스텀 훅입니다.

#### 사용법

useToggle 훅은 초기 boolean 값(기본값은 false)을 인자로 받아, 그 상태를 관리하기 위한 여러 핸들러 함수들을 반환합니다.

```jsx
const { isToggle, handleToggle, handleSetTrue, handleSetFalse } = useToggle(false);
```

#### 매개변수

- defaultValue (boolean): 초기 토글 상태 값을 설정합니다. 기본값은 false입니다.

#### 반환 값

- isToggle (boolean): 현재 토글 상태를 나타냅니다.
- handleToggle (() => void): 토글 상태를 반전시키는 함수입니다.
- handleSetTrue (() => void): 토글 상태를 true로 설정하는 함수입니다.
- handleSetFalse (() => void): 토글 상태를 false로 설정하는 함수입니다.
</details>

<details>
  <summary style="font-size:18px"><b>useClickAway</b></summary>
  useClickAway는 지정된 요소 외부를 클릭했을 때 특정 로직을 실행할 수 있도록 도와주는 훅입니다. 이를 통해 드롭다운 메뉴, 모달 등을 구현할 때 유용하게 사용할 수 있습니다.

#### 사용법

useClickAway 훅은 클릭 이벤트를 감지할 요소의 참조(ref)와 외부 클릭 시 실행될 콜백 함수를 인자로 받습니다. 이 훅은 지정된 요소의 외부 클릭을 감지하고, 이에 대응하여 제공된 콜백 함수를 호출합니다.

```jsx
const ref = useClickAway < HTMLDivElement > (() => console.log('콜백 함수'));

return <div ref={ref}>내용</div>;
```

#### 매개변수

- callback: 지정된 요소의 외부를 클릭했을 때 실행할 콜백 함수입니다. 이 함수는 외부 클릭 이벤트가 발생했을 때 호출됩니다.

#### 반환 값

- ref: useClickAway 훅은 클릭 이벤트 감지를 위해 사용될 요소에 연결할 수 있는 React 참조(React.RefObject)를 반환합니다. 이 참조는 훅을 사용할 컴포넌트 내에서 요소에 할당되어야 합니다.
</details>

<details>
  <summary style="font-size:18px"><b>useLocalStorage</b></summary>
useLocalStorage는 로컬 스토리지(Local Storage) 상태 관리를 위한 커스텀 훅입니다.

#### 사용법

이 훅은 키와 기본값을 인자로 받아 로컬 스토리지에 저장된 값을 관리합니다. 또한 오류가 발생했을 때 호출될 콜백 함수를 설정할 수 있습니다.

```jsx
const { value, setItem, removeItem } = useLocalStorage({
  key: 'myKey',
  defaultValue: 'defaultValue',
  onError: (error) => console.error(error),
});
```

#### 매개변수

- key (string): 로컬 스토리지에서 값을 저장하거나 가져올 때 사용할 키입니다.
- defaultValue (T): 로컬 스토리지에 값이 없을 때 사용할 기본값입니다.
- onError ((error: Error) => void): 오류가 발생했을 때 호출될 콜백 함수입니다.

#### 반환 값

- value (T): 현재 로컬 스토리지의 값을 나타냅니다.
- setItem ((newValue: T) => void): 로컬 스토리지의 값을 설정하는 함수입니다.
- removeItem (() => void): 로컬 스토리지의 값을 제거하고 기본값으로 초기화하는 함수입니다.
</details>

<details>
  <summary style="font-size:18px"><b>useSessionStorage</b></summary>
useSessionStorage는 세션 스토리지(Session Storage) 상태 관리를 위한 커스텀 훅입니다.

#### 사용법

이 훅은 키와 기본값을 인자로 받아 세션 스토리지에 저장된 값을 관리합니다. 또한 오류가 발생했을 때 호출될 콜백 함수를 설정할 수 있습니다.

```jsx
const { value, setItem, removeItem } = useSessionStorage({
  key: 'myKey',
  defaultValue: 'defaultValue',
  onError: (error) => console.error(error),
});
```

#### 매개변수

- key (string): 세션 스토리지에서 값을 저장하거나 가져올 때 사용할 키입니다.
- defaultValue (T): 세션 스토리지에 값이 없을 때 사용할 기본값입니다.
- onError ((error: Error) => void): 오류가 발생했을 때 호출될 콜백 함수입니다.

#### 반환 값

- value (T): 현재 세션 스토리지의 값을 나타냅니다.
- setItem ((newValue: T) => void): 세션 스토리지의 값을 설정하는 함수입니다.
- removeItem (() => void): 세션 스토리지의 값을 제거하고 기본값으로 초기화하는 함수입니다.
</details>

<details>
  <summary style="font-size:18px"><b>useResize</b></summary>
useResize는 React 컴포넌트의 크기 변경을 감지하고 해당 변경 사항을 전달하는 커스텀 훅입니다.

#### 사용법

이 훅은 onResize 콜백 함수를 인자로 받습니다. 이 함수는 컴포넌트의 크기가 변경될 때마다 호출됩니다.

```jsx
const ref = useResize((contentRect) => console.log('Component size changed:', contentRect));
```

이 훅은 ref 객체를 반환합니다. 이 객체를 사용하여 컴포넌트의 DOM 요소를 참조할 수 있습니다.

```jsx
return <div ref={ref}>My resizable component</div>;
```

#### 매개변수

- (function): 컴포넌트의 크기가 변경될 때마다 호출되는 콜백 함수입니다. 이 함수는 DOMRectReadOnly 객체를 인자로 받습니다.

#### 반환 값

- ref (ref): 컴포넌트의 DOM 요소를 참조하는 ref 객체입니다.

</details>

<details>
  <summary style="font-size:18px"><b>useHover</b></summary>
useHover는 React 컴포넌트에서 마우스 호버 상태를 관리하는 커스텀 훅입니다. 이 훅은 컴포넌트의 DOM 요소에 마우스 이벤트 리스너를 등록하고, 마우스가 해당 요소 위에 올라가거나 벗어날 때 상태를 업데이트합니다.

#### 사용법

```jsx
import useHover from './useHover';

const MyComponent = () => {
  const { ref, isHover } = useHover<HTMLDivElement>();

  return (
    <div ref={ref}>
      {isHover ? 'Hovered' : 'Not Hovered'}
    </div>
  );
};
```

이 코드에서 useHover 훅은 ref 객체와 isHover 상태 변수를 반환합니다. ref 객체를 사용하여 마우스 이벤트를 추적할 DOM 요소를 참조할 수 있습니다. isHover 변수는 마우스가 해당 요소 위에 있는지 여부를 나타냅니다.

#### 매개변수

- 제네릭 타입 T를 사용하여 DOM 요소의 타입을 지정할 수 있습니다. 이 타입은 ref 객체의 타입을 결정합니다.

#### 반환 값

- ref: 마우스 이벤트를 추적할 DOM 요소를 참조하는 ref 객체입니다.
- isHover: 마우스가 DOM 요소 위에 있는지 여부를 나타내는 boolean 값입니다
</details>

<details>
  <summary style="font-size:18px"><b>useRafState</b></summary>
useRafState는 React 컴포넌트에서 상태를 관리하는 커스텀 훅입니다. 이 훅은 requestAnimationFrame을 사용하여 상태 업데이트를 최적화하여, 부드러운 애니메이션 효과를 제공할 수 있습니다.

#### 사용법

```jsx
import useRafState from './useRafState';

const MyComponent = () => {
  const { state, setRafState } = useRafState < number > 0;

  const handleClick = () => {
    setRafState(state + 1);
  };

  return <div onClick={handleClick}>Current count: {state}</div>;
};
```

이 코드에서 useHover 훅은 ref 객체와 isHover 상태 변수를 반환합니다. ref 객체를 사용하여 마우스 이벤트를 추적할 DOM 요소를 참조할 수 있습니다. isHover 변수는 마우스가 해당 요소 위에 있는지 여부를 나타냅니다.

#### 매개변수

- 제네릭 타입 T를 사용하여 상태의 타입을 지정할 수 있습니다.
- defaultValue: 초기 상태 값입니다.

#### 반환 값

- state: 현재 상태 값입니다.
- setRafState: 상태를 업데이트하는 함수입니다. 이 함수는 requestAnimationFrame을 사용하여 상태 업데이트를 최적화합니다.
</details>

<details>
  <summary style="font-size:18px"><b>useScroll</b></summary>
useScroll은 React 컴포넌트에서 스크롤 위치를 관리하는 커스텀 훅입니다. 이 훅은 requestAnimationFrame을 사용하여 스크롤 이벤트 처리를 최적화하여, 부드러운 스크롤 동작을 제공할 수 있습니다.

#### 사용법

```jsx
import useScroll from './useScroll';

const MyComponent = () => {
  const { ref, state } = useScroll<HTMLDivElement>();

  return (
    <div ref={ref}>
      Current scroll position: x={state.x}, y={state.y}
    </div>
  );
};
```

이 코드에서 useScroll 훅은 ref 객체와 스크롤 위치 상태 객체를 반환합니다. ref 객체를 사용하여 스크롤 이벤트를 추적할 DOM 요소를 참조할 수 있습니다. state 객체는 현재 스크롤 위치의 x, y 좌표를 나타냅니다.

#### 매개변수

- 제네릭 타입 T를 사용하여 참조할 DOM 요소의 타입을 지정할 수 있습니다.

#### 반환 값

- ref: 스크롤 이벤트를 추적할 DOM 요소를 참조하는 ref 객체입니다.
- state: 현재 스크롤 위치의 x, y 좌표를 나타내는 객체입니다.
</details>
