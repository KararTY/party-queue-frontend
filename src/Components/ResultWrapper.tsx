import { UseQueryResult } from "@tanstack/react-query";
import { ChevronDown, Library, SearchIcon } from "lucide-react";
import { Button } from "./Button";
import { List, ListItemProps } from "./List";

export function ResultWrapper(props: UseQueryResult<any, unknown>) {
  const { isLoading, error, data } = props || {};

  return (
    <div className="text-white flex flex-col gap-8">
      {isLoading ? (
        <p>Laddar in resultat...</p>
      ) : error ? (
        <p>
          <strong className="text-red-500">Fel:</strong> {error.toString()}
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          <a
            href="#list"
            className="flex flex-col gap-2 items-center font-bold"
          >
            <span>Se resultat</span>
            <ChevronDown strokeWidth={3} />
          </a>
        </div>
      )}

      <Results items={data} />
    </div>
  );
}

interface ResultsProps {
  items: ListItemProps[];
}

/**
 * If items is nullable, presents a "searching..." text.
 * If items is empty array, presents a "empty" text.
 * If items exists, presents list of songs.
 */
export function Results(props: ResultsProps) {
  const { items } = props || {};

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-bold flex items-center gap-2">
          <Library />
          <span>Resultat {items?.length}</span>
        </h2>
        <Button onClick={() => window.location.reload()}>Gå tillbaka</Button>
      </div>

      <div className="w-full overflow-hidden rounded-borders min-h-[300px] flex">
        {Array.isArray(items) ? (
          items.length ? (
            <List items={items} actions={[<Button>Lägg till</Button>]} />
          ) : (
            <div className="grow flex justify-center items-center gap-2">
              <span>😅</span>
              <span>Hittade inget.</span>
            </div>
          )
        ) : (
          <div className="grow flex justify-center items-center gap-2">
            <SearchIcon />
            <span>Söker...</span>
          </div>
        )}
      </div>
    </>
  );
}
