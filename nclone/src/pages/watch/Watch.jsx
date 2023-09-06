 import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
 
 export default function Watch(){
   return (
     <div className="watch">
       <div className="back">
        <ArrowBackOutlined/>
        Home
       </div>
       <video className="video" autoPlay progress controls src ="https://player.vimeo.com/external/463272768.sd.mp4?s=389e6b95920d365f14de2655795e6fe79490b21d&profile_id=164&oauth2_token_id=57447761"/>
     </div>
   );
 }
 
 
 
