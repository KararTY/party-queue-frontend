import { SearchIcon } from "lucide-react";
import { ChangeEvent } from "react";
import { SpotifyIcon } from "./SpotifyIcon";

interface SearchProps {
  defaultValue?: string;
  value?: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Search(props: SearchProps) {
  const { defaultValue, value, handleSearch } = props || {};

  return (
    <div className="rounded bg-white p-2 w-full overflow-hidden text-black">
      <label
        htmlFor="spotify"
        className="flex gap-2 items-center mb-2 font-bold text-lg"
      >
        <SpotifyIcon />
        <span>Sök på Spotify</span>
      </label>

      <div className="relative">
        <input
          placeholder="Sök här..."
          defaultValue={defaultValue}
          value={value}
          onChange={handleSearch}
          id="spotify"
          name="spotify"
          className="py-1.5 px-2 border-2 border-green-500 rounded-lg w-full pr-6 peer"
        />
        <SearchIcon className="absolute p-1 right-0 inset-y-0 h-full text-green-500 peer-focus:text-black mr-1.5" />
      </div>
    </div>
  );
}
