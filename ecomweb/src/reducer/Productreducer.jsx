import React from 'react';

const Productreducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
      case 'my_Api_data':
            const featureData= action.payload.filter((currentEle)=>{
    return currentEle.featured===true;
            });
            return{
                ...state,
        isLoading: false,
        products : action.payload,
        featuredProducts :  featureData ,

            }

    case 'API_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case "SET_SINGLE_LOADING":
        return{
          ...state,
          isSingleLoading:true,
        };
        case 'MY_SINGLEPRODUCT_API':
          return {
            ...state,
            isSingleLoading:false,
            singleproduct:action.payload,
          }
          case 'SET_SINGLE_ERROR':
            return{
              ...state,
              isSingleLoading:false,
              isError:true,
            }
    default:
      return state;
  }
};

export default Productreducer;
