import axios from 'axios';

const api = axios.create({
	baseURL: 'https://dog.ceo/api/breeds/image/',
	responseType: 'json',
	// withCredentials: true,
	timeout: 15000,
});
export default api;