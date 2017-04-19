'use strict'

const Player = require('player');
const player = new Player('./audio/1.mp3');

player.play();
player.on('playend', (item) => {
  // return a playend item
  console.log(item); 
  console.log('src:' + item + ' play done, switching to next one ...');
});

player.on('playing',(item) => {
  console.log('im playing... src:', item);
});

player.on('error', (err) => {
  // when error occurs 
  console.log(err);
});

 
// // create a player instance from playlist 
// var player = Player([
//   __dirname + '/demo.mp3',
//   __dirname + '/demo2.mp3',
//   __dirname + '/demo.mp3',
//   // play .mp3 file from a URL 
//   'http://mr4.douban.com/blablablabla/p1949332.mp3'
// ]);
 
// // play again 
// player.play();
 
// play the next song, if any 
// player.next();
 
// // add another song to playlist 
// player.add('http://someurl.com/anothersong.mp3');
 
// // list songs in playlist 
// console.log(player.list)
 
// // event: on playing 
// player.on('playing',function(item){
//   console.log('im playing... src:' + item);
// });
 
// // event: on playend 
// player.on('playend',function(item){
//   // return a playend item 
//   console.log('src:' + item + ' play done, switching to next one ...');
// });
 
// // event: on error 
// player.on('error', function(err){
//   // when error occurs 
//   console.log(err);
// });
 
// // stop playing 
// player.stop();