import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../images/shop1.jpg';
import img2 from '../images/shop2.jpg';
import img3 from'../images/shop3.jpg'
import { Link } from 'react-router-dom';

function Herosection({data},showbutton=true ){

  const imgData = [
    {
      id: 1,
      image: img1,
      imageName: 'img1',
    },    {
      id: 2,
      image: img2,
      imageName: 'img2',
    },
    {
      id: 3,
      image: img3,
      imageName: 'img2',
    }

  ]
 
 


  return (
    <>
      <div className="herosection">

       

        <div className="detail">
          
          {/* <h1 className='open'>Welcome to shop hub</h1> */}
      <h1 className='open' >{data.name}</h1>
          <p className='mainpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, similique.</p>
          <p className='mainpara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates?</p>
          <p className='mainpara'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        { showbutton && <Link to='/product'><button> Shop Now</button></Link>}
        </div>
        <div className="slide-photo">
        <div className='box'>
        </div>
        <Carousel
            autoPlay={true} // Enable auto-play
            interval={3000} // Set the interval time in milliseconds (adjustable)
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            showIndicators={false}
          >
            {/* <div className='imageCur'>
              <img src={img1} alt="" />
            </div>
            <div className='imageCur'>
              <img src={img2} alt="" />
            </div>
            <div className='imageCur'>
              <img src={img1} alt="" />
            </div>
            <div className='imageCur'>
              <img src={img2} alt="" />
            </div> */}
            {imgData.map((data, index)=>{
              return (
                <div key={index} className='imageCur'>
                <img src={data.image} alt= {data.imageName} />
              </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Herosection;
