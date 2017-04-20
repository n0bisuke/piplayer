'use strict'

const execSync = require('child_process').execSync;

module.export = (vol) => {
    const cmd = `amixer cset numid=1 ${vol}%`;
    execSync(cmd);
}
