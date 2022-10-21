import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {FavoriteBorderOutlined, Search} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'


const Container =styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-item:center;
  justify-content: space-between;
`

const Left=styled.div`
  flex:1;
  display:flex;
  align-item: center;
`
const Logo=styled.h2`
display:flex;
font-weight:bold;
`

// const Input=styled.input`
//   border: None;
//   width:450px;
// `


// const SearchContainer=styled.div`
//   border:0.5px solid lightgray;
//   display:flex;
//   align-item:center;
//   margin-left: 25px;
//   width:500px;
  
//   padding: 5px;
// `


const Right=styled.div`
  display:flex;
  align-item:center;
`
const MenuItem=styled.div`
margin:0;
  font-size:20px;
  padding:10px;
  cursor:pointer;
`


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to='/'>
            <Logo>

                {/* <img src='https://media.istockphoto.com/vectors/open-book-color-vector-template-icon-vector-id1197901679?k=20&m=1197901679&s=612x612&w=0&h=QjmxcWwrj_D_IHgwt-9dvAdChyI1Vtr8bmQquYVkLE4='/> */}
              BOOK HOUSE.
            </Logo>
          </Link>
            {/* <SearchContainer>
              <Input/>
              <Search style={{color:"gray", fontSize:30}}/>
            </SearchContainer> */}
        </Left>
       
        <Right>
          {/* <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge> */}
          <Link to='/wishlist'>
          <MenuItem><FavoriteBorderOutlined/></MenuItem>
          </Link>
          <MenuItem>
          <Link to='/cart'>
            <Badge badgeContent={0} color="secondary">
              {/* <div onClick={()=>setShow(false)}> */}
              <ShoppingCartOutlined/>
              {/* </div>    */}
            </Badge> 
          </Link>


          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar
