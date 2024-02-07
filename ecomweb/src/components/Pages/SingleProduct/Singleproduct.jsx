import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useProductContext } from '../../../Context/Productcontext';
import Navigation from '../../Layout/Navigation';
import Myimage from '../../myimages/Myimage';
import Priceformat from '../../../Helpers/Priceformat';
import Footer from '../../Layout/Footer';


const API = 'https://api.pujakaitem.com/api/products'
function Singleproduct() {
const {getsingleProduct,isSingleLoading,singleproduct}=useProductContext();
console.log(singleproduct);

  const {id} =useParams();
  console.log(id);

  const{id:anmol,
  name,company,price,description,category,stock,stars,reviews,image}=singleproduct;

  useEffect(() => {
    getsingleProduct(`${API}?id=${id}`);
  }, [])

  if(isSingleLoading){
    return <h1>Loading please wait ...........</h1>
  }
  
  return (
    <>
    <Navigation/>
    <h1 className='product_name'>{name}</h1>
    <div className="singleproduct_section">
      <div className="product_image">
        <Myimage imgs={image}/>
      </div>
      <div className="product_desc">
       <h1>{price}</h1>
       <p>{stars}</p>
       <p>{reviews}reviews</p>
       <p className='product_data_price'>
        MRP:
        <del>
       <Priceformat price={price+5000}/>
        </del>
        <p className='product_data_real_price'>
          discounted price:<Priceformat price={price}/>
        </p>
        <p>{description}</p>
        <div className="product_data_info">
          <p>Available:
            <span className='stock'>
            {stock>0 ? "Stock available" : "Stock unavailable"}
            </span>
            </p>
            <p>{id}</p>
            <p>{company}</p>
            <p>{category}</p>
        </div>

       </p>
      </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default Singleproduct