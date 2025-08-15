import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="fixed top-0 left-0 w-full h-svh bg-red-400" >
      <img src={"/carcassonne.webp"} className="h-[100%] object-cover opacity-75 -z-10" />
      <div className="absolute inset-0">
        <h1>Ottawa Boardgame Leauge</h1>
        <p>Welcome to the Ottawa Boardgame League!</p>
      </div>
    </main>
  );
}
