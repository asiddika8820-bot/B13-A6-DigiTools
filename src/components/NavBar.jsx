

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex  p-5 items-center gap-1 font-bold text-4xl text-[#4F39F6]">
        DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>

          <li>
            <a>FaQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end  flex gap-5">
        
            <img src="/assets/shopping-cart.png"  />
         <a href="/">Log in</a>
          
        <a className="btn bg-[#4F39F6] rounded-full text-white">Get Started </a>
      </div>
    </div>
  );
};

export default NavBar;