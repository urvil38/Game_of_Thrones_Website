var seriesDataJSON = require('../seriesDataJSON.json');

var seasons = seriesDataJSON.seasons;

function between(val, a, b) {
    if (val >= a && val <= b) {
        return true;
    }
}


exports.episodes = function (req, res) {

    var season_number = req.params.season_number;

    var episode_number = req.params.episode_number;

    if (between(season_number, 1, 6) && between(episode_number, 1, 10)) {
        //element of particular season which index is calulated by help of season_number given by req.params property
        var season = seasons[season_number - 1];

        //array of episodes of particular season i.e season 1 ,episode all
        var episodes = season.episodes;

        //information of particular episode which index is calculated by help of episode_number given by req.params property
        var episode = season.episodes[episode_number - 1];

        //reander episode based on particular information
        res.render('episode', {
            season: season,
            season_number: season_number,
            episodes: episodes,
            episode: episode
        });
    } else {
        res.render('notFound');
    }
}


//episodes homepage where all episode of current seasons are shows
exports.episodeHome = function (req, res) {

    var season_number = req.params.season_number;

    if (between(season_number, 1, 6)) {
        var season = seasons[season_number - 1];

        var episodes = season.episodes;

        res.render('episodeHome', {
            season: season,
            episodes: episodes,
            season_number: season_number
        });
    } else {
        res.render('notFound');
    }
}

exports.seasonHome = function (req, res) {

    res.render('seasonHome', {
        seasons: seasons
    });
}

