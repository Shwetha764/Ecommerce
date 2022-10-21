import { Facebook, Instagram, MailOutline, Phone, Room } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container=styled.div`
    display:flex;
`;

const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
 `;
const Logo=styled.p`
font-weight:bold;
`

const Desc=styled.p`
    margin:20px 0px;
`

const SocialContainer=styled.div`
    display:flex;
`

const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
`

 const Center=styled.div`
 flex:1;
 padding:20px;
 `
const Title=styled.h3`
    margin-bottom:30px;

`
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`

 const Right=styled.div`
 flex:1;
 padding:20px;
 `

 const ContactItem=styled.div`
    margin:bottom:20px;
    display:flex;
    align-items:center;
    height:40px;
 `
 
function Footer() {
  return (
    <Container>
        <Left>
            <Logo>BOOK HOUSE.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolore illo ab voluptas enim, incidunt necessitatibus ipsam repellendus, quis omnis dolores facilis cum. Dicta, minima a dolorum sequi deleniti totam.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful features</Title>
            <List>
               <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/>Mangaluru
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>9740440764
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:"10px"}}/>shwetha.acharya@niveussolutions.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
