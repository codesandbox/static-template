let express = require('express'),
app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

app.set('view engine', 'ejs')

app.use('/public', express.static('public'));

server.listen(3000);

app.get('/', function(req, res) {
    res.render('main-page');
})

app.get('/404', function(req, res) {
    res.render('404');
})

app.get('/create-article') {
    res.render('create-article');
}