type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, type, ...props }: Props) {
  return (
    <button
      {...props}
      type={type || 'button'}
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
    >
      {children}
    </button>
  );
}
