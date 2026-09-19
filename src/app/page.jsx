import Filter from "@/components/FilterGames/Filter";
import List from "@/components/GameList/List";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/games?sort-by=alphabetical`,
    {
      next: {
        revalidate: 30,
      },
    },
  );
  const data = await res.json();

  return (
    <div className="bg-[#131313] h-dvh">
      <Navbar />
      <List data={data} />
      <Filter data={data}/>
    </div>
  );
}
