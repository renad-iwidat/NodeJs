const axios = require("axios");
const path = require("path");
const express = require("express");
const app = express();
async function makeRequest1() {

    const config = {
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/golduck",
    };

    let res = await axios(config);
    return res.data;
}
async function makeRequest2() {

    const config = {
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    };

    let res = await axios(config);
    return res.data;
}
async function makeRequest3() {

    const config = {
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
    };

    let res = await axios(config);
    return res.data;
}
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/pages'))
app.get("/", async (req, res) => {
    const p1 = await makeRequest1();
    const p2 = await makeRequest2();
    const p3 = await makeRequest3();
    res.render("home", {
        title: "POKEMONS",
        p: [
            {
                name: p1.name,
                order: p1.order,
            },
            {
                name: p2.name,
                order: p2.order,
            },
            {
                name: p3.name,
                order: p3.order,
            },

        ],
    });
});

app.listen(3000)
