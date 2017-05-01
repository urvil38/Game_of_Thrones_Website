var express = require('express');
var routes = require('./routes/routes');
var path = require('path');
var favicon = require('serve-favicon');


var app = express();
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname,'public')));

var port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/',routes.seasonHome);

app.get('/seasons/:season_number/episodes/:episode_number',routes.episodes);

app.get('/seasons/:season_number/episodes/',routes.episodeHome);

app.get('*',function(req,res){
    res.render('notFound');
});

app.listen(port,function(){
    console.log(`app running on port : ${port}`);
});