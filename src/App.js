import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Counters from './counters.component'
import Login from './login.component'
import TodoList from './TodoList.component'
function App() {
  return (
    <>
      <h1>hello counters app</h1>
      <Routes>
        <Route path="/counters" element={<Counters />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/todos" element={<TodoList />}/>
      </Routes>
    </>
  );
}

export default App;
