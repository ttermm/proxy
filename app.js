var express =                   require('express');
var _ =                         require('underscore');
var path =                      require('path');
var app =                       express();
var socks =                     require('socksv5');

global.dir_root = __dirname;


var srv = socks.createServer(function(info, accept, deny) {
    accept();});
srv.listen(8499, '', function() {
    console.log('SOCKS server listening on port 8499');
});

srv.useAuth(socks.auth.None());
// srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
//     cb(user === 'crypto' && password === '5vPeQi5S');
// }));
