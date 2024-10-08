// "App/page.js"
import PokeList from "@/components/pokelist";

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await response.json();

  return <PokeList pokemon={json.results} />;
}
