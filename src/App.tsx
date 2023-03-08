import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { QueueWrapper } from "./Components/QueueWrapper";
import { ResultWrapper } from "./Components/ResultWrapper";
import { Search } from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchQuery = useQuery({
    queryKey: ["spotify", search],
    queryFn: async () => {
      const url = new URL(`${import.meta.env.VITE_BACKEND_URL}/search`);
      url.search = new URLSearchParams({ q: search }).toString();
      const data = await fetch(url);
      return data.json();
    },
  });

  const queueQuery = useQuery({
    queryKey: ["queue"],
    queryFn: async () => {
      const url = new URL(`${import.meta.env.VITE_BACKEND_URL}/queue`);
      const data = await fetch(url);
      return data.json();
    },
  });

  return (
    <div className="container mx-auto max-w-prose flex flex-col h-screen gap-8 py-8 p-2 sm:px-0">
      <div className="prose prose-green prose-invert">
        <h1>P A R T Y</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          aperiam esse vero voluptas enim soluta ipsam quis? Qui ullam rerum
          ratione quaerat pariatur doloremque placeat! Magni inventore dolores
          repellendus fugiat.
        </p>

        <Search handleSearch={handleSearchChange} />
      </div>

      {!search ? (
        <QueueWrapper {...queueQuery} />
      ) : (
        <ResultWrapper {...searchQuery} />
      )}
    </div>
  );
}

export default App;
