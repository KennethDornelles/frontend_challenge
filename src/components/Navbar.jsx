import Logo from '../components/Logo'

const Navbar = () => {
  return (
    <div className="bg-white-800 text-gray-600 h-14 flex items-center">
        <div className="wrapper-container ">
            <div className='flex justify-between text-xl gap-1 flex-row  mx-02'>
          <img src={logo} alt="Costs" />
        <ul className="flex items-center list-none">
          <li className="">
            About us
          </li>
          <li className="">
            Top Cryptos
          </li>
        </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar