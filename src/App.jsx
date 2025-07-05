import { useState } from 'react';
import './App.css'

function App() {
  let a = 5

  console.log(a++);
  console.log(a);

  let randomSon = Math.floor(Math.random() * 90 + 10);
  let [son, setSon] = useState(randomSon);
  let [korsat, setKorsat] = useState(true)
  let [text, setText] = useState("");

  function plus() {
    setSon(++son)
  }

  function minus() {
    setSon(--son)
  }
  function handle(e) {
    setText(e.target.value);
  }

  return (
    <div className='b container'>
      <h2>Counter</h2>
      <div className="dis">
        <button id='btn' onClick={plus}><i class="fa-solid fa-plus"></i></button>
        <h1>{son}</h1>
        <button id='btn' onClick={minus}><i class="fa-solid fa-minus"></i></button>
      </div>

      <hr />
      <h2>Hidden Component</h2>
      <div className="bs">
        <button id='btn2' onClick={() => setKorsat(false)}>Hidden</button>
        <button id='btn3' onClick={() => setKorsat(true)}>Show</button>
      </div>

      <div style={{ display: korsat == true ? "block" : "none" }}>
        <p>Hello my name is marslikbola </p>
        <img src="./mars.png" alt="" />
        <hr />

        <h2>Input Change</h2>
        <input type="text" placeholder='yozing...' onChange={handle} />
        <p><b>Your Text</b> {text}</p>

      </div>

    </div >

  )
}

export default App
