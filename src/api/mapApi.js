import axios from 'axios';

export default axios.create({
	baseURL: 'https://valorant-api.com/v1/maps',
});
