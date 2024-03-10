import { Link } from 'react-router-dom'
function Navbar(){
    return (
        <>
            <nav>
                <div id = "links">
                    <Link to = "/"> HOME </Link>
                    <Link to = "/about"> ABOUT </Link>
                    <Link to = "/characters"> CHARACTERS LIST </Link>
                    <Link to = "/favorites"> FAVORITE CHARACTERS </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;