import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Ottawa Boardgame Leauge</h1>
      <p>Welcome to the Ottawa Boardgame League!</p>
      <SignedOut>
        <Link href={"sign-in"}>Sign in</Link>
        <Link href={"sign-up"}>Sign up</Link>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <Link href="boardgames">Boardgames</Link>
      <Link href="leagues">Leagues</Link>



    </>
  );
}
