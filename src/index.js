import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import { createBrowserRouter as Router, RouterProvider as Route } from 'react-router-dom';

const rooter = Router([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/test',
    element:<ArticleDetail/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Route router={rooter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
