var express =                   require('express');
var _ =                         require('underscore');
var path =                      require('path');
var app =                       express();
var socks =                     require('socksv5');

global.dir_root = __dirname;


var srv = socks.createServer(function(info, accept, deny) {
    // info.dstPort = 80;
    // info.dstHost = '176.58.127.229';
    accept();
    // accept();
    // var socket = accept();
    // if (socket = accept(true)) {
    //     console.log('socket',socket);
    //  console.log('info',info);
    // } else accept();
});
srv.listen(8499, '212.111.41.130', function() {
    console.log('SOCKS server listening on port 8499');
});

srv.useAuth(socks.auth.None());
// srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
//     cb(user === 'crypto' && password === '5vPeQi5S');
// }));