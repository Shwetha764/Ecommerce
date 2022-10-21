import styled from 'styled-components'
import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Info=styled.div`
    opacity:0;
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;  
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    cursor:pointer;
`

const Container=styled.div`
    flex:1;
    margin:5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }
`

const Circle=styled.div`   
    width:200px;
    height:200px;
    border-radius: 50%;
    background-color: white;
    position:absolute;
`
const Image=styled.img`
    height:75%;
    z-index:2;
`

const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);

    }
`
// const button=styled.button`
//     border=none;
// `

function Product({item, handleClick,handleWishlist}) { 
    const {img}  = item;
  return (
    <Container>
        <Circle/>
        <Image src={img} />
        <Info>  
            <Icon>
            {/* <button onClick={()=>handleClick(item)}> */}
            <Link to='/cart'>
                <ShoppingCartOutlined onClick={()=>handleClick(item)}/>
            </Link>
            {/* </button> */}
            </Icon>
            {/* <Link to={"/product/"+item.id}> */}
            <Icon>
            <Link to={"/product/"+item.id}>
                <SearchOutlined />
                </Link>
            </Icon>

            <Icon>
                <Link to='/wishlist'>
                <FavoriteBorderOutlined onClick={()=>handleWishlist(item)}/>
                </Link>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
