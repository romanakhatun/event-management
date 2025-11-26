import PageHeader from "@/app/components/PageHeader";
import DBConnect from "@/app/lib/dbConnection";
import MenuImg from "@/public/images/menues.jpg";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { notFound } from "next/navigation";
const Details = async ({ params }) => {
  const { id } = await params;
  // Validate ObjectId
  if (!ObjectId.isValid(id)) notFound();
  const menu = await DBConnect("menus").findOne({ _id: new ObjectId(id) });
  if (!menu) notFound();
  const menuData = { ...menu, _id: menu._id.toString() };
  return (
    <div className="border-t border-black">
      <PageHeader image={MenuImg} title={"test food"} currentPath="Menu Details" />
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="flex items-center justify-center p-6">
          <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full p-8 flex flex-col md:flex-row gap-6">
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={menuData.imageUrl || "/images/placeholder-food.jpg"}
                alt={menuData.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{menuData.title}</h1>
                <div className="mt-4">
                  <span className="text-xl font-semibold text-green-600">${menuData.price}</span>
                </div>
                <p className="text-gray-500 mt-2">{menuData.fullDescription || "No description available."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
