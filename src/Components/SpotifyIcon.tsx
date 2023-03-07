import spotifyIcon from "../assets/Spotify_Icon_RGB_Green.png";

export function SpotifyIcon({ className = "" }) {
  return (
    <span className={className}>
      <img className="m-0 w-6 h-6 inline-block" src={spotifyIcon} />
    </span>
  );
}
