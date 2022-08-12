import * as request from "./requester";

const baseUrl = "https://manstion-task-app.herokuapp.com/users";


export const register = (userData) =>
    request.post(`${baseUrl}/register`, userData);

export const getUsers = () => request.get(`${baseUrl}`);
