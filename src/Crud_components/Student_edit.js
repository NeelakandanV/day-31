import { Button } from "react-bootstrap";
import BaseApp from "./Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Appstate } from "../Context/ContextProvider";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function StudEditComp(){
    const {user,setUser} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const Student = user[id];

    const [ObjId,setObjId]=useState('');
    const[RegNo,setRegNo] = useState("");
    const[Name,setName] = useState("");
    const[Std,setStd] = useState("");
    const[AcademicYear,setAcademicYear] = useState("");
    const[DOB,setDOB] = useState("");
    const[BloodGroup,setBloodGroup] = useState("");
    const[ParentName,setParentName] = useState("");
    const[ParentMobile,setParentMobile] = useState("");
    const[HouseAddress,setHouseAddress] = useState("");

    useEffect(()=>{
        setObjId(Student.Id)
        setRegNo(Student.RegNo)
        setName(Student.Name)
        setStd(Student.Std)
        setAcademicYear(Student.AcademicYear)
        setDOB(Student.DOB)
        setBloodGroup(Student.BloodGroup)
        setParentName(Student.ParentName)
        setParentMobile(Student.ParentMobile)
        setHouseAddress(Student.HouseAddress)
    }
,[])

    const UpdateStud = async()=>{
        const EditedStud ={
            Id:ObjId,
            RegNo,
            Name,
            Std,
            AcademicYear,
            DOB,
            BloodGroup,
            ParentName,
            ParentMobile,
            HouseAddress
        }
        try{
            const response = await fetch(`https://65c9cd1e3b05d29307df01be.mockapi.io/students/${ObjId}`,{
                method:"PUT",
                body:JSON.stringify(EditedStud),
                headers:{
                    "Content-Type":"application/json",
                },
            })
            const data = await response.json();
            //console.log(data)
            user[id] = data;
            setUser([...user])
            history.push("/StudentHome")
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <BaseApp title="Edit Data">
            <div className="CreateForm">
                <form className="FormCont">
                    <label>Register No</label><br/>
                    <input type="number" placeholder="Enter Register No" required
                    value={RegNo}
                    onChange={(e)=>setRegNo(e.target.value)}/><br/>
                    <label>Name</label><br/>
                    <input type="text" placeholder="Enter Student Name" required
                    value={Name}
                    onChange={(e)=>setName(e.target.value)}/><br/>
                    <label>standard</label><br/>
                    <input type="text" placeholder="Enter Std and Sec" required
                    value={Std}
                    onChange={(e)=>setStd(e.target.value)}/><br/>
                    <label>Academic Year</label><br/>
                    <input type="text" placeholder="Enter year(from)-year(to)" required
                    value={AcademicYear}
                    onChange={(e)=>setAcademicYear(e.target.value)}/><br/>
                    <label>DOB</label><br/>
                    <input type="text" placeholder="Enter your Date of birth" required
                    value={DOB}
                    onChange={(e)=>setDOB(e.target.value)}/><br/>
                    <label>Blood Group</label><br/>
                    <input type="text" placeholder="Mention Blood Group" required
                    value={BloodGroup}
                    onChange={(e)=>setBloodGroup(e.target.value)}/><br/>
                    <label>Parent Name</label><br/>
                    <input type="text" placeholder="Enter Parent Name" required
                    value={ParentName}
                    onChange={(e)=>setParentName(e.target.value)}/><br/>
                    <label>Parent Mobile Number</label><br/>
                    <input type="text" placeholder="Enter Parent Mobile Number" required
                    value={ParentMobile}
                    onChange={(e)=>setParentMobile(e.target.value)}/><br/>
                    <label>House(City)</label><br/>
                    <input type="text" placeholder="Enter Current City" required
                    value={HouseAddress}
                    onChange={(e)=>setHouseAddress(e.target.value)}/><br/>
                    <p><b>(All fields are mandatory,Kindly fill all the fields)</b></p>
                    <Button onClick={UpdateStud}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Update</Button>     
                </form>
            </div>
        </BaseApp>
    );
}