        import React from 'react'
        import { useProductContext } from '../../Context/Productcontext'
    import Product from '../Pages/Productcomponent/Product';

        function Featureproduct() {
        const {isLoading , featuredProducts} = useProductContext();
        // console.log(featuredProducts);
        if(isLoading){
            
            return <div>..........LOADING</div>
        
        }
        return (
        <>
        <div className='feature'>
            <div className="feature_head">
            <h5>Trending Now</h5>
            <h1>Featuring our products</h1>
            </div>
            <div className="featureproduct">
                {
                    featuredProducts.map((realproduct)=>{
                    return <Product key={realproduct.id} {...realproduct}/>
                    })
                }
            </div>
        </div>
        </>
        )
        }

        export default Featureproduct