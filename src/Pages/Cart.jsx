// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CartItems from './CartItems'
import { Link } from 'react-router-dom';

// import {reducer} from '../Reducer'
// import { useLocalStorage } from "../useLocalStorage";

const Container=styled.div``

const Wrapper=styled.div`
    padding:20px;
`

const Title=styled.h1`
    font-weight:300;
    text-align: center;
`

const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const TopTexts=styled.div``
// const TopText=styled.span`
//     text-decoration:underline;
//     cursor:pointer;
//     margin:0px 10px;
// `

const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
`

const Info=styled.div`
    flex:3;
`


const Summary=styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height: 50vh;
`

const SummaryTitle=styled.h1`
font-weight:200;
`

const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};

`

const SummaryItemText=styled.span``

const SummaryItemPrice=styled.span``

const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`

function Cart() {

    const [cartProducts, setCartProducts]= useState(JSON.parse(localStorage.getItem('cart')));

    
    const [totalPrice,setTotalPrice] = useState(0);

        const deleteItem=(id)=>{
            setCartProducts(state=>{
                const arrayTemp = state.filter((item) => item.id !== id);
                localStorage.setItem("cart", JSON.stringify(arrayTemp));
                return arrayTemp;   
            })
        }

        const handleChange =(itemObj, direction) => {
            const newQuantity= itemObj.quantity +direction;
            if(newQuantity===0)
            {
                deleteItem(itemObj.id);
                return 0;
            }
            else{
                setCartProducts(state=>{
                    const newArr=state.map(obj=>{
                        if(obj.id===itemObj.id){
                            const newQuantity= itemObj.quantity +direction;
                            return{...obj, quantity:newQuantity};
                        }
                        return obj;
                    });
                    localStorage.setItem("cart", JSON.stringify(newArr));
                    return newArr;
                })
            }
        }

        const updatePrice =()=>{
            
           let ans=0;
        //    const cartProducts= JSON.stringify(localStorage.getItem('cart'));
        //    console.log(totalPrice,cartProducts);
           cartProducts.map((item)=>(ans+= item.quantity * item.price));
           setTotalPrice(ans);
        }
        useEffect(()=>{
            updatePrice();
        })


  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cartProducts.map(item=>(
                    <CartItems item={item} key={item.id}  deleteItem={deleteItem} handleChange={handleChange}/>               // increment={()=>increment(item.id)} decrement={()=>decrement(item.id)}
                ))}
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                         <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <Link to={"/checkOut/"+totalPrice}>
                    <Button>Checkout Now</Button>
                    </Link>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
