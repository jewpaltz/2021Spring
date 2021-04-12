/* B"H
    Holds the user session. Is a singleton.
*/
import { ToastProgrammatic as toastr } from "buefy";

const Session = {
    user: null,
    message: [] // To be used later
}
export default Session;

export function Login(){
    Session.user = { name: "Moshe", handle: '@JewPaltz' }
}

export function Logout(){
    Session.user = null
}

export function toastError(msg){
    toastr.open({
        message: msg,
        queue: false,
        type: 'is-danger'
    })
}