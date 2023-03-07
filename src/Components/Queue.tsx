import { List, ListItemProps } from "./List";

interface QueueProps {
	items: ListItemProps[];
}

export function Queue(props: QueueProps) {
	const { items } = props || {};

  return (
    <>
      <h2 className="text-2xl text-white font-bold self-start">Queue</h2>

      <div className="w-full overflow-hidden rounded-borders min-h-[300px] flex">
        <List items={items} />
      </div>
    </>
  );
}
