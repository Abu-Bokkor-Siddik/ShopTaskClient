import { FaStar } from "react-icons/fa"


const Rating = () => {
  return (
    <div  className="flex items-center">
      <div className="form-control ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-success"
                />
               
              </div>
              {/* end */}
              <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <p>text</p>
    </div>
  )
}

export default Rating
