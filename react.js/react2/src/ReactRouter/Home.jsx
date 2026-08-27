import { Link, NavLink } from "react-router"
function Home() {
  return (
    <>
      <Link to="/about"> About</Link>
      <a target="_blank" href="google.com"> Mana </a>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page.</p>
      <nav>
        <NavLink to="/">
        Home
      </NavLink>

        
        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "active" : "text-red-600"
            }
            >
            About
            </NavLink>
      </nav>
    </>
  )
}

export default Home
