import { SearchIcon } from "lucide-react";
import { SpotifyIcon } from "./SpotifyIcon";

export function Search() {
  return (
    <div className="rounded bg-white p-2 w-full overflow-hidden text-black">
      <label htmlFor="spotify" className="flex gap-2 items-center mb-2 font-bold text-lg">
        <SpotifyIcon />
        Search Spotify
      </label>

      <div className="relative">
        <input
          id="spotify"
          name="spotify"
          className="py-1.5 px-2 border-2 border-green-500 rounded-lg w-full pr-6 peer"
        />
        <SearchIcon className="absolute p-1 right-0 inset-y-0 h-full text-green-500 peer-focus:text-black mr-1.5" />
      </div>
    </div>
  );
}
