import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-slate-800 h-screen'>
        <div className='flex '>
            <div className='bg-slate-600 md:w-52 md:h-52 w-24 h-24 flex justify-center rounded-b-full items-center rounded-r-full'>
               <p className='text-white font-bold  p-2 text-xl'>LOGO</p>
            </div>
            <div className='absolute right-0 top-12 md:p-5 mr-10'>
                <p className='text-white text-2xl'>LET'<span className='underline decoration-teal-400'>S GO</span></p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='md:text-8xl text-white font-bold'>Join the waitlist for </h1>
            <p className='text-white flex-wrap md:w-2/5 text-center mt-9'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, animi veniam. Optio facilis deserunt obcaecati, fuga neque, tempore dolore sapiente mollitia maxime voluptatum fugiat asperiores, quam nulla placeat iure inventore?
            </p>
            <div className='mt-5 flex items-center'>
                <input type='text' placeholder='Enter your email address' className='md:w-64 p-2 outline-none rounded bg-slate-300'/>
                <button className='bg-blue-500 m-1 text-white font-bold w-32 p-2 rounded'>SEND</button>
            </div>
            <p className='text-white absolute text-lg bottom-10'>THANK YOU</p>
        </div>
        <div className='bg-slate-600 md:w-52 md:h-52 w-24 h-24 bottom-0 absolute right-0 rounded-t-full rounded-l-full'>

        </div>
    </div>
  )
}

export default HomePage