/* B"H
    Holds the user session. Is a singleton.
*/
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

