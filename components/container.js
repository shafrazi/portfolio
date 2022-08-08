export default function Container({ children }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12">{children}</div>
    </div>
  );
}
