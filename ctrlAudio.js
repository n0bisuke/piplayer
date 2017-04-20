'use strict'

const execSync = require('child_process').execSync;

module.exports = (vol) => {
    const cmd = `amixer cset numid=1 ${vol}%`;
    const res = execSync(cmd);
    // console.log(res);
}
