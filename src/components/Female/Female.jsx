import React from 'react'
import People from '../People/People'
import {useSelector} from 'react-redux'

export default function Female() {
    const newPeople = useSelector(state => state)
    const women = newPeople.filter((woman) => woman.sex ==='female')
    return (
      <div className='cont_female'>
  <p className='p_women'>Women</p>
  <div className='div_female'>
      {women.map((woman) => (
          <People key={woman.id} {...woman} />
      ))}
  </div>
  </div>
    )
}
