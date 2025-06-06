import React from 'react'
import logo from '/images/logo.png';
import dexLogo from '/images/DexLogo.png';
import teleLogo from '/images/teleLogo.png';
import xLogo from '/images/xLogo.png';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 px-0">
    <div className=" mx-auto text-center flex flex-row justify-between items-center">
    <div>
         <img className='h-10 w-10' src={logo} alt="Logo" />
      </div>

      <div>
      <p className="text-[8px] py-2">
        CA-bLUxHao6hQzKpxgxxkhj5iGKcT1MWaNUvNFQkRFbonk
      </p>
      <p className="text-sm ">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
      </div>
      

     

      <div className="mt-2">
                     <div className="social-icon-footer ">
                       <a href="https://letsbonk.fun/token/bLUxHao6hQzKpxgxxkhj5iGKcT1MWaNUvNFQkRFbonk"><img src={dexLogo} alt="xDex" /></a>
                       <a href="https://x.com/fred4run"><img src={xLogo} alt="tFred" /></a>
                       <a href="https://t.me/fredfishgame"><img src={teleLogo} alt="" /></a>
                     </div>
      </div>
      {/* <p className="text-sm py-2">
        &copy; {new Date().getFullYear()} Fred The Fish. All Rights Reserved.
      </p> */}
    </div>
  </footer>
  )
}

export default Footer