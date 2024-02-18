import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BaseApp from "./Base";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";


export default function NoPageComp(){
    const history = useHistory();
    return(
        <BaseApp title="Page Not Found">
            <div className="NoPage">
                <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"/>
                <p><b>⬅️Back to Home</b></p>
                <Button onClick={()=>history.push("/")}><FontAwesomeIcon icon={faSchool} />{" "}Home</Button>
            </div>
        </BaseApp>
    );
}