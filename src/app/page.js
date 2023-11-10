import Navbar from "@/components/Navbar";
import Greeting from "@/components/Greeting";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="w-full h-full overflow-auto bg-neutral-800">
      <Navbar />
      <div className="flex flex-col gap-12 xl:mt-14 lg:mt-14">
        <Greeting />
        <AboutMe />
      </div>
    </main>
  );
}
