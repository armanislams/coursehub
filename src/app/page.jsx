import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default async function Home() {
  return (
    <div
      
      className="flex flex-col gap-10 py-5 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <Hero></Hero>
      <WhyChooseUs />
    </div>
  );
}
