import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h1>React External Users</h1>
      <h3>{users.length}</h3>
      {users.map(user => (
        <Users name={user.name} email={user.email}></Users>
      ))}
    </div>
  );
}

function Users(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <br />
      <br />
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

// const students = [
//   { name: 'sohana', age: 22 },
//   { name: 'rony', age: 24 },
//   { name: 'ahmed', age: 23 },
//   { name: 'hasan', age: 21 },
//   { name: 'hasan ali', age: 21 },
// ];

// {
//   students.map(student => <Person name={student.name}></Person>);
// }
// {
//   /* <Person name="Rukunuzzaman" age="23"></Person>
//       <Person name="RONY" age="24"></Person> */
// }

function Person(props) {
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

export default App;
