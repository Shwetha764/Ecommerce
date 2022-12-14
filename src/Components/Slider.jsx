import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons/'
import { sliderItems } from '../Data'
import { Link } from 'react-router-dom'


const Container=styled.div`
    margin-top: 15px;
    width: 100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow: hidden;
`
const Arrow=styled.div`
    width:40px;
    height:40px;
    background-color:#f7eeee;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index: 2;
`
const Wrapper =styled.div`
    height: 30%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide=styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg};
`;
const ImgContainer=styled.div`
    height:80%;
    flex:1;
`;

const Image=styled.img`
    width:80%;
    height:100%
`;

const InfoContainer=styled.div`
    flex:1;
    padding: 50px;
`
const Title=styled.h1`
    font-size:70px;
`
const Desc=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick =(direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex+1 : 0 );
        }

    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
       <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
        <Slide bg={item.bg}>
        <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              <Link to='productList'>
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
        </Slide>
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
