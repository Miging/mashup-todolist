import './App.css';
import { createGlobalStyle } from 'styled-components';
import React from "react";
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle=createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
      </TodoTemplate>
    </>
  );
}

export default App;
