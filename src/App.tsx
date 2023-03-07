import { useQuery } from "@tanstack/react-query";
import { ListItemProps } from "./Components/List";
import { Queue } from "./Components/Queue";
import { Search } from "./Components/Search";

const items: ListItemProps[] = Array(100)
  .fill("")
  .map((_, index) => ({
    id: window.crypto.randomUUID(),
    song: `test ${index}`,
    artists: ["yes"],
    image: "",
  }));

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["spotify"],
    queryFn: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/search`),
  });

  return (
    <div className="container mx-auto max-w-prose py-8 flex flex-col h-screen gap-8">
      <div className="prose prose-green prose-invert justify-self-center my-auto">
        <h1>Party</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          aperiam esse vero voluptas enim soluta ipsam quis? Qui ullam rerum
          ratione quaerat pariatur doloremque placeat! Magni inventore dolores
          repellendus fugiat.
        </p>

        <Search />
      </div>

      <Queue items={items} />
    </div>
  );
}

export default App;
