import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '3f5e189ca9mshca67d78e62b57b4p10c6abjsnaa7bce5600cf'
        }
    });

    return data;
}

