import React from 'react';
import './style.css';
import Mac from './Mac';

export default function App() {
  state = {
    count = 0
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick ={click}>{count}</button>
      <Mac name="jerry" />
    </div>
  );
}
function click(){
setState=({
  count = this.state.count +1
})
}