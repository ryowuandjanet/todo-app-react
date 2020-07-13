import React,{useState,useEffect} from 'react';
import Todo from './Todo'
import { Button, FormControl , Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos]=useState(['abc','efg'])
  const [input,setInput]=useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[]);
  
  const addTodo =(event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');

  }

  return (
    <div className="App">
    <h1>Hello Clever Programmers</h1>
    <form>
      <FormControl>
        <InputLabel>Writter a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
    </form>

      <ul>
      {todos.map(todo => (
        // <li>{todo}</li>
        <Todo text={todo} />
      ))}
      </ul>
    </div>
  );
}

export default App;
