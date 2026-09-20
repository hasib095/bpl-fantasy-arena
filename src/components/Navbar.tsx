import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-green-200">
      <div className="max-w-7xl container mx-auto flex justify-between items-center p-4">
        <img src={Logo} alt="Logo"></img>
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
