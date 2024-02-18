import { Button } from "react-bootstrap";
import BaseApp from "./Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Appstate } from "../Context/ContextProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function TeacCreateComp(){
    const {Teacher,setTeacher} = Appstate();
    const history = useHistory();

    const[EmpNo,setEmpNo] = useState("");
    const[Name,setName] = useState("");
    const[Std,setStd] = useState("");
    const[Role,setRole] = useState("");
    const[Major,setMajor] = useState("");
    const[Experience,setExperience] = useState("");
    const[MailId,setMailId] = useState("");
    const[MobileNo,setMobileNo] = useState("");

    const CreateNewTeach =async()=>{
        const NewTeacher ={
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
            const TeachResponse = await fetch("https://65c9cd1e3b05d29307df01be.mockapi.io/teachers",{
                method:"POST",
                body:JSON.stringify(NewTeacher),
                headers:{
                    "Content-Type":"application/json"
                },
            })
            const TeachData = await TeachResponse.json();
            //console.log("Created Data",TeachData)
            setTeacher([...Teacher,TeachData])
            history.push("/TeacherHome")
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <BaseApp title="Create Teacher Data">
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
                    <Button onClick={CreateNewTeach}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Create</Button>     
                </form>
            </div>
        </BaseApp>
    );
}