import Link from "next/link";
import SignUp from "./auth/signUp/page";
import "@fontsource/poppins";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      Welcome <Link href="/auth/signUp">Register here</Link>
    </main>
  );
}
