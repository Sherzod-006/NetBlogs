import { Link } from "react-router-dom"

const DropDown = ({ isOpen, handleBarClose, Body }) => {
  return (
    <section onMouseLeave={handleBarClose} className={`fixed top-15 right-1 md:top-20 bg-white shadow-lg dark:bg-gray-700 p-2 rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-3">
            {Body.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 cursor-pointer shadow-lg flex items-center">
                Login
              </Link>
            </li> 
          </ul>
        </section>
  )
}

export default DropDown
