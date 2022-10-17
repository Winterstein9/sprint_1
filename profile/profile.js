import "./profile.styl"
import profile from "./profile.hbs"

export default ()=>{
    console.log("profile")
    document.body.innerHTML=profile()
}