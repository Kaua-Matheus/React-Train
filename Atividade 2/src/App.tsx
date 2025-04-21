// React Router
import { NavLink } from "react-router";

function App() {

  return (

    <nav
      className="flex flex-row space-x-20 justify-center p-10"
    >
      <div
        className="bg-gray-300 p-2 rounded-sm hover:bg-gray-400 duration-150"
      >
        <NavLink to="/tailwind" end>
          Ver o Tailwind
        </NavLink>
      </div>


      <div
        className="bg-gray-300 p-2 rounded-sm hover:bg-gray-400 duration-150"
      >
        <NavLink to="/styledcomponents" end>
          Ver o StyledComponents
        </NavLink>
      </div>
    </nav>
  )
}

export default App
