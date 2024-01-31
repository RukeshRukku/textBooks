import {Route, Routes} from "react-router-dom"
import ClassWiseBooks from "../components/ClassWiseBooks"
import NewBooks from "../components/New books"
import OldBooks from "../components/Old books"
import Home from "../components/Home"


const ClassesRoute = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/oldBooks" element={<OldBooks />} />
            <Route exact path="/newBooks" element={<NewBooks />} />
            <Route exact path="/newBooks/:id" element={<ClassWiseBooks type="New" />} />
            <Route exact path="/oldBooks/:id" element={<ClassWiseBooks type="Old" />} />
            <Route exact path="/dedBooks" element={<ClassWiseBooks type="Ded" />} />
            <Route exact path="/bedBooks" element={<ClassWiseBooks type="Bed" />} />
        </Routes>
    )
}

export default ClassesRoute
