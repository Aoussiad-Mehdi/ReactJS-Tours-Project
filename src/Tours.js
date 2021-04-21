import React from 'react'
import {Tour} from './Tour'

export const Tours = ({ tours, removeTour }) => {
  return (
    <>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          image={tour.image}
          name={tour.name}
          price={tour.price}
          info={tour.info}
          removeTour={removeTour}
          id={tour.id}
        />
      ))}
    </>
  )
}
