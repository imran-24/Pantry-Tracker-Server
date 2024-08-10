import express from 'express'
import askGemini from './askGemini.js'

const router = express.Router()

// anonymous function
export default () =>{
    askGemini(router)
    return router;
}
