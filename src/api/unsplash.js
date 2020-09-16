import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4dTh_OoBLNm1iQ2tbc7UgClDvyAqNExagPM-Hpm2ok0'
    }
});