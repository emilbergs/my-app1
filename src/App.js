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
              <div>{post.billingAmount.amount + ' ' + post.billingAmount.currency}</div>
              <div>{post.time}</div>
              <div>{post.status}</div>
              <div>{post.categoryID}</div>
              <img src={post.categoryIconUrl} className="iconURL" alt="category" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;