import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AuthorPage from './components/AuthorPage';
import PostsPage from './components/PostsPage';

const url = "https://jsonplaceholder.typicode.com/posts"
const posts = (async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}) ()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path ='/' element={<PostsPage posts={posts}/>} />
            
        </Routes>
    </Router>
);