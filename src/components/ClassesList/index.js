import "./index.css"
import {Link} from "react-router-dom"

const list_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ReturnElement = (props) => {
    const {num, standard} = props
    return(
        <li>
            <Link className="classes-list" to= {`${standard}`}>{num} <br /> Class</Link>
        </li>
    )
}

const ClassesList = (props) => {
    const {item} = props
    return (
        list_1.map(each => {
            if(each === 1) {
                return <ReturnElement num="1st" standard={each} key={each} item={item} />
            }else if (each===2){
                return <ReturnElement num="2nd" standard={each} key={each} item={item} />
            }else if(each===3) {
                return <ReturnElement num="3rd" standard={each} key={each} item={item} />
            }else{
                return <ReturnElement num={`${each}th`} standard={each} key={each} item={item} />
            }
        })
    )
}

export default ClassesList