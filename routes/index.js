var seriesDataJSON = require('../seasons.json');

var seasons = seriesDataJSON.seasons;

exports.episodes= function(req,res) {

    var season_number = req.params.season_number;

    var episode_number = req.params.episode_number;
    
    //element of particular season which index is calulated by help of season_number given by req.params property
    var season = seasons[season_number - 1];
    
    //array of episodes of particular season i.e season 1 ,episode all
    var episodes = season.episodes;

    //element of particular episode which index is calculated by help of episode_number given by req.params property
    var episode = season.episodes[episode_number - 1];

    //reander episode based on particular information
    res.render('episode',{
        season : season,
        season_number :season_number,
        episodes : episodes,
        episode : episode
    });
}


//episodes homepage where all episode of current seasons are shows
exports.episodeHome = function(req,res) {

    var season_number = req.params.season_number;

    var season = seasons[season_number - 1];

    var episodes = season.episodes;

    res.render('episodeHome',{
        season : season,
        episodes : episodes,
        season_number : season_number
    });

}

