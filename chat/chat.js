import chat from "./chat.hbs"
import chat_list from "./chat_list.hbs"
import {users} from "./dataChat.js"
import "./chat.css"

export let chat=()=>{
    document.body.innerHTML=chat({users:users})
    document.querySelector("#title").textContent="chat"
}

export let chat_list=()=>{
    document.body.innerHTML=chat_list({users:users})
    document.querySelector("#title").textContent="chat_list"
}