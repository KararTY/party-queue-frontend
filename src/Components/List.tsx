import { seededBorderColor } from "../utils/seededColor";

export interface ListItemProps {
  id: string;
  image: string;
  song: string;
  artists: string[];

  actions?: any[];
}

export interface ListProps {
  items: ListItemProps[];
  actions?: any;
}

function ListItem(props: ListItemProps) {
  const { song, artists, actions } = props || {};

  return (
    <li
      className={`p-8 rounded-borders border-2 ${seededBorderColor(
        song
      )} flex gap-1 justify-between items-stretch`}
    >
      <div>
        <p>{song}</p>
        <p>{artists.join(", ")}</p>
      </div>
      {actions?.length ? <div className="self-center">{actions}</div> : null}
    </li>
  );
}

export function List(props: ListProps) {
  const { items, actions } = props || {};

  return (
    <ul
      id="list"
      className="w-full overflow-y-auto p-2 text-white flex flex-col gap-2"
    >
      {items.map((entry) => (
        <ListItem key={entry.id} {...entry} actions={actions} />
      ))}
    </ul>
  );
}
