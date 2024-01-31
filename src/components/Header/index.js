import "./index.css"
import {Link} from "react-router-dom"

const Header = () => {
    return <nav className="header">
        <ul className="ul">
            <li className="li">
                <Link to="/oldBooks" className="link">
                    <button type="button" className="btn-link">Old Books</button>
                </Link>
            </li>
            <li className="li">
                <Link to="/newBooks" className="link">
                    <button type="button" className="btn-link">New Books</button>
                </Link>
            </li>
            <li className="li">
                <Link to="/dedBooks" className="link">
                    <button type="button" className="btn-link">DED Books</button>
                </Link>
            </li>
            <li className="li">
                <Link to="/bedBooks" className="link">
                    <button type="button" className="btn-link">BED Books</button>
                </Link>
            </li>
        </ul>
    </nav>
}

export default Header