import React from "react";
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
// import Cart from './Cart'

function Home() {
  // const [show, setShow ] = useState(true);
 
  // const [cart,setCart] =useState([]);

  // const handleClick= (item) =>{
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange =(item,d) =>{
  //   const ind= cart.indexOf(item);
  //   const arr=cart;
  //   arr[ind].amount+=d;
  // }
// useEffect(()=>{
//   console.log("cart change");
// },[cart]);

  return (
    <div>
      <Navbar />
      <Slider/>
      <Categories/>
<Products /> 
      <Footer/>
    </div>
  )
}

export default Home
