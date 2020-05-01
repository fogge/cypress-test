import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch('http://localhost:3001/posts');
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>A fine presentation of cypress - huh</h2>
      </header>
      <main className='App-main'>
        <h1>This is for testing</h1>
        <input
          className='input1'
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />

        <button onClick={getPosts}>Get some posts!</button>
        {posts.map((post) => (
          <>
            <p>
              {post.id}. Title: {post.title}
            </p>
            <p>{post.message}</p>
            <p>Author: {post.author}</p>
          </>
        ))}
      </main>
      <footer className='App-footer'>
        <p>A mighty fine footer</p>
        <p>With some info here too</p>
      </footer>
    </div>
  );
}

export default App;
