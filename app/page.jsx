import Link from "next/link";
import Hero from "./components/Hero";
import MenuCard from "./components/MenuCard";
import DBConnect from "./lib/dbConnection";

export default async function Home() {
  const data = await DBConnect("menus").find({}).limit(6).toArray();
  const menus = data.map((menu) => ({
    ...menu,
    _id: menu._id.toString(),
  }));

  return (
    <div className="mb-12">
      <Hero />
      <div className="container mx-auto px-4 md:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {menus.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/menus" className="btn-primary">
          View All
        </Link>
      </div>
    </div>
  );
}
