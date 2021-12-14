import React from 'react';
import AnimeCard from './AnimeCard';
function mainContent(props) {
    return (
        <main>
            <div 
                className="main-head"
                onSubmit={props.HandleSearch}>
                <form className="search-box">
                    <input 
                        type="search" 
                        placeholder='Search for an anime...' 
                        required 
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}/>
                </form>
            </div>
            <div className='anime-list'>
                {props.animeList.map(anime => (
                    <AnimeCard 
                        anime={anime}
                        key={anime.mal_id} /> //creo un oggetto
                ))}
            </div>
        </main>
    )
}

export default mainContent
