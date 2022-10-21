import React, { useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../Data'
import Product from './Product'

const Container=styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 60px;
    justify-content: space-between;
`

function Products() {
  // const [cart]= useState([]);

  // const [wishList] =useState([]);
const [dupItem,setDupItem]=useState(0);
const [cartProducts, setCartProducts]= useState(JSON.parse(localStorage.getItem('cart')));

  const handleClick =(item) => {
    // var cart=JSON.parse(localStorage.getItem('cart') || "[]");
    cartProducts.map((items)=>{
      // console.log(item);
      if(items.id===item.id)
      {
        setDupItem(1);
        console.log(dupItem,"hi");
        alert("Item already present in cart.");
        
      }
      return items;
      // else{
      //   cart.push(item);
      //   localStorage.setItem("cart",JSON.stringify(cart));

      // }
    });
    // console.log(dupItem);
    if(dupItem!==1){
      setCartProducts(state=>{
        state.push(item);
        localStorage.setItem("cart",JSON.stringify(state));
      })
    }
    
    
      // const str = localStorage.getItem("cart");
      // const parsedArr = JSON.parse(str);
      // console.log(parsedArr);
  }

  const handleWishlist=(item)=>{
    var wishList=JSON.parse(localStorage.getItem('wishlist') || "[]");
    wishList.push(item);
    localStorage.setItem("wishlist",JSON.stringify(wishList));
  }

  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item} key={item.id} handleClick={handleClick} handleWishlist={handleWishlist}/>
      ))}
    </Container>
  )
}

export default Products


