import { seededBorderColor } from "../utils/seededColor";

export interface ListItemProps {
  id: string;
  image: string;
  song: string;
  artists: string[];
}

interface ListProps {
  items: ListItemProps[];
}

function ListItem(props: ListItemProps) {
  const { song, artists } = props || {};

  return (
    <li
      className={`p-8 rounded-borders border-2 ${seededBorderColor(
        song
      )} flex flex-col gap-1`}
    >
      <p>{song}</p>
      <p>{artists.join(", ")}</p>
    </li>
  );
}

export function List(props: ListProps & React.Attributes) {
  const { items } = props || {};

  return (
    <ul className="w-full overflow-y-auto p-2 text-white flex flex-col gap-2">
      {items.map((entry) => (
        <ListItem key={entry.id} {...entry} />
      ))}
    </ul>
  );
}
