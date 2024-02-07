import React from 'react'

function Priceformat({price}) {
  return    Intl.NumberFormat("en-np",{
    style:'currency',
    currency:'NPR',
    maximumFractionDigits:2,
  }).format(price/100)
}

export default Priceformat