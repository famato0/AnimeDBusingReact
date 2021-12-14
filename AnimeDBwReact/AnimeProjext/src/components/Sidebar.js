import React from 'react'

//destructure
function Sidebar({topAnime}) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {//.map e' come un foreach, gli passo l'array e uso solo l'ince = anime
                topAnime.map(anime => (
                    <a  
                        href={anime.url} 
                        target="_blank" 
                        key={anime.mal_id}
                        rel="noreferrer">

                        { anime.title }
                    </a>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
