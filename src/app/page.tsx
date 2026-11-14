import { Differentials } from "@/components/home/Differentials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Segments } from "@/components/home/Segments";
import { Solutions } from "@/components/home/Solutions";
import { Technology } from "@/components/home/Technology";

export default function Home() {
  return (
    <main id="conteudo" className="flex-1">
      <Hero />
      <Manifesto />
      <Solutions />
      <Technology />
      <Segments />
      <Differentials />
      <FinalCTA />
    </main>
  );
}