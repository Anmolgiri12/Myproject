import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
import reducer from "../reducer/Productreducer";

// Create context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// Initial state
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading:false,
  singleproduct:{},
};

// AppProvider component
const AppProvider = ({ children }) => {
  // Use reducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch featured products and update state
  const getFeaturedProduct = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.get(url);
      const products = res.data;

      dispatch({ type: "my_Api_data", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // second api for single product
  const getsingleProduct =async (url)=>{
      try {
        dispatch({ type: "SET_SINGLE_LOADING" });

        const res = await axios.get(url);
        const singleproduct = res.data;

        dispatch({type:"MY_SINGLEPRODUCT_API",payload:singleproduct})
  
      } catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"})
      }
  }


  // useEffect to fetch data when component mounts
  useEffect(() => {
    getFeaturedProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getsingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

// Export custom hook for using the context
const useProductContext = () => {
  return useContext(AppContext);    
};

export { AppProvider, AppContext, useProductContext };
