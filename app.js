var express = require('express');
var routes = require('./routes');
var path = require('path');


var app = express();
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname,'public')));

var port = process.env.PORT || 8000;

//app.get('/',routes.home);

app.get('/seasons/:season_number/episodes/:episode_number',routes.episodes);

app.get('/seasons/:season_number/episodes/',routes.episodeHome);

app.listen(port,function(){
    console.log(`app running on port : ${port}`);
});