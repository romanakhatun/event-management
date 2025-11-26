import React from "react";
import PageHeader from "../components/PageHeader";
import MenuImg from "@/public/images/menues.jpg";
import MenuCard from "../components/MenuCard";
import TopicImage from "@/public/footer-2.jpg";

const dummyMenuItems = [
  {
    id: "menu-1",
    title: "Signature Seafood Paella",
    shortDescription:
      "A vibrant Spanish rice dish loaded with fresh mussels, succulent prawns, and tender calamari, infused with saffron.",
    fullDescription:
      "Authentic Valencian paella recipe with Arborio rice, saffron, peas, red bell peppers, onions, garlic, white wine, and a rich seafood broth. Garnished with lemon wedges and fresh parsley.",
    price: 28.5,
    preparationTime: "45 mins",
    imageUrl: TopicImage,
  },
  {
    id: "menu-2",
    title: "Gourmet Mushroom Risotto",
    shortDescription:
      "Creamy Arborio risotto with wild mushrooms, truffle oil, and Parmesan cheese, finished with fresh herbs.",
    fullDescription:
      "Slow-cooked creamy Arborio rice infused with porcini and cremini mushrooms, white wine, vegetable broth, butter, and grated Parmigiano-Reggiano. Drizzled with white truffle oil.",
    price: 22.0,
    preparationTime: "35 mins",
    imageUrl: TopicImage,
  },
  {
    id: "menu-3",
    title: "Classic Beef Wellington",
    shortDescription:
      "Tender beef fillet coated with pâté and duxelles, wrapped in puff pastry and baked to golden perfection.",
    fullDescription:
      "Premium beef tenderloin seared and coated with mushroom duxelles and foie gras pâté, then encased in golden, flaky puff pastry. Served with a rich red wine reduction.",
    price: 45.0,
    preparationTime: "60-75 mins",
    imageUrl: TopicImage,
  },
  {
    id: "menu-4",
    title: "Vegan Buddha Bowl",
    shortDescription:
      "A healthy and colorful bowl with quinoa, roasted sweet potatoes, avocado, chickpeas, and a tahini dressing.",
    fullDescription:
      "A vibrant and nutritious bowl featuring fluffy quinoa, perfectly roasted sweet potatoes, creamy avocado, spiced chickpeas, spinach, and cherry tomatoes. Drizzled with a zesty lemon-tahini dressing.",
    price: 16.75,
    preparationTime: "25 mins",
    imageUrl: TopicImage,
  },
];

const Menus = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dummyMenuItems.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menus;
