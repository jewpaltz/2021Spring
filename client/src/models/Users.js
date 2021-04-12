/* B"H
*/

import { api } from "./myFetch";

export function GetAllUsers(){
    return api("users");
}