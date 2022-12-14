// import { Label } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Container=styled.div`
    width:100vw;

    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("data:image/webp;base64,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") Center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;

`
const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color: white;

`

const Title=styled.h1`
    font-size:24px;
    font-weight:300;
`

// const Form=styled.form`
//     display:flex;
//     flex-wrap: wrap;
// `
const Form=styled.form`

`


const Input=styled.input` 
    min-width: 40%;
    padding:10px;
`
const Label=styled.label`
font-width:30px;
margin-bottom:10px;
display:flex;
`

const P=styled.p`
    color:red;
`
// margin: 20px 10px 0 0;
// padding:10px;

const Textarea=styled.textarea`
    flex=1;
    min-width: 50%;
    min-height:50px;
    margin: 20px 10px 0 0;
    padding:10px;
`
// const Agreement=styled.span`
//     font-size:16px;
//     margin:20px 0px;
// `

const Button=styled.button`
    margin-top:10px;
    width:40%;
    border:none;
    padding:20px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
`

function CheckOut() {
    const initialValue={
        name:"",
        lastname:"",
        phone:"",
        email:"",
        deliveryaddress:"",
        cardnum:"",
        cardname:"",
        expirydate:"",
        cvv:""}
        const navigate = useNavigate();
        const [formValues,setFormValues]= useState(initialValue);
        const [formErrors,setFormErrors]= useState({});
        const [isSubmit,setIsSubmit]=useState(false);
        let { price } = useParams();
        const handleChange=(e)=>{
            const {name , value}=e.target;
            setFormValues({...formValues,[name]:value});
            // console.log(formValues);

        }

        const handleSubmit =(e)=>{
            e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
        }
        useEffect(()=>{
            // console.log(formErrors);
            if(Object.keys(formErrors).length===0&& isSubmit){
                console.log(formValues);
                alert("Order Placed sucessfully")
                localStorage.removeItem("cart");
                navigate('/');
            }
        },[formErrors]);

        const validate =(values)=>{
            const errors ={};
            const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!values.name){
                errors.name="Name is Required!";
            }
            if(!values.lastname){
                errors.lastname="Last Name is Required!";
            }
            if(!values.phone){
                errors.phone="Phone Number is Required!";
                
            }
            else if(values.phone.length>10||values.phone.length<10){
                errors.phone="Phone Number must contain only 10 digit!";
            }
            if(!values.email){
                errors.email="Email id is Required!";
               
            }
            if(!regex.test(values.email)){
                errors.email="This is not a valid Email format!";
            }
            if(!values.deliveryaddress){
                errors.deliveryaddress="Delivery Address is Required!";
            }
            if(!values.cardnum){
                errors.cardnum="Card Number is Required!";
            }
            if(!values.cardname){
                errors.cardname="Card Name is Required!";
            }
            if(!values.expirydate){
                errors.expirydate="Expiry Date is Required!";
            }
            if(!values.cvv){
                errors.cvv="CVV is Required!";
            }
            else if(values.cvv.length>4||values.cvv.length<3){
                errors.cvv="CVV should have 3 or 4 digits!";
            }
            console.log(errors);
            return errors;
        }
  return (
    <div>
        <Navbar/>
    <Container>
        
        <Wrapper>
            <Title>PLACE AN ORDER</Title>
            {/* {Object.keys(formErrors).length===0 && isSubmit ? 
                alert("Order Placed sucessfully"):""} */}
            {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
       
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="NAME" value={formValues.name} onChange={handleChange}/>
                <P>{formErrors.name}</P>
                <Input type="text"name="lastname" placeholder="LASTNAME" value={formValues.lastname} onChange={handleChange}/>
                <P>{formErrors.lastname}</P>
                <Input type="phone"name="phone" placeholder="PHONENUMBER" value={formValues.phone} onChange={handleChange}/>
                <P>{formErrors.phone}</P>
                <Input type="email" name="email" placeholder="EMAIL" value={formValues.email} onChange={handleChange}/>
                <P>{formErrors.email}</P>
                <Textarea type="text" name="deliveryaddress" placeholder="DELIVERY ADDRESS" value={formValues.deliveryaddress} onChange={handleChange}></Textarea>
                <P>{formErrors.deliveryaddress}</P>
                <Label>Total Amount</Label>
                <Input type="number" name="amount" value={price} readOnly/>
                <P></P>
                <Input type="number" name="cardnum" placeholder="CARD NUMBER" value={formValues.cardnum} onChange={handleChange}/>
                <P>{formErrors.cardnum}</P>
                <Input type="text" name="cardname" placeholder="NAME ON CARD" value={formValues.cardname} onChange={handleChange}/>
                <P>{formErrors.cardname}</P>
                <Input type="date" name="expirydate" placeholder="EXPIRATION DATE" value={formValues.expirydate} onChange={handleChange}/>
                <P>{formErrors.expirydate}</P>
                <Input type="number" name="cvv" placeholder="CVV" value={formValues.cvv} onChange={handleChange}/>
                <P>{formErrors.cvv}</P>
                <Button>ORDER</Button>
            </Form>
        </Wrapper>
        
    </Container>
        <Footer/>
    </div>
  )
}

export default CheckOut
