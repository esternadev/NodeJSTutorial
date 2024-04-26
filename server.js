import express from 'express'
import chalk from 'chalk'
import debugs from 'debug'
import morgan from 'morgan'

//const express = require('express');
//const chalk = require('chalk');
//const debug = require('debug')('app');
const debug = debugs('server')
const server = express();
const port = 8910;

server.use(morgan('combined'));

server.get("/", (req,res) => 
{
    res.send('Hello Boss');
})

server.listen(port, () => {
        debug("Start On Port:"+chalk.red(port));
})
