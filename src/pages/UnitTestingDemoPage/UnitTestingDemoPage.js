import React from 'react';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const UnitTestingDemoPage = () => {
  return (
    <div className='container'>
      <h1>Unit Testing Demo Page</h1>
      <a href='https://legacy.reactjs.org/docs/testing.html'>Unit Testing Reference</a>

      <hr />
      <CompanyInfo foundedYear='1994' headQuarters='Teaneck, New Jersey, U.S.' />
      <hr/>
      <Counter/>
      <hr/>
      <Users/>
      <hr/>
      <Posts/>
    </div>
  );
};

export default UnitTestingDemoPage;
