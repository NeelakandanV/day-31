import BaseApp from "./Base";



export default function Home(){
    return(
        <BaseApp title="HOME">
            <div className="HomeParent">
                <div className="TeacherCont">
                    <p><b>Teachers</b></p>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/519/978/original/cartoon-drawing-of-a-teacher-vector.jpg"/><br/>
                    <a href="/TeacherHome">Click for Teacher➡️</a>
                </div>
                <div className="StudentCont">
                    <p><b>Students</b></p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFSmbcfAeLiZVw1HsUkOXe6aBARNwZQqhNg&usqp=CAU"/><br/>
                    <a href="/StudentHome">Click for Student➡️</a>
                </div>
            </div>
        </BaseApp>
    );
}