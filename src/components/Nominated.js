import React from 'react'
import { useStateValue } from '../contextAPI/StateProvider'
import NomineeCard from './NomineeCard';

function Nominated() {

    const [{nominees}, dispatch] = useStateValue();

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    {nominees.length === 5 ? (
                        <h1 className="heading">
                        Here are your {nominees.length} nominees (you cannot add more until you remove one of your nominees):
                        </h1>
                    ) : (
                        <h1 className="heading">
                        Here {nominees.length===1 ? "is" : "are"} your {nominees.length} {nominees.length===1 ? "nominee" : "nominees"}:
                        </h1>
                    )}
                    
                    <span className="count-pill">{nominees.length} {nominees.length===1 ? "Movie" : "Movies"}</span>
                </div>
                
                {nominees.length > 0 ? (
                    <div className="movie-grid">
                    {nominees.map(nominee => (
                        <NomineeCard movie={nominee}/>
                    ))}
                </div>
                ) : (
                        <h2 className="no-movies">Looks empty here... Add some nominees!</h2>
                )}
            </div>
        </div>
    )
}

export default Nominated
