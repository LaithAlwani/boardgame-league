import Link from "next/link";

export default function Home() {
  return (
    <main className="relative -mt-18  w-full" >
      <img src={"/carcassonne.webp"} className="w-[100%] h-[100svh]  object-cover opacity-75" />
      <div className="absolute top-0 mt-96 text-center w-full px-2 z-10">
        <h1 className="text-3xl text-white font-bold">Ottawa Boardgame Leauge</h1>
        <p className="text-lg text-white italic">Welcome to the Ottawa Boardgame League!</p>
        <Link href={"/leagues"} className="inline-block bg-slate-700 text-white p-2 my-3 rounded-sm ">Leagues</Link>
      </div>
    </main>
  );
}
