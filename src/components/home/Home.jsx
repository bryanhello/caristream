import React, { useState } from 'react';
import {Streamer_list, Data} from '../../data/streamer'
import Embed from '../embed/Embed';
import './home.scss'

const Home = () => {
    const [query, setQuery] = useState("")
    const [selected, setSelected] = useState("alderiate")

    Data('https://api.twitch.tv/helix/users?login=hirogazeuse')

    return (
        <div className='app'>
            <div className="searchbar">

            
            <input type="text" placeholder='streamer' className="search" onChange={e=> {setQuery(e.target.value)}}/>
            <ul className='list' >
                {Streamer_list.filter((streamer) => 
                    streamer.streamer_name.toLowerCase().includes(query)
                ).map((streamer) => (
                    <li
                    className="listeItem"  
                    key={streamer.streamer_name} 
                    id={streamer.streamer_name}
                    style={{
                        display: streamer.onAir ? 'flex' : 'flex'
                    }}
                    onClick={(e) =>{
                        setSelected(streamer.streamer_name)
                    }}
                    >                     
                    <a 
                    
                    >
                    <img src={streamer.profil_picture} alt="" style={{
                        border: streamer.onAir ? '3px solid green' : '3px solid red'
                    }}/>
                    </a>

                    <p  onClick={(e) =>{
                        setSelected(streamer.streamer_name)
                    }}>
                    {streamer.streamer_name} <br />
                    nombre de viewer {streamer.amount_viewer}
                    </p>
                    
                    
                    </li>
                )) 
                }
                
            </ul>
            </div>
        <Embed streamer_to_diffuse={selected} className='lecteur'/>

        </div>
    );
};

export default Home;