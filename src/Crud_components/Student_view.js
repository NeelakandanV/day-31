import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Appstate } from "../Context/ContextProvider";
import BaseApp from "./Base";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChildren } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


export default function StudViewComp(){
    const {user} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const Stud = user[id];

    return(
        <BaseApp title={user[id].Name}>
            <div className="view-mainCon">
                <div className="view-stud">
                    <p>Register No : {Stud.RegNo}</p>
                    <p>Student Name : {Stud.Name}</p>
                    <p>Standard : {Stud.Std}</p>
                    <p>Academic Year : {Stud.AcademicYear}</p>
                    <p>Date of Birth : {Stud.DOB}</p>
                    <p>Blood Group : {Stud.BloodGroup}</p>
                    <p>Parent name : {Stud.ParentName}</p>
                    <p>Parent Mobile No : {Stud.ParentMobile}</p>
                    <p>Current City : {Stud.HouseAddress}</p>
                    <div className="view-stu-btn">
                        <Button onClick={()=>history.push("/")}><FontAwesomeIcon icon={faSchool} />{" "}Home</Button>{' '}
                        <Button onClick={()=>history.push("/StudentHome")}><FontAwesomeIcon icon={faChildren} />{" "}Student Home</Button>{' '}
                        <Button onClick={()=>history.push(`/EditStudent/${id}`)}><FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#ededee",}} />{" "}Edit</Button>
                    </div>
                </div>
            </div>
        </BaseApp>
    );
}