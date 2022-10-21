import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'

const Container=styled.div``

// const Title=styled.h1`
//     margin:20px;
// `

// const FilterContainer=styled.div`
//     display:flex;
//     justify-content:space-between;
// `

// const Filter=styled.div`
//     margin:20px;
// `

// const FilterText=styled.span`
//     font-size:20px;
//     font-weight:600;
//     margin-right:20px; 
// `

// const Select=styled.select`
//     padding:10px;
//     margin-right:20px;      
// `
// const Option=styled.option``


function ProductList() {
  return (
    <Container>
      <Navbar/>
      {/* <Title>Books</Title> */}
      {/* <FilterContainer>
        <Filter>
            <FilterText>Filter by Generes:</FilterText>
            <Select>
                <Option disabled selected>Genres</Option>
                <Option>Horror</Option>
                <Option>Thriller</Option>
                <Option>Science Fiction</Option>
                <Option>History</Option>
                <Option>Biography</Option>
            </Select>
        </Filter>
        <Filter><FilterText>Filter by Author:</FilterText>
        <Select>
                <Option disabled selected>Author</Option>
                <Option>Bustor Hyman</Option>
                <Option>Phil Harmonic</Option>
                <Option>Cam. L Toe</Option>
                <Option>Otto Matic</Option>
                <Option>Juan Annatoo</Option>
            </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
                <Option disabled selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer> */}
      <Products/>
      <Footer/>
    </Container>
  )
}

export default ProductList
