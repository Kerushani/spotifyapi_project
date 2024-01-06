// 'https://accounts.spotify.com/authorize?'
import { useEffect } from "react";
import {Button} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";


const CLIENT_ID = "f0ed3cde4a404116b18b45d1c7f17521";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI_AFTER_LOGIN = "http://localhost:5173/spotify_login";
const SPACE_DELIMITER="%20"
const SCOPES = ["user-read-currently-playing", "user-read-playback-state"];
const SCOPES_URI_PARAM = SCOPES.join(SPACE_DELIMITER)

const getReturnParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1)
    const paramsInUrl = stringAfterHashtag.split("&")
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=")
        accumulater[key] = value
        return accumulater
    }, {})
    return paramsSplitUp
}

const SpotifyPage = () => {
useEffect(()=> {
    if(window.location.hash){
        const {access_token, expires_in, token_type} = getReturnParamsFromSpotifyAuth(window.location.hash)
        localStorage.clear();
        localStorage.setItem("accessToken", access_token)
        localStorage.setItem("takenType", token_type)
        localStorage.setItem("expiresIn", expires_in)
    }
})

const handleSpotifyLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_AFTER_LOGIN}&scope=${SCOPES_URI_PARAM}&response_type=token&show_dialog=true`
}
  return (
  <div className="mt-[30%] justify-center items-center">
        <Button className="justify-center items-center" onClick={handleSpotifyLogin}variant="contained">Sign in With Spotify</Button>
  </div>);
};

export default SpotifyPage;
