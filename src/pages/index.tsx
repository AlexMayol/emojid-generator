import type { NextPage } from "next";
import { HelloWorld } from "@/components/Hello";

const Home: NextPage = () => {
  return (
    <main className="h-screen bg-blue-100 p-16">
      <div className="flex items-center justify-center h-full">
        <HelloWorld />
      </div>
    </main>
  );
};

export default Home;
