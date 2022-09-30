'use strict';

const fs = require('fs');
const path = require('path');
const pjPath = path.resolve(path.dirname(__filename), '../package.json');
const versionPath = path.resolve(path.dirname(__filename), '../version');
const distVersionPath = path.resolve(path.dirname(__filename), '../dist/sb-admin-angular/assets/version');
const pj = require(pjPath);

// fs.writeFileSync(versionPath, pj.version);
// fs.writeFileSync(distVersionPath, pj.version);

let determineVersion = function(){
    if ((pj.version) && (pj.version >= 1.0)) {
        console.log(`### INFO: Current Version: ${pj.version} is stable`);
    } else {
        console.log(pj.version);
        break;
    }

    return pj.version;
}

// Export of modules
module.exports = pj.version;