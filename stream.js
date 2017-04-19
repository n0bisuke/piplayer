'use strict'

const Player = require('player');
const URL = `http://dir.xiph.org/listen/567382/listen.m3u`;
// const URL = `http://stream.srg-ssr.ch/m/rsp/mp3_128`;
const player = new Player(URL).enable('stream');

player.on('playing', (song) => {
    console.log('Playing... ');
    console.log(song);
});

player.on('error', (err) => {
    console.log('Opps...!')
    console.log(err);
});

player.play();