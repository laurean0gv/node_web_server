const { log } = require('console')
const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options

    const app= express();

    //middeleware
    app.use(express.static(public_path));//diponibilizar el contenido publico

    app.get("/", (req, res)  => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    })

    app.listen(port);
}

module.exports = {
    startServer
}