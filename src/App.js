import './App.css';
import Nav from './components/NavigationBar'
import React from 'react';
import Product from './components/Product'
import img1 from './components/photos/camera-32871_640.png'
import img2 from './components/photos/istockphoto-1289373642-170667a.jpg'
import img3 from './components/photos/charge-159707__340.webp'
import img4 from './components/photos/speakers.jpeg'
import Carousel from './components/Carousel';
import { useState } from 'react';

function App() {
// PRODUCTS ARRAY //
const [count, setCount] = useState(0);
const [totalPrice, setTotalPrice] = useState(0)


 const dataArray =[
    {
        id:1,
        overview: "Choice of used Macbook pro 13 inches, Apple ipad with pen, or iphone 10 for only £599",
        price: 599,
        img:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id:2,
        overview: "Basic household appliances starting from £80, dont miss out",
        price: 80,
        img: "https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?b=1&s=612x612&w=0&k=20&c=BjkZyLeGqKsHJCZe50HRi-i_2rVLH37FGxW-HngoyfM="
    },
    {
        id:3,
        overview: "classic black camera with 50mm lens",
        price: 150,
        img: img1,
    },
    {
        id:4,
        overview: "40 inch monitor with anti-glare screen resolution",
        price: 299,
        img: img2,
    },
    {
        id:5,
        overview: "1 meter charger for car",
        price: 12,
        img: img3,
    },
    {
        id:6,
        overview: "twin black speakers for a in-house cinematic experience",
        price: 30,
        img: img4,
    }
  
  ]
  const increment = () => {
    setCount(count + 1);
  }
  const emptyBasket = () => {
    setCount(0)
    setTotalPrice(0)
 }
 const handleProductClick = (price) => {
  setTotalPrice(prevTotalPrice => prevTotalPrice + parseFloat(price))
 }

const [data, setData] = useState(dataArray)

 const handleProductDelete = (event) => {
  console.log("click")
  console.log(event)
 
  const filterProduct = (product) => {
    if (product.id !== event) {
      return product
    }
  }
  setData(dataArray.filter(filterProduct))
  console.log(data)
}
  // const handleProductDelete = id => {
  //   console.log("clicked")
  //   setData(dataArray.filter(item => item.id === id))
  //   console.log(data)

  // }
  const theseData = dataArray.map(item => {
    // console.log(item.id)
    return (
      <Product 
      key = {item.id} //change to 'data' was 'item.id
      id = {item.id}
      img={item.img}
      price={item.price}
      overview={item.overview}
      basketTotal = {handleProductClick}
      increment = {increment}
      deleteProduct = {(event) => handleProductDelete(item.id)}
      />
    )
  })


  


  return (
    <>
    <Nav incrementCount = {count} clearBasket = {emptyBasket} total = {totalPrice}/>
    <Carousel />
    {theseData}
    </>

  )
}

export default App;
