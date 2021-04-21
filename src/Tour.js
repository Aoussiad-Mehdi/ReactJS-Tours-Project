import React, { useState } from 'react'

export const Tour = ({id, name, info, image, price, removeTour}) => {
 const [readmore, setReadmore] = useState(false)
 return (
   <div className='container'>
     <div className='tours'>
       <div className='tour'>
         <img src={image} loading="lazy" alt='tour' />

         <div className='txt'>
           <h3>{name}</h3>
           <h4>${price}</h4>
         </div>

         <p>
           {readmore ? info : `${info.substring(0, 200)}...`}
           <button id='txtBtn' onClick={() => setReadmore(!readmore)}>
             {readmore ? 'Show less' : 'Show more'}
           </button>
         </p>

         <button id="deleteBtn" onClick={() => removeTour(id)}>Not Interested</button>
       </div>
     </div>
   </div>
 )
}