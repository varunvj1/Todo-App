import React, { useReducer } from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import TodoContext from './context/TodoContext'
import todoReducer from "./context/reducer"
import TodoForm from './components/TodoForm'

import Todos from './components/Todos'


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (
    <div>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Container fluid>
          <h1>TODO app with Context API</h1>
          <Todos />
          <TodoForm />
        </Container>
      </TodoContext.Provider>
    </div>
  )
}

export default App
