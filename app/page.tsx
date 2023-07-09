import Link from "next/link";
import SignUp from "./new/(auth)/signUp/page";
import "@fontsource/poppins";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      Welcome <Link href="/new/signUp">Register here</Link>
    </main>
  );
}
