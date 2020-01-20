const exec = require('child_process').execSync
const codes = require('./responseCodes.json')

module.exports = function( groupname, groupID ) {
    try{
        let result = exec("sudo groupadd -g " + groupID + " " + groupname, { stdio: 'inherit' } )
        return result;

    }catch(e)
    {
        console.log(e)
        return codes[e.status]
    }
}