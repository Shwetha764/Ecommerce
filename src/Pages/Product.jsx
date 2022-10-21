// import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
// import ProductDetails from './ProductDetails'
import { popularProducts } from '../Data'
import { Add, Remove } from '@material-ui/icons'
import { Link, useParams } from "react-router-dom";


const Container=styled.div`
`

const Wrapper=styled.div`
    margin:30px;
    background-color:#fef4f4;
    padding:50px;
    display:flex;
`
const ImgContainer=styled.div`
    flex:1;
`
const Image=styled.img`
    width:50%;
    height:50vh;
`
const InfoContainer=styled.div`
    flex:1;
    padding:0px 50px;

`
const Title=styled.h1`
    font-weight:200;
`
const Desc=styled.p`
    margin:20px 0px;
`
const Price=styled.span`
    font-weight:100;
    font-size:30px;
`

const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`
// const Filter=styled.div`
//     display:flex;
//     align-items:center;
// `
// const FilterTitle=styled.span`
//     font-weight:200;
//     font-size:20px;
// `
// const FilterQuantity=styled.select`
//     margin-left:10px;

// `
// const FilterQuantityOption=styled.option``

const AddContainer=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`

const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 5px;
`

const Button=styled.button`
    margin:20px 20px;
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color: #f8f4f4;
    }
`

function Product() {
    const [totalPrice,setTotalPrice] = useState(0);

    const [details,setDetails]=useState([]);
    let { id } = useParams();
    // console.log(id);

    useEffect(()=>{
        const item= popularProducts.filter((items)=>{
            if(items.id==id){
                // console.log('mami');
               return setDetails(items);
   
            }
        });
    },[id]);
    // console.log(details);
    const handleChange =(itemObj, direction) => {
        const newQuantity= itemObj.quantity +direction;
        if(newQuantity===0)
        {
            return 0;
        }
        else{
                setDetails(state=>{
                    const newQuantity= itemObj.quantity +direction;
                    return{...state, quantity:newQuantity};
                })
            }
        }
    
        const updatePrice =()=>{
            
            let ans=0;
            ans+= details.quantity * details.price;
            setTotalPrice(ans);
         }
         useEffect(()=>{
             updatePrice();
         })

         const handleClick =(item) => {
            var cart=JSON.parse(localStorage.getItem('cart') || "[]");
            cart.push(item);
              localStorage.setItem("cart",JSON.stringify(cart));
          }

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={details.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{details.name}</Title>
                <Desc>{details.author}</Desc>
                <Price>$ {totalPrice}</Price>
                <FilterContainer>
            {/* <Filter>
            <FilterTitle>Quantity</FilterTitle>
            <FilterQuantity>
                <FilterQuantityOption>1</FilterQuant        ityOption>
                <FilterQuantityOption>2</FilterQuantityOption>
                <FilterQuantityOption>3</FilterQuantityOption>
                <FilterQuantityOption>4</FilterQuantityOption>
                <FilterQuantityOption>5</FilterQuantityOption>
            </FilterQuantity>
            </Filter> */}
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>handleChange(details,-1)}/>
                    <Amount>{details.quantity}</Amount>
                    <Add onClick={()=>handleChange(details,1)}/>  
                    
                </AmountContainer>
               <Link to='../../cart'>
               <Button onClick={()=>handleClick(details)}>ADD TO CART</Button>
               </Link>
            </AddContainer>
            
            </InfoContainer>
            
           
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product
