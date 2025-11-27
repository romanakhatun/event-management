import PageHeader from "@/app/components/PageHeader";
import DBConnect from "@/app/lib/dbConnection";
import MenuImg from "@/public/images/menues.jpg";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { notFound } from "next/navigation";
import PlaceholderImg from "@/public/images/placeholder.jpg";
import { FaClock, FaDollarSign, FaUtensils } from "react-icons/fa";

const Details = async ({ params }) => {
  const { id } = await params;

  if (!ObjectId.isValid(id)) notFound();
  const menu = await DBConnect("menus").findOne({ _id: new ObjectId(id) });
  if (!menu) notFound();
  const menuData = { ...menu, _id: menu._id.toString() };

  const priceValue =
    typeof menuData.price === "string"
      ? parseFloat(menuData.price)
      : menuData.price;

  return (
    <div className="border-t border-black">
      <PageHeader
        image={MenuImg}
        title={menuData.title}
        desc={menuData.shortDescription}
      />

      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative w-full min-h-[300px] lg:h-full">
              <Image
                src={menuData.imageUrl || PlaceholderImg.src}
                alt={menuData.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
              />
            </div>

            {/* Details Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Title & Short Description */}
              <div>
                <h1 className="text-4xl font-fraunces font-bold text-gray-800 mb-2">
                  {menuData.title}
                </h1>
                <p className="text-lg text-gray-500 mb-6">
                  {menuData.shortDescription}
                </p>
                <hr className="border-t border-gray-200 mb-6" />
              </div>

              {/* Price and Preparation*/}
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-8 shadow-inner">
                <div className="flex items-center space-x-2 text-xl font-bold text-green-700">
                  <FaDollarSign className="w-5 h-5 text-green-600" />
                  <span>{priceValue.toFixed(2)}</span>
                </div>

                <div className="flex items-center space-x-2 text-gray-700">
                  <FaClock className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">
                    {menuData.preparationTime}
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  <span>Full Recipe Details</span>
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {menuData.fullDescription ||
                    "No detailed description provided for this menu item."}
                </p>
              </div>

              {/* Call to Action Button */}
              <button className="btn-primary cursor-pointer mt-auto text-center">
                Add to Event Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
