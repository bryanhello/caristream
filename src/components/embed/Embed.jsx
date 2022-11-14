import React from 'react';
import './embed.scss'

const Embed = (streamer_to_diffuse) => {

    
    var STREAM_URL = "https://player.twitch.tv/?channel=" + streamer_to_diffuse['streamer_to_diffuse'] + "&parent=localhost"  
    
    return (
        <div className='app'>
            
            <iframe
            src={STREAM_URL}
            className='twitch_embed'
            allowFullScreen
            title='embed_stream'>
        </iframe>

        </div>
    );
};

export default Embed;