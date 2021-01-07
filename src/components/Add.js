import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';
import MovieCard from './MovieCard';

function Add() {
    const [{ nominees }, dispatch] = useStateValue();
    const history = useHistory();

    const [candidate, setCandidate] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (nominees.length === 5) {
            alert("You have nominated 5 movies! You will be redirected to the Nominees Page.");
            history.push("/");
        }
    }, [nominees])

    const handleChange = e => {
        e.preventDefault();
        setCandidate(e.target.value);

        fetch(`https://www.omdbapi.com/?s=${e.target.value}&apikey=c3404977`)
            .then(res => res.json()).then(data => {
                console.log(data);
                if (!data.Error) {
                    setMovies(data.Search);
                }
                else {
                    setMovies([]);
                }
            });
    };

    const goTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a candidate..." value={candidate} onChange={handleChange}/>
                    </div>

                    {movies.length > 0 && (
                        <ul className="results">
                            {movies.filter(movie => {
                                return movie.Type==="movie"
                            }).map(movie => (
                                <li key={movie.imdbID}>
                                    <MovieCard movie={movie}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <button className="backToTop btn" onClick={goTop}>
                <i className="fa-fw fas fa-arrow-up"></i>
            </button>
        </div>
    )
}

export default Add
