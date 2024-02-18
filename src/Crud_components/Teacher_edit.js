import { Button } from "react-bootstrap";
import BaseApp from "./Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Appstate } from "../Context/ContextProvider";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function TeacEditComp(){
    const {Teacher,setTeacher} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const tech = Teacher[id];

    const[ObjId,setObjId]=useState("");
    const[EmpNo,setEmpNo] = useState("");
    const[Name,setName] = useState("");
    const[Std,setStd] = useState("");
    const[Role,setRole] = useState("");
    const[Major,setMajor] = useState("");
    const[Experience,setExperience] = useState("");
    const[MailId,setMailId] = useState("");
    const[MobileNo,setMobileNo] = useState("");

    useEffect(()=>{
        setObjId(tech.Id)
        setEmpNo(tech.EmpNo)
        setName(tech.Name)
        setStd(tech.Std)
        setRole(tech.Role)
        setMajor(tech.Major)
        setExperience(tech.Experience)
        setMailId(tech.MailId)
        setMobileNo(tech.MobileNo)
    }
,[])

    const UpdateTeach =async()=>{
        const EditedTeach ={
            Id:ObjId,
            EmpNo,
            Name,
            Std,
            Role,
            Major,
            Experience,
            MailId,
            MobileNo,
        }
        try{
            const TeachResponse = await fetch(`https://65c9cd1e3b05d29307df01be.mockapi.io/teachers/${ObjId}`,{
                method:"PUT",
                body:JSON.stringify(EditedTeach),
                headers:{
                    "Content-Type":"application/json",
                },
            })
            const TeachData = await TeachResponse.json();
            //console.log("edited data",TeachData)
            Teacher[id] = TeachData;
            setTeacher([...Teacher])
            history.push("/TeacherHome")
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <BaseApp title="Edit Data">
            <div className="CreateForm">
                <form className="FormCont">
                    <label>Employee Number</label><br/>
                    <input type="number" placeholder="Enter Employee No" required
                    value={EmpNo}
                    onChange={(e)=>setEmpNo(e.target.value)}/><br/>
                    <label>Name</label><br/>
                    <input type="text" placeholder="Enter Teacher Name" required
                    value={Name}
                    onChange={(e)=>setName(e.target.value)}/><br/>
                    <label>standard</label><br/>
                    <input type="text" placeholder="Enter Handling Std" required
                    value={Std}
                    onChange={(e)=>setStd(e.target.value)}/><br/>
                    <label>Role</label><br/>
                    <input type="text" placeholder="Enter the Role" required
                    value={Role}
                    onChange={(e)=>setRole(e.target.value)}/><br/>
                    <label>Education Major</label><br/>
                    <input type="text" placeholder="Enter Field of study" required
                    value={Major}
                    onChange={(e)=>setMajor(e.target.value)}/><br/>
                    <label>Experience</label><br/>
                    <input type="number" placeholder="Mention Experience in years" required
                    value={Experience}
                    onChange={(e)=>setExperience(e.target.value)}/><br/>
                    <label>Email Id</label><br/>
                    <input type="email" placeholder="Enter Email Id" required
                    value={MailId}
                    onChange={(e)=>setMailId(e.target.value)}/><br/>
                    <label>Mobile Number</label><br/>
                    <input type="text" placeholder="Enter Mobile Number" required
                    value={MobileNo}
                    onChange={(e)=>setMobileNo(e.target.value)}/><br/>
                    <p><b>(All fields are mandatory,Kindly fill all the fields)</b></p>
                    <Button onClick={UpdateTeach}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Update</Button>     
                </form>
            </div>
        </BaseApp>
    );
}