import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Appstate } from "../Context/ContextProvider";
import BaseApp from "./Base";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


export default function TeacViewComp(){
    const {Teacher} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const Teach = Teacher[id];

    return(
        <BaseApp title={Teacher[id].Name}>
            <div className="view-mainCon">
                <div className="view-stud">
                    <p>Employee No : {Teach.EmpNo}</p>
                    <p>Teacher Name : {Teach.Name}</p>
                    <p> Role : {Teach.Role}</p>
                    <p>Major : {Teach.Major}</p>
                    <p>Standard Handling : {Teach.Std}</p>
                    <p>Experience : {Teach.Experience}</p>
                    <p>Email Id :<a href={`mailto:${Teach.MailId}`}>{Teach.MailId}</a></p>
                    <p>Mobile No : {Teach.MobileNo}</p>
                    <div className="view-stu-btn">
                        <Button onClick={()=>history.push("/")}><FontAwesomeIcon icon={faSchool} />{" "}Home</Button>{' '}
                        <Button onClick={()=>history.push("/TeacherHome")}><FontAwesomeIcon icon={faChalkboardUser} />{" "}Teacher Home</Button>{' '}
                        <Button onClick={()=>history.push(`/EditTeacher/${id}`)}><FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#ededee",}} />{" "}Edit</Button>
                    </div>
                </div>
            </div>
        </BaseApp>
    );
}