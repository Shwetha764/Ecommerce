import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom';


const Container=styled.div`
    position:relative;
    flex=1;
    width:100%;
    margin: 10px;
    position:relative;
`
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    &:hover{
        box-shadow: 10px 5px 5px gray;
    }
`
const Info=styled.div`
    position:absolute;
    top=0;
    left=0; 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title=styled.h1`
    color:black;
    margin-bottom: 10px;
`
const Button=styled.button`
    padding: 5px;
    background-color: white;
    color:gray;
    cursor: pointer;
`

function CategoryItems({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Link to='productList'>  
            <Button>View More</Button>
            </Link>
        </Info>
    </Container>
  )
}

export default CategoryItems
