import { forumData } from "../../data/PostData"
import "./Footer.css"
export function Footer(){
   
    return (
        <>
         <div className="profile">
            <img src={forumData.picUrl} alt=""/>
            <div>
                <p>{forumData.name}</p>
                <p className="username">@{forumData.username}</p>
            </div>
         </div>
        </>
    )
}