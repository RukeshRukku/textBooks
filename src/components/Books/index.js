import "./index.css"
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const KeyList = (props) => {
    const {subject, imageLink, pdfLink, downloadLink, content1} = props
    const dec = content1 === "Text" ? "decoration" : "decoration1"
    return (
        <li className={dec} key={subject}>
            <img src={imageLink} className="subject" alt={subject} />
            <a className="anchor" href={pdfLink} target="_blank" rel="noreferrer">Open {content1} Book <FaBookOpen className="icons" /></a>
            <a className="anchor" href={pdfLink} download={downloadLink}>Download {content1} Book As PDF <FaCloudDownloadAlt className="icons" /></a>
        </li>
    )
}

const UnOrderList = (props) => {
    const {content, books_list} = props
    const content_list = books_list
    const content1 = (content === "text") ? "Text" : "Work"
        return (
            content_list.map(each => {
                const {subject, imageLink, pdfLink, downloadLink} = each
                return (
                    <KeyList content1={content1} subject={subject} imageLink={imageLink} pdfLink={pdfLink} downloadLink={downloadLink} key={subject} />
                )
        })
    )

}

const Books = (props) => {
    const {content, books_list} = props
    return (
        <UnOrderList content={content} books_list={books_list} />
    )
}


export default Books