import React from 'react';

function Hero() {
  return (
    <header className='w-full flex justify-center items-center bg-white'>
      <div className='w-full max-w-3xl my-20 flex flex-col justify-center items-center gap-8 text-center px-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
          Healthy meals, zero fuss
        </h1>

        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Explicabo ullam fuga id odit laborum ipsam et iure suscipit.
        </p>

        <button className='bg-[#203834] text-white px-4 py-2.5 rounded-xl font-bold hover:bg-[#1a2f2b] transition'>
          Start exploring
        </button>

        <img
          className='rounded-2xl border-4 border-white max-w-full sm:max-w-md md:max-w-lg'
          src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Healthy meal in a bowl'
        />
      </div>
    </header>
  );
}

export default Hero;
