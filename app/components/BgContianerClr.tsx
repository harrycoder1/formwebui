import Image from "next/image";
import { ReactNode } from "react";

const BgContianerClr = ({children}:{children:ReactNode}) => {
  return (
  <div className="relative">
    {/* for background image */}
<div className="absolute top-0 right-0 left-0  bottom-0  z-[-50]">
<Image src={'/bg-layout-2.svg'} width={1080} height={700} className="h-auto w-full opacity-60" alt="go" />

</div>
{/* for blur background */}
<div className="z-[-45] absolute top-0 right-0 left-0  bottom-0 ">
<Image src={'/bgrbg.svg'} width={1080} height={700} className=" w-full h-auto  " alt="not found"/>
</div>
{/* <div className="relative bg-black">
  helo */}

{/* </div> */}

{/* glass morphism */}
<div className="   ">
  <div className="z-[-40] mx-auto w-[95%]   absolute top-0 right-0 bottom-0 left-0 h-[700vh] bg-white shadow-2xl opacity-40" />
  <div className="z-[0]  w-[95%]  mx-auto">
{children}
  </div>
  </div>

  
  </div>
  );
};

export default BgContianerClr;
