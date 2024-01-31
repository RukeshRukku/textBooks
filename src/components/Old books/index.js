import "./index.css"
import {Link} from "react-router-dom"
import ClassesList from "../ClassesList"

const OldBooks = () => {
    return (
    <div className="old-bg">
        <Link to="/" className="return">Return To Home</Link>
        <h1 className="head">📚 AP SCERT Old Text Books 📚</h1>
        <ul className="bottom-classes-list">
            <ClassesList item="Old" />
        </ul>
    </div>
    )
}


export default OldBooks