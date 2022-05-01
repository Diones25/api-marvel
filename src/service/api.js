const axios = require('axios');
const md5 = require('md5');

const baseURL = `http://gateway.marvel.com/v1/public`;
const apikey = 'b95a90f2edf6a2504715cb074d29ac87';
const privatekey = '63219c485e2cfc102ab1b8d4282e9b9d1d7f4831';
const ts = Number(new Date());
const hash = md5(ts+privatekey+apikey);

const api = axios.create({
    baseURL: baseURL,
    params: {
        ts: ts,
        apikey: apikey,
        hash: hash

    }
});

module.exports = api; 