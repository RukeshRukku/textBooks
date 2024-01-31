import "./index.css"
import {Link} from "react-router-dom"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const DedFirst = (props) => {
    const {id, subject, pdfLink, downloadLink} = props
    return(
        <li className="ded-li">
            <div className="ded-1-flex">
                <h1 className="ded-head">{id}</h1>
            </div>
            <hr className="ded-hr" />
            <div className="flex-ded">
                <span className="books-span">{subject}</span>
                <a className="anchor" href={pdfLink} target="_blank" rel="noreferrer" >Open Text Book <FaBookOpen className="icons" /></a>
                <a className="anchor" href={pdfLink} download={downloadLink} >Download Text Book <FaCloudDownloadAlt className="icons" /></a>
            </div>
        </li>
    )
}

const DedBooks  = (props) => {
    const {firstYearBooks, secondYearBooks} = props
    return (
        <div className="ded-bg">
            <Link to="/" className="return">Return To Home</Link>
            <hr className="hr1" />
            <h1 className="head">AP D.El.Ed 1st Year Text Books</h1>
            <ul className="ded-books-li">
                {firstYearBooks.map(each => {
                    const {pdfLink, id, downloadLink, subject} = each
                    return(
                        <DedFirst pdfLink={pdfLink} key={id} id={id} downloadLink={downloadLink} subject={subject} />
                    )
                })}
            </ul>
            <hr className="hr" />
            <h1 className="head">AP D.El.Ed 2nd Year Text Books</h1>
            <ul className="ded-books-li">
                {secondYearBooks.map(each => {
                    const {pdfLink, id, downloadLink, subject} = each
                    return(
                        <DedFirst pdfLink={pdfLink} key={id} id={id} downloadLink={downloadLink} subject={subject} />
                    )
                })}
            </ul>
        </div>
    )
}


export default DedBooks