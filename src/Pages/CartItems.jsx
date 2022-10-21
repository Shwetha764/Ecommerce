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

const PriceDetail=styled.div`
    flex:1;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`

const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`

const AddButton=styled.button`
    border:none;
`

const ProductAmount=styled.div`
    font-size: 24px;
    margin:5px;
`

const ProductPrice=styled.div`
    font-size: 30px;
    font-weight:200;
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



function CartItems(props) {
    const {item, deleteItem,handleChange} = props;
    // const [price,setPrice] = useState(0);


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
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddButton onClick={()=>handleChange(item,1)}>+</AddButton>
                                {/* <Add/> */}
                                <ProductAmount>{item.quantity}</ProductAmount>
                                <AddButton onClick={()=>handleChange(item,-1)}>-</AddButton>
                            </ProductAmountContainer>
                            <ProductPrice>{item.price*item.quantity}</ProductPrice>
                            {/* <button }>Remove</button> */}
                        </PriceDetail>
                        
                            <RemoveButton onClick={()=>deleteItem(item.id)}>Remove</RemoveButton>

                    </Product>
                    <Hr/>
    </div>
  )
}

export default CartItems
