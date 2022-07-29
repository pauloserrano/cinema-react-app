import axios from "axios";

const cineflex = axios.create({
    baseURL: 'https://mock-api.driven.com.br/api/v7/cineflex'
})

export default cineflex