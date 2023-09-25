const express = require('express')
const {Client} = require('pg')
const config = require('config')

const app = express()
const PORT = config.get('serverPort')
const start = async () => {
    try {
        
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
