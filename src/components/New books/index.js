import "./index.css"
import {Link} from "react-router-dom"
import ClassesList from "../ClassesList"

const NewBooks = () => {
    return (
        <div className="old-bg">
            <Link to="/" className="return">Return To Home</Link>
            <h1 className="head">📚 AP SCERT New Text Books 📚</h1>
            <ul className="bottom-classes-list">
                <ClassesList item="New" />
            </ul>
        </div>
        )
}


export default NewBooks