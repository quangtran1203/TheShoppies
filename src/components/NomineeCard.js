import React from 'react';
import { useStateValue } from '../contextAPI/StateProvider';

function NomineeCard({ movie }) {
    
    const [{ nominees }, dispatch] = useStateValue();
    const removeMovie = () => {
        dispatch({
            type: "REMOVE",
            imdbID: movie.imdbID,
        })
    };

    return (
        <div className="movie-card">

            {movie.Poster ? (
                    <img src={movie.Poster} alt={`${movie.Poster}'s Poster`}/>
                ) : (
                        <div className="filler-poster"></div>
                )}
            
            <p className="title-style">{movie.Title} ({movie.Year})</p>
            <div className="inner-card-controls">
                <button onClick={removeMovie} className="ctrl-btn">
                    <i className="fa-fw fas fa-power-off"></i>
                </button>
            </div>
        </div>
    )
}

export default NomineeCard
