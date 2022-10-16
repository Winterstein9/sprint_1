import button from "./button.hbs"
import "./button.css"

export default (butName, butValue)=>{
    return button({butName:butName, butValue:butValue})
}