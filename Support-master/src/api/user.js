import axios from 'axios';
import { getCookie } from '@/helpers/cookie.js';

const tokenUser = getCookie("token_user");

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const requestBody = {
    method: "post",
    headers: {
        common: {
            Authorization: `Bearer ${tokenUser}`
        }
    },
    url: "",
    data: {}
}; // kerangkaaa

export async function loginAsUser(request={}) {
	return await axios({...requestBody, ...{
        method: "post",
        url: "/login",
        data: request
    }}); 
}

export async function registerAsAdministrator(request={}) {
	return await axios({...requestBody, ...{
        method: "post",
        url: "/register",
        data: request
    }}); 
}

export async function getTickets() {
    return await axios({...requestBody, ...{
        method: "get",
        url: "/ticket/tickettools/tickets",
    }})
}