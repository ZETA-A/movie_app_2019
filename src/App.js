import { render } from '@testing-library/react';
import React from 'react';

function Food({name, picture}) {
  return <div>
    <h2>I Like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "YunUaHwel",
    image: "https://hoitube-image-production.s3.amazonaws.com/onul_hoi_1573643602fdf437637c.jpg"
  },
  {
    name: "YaBaWiSuNDae",
    image: "http://m.sokchomall.co.kr/web/product/big/20200512/6366d313b0ee2da2f65843d4a4ab9656.jpg"
  },
  {
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    name: "BoSsam",
    image: "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2FSNUH%2F3b80ed1c420a47a0af3c411cfc00326c.JPG"
  },
  {
    name: "Cider",
    image: "http://ccbk.co.kr/images/product/detail/product106.jpg"
  }
]

function renderFood(dish) {
  console.log(dish);
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  )
};

export default App;