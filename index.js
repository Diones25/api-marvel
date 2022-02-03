const axios = require('axios');

const timeStamp = '1643918299';
const apiKey = 'b95a90f2edf6a2504715cb074d29ac87';
const md5 = '46725fa8e72436a92933735fc234487a';
const urlbase = `http://gateway.marvel.com/v1/public/`;
const complemento = `characters?ts=${timeStamp}&apikey=${apiKey}$hash=${md5}$limit=6`

axios.get(`${urlbase}${complemento}`).then( (response) => {
  console.log(response.json())
});