const { response } = require("express");

const mahasiswaNim = '1102020'; // Ganti dengan NIM yang akan di edit
const updateData = {
    nama: 'Kania Purnarahayu',
    gender: 'P',
    prodi: 'TI',
    alamat: 'Jampangkulon'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erorr:', error));