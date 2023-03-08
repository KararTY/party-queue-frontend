interface ButtonProps {
  children: any;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { children, onClick } = props || {};
  return (
    <button
      className={`p-2 px-4 rounded flex justify-items-center items-center bg-blue-500 hover:bg-blue-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
