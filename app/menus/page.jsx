export const dynamic = "force-dynamic";
import MenuImg from "@/public/images/menues.jpg";
import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import DBConnect from "../lib/dbConnection";

const Menus = async () => {
  const data = await DBConnect("menus").find({}).toArray();
  const menus = data.map((menu) => ({
    ...menu,
    _id: menu._id.toString(),
  }));

  return (
    <div>
      <PageHeader
        image={MenuImg}
        title={"Our Exquisite Menu"}
        desc={
          "Discover our diverse range of culinary delights, crafted with the freshest ingredients for every occasion."
        }
      />

      <div className="container mx-auto px-4 md:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {menus.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menus;
