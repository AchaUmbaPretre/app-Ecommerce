import axios from 'axios'

const BASE_URL  = 'http://localhost:8800/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDEyOTljNmQ5ZjI4ZmU3ODgwYjZjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODU0NDI4NCwiZXhwIjoxNjc4ODAzNDg0fQ.BuCWlO3rZYwWonZuLUSlf8c9R-nzsvdY6SvXWAtrQgo"

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : { token: `Bearer ${TOKEN}` }
})