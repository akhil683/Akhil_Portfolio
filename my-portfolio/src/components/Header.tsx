import About from "./About"
import Profile from "./Profile"

const Header = () => {

  return (
    <div className="h-screen relative p-4 flex flex-col md:flex-col lg:flex-row justify-center gap-2 items-center">
      <Profile />
      <About />
    </div>
  )
}

export default Header
