import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";

function App() {
  const goods = [
    {
      image: "/image/1.jpg",
      title: "Сережка-ланцюжок зі стразами",
      price: "$6.20",
    },
    {
      image: "/image/2.jpg",
      title: "Кришталеві сережки з пентаграмою",
      price: "$17.89",
    },
    {
      image: "/image/3.jpg",
      title: "Сережки-гвоздики зі срібла",
      price: "$52.00",
    },
    {
      image: "/image/4.jpg",
      title: "Срібний бордюрний ланцюжок обруч",
      price: "$31.50",
    },
    {
      image: "/image/5.jpg",
      title: "Великі вушні каблучки зі стерлінгового срібла",
      price: "$38.70",
    },
    {
      image: "/image/6.jpg",
      title: "Кришталева груша та сережки-квіти",
      price: "$48.99",
    },
  ];

  return (
    <div>
      <Header />
      <Content />
      <Image />
      <h1>Галерея товарів</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
    </div>
  );
}

export default App;