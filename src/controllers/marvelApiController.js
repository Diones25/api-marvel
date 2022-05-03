const api = require("../service/api.js");

const getCharacters = async (req, res) => {
    await api.get("/characters").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(403).json({ message: "Personagens não encontrado!" });
    });
}

const getComics = async (req, res) => {
    await api.get("/comics").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Quadrinhos não encontrado!" });
    });
}

const getCreators = async (req, res) => {
    await api.get("/creators").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Criadores não encontrado!" });
    });
}

const getEventos = async (req, res) => {
    await api.get("/events").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Eventos não encontrado!" });
    });
}

const getSeries = async (req, res) => {
    await api.get("/series").then((response) => { 
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Series não encontrado!" });
    });
}

const getStories = async (req, res) => {
    await api.get("/stories").then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);  
    }).catch(() => {
        return res.status(400).json({ message: "Historias não encontrado!" });
    });
}

module.exports = {
    getCharacters,
    getComics,
    getCreators,
    getEventos,
    getSeries,
    getStories
}