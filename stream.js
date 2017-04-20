'use strict'

const Milkcocoa = require('./node_modules/mlkcca');
const milkcocoa = new Milkcocoa(require('./config'));
const ds = milkcocoa.dataStore('piplayer');

const Player = require('player');
const RADIO_LIST = require('./audio/radioList');
console.log(RADIO_LIST.music);
const player = new Player(RADIO_LIST.music).enable('stream');

player.on('playing', (song) => {
    console.log('Playing... ');
    console.log(song);
});

player.on('playend', (item) => {
  // return a playend item
  console.log('src:' + item + ' play done, switching to next one ...');
  player.play();
});


player.on('error', (err) => {
    console.log('Opps...!')
    console.log(err);
    player.next();
});

ds.on('send', (sended) => {
    console.log(sended.value.control);
    if(sended.value.control === 'next') {
        // player.stop();
        player.next().enable('stream');
    }
});

player.play();