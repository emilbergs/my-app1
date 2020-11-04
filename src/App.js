import React, { useState, useEffect } from 'react';
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
              <div className="textData">{post.localizableTitle}</div>
              <div className="textData">{post.billingAmount.amount + ' ' + post.billingAmount.currency}</div>
              <div className="textData">{post.time}</div>
              <div className="textData">{post.status}</div>
              <img src={post.categoryIconUrl} className="categoryIconUrl" alt="category" />
            </div>
          )
        })}
      </div>
    </div>
  );
}




export default App;