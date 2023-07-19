import Navbar from "./Navbar"
import "./Mainpage.css"
import Infocard from "./Infocard"
import infocardpic from "./img/infocard_pic.jpg"

function Mainpage() {

  return (
    <>
      <Navbar />

      <div className="body">
        <img 
          className="infocardpic"
          src={infocardpic}
          alt=""
        />
      </div>

    </>
  )
}

export default Mainpage
