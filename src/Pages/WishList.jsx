import { useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import WishListItems from './WishListItems'


const Container=styled.div``

const Wrapper=styled.div`
    padding:20px;
`
const Title=styled.h1`
    font-weight:300;
    text-align: center;
`




const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
`

const Info=styled.div`
    flex:3;
`


function WishList() {
    const [wishListItems, setWishListItems]= useState(JSON.parse(localStorage.getItem('wishlist')));

    const deleteItem=(id)=>{
        setWishListItems(state=>{
            // state.slice(id,1);
            const arrayTemp = state.filter((item) => item.id !== id);
            localStorage.setItem("wishlist", JSON.stringify(arrayTemp));
            console.log(arrayTemp);
            return arrayTemp;   
        })
    }

    const addItem =(item) => {
        var cart=JSON.parse(localStorage.getItem('cart') || "[]");
        cart.push(item);
          localStorage.setItem("cart",JSON.stringify(cart));
            setWishListItems(state=>{
            const arrayTemp = state.filter((items) => items.id !== item.id);
            localStorage.setItem("wishlist", JSON.stringify(arrayTemp));
            return arrayTemp;   
            })
      }

  return (
    <Container>
    <Navbar/>
    <Wrapper>
        <Title>Your WishList</Title>
        <Bottom>
            <Info>
            {wishListItems.map(item=>(
             <WishListItems item={item} key={item.id} deleteItem={deleteItem} addItem={addItem}/>
            ))}
            </Info>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default WishList
