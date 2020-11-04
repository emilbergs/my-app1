import React from 'react';
import './App.css';
import data from "./data.json";


function App() {
  return (
    <div className="App">
      <div className="posts">
        {data.transactions.map(post => {
          return (
            <div key={post.id} className="post">
              <img src={post.iconURL} className="iconURL" alt="icon" />
              <div className="type">{post.type}</div>
              <div className="localizableTitle">{post.localizableTitle}</div>
              <div className="amountCurrency">{post.billingAmount.amount + ' ' + post.billingAmount.currency}</div>
              <div className="time">{post.time}</div>
              <div className="status">{post.status}</div>
              <img src={post.categoryIconUrl} className="categoryIconUrl" alt="category" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;