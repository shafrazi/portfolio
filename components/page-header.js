import Container from "./container";

export default function PageHeader({ title, subtitle }) {
  return (
    <Container>
      <div className="w-full mt-16">
        <h1 className="text-2xl md:text-4xl font-extrabold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
        <hr className="border-1 border-black mt-3" />
      </div>
    </Container>
  );
}
