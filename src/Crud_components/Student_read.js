import { Appstate } from "../Context/ContextProvider";
import BaseApp from "./Base";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";



export default function StudReadComp(){
    const {user,setUser} = Appstate();

    const history = useHistory();

    const DeleteStud = async(StuId)=>{
        try{
            const response = await fetch(`https://65c9cd1e3b05d29307df01be.mockapi.io/students/${StuId}`,{
                method:"Delete",
            })
            let NewList = user.filter((per)=>(per.Id !== StuId))
            setUser(NewList)

            const data = await response.json();
            //console.log(data)

            if(!data){
                console.log("Unable to fetch")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    // For Pagination

    const [CurrPage,setCurrPage] = useState(1);
    let DataPerPage = 5;
    let TotalPage = Math.ceil(user.length/DataPerPage);
    const LastIndex = CurrPage*DataPerPage;
    const FirstIndex = LastIndex-DataPerPage;
    const PageData = user.slice(FirstIndex,LastIndex);
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
        <BaseApp title="Students List">
            <div className="StuReadCont">
                <div className="StuPagiCont">
                    <p>Page : {CurrPage} of {TotalPage}</p>
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
                </div>

                <div className="StuTableCont">
                    <Table responsive striped bordered hover variant="dark">
                      <thead className="tableHead">
                        <tr>   
                          <th>#</th>
                          <th>Reg.No</th>
                          <th>Name</th>
                          <th>Std</th>
                          <th>Parent Name</th>
                          <th>Academic Year</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>    
                        {PageData.map((stu,index)=>(
                            <tr key={index}>
                                <td>{FirstIndex + index +1}</td>
                                <td>{stu.RegNo}</td>
                                <td>{stu.Name}</td>
                                <td>{stu.Std}</td>
                                <td>{stu.ParentName}</td>
                                <td>{stu.AcademicYear}</td>
                                <td><button onClick={()=>history.push(`/ViewStudent/${FirstIndex+index}`)} className="view-btn">View</button></td>
                                <td><button onClick={()=>history.push(`/EditStudent/${FirstIndex+index}`)} className="edit-btn">Edit</button></td>
                                <td><button onClick={()=>DeleteStud(stu.Id)} className="delete-btn">Delete</button></td>
                            </tr>
                        ))}    
                            <tr>
                                <td colSpan={9}><Button onClick={()=>history.push("/CreateStudent")}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Create</Button></td>
                            </tr>
                      </tbody>
                    </Table>
                </div>
            </div>
        </BaseApp>
    );
}