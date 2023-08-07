import React, { useState } from 'react'
import Data from './assets/Data'
import Category from './assets/Category'
import Menu from './assets/Menu'
import Title from './assets/Title'


const allCat= ['all',... new Set( Data.map((st)=>
st.category )) ]
  console.log(allCat)
  

const App = () => {
  const [item,setItem]=useState(Data)
  const [menu,setMenu]=useState(allCat)
  
  
  const filterItems = (cat) => {
    if (cat === 'all') {
      setItem(Data);
    } else {
      const filteredItems = Data.filter((ap) => ap.category === cat);
      setItem(filteredItems);
    }
  };
    return (
    <>
    <Title/>
    <Category filterItems={filterItems} menu={menu}  />

    <div className='mt-4'>

<Menu props={item}  />
</div>

    </>
  )
}

export default App