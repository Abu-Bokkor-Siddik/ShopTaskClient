import { IoIosArrowForward, IoIosHome } from "react-icons/io"

const Login = () => {
  return (
  
      <div>
             <div className="relative">
               <img
                 className="w-screen h-40 mx-8 flex justify-center items-center"
                 src="https://i.ibb.co.com/RkfYBPWN/Green-Fresh-Vegetable-Mobile-Banner-Ad-1.png"
                 alt=""
               />
               <div className="absolute top-16 flex items-center justify-center text-neutral-400 ml-32 gap-1">
                 <IoIosHome /> <IoIosArrowForward />
                 Categories <IoIosArrowForward />
                 <h1>dinamic</h1>
               </div>
             </div>
             {/* end */}
    </div>
  )
}

export default Login
