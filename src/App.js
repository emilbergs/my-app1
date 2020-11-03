import React from 'react';
import './App.css';
import data from "./data.json";


function App() {
  return (
    <div className="App">
      <div className="posts">
        {data.transactions.map(post => {
          return (
            <>
              <img src={post.iconURL} alt="icon" />
              <h1>{post.type}</h1>
              <h2>{post.localizableTitle}</h2>
              <h2>{post.billingAmount.amount + ' ' + post.billingAmount.currency}</h2>
              <h2>{post.time}</h2>




            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;