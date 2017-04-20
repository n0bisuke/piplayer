'use strict';

const Milkcocoa = require('./node_modules/mlkcca');
const milkcocoa = new Milkcocoa(require('./config'));
const ds = milkcocoa.dataStore('piplayer');

// ds.on('push', (pushed) => {
//     console.log(pushed);
// });

// ds.send({control:'next'},(pushed)=>{
//     console.log(pushed)
// });

ds.send({audioVol: 90},(pushed)=>{
    console.log(pushed)
});