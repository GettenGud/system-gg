const exec = require('child_process').exec

module.exports = function(username) {
    let removeResult = exec('sudo userdel -r ' + username)
}