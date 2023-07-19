import cropped_logo from "../src/img/cropped_logo.png"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu'
import "./Navbar.css"
 
function Navbar() {
  return (
    <>
        <div className="navbar">
            
            <div className="navbar_left">
                <a to={"/"}>
                    <img
                        className="navbar_logo"
                        src={cropped_logo}
                        alt=""       
                    />
                </a>
            </div>

            <div className="navbar_text">
                <h2>
                    Teppichreinigung KK
                </h2>
            </div>

            <div className="navbar_right">
                <MenuIcon />
            </div>


            
        </div>
    </>
  )
}

export default Navbar

