import React from 'react'


function Hero() {
  return (
    <>
       <div className="flex justify-between px-4 items-center mt-24 mx-auto max-w-7xl ">
            <div className="space-y-4 w-1/3">
                <h1 className="text-5xl font-semibold">Mari Cari Foto Foto Dirimu Sendiri</h1>
                <p  className="text-lg ">Cari Foto Foto Dirimu Sendiri</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded">Cari</button>
            </div>
            <div className="w-1/3 rounded-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>

       </div>

    </>
  )
}

export default Hero