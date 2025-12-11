import axios from "axios"

export const getCardUrl = (bcode) => {
    return axios.get(`/getcard.php?bcode=${bcode}`);
}

export const getPlayCardToken = (token) => {
    return axios.get(`/checkwin.php?playcard_token=${token}`);
}