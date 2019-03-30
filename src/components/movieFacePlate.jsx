var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');

var MovieFacePlate = (props) => {
        return (
            <div className = "">

                        <div className="right sorting-panel">
                                Sort by
                            <TogleBtns titleLeft="Release date" titleRight="Rating" changeActive={props.onChangeSorting}/>
                        </div>
                        <div className ="movies-container">
                            {props.movies.map((video,i) => 
                                <div className="movie-face-plate">
                                <img src={video.imgSrc}></img>
                                <div className = "movie-name inline">
                                    {video.movieName}
                                </div>
                                <div className = "movie-year right">
                                    {video.movieYear}
                                </div>
                                <div className = "movie-genre">
                                    {video.movieGenre}
                                </div>
                            </div>
                                )   
                            }
                        </div>
                        </div>

            
        );
};

module.exports = MovieFacePlate;