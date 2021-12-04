import { Navbar, Nav} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./styles.css"

const NavBar = () => {
    const navigate = useNavigate()
 return(
    <Navbar className="customNav" variant="dark">
        <Navbar.Brand className='customBD' onClick={() => navigate('/home')}>
        <img src="https://img.icons8.com/cute-clipart/50/000000/partly-cloudy-day.png"
             alt='' width='30px'/>
         <b className='ml-2'>lexyWeathers</b>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default NavBar