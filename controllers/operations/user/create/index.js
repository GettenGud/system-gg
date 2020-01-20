const exec = require('child_process').execSync

module.exports = function(username, password){
        let newUserResult = exec('useradd -m -s /bin/bash ' + username)

        let newUserPassword = exec('echo "' + password + '" | passwd --stdin ' + username)
}