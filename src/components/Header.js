import React, { useState } from 'react'
//import {Transition} from '@headlessui/react'
function Header() {
    const [active, setActive] = useState (false);

  const handleClick = () => {
    setActive(!active);
  };
    return (
        <>
        

        
    <header className=" bg gray bg-gray-100 sticky top-0 z-50 h-24 sm:h-32 flex items-center  w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-black font-black text-3xl">
                GBCServices
            </div>
            
            <div className="flex items-center w-auto ">
                <nav className={`${
            active ? '' :'hidden'} font-sen text-gray-800 dark:text-black bg-gray-100 uppercase text-lg lg:flex items-center w-full `}>
                    <a href="/" className="py-2 px-6 flex hover:bg-blue-600 hover:text-white hover:rounded-md">
                        Home
                    </a>
                    <a href="/projects" className="py-2 px-6 flex hover:bg-blue-600 hover:text-white hover:rounded-md">
                         Projects
                    </a>
                    <a href="/service" className="py-2 px-6 flex hover:bg-blue-600 hover:text-white hover:rounded-md">
                         Our Services
                    </a>
                    <a href="/product" className="py-2 px-6 flex hover:bg-blue-600 hover:text-white hover:rounded-md">
                        Product
                    </a>
                    <a href="/contact" className="py-2 px-6 flex hover:bg-blue-600 hover:text-white hover:rounded-md">
                        Contact
                    </a>
                    <a href="/about" className="py-2 px-6 flex hover:bg-blue-600 hover:text-white hover:rounded-md">
                        About Us
                    </a>
                </nav>
                <button
          className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
               d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
            </div>
        </div>
        {/*<Transition 
           show={!active}
           enter="transition ease-out duration-100 transform"
           enterFrom="opaity0 sccale-95"
           enterTo="opacity-100 scale-100"
           leave="transition ease-in duration75 transform"
           leaveFrom="opacity-100 scale-100"
           leaveTo="opacity-0 scale-95"
        >
            {(ref)=>(
                <div className="md:hidden id:mobile-menue">

                </div>
            )}
       
            </Transition>*/}
    </header>
    
        </>
    )
}

export default Header
