export default function Container({ children }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 bg-gray-200">{children}</div>
    </div>
  );
}
