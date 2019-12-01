# React-Hooks

Udemy「[React Hooks 入門 - Hooksと Redux を組み合わせて最新のフロントエンド状態管理手法を習得しよう！](https://www.udemy.com/course/react-hooks-101/)」を受講

## useState

classコンポーネントの`this.state`、`setState`と同じ機能

``` javascript
const [{state名}, {stateを変更するときの関数名} = useState({初期値})]

// 基本的な書き方
const [count, setCount] = useState(0);

// 初期値はobjectでも書ける
const [statem, setState] = useState({
  name: 'ichiro',
  age: 51,
});
const { name, age } = state;
```

``` javascript:Sample.js
import React, { useState } from 'react';

const Sample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Sample;
```

## useEffect

classコンポーネントのライフサイクルメソッドと同じ機能

``` javascript
// componentDidMountとcomponentDidUpdateと同じ挙動
useEffect(() => {
  // 処理を書く
});

// componentDidMountと同じ挙動
useEffect(() => {
  // 処理を書く
}, []);

// hogeの値のみcomponentDidMountとcomponentDidUpdateと同じ挙動
useEffect(() => {
  // 処理を書く
}, [hoge]);
```

``` javascript:Sample.js
import React, { useState, useEffect } from 'react';

const Sample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('stateのcountが更新されたよ');
  }, [count]);

  return (
    <>
      <p>count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Sample;
```

## useReducer

reducerにdispatchして更新されたstateを取得する

``` javascript
const [{現在のstate}, {dispatch関数}] = useReducer[{reduce関数} , {初期値}]
const [state, dispatch] = useReducer(reducer, []);
```

``` javascript:Sample.js
import React, { useReducer } from 'react';

const Sample = () => {
  const reducer = (state = [], action) => {
    switch(action.type) {
      case 'CREATE':
        const personal = { name: action.name, age: action.age }
        return [...state, {...personal}];
      default:
        return state;
    };
  };

  const create = () => {
    dispatch({
      type: 'CREATE',
      name: 'ichiro',
      age: 51,
    });
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <button type="button" onClick={create}>Click</button>
      <ul>
        {
          state.map((s, index) => (
            <li key={index}>
              <p>名前は{s.name}</p>
              <p>年齢は{s.age}</p>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Sample;
```

## useContext

- reduxのconnect関数に変わるもの
- Providerでwrapされたcomponentは、props valueのデータをバケツリレーなしで利用できる

``` javascript:AppContext.js
// ProviderとConsumer(useContext)を利用できるようにcreateContextを読み込む
import { createContext } from 'react';

const AppContext = createContext(); 

export default AppContext;
```

```　javascript:App.js
import React, { useReducer } from 'react';
import AppContext from './AppContext';
import Sample from './Sample'

const App = () => {
  const reducer = (state = [], action) => {
    switch(action.type) {
      case 'CREATE':
        const personal = { name: action.name, age: action.age }
        return [...state, {...personal}];
      default:
        return state;
    };
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      // Sample comonentにstateとdispatchがバケツリレーなしで利用可能に
      <Sample />
　　</AppContext.Provider>
  )
}

export default App;
```

``` javascript:Sample.js
// Providerのvalueのデータを受け取るために`useContext'を読み込む
import React, { useContext } from 'react';
import AppContext from './AppContext';

const Sample = () => {
  const { state, dispatch } = useContext(AppContext);

  const create = () => {
    dispatch({
      type: 'CREATE',
      name: 'ichiro',
      age: 51,
    });
  };

  return (
    <>
      <button type="button" onClick={create}>Click</button>
      <ul>
        {
          state.map((s, index) => (
            <li key={index}>
              <p>名前は{s.name}</p>
              <p>年齢は{s.age}</p>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Sample;
```

