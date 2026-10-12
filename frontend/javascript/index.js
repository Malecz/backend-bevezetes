const { json } = require('body-parser');
const { response } = require('express');

const postfetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('hiba');
        }
    } catch (error) {
        throw new error('hiba');
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await postfetch('/api/data', {
            name: 'Nagy Marcell',
            age: 13,
            gender: 'Kombájn'
        });
        console.log('Siker: ', response);
    } catch (error) {
        console.error('Hiba', error);
    }
});
