import React from 'react'
import { useStateValue } from '../contextAPI/StateProvider'

function MovieCard({ movie }) {
    
    const [{nominees}, dispatch] = useStateValue();
    const addMovie = () => {
        dispatch({
            type: "NOMINATE",
            movie: movie,
        })
    };
    const storeMovie = nominees.find(i => i.imdbID === movie.imdbID);
    const nomineeDisabled = storeMovie ? true : false;


    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.Poster ? (
                    <img src={movie.Poster} alt={`${movie.Poster}'s Poster`}/>
                ) : (
                        <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.Title}</h3>
                    <h4 className="release-date">{movie.Year}</h4>
                </div>

                <div className="controls">
                    {nomineeDisabled===false ? (<button className="btn" onClick={addMovie} disabled={nomineeDisabled}>
                        Nominate
                    </button>) : (<button className="btn" onClick={addMovie} disabled={nomineeDisabled}>
                        Nominated
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default MovieCard
