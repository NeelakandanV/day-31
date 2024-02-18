import { children, createContext, useContext, useEffect, useState } from "react";


let AppContext = createContext('');

const AppProvider = ({children})=>{
    const [user,setUser] = useState([]);
    const [Teacher,setTeacher] = useState([]);

    useEffect(()=>{
        const getStudentDetails = async()=>{
            try{
                //Students
                const response = await fetch("https://65c9cd1e3b05d29307df01be.mockapi.io/students",{
                    method:"GET",
                })
                const data = await response.json();
                setUser(data)
                if(!data){
                    console.log("Unable to fetch Students")
                }

                //Teachers
                const TeachResponse = await fetch("https://65c9cd1e3b05d29307df01be.mockapi.io/teachers",{
                    method:"GET",
                })
                const TeachData = await TeachResponse.json();
                setTeacher(TeachData)

                if(!TeachData){
                    console.log("Unable to fetch Teachers")
                }

            }
            catch(error){
                console.log(error)
            }
        }
        getStudentDetails();
    },[])

    return(
        <AppContext.Provider
          value={{user,setUser,Teacher,setTeacher}}>
            {children}
        </AppContext.Provider>
    );
}

export const Appstate = ()=>{
    return useContext(AppContext);
}

export default AppProvider;