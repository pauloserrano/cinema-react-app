import axios from "axios";

const cineflex = axios.create({
    baseURL: 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
})

export default cineflex