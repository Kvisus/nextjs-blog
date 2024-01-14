import Image from "next/image";
import Postcard from "./components/Postcard";

export default function Home() {
  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
    </main>
  );
}
