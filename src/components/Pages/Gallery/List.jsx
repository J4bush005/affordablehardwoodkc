import React from 'react'
import { Link } from 'react-router-dom'
function List() {
  return (
      <div id="shift" className="col">
          <div id="" className="second-word px-2">
            <ul className="options">
              <li className="listed-one">
                <Link to={"/Classic-Hardwood"} className="sections">
                  Classic
                </Link>
              </li>
              <li className="listed-two">|</li>
              <li className="listed-three">
                <Link to={"/Luxury-Vynil-Planks"} className="sections">
                  LVP
                </Link>
              </li>
              <li className="listed-four">|</li>
              <li className="listed-five">
                <Link to={"/Commercial-Projects"} className="sections">
                  Commercial
                </Link>
              </li>
              <li className="listed-six">|</li>
              <li className="listed-seven">
                <Link to={"/Custom-Hardwood-Designs"} className="sections">
                  Custom
                </Link>
              </li>
              <li className="listed-eight">|</li>
              <li className="listed-nine">
                <Link to={"/Hardwood-Stairs"} className="sections">
                  Stairs
                </Link>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default List