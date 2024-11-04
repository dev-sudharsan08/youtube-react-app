import React, { useEffect, useState } from 'react'

const Blog = () => {
  console.log('Program Started');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());
  const [personName, setPersonName] = useState('Lakshmi Narasimman');
  console.log('2. Before useEffect in Blog Comp');
  // in useEffect hook, first param: effect callback. second param: dependency list
  useEffect(() => {
    // runs after initial rendering
    // and also upon state update as well
    console.log('4. Inside useEffect');
    // this is alternative to lifecycle hooks (componentDidMount and compDidUpdate)
    // this is the right place for your REST API calls
    // you can update the state from here
    document.title = `${topicName} by ${personName}`;
  }, [topicName, personName]); // second arg is dependency.
  // if the dep is changed by any means, then the effect callback will be called
  // remove the dep and have empty array then see

  const handleChangeTopic = () => {
    console.log('Inside handleChangeTopic');
    setTopicName('Demo of useEffect Hook and useState Hook');
  };

  const handleUpdatePublishedDate = () => {
    console.log('Inside handleChangeTopic');
    setPublishedDate(new Date());
  }

  const handlePersonNameChange = (event) => {
    console.log('Inside handleChangeTopic');
    setPersonName(event.target.value);
  }

  console.log('3. Program Ended')
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type='button' className='btn btn-secondary' onClick={handleChangeTopic}>Change Topic</button>

      <p>Published Date: {publishedDate.toString()} </p>
      <button type='button' className='btn btn-info' onClick={handleUpdatePublishedDate}>Update Published Date</button>

      <p>Published By: {personName}</p>
      <input type='text' value={personName} onChange={handlePersonNameChange} />
    </div>
  );
};

export default Blog;
