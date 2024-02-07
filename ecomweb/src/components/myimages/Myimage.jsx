// import React, { useState } from 'react'

// function Myimage({imgs}) {
// const [mainimg,setmainimg] = useState(imgs[0])

//   if (!imgs || !Array.isArray(imgs)) {
//     console.error('Invalid or missing imgs prop:', imgs);
//     return null;
//   }

//   console.log({ imgs });
//   return (
//     <>
//     <div className="whole_image">
//     <div className="product_img">
//       {
//         imgs.map((curelem,index)=>{
// return(
//   <figure>
//     <img src={curelem.url} alt={curelem.filename}
//     className='image_product'
//     key={index}
//     />
//   </figure>
// )
//         })
//       }
//     </div>
      
//       {/* main image */}

//       <div className="main_img">
//         <img src={mainimg.url} alt={imgs[2].filename} />
//       </div>
//       </div>

//     </>
//     )

//  }

//  export default Myimage
import React, { useState, useEffect } from 'react';

function Myimage({ imgs }) {
  const [mainimg, setMainImg] = useState(null);

  useEffect(() => {
    if (imgs && imgs.length > 0) {
      setMainImg(imgs[0]);
    }
  }, [imgs]);

  if (!imgs || !Array.isArray(imgs) || imgs.length === 0) {
    console.error('Invalid or missing imgs prop:', imgs);
    return null;
  }

  console.log({ imgs });

  return (
    <>
      <div className="whole_image">
        <div className="product_img">
          {imgs.map((curelem, index) => (
            <figure key={index}>
              <img
                src={curelem.url}
                alt={curelem.filename}
                className='image_product'
                onClick={()=>setMainImg(curelem)}
              />
            </figure>
          ))}
        </div>

        

        <div className="main_img">
          {mainimg && (
            <img src={mainimg.url} alt={mainimg.filename} />
          )}
        </div>
      </div>
    </>
  );
}

export default Myimage;

