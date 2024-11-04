import React from 'react';
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';
import TodosVariant2 from './TodosVariant2/TodosVariant2';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import RenderProps from './RenderPropsDemo/RenderProps';
import Counter1 from './RenderPropsDemo/Counter1/Counter1';
import Counter2 from './RenderPropsDemo/Counter2/Counter2';

const HooksDemoPage = () => {
  return (
      <div className='container pt-2'>
        <h1>Hooks Demo Page</h1>
        <h2>useState() - Hook Demo</h2>
        <MyAccount />

        <hr />
        <h2>useEffect() - Hook Demo</h2>
        <Blog />

        <hr />
        <h2>useRef() and useState() - Hooks Demo</h2>
        <TodosVariant1 />
        <hr />

        <h2>useRef(), useReducer() and useEffect() - Hooks Demo</h2>
        <TodosVariant2 />
        <hr />

        <h2>Render Props Demo</h2>
        <p>Render Props is used for sharing code between React components using a prop whose value is a function.</p>
        <RenderProps
          render={(count, incrementCount) => {
            return <Counter1 count={count} incrementCount={incrementCount} />;
          }}/>

        <br />
        <RenderProps
          render={(count, incrementCount) => {
            return <Counter2 count={count} incrementCount={incrementCount} />;
          }}/>
      </div>
  );
};

export default HooksDemoPage;
