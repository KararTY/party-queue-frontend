import { UseQueryResult } from "@tanstack/react-query";
import { ListMusic, Loader2, Music } from "lucide-react";
import { useEffect, useState } from "react";
import { List, ListItemProps } from "./List";

export function QueueWrapper(props: UseQueryResult<any, unknown>) {
  const { error, data, status } = props || {};

  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    if (status === "error" && error) {
      setItems([{ song: error.toString(), artists: [] }]);
    } else {
      setItems(null);
    }
  }, [status, error]);

  return <Queue items={items || data} />;
}

interface QueueProps {
  items: ListItemProps[];
}

export function Queue(props: QueueProps) {
  const { items } = props || {};

  return (
    <div className="text-white flex flex-col gap-8">
      <h2 className="text-2xl text-white font-bold flex gap-2 items-center">
        <ListMusic />
        <span>Kö</span>
      </h2>

      <div className="w-full overflow-hidden rounded-borders min-h-[300px] flex">
        {Array.isArray(items) ? (
          items.length ? (
            <List items={items} />
          ) : (
            <div className="grow flex justify-center items-center gap-2">
              <Music />
              <span>Listan är tom! Lägg till något.</span>
            </div>
          )
        ) : (
          <div className="grow flex justify-center items-center gap-2">
            <Loader2 className="animate-spin" />
            <span>Laddar...</span>
          </div>
        )}
      </div>
    </div>
  );
}
