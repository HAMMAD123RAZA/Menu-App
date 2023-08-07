import React from 'react'
import Button from '@mui/material/Button';

const Category = ({filterItems,menu}) => {
  return (
    <>

    <section className='text-center' >
    {
      menu.map((btn,index)=>{
        return (
          <>

            <Button variant='outlined' key={index} onClick={()=>{
              filterItems(btn)
            }} >{btn}</Button>
          </>
        )
      })
    }
    </section>
    
    </>
  )
}

export default Category