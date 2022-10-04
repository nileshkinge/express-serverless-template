import express from "express";

export const parentRouter = express.Router();

parentRouter.get('/', (_req, _res) => {
    _res.json({
        server: 'online',
        // documentation: 'https://docs.saavn.me',
        github: 'https://github.com/nileshkinge/songs-api',
        author: 'nilesh kinge',
    })
})