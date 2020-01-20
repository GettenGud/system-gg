const exec = require('child_process').execSync

module.exports = function( group ) {
    try{
        let result = exec("sudo groupdel " + group )
        return result;

    }catch(e)
    {
        console.log(e)
        return null
    }
}