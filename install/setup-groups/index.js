const ops = require('../../controllers/operations')

module.exports = function(  ){
    
    ops.groups.create("sys-gg", 900)
    ops.groups.create('gg-ops', 901)
    ops.groups.create('gg-dev', 902)

    ops.groups.create("management", 300)
    ops.groups.create("staff", 301)
    ops.groups.create("clients", 302)
    ops.groups.create("projects", 303)

    
}