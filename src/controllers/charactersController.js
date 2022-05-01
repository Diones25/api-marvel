const api = require("../service/api.js");

const getCharacters = async (req, res) => {
    await api.get("/characters").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.json(response.data);
    });
}

module.exports = {
    getCharacters,
}