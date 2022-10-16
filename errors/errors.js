import "./errors.css"
import error404 from "./404.hbs"
import error500 from "./500.hbs"


export const error404=()=>{
    document.body.innerHTML=error404()
}

export const error500=()=>{
    document.body.innerHTML=error500()
}