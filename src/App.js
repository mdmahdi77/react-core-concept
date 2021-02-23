import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'bappi'];
  const products = [
    {name: 'Photoshop', price: '$90.67'},
    {name: 'Illustrator', price: '$60.67'},
    {name: 'PDF Reader', price: '$5.89'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={nayoks[2]} nayika="Moushumi"></Person>
        <Person name="Josim" nayika="Sabana"></Person>
        <Person name="BappaRazz" nayika="Sabnur"></Person>
        <Person name="Elias" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  // const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h1>count : {count}</h1>
      <button onMouseMove={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1) }>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []) //bar bar jate call na kore sejonno empty array dice
  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '1px solid red',
    margin: '10px',
    padding: '30px',
    backgroundColor: 'yellow',
    color: 'black'
  }
  console.log(props)
  return (
    <div style={personStyle}>
      <h1>Nayok : {props.name}</h1>
      <h3>Heroin of {props.nayika}</h3>
    </div>
  )
}

export default App;
