import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com/',
})

export const ghPagesAPI = {
    getUsers() {
        return instance.get<AxiosResponse>('users');
    },
    getUser(userName: string) {
        return instance.get<AxiosResponse>(`users/${userName}`);
    }
}

