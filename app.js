
import chalk from 'chalk'
import express from 'express'
import debug from 'debug'
import morgan from 'morgan';
import path from 'path'

// const express = require('express')

// const chalk = require('chalk')

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename)

const debugLogger = debug('app')

const app = express();

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/',(req,res)=>{
    res.send("Hello Sam");
})

app.listen(3000,()=>{
    debug(`listening on port ${chalk.green('3000')}`)
})