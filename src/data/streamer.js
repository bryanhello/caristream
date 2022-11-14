import api from '../api'
import React, {useState, useEffect} from 'react'
export async function  Data(url ='') {
    const headers = {
        'Client-ID': '305uplkg9mzxoe290kz4pqk3d6zm20',
        'Authorization': 'Bearer 305uplkg9mzxoe290kz4pqk3d6zm20'
    
      };
      const result = await window.fetch(url, {
        
        headers
      })
        .then(async (data) => await data.json())
        .catch((err) => err.message);
      console.log(result)
    
    
    
}




export const Streamer_list = [
    {
        "streamer_name": "hirogazeuse",
        "description":"pd de service",
        "amount_viewer": 51,
        "profil_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/a441c8f4-bf28-4af8-8842-805f538e2023-profile_image-70x70.png"
        ,"onAir": true
        ,'data' :""
    },
    {
        "streamer_name": "gotaga",
        "description":"pd ",
        "amount_viewer": 50,
        "profil_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-70x70.png"
        ,"onAir": true

    },
    {
        "streamer_name": "doigby",
        "description":"psefsf",
        "amount_viewer": 32510,
        "profil_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/c29eaa98-b316-4934-9910-502b2f027737-profile_image-70x70.png"
        ,"onAir": true

    },
    {
        "streamer_name": "fortnite",
        "description":"psfeesf",
        "amount_viewer": 51,
        "profil_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/a441c8f4-bf28-4af8-8842-805f538e2023-profile_image-70x70.png"
        ,"onAir": false

    },
    {
        "streamer_name": "lebouseuh",
        "description":"pd srgrrgz service",
        "amount_viewer": 51,
        "profil_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/a441c8f4-bf28-4af8-8842-805f538e2023-profile_image-70x70.png"
        ,"onAir": false

    },
    {
        "streamer_name": "shaunz",
        "description":"pd srgrrgz service" ,
        "amount_viewer": 51,
        "profil_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/a441c8f4-bf28-4af8-8842-805f538e2023-profile_image-70x70.png"
        ,"onAir": false

    }
]