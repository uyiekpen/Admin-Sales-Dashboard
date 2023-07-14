import { Nav } from "@/components";
import "@fontsource/poppins";

export default function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="bg-red-100">
          <Nav />
        </div>
        <main className="flex-grow bg-green-600 absolute h-screen min-w-[calc(100vw-275px)] right-0 mt-16">
          hello {/* Add appropriate main content styles */}
          {/* Dashboard content */}
        </main>
      </div>
    </>
  );
}
