import React from 'react'
import { useEffect, useState } from 'react'
function AllSchools() {
    const [data, setData] = useState([])
  useEffect (()=>{
    fetch('http://localhost:8080/school')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(error=>console.log(error))
  },[])
  return (
    <>
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-6  md:gap-2 pt-5  px-1 sm:px-0 sm:h-96 lg:p-44'>
     {data.map((d, index)=>(
          <div key={index} className='lg:w-auto   md:w-auto mb-4 bg-gray-100 sm:w-11/12 sm:h-auto sm:p-1 lg:rounded-2xl md:rounded-xl'>
        <img className='w-full md:h-48 lg:h-54  lg:rounded-2xl md:rounded-xl sm:h-auto' src={d.image} alt="" />
          <p className='px-4 leading-8 text-bold text-2xl sm:text-3xl mt-4 mb-4'>{d.name}</p>
          <p className='px-4 leading-8 text-gray-600 '>{d.address}</p>
          <p className='px-4 leading-8 text-gray-600 '>{d.city}</p>
          {/* <p className='px-4 leading-8 text-gray-600 '>{d.email_id}</p> */}
          {/* <p className='px-4 leading-8 text-gray-600 '>{d.state}</p> */}
          {/* <p className='px-4 leading-8 text-gray-600 '>{d.contact}</p> */}
         </div>
      ))}
     </div>
    </>
  )
}

export default AllSchools