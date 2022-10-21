import { Link } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components'

const Product=styled.div`
    display:flex;
    justify-content:space-between;
`

const ProductDetail=styled.div`
    flex:2;
    display:flex;
`

const Image=styled.img`
width:100px;
height:100px;

`

const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

const ProductName=styled.span`
`

const ProductId=styled.span`
`

const Hr=styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`


const RemoveButton=styled.button`
    padding:10px;
    height:30px;
    margin-top:30px;
    margin-right:50px;
    font-weight:600;
    cursor:pointer;
    border:none;
    background-color:black;
    color:white;
`


function WishListItems(props) {
    const {item,deleteItem,addItem} = props;

    
    
  return (
    <div>
         <Product>
                        <ProductDetail>
                            <Image src={item.img}/>
                            <Details>
                                <ProductName><b>Product:</b></ProductName>
                                <ProductId><b>Id:</b>{item.id}</ProductId>
                            </Details>
                        </ProductDetail>
                        {/* <PriceDetail>
                            <ProductAmountContainer>
                                <AddButton onClick={()=>handleChange(item,1)}>+</AddButton>
                                
                                <ProductAmount>{item.quantity}</ProductAmount>
                                <AddButton onClick={()=>handleChange(item,-1)}>-</AddButton>
                            </ProductAmountContainer>
                            <ProductPrice>{item.price*item.quantity}</ProductPrice>
                            
                        </PriceDetail> */}
                        <Link to='../cart'>
                            <RemoveButton onClick={()=>addItem(item)}>Add to Cart</RemoveButton>
                        </Link>
                            <RemoveButton onClick={()=>deleteItem(item.id)}>Remove</RemoveButton>

                    </Product>
                    <Hr/>
    </div>
  )
}

export default WishListItems
