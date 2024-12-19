import React, { useEffect, useState } from 'react';

function AllSchools() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/school')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4 sm:gap-3 pt-5 px-2 sm:px-1 sm:h-auto lg:p-24 hover:cursor-pointer'>
        {data.map((data, index) => (
          <div
            key={index}
            className='lg:w-auto md:w-auto mb-6 bg-white shadow-lg hover:shadow-xl rounded-xl sm:w-11/12 sm:h-auto sm:p-2 lg:rounded-2xl md:rounded-xl flex-shrink-0 hover:translate-y-[-5px] transition-all duration-500 outline-none transform hover:scale-105 border border-gray-200'>
            <img
              className='w-full md:h-64 lg:h-72 rounded-t-xl sm:h-auto border-b-4 border-blue-500 object-cover'
              src={data.image}
              alt=""
            />
            <div className='px-4 py-2'>
              <p className='leading-6 text-lg lg:text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 mt-4 mb-2'>
                {data.name}
              </p>
              <p className='text-sm lg:text-base text-gray-600 mb-2'>{data.address}</p>
              <p className='text-sm lg:text-base text-gray-600'>{data.city}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default AllSchools;
