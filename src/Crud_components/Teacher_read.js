import { Appstate } from "../Context/ContextProvider";
import BaseApp from "./Base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { Button } from "react-bootstrap";



export default function TeacReadComp(){
    const {Teacher,setTeacher} = Appstate();

    const history = useHistory();

    const DeleteTech = async(TrId)=>{
        try{
            const TeachResponse = await fetch(`https://65c9cd1e3b05d29307df01be.mockapi.io/teachers/${TrId}`,{
                method:"Delete"
            })
    
            let NewList = Teacher.filter((per)=>(per.Id !== TrId))
            const TeachData = await TeachResponse.json();
            //console.log("Deleted data",TeachData)
            setTeacher(NewList)
        }
        catch(error){
            console.log(error)
        }
    }

    // For Pagination

    const [CurrPage,setCurrPage] = useState(1);
    let DataPerPage = 6;
    let TotalPage = Math.ceil(Teacher.length/DataPerPage);
    const LastIndex = CurrPage*DataPerPage;
    const FirstIndex = LastIndex-DataPerPage;
    const PageData = Teacher.slice(FirstIndex,LastIndex);
    const PageNumbers = [...Array(TotalPage+1).keys()].slice(1);


    const PrevPage = ()=>{
        if(CurrPage!==1){
            setCurrPage(CurrPage-1);
        }
    }
    
    const NextPage = ()=>{
        if(CurrPage !== TotalPage){
            setCurrPage(CurrPage+1);
        }
    }
    
    const PageNav = (PageNo)=>{
        setCurrPage(PageNo)
    }


  return (
        <BaseApp title="Teacher Data">
            <div className="StuReadCont">
                <div className="Crebtn">
                <Button size="lg" onClick={()=>history.push("/CreateTeacher")}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Create</Button>
                </div>
                <div className="TeachCont">
                    {PageData.map((Teac,Ind)=>(
                        <div className="TeachBoxCont" key={Ind}>
                            <h4>Name : {Teac.Name}</h4>
                            <p>Employee Id : {Teac.EmpNo}</p>
                            <p>Role : {Teac.Role}</p>
                            <p>Exp(in years) : {Teac.Experience}</p>
                            <a href={`mailto:${Teac.MailId}`}>Email : {Teac.MailId}</a><br/>
                            <button onClick={()=>history.push(`/ViewTeacher/${FirstIndex+Ind}`)} className="view-btn-Tr">View</button>
                            <button onClick={()=>history.push(`/EditTeacher/${FirstIndex+Ind}`)} className="edit-btn-Tr">Edit</button>
                            <button onClick={()=>DeleteTech(Teac.Id)} className="delete-btn-Tr">Delete</button>
                        </div>
                    ))}
                </div>

                <div className="StuPagiCont">
                    <nav className="Pagination">
                        <a href="#" onClick={PrevPage}>Prev</a>
                        {PageNumbers.map((num,ind)=>(
                            <a href="#" key={ind}
                            onClick ={()=>PageNav(num)}
                            >
                                {num}
                            </a>
                        ))}
                        <a href="#" onClick={NextPage}> Next</a>
                    </nav>
                    <p>Page : {CurrPage} of {TotalPage}</p>
                </div>
            </div>
        </BaseApp>
    );
}