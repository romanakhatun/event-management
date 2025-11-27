import MenuImg from "@/public/images/manage-menus.jpg";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ManageMenusPage from "../components/manage-menu/MangeMenu";
import PageHeader from "../components/PageHeader";
import DBConnect from "../lib/dbConnection";

const Page = async () => {
  const session = await getServerSession();
  if (!session) return redirect("/login");

  let menuItems = await DBConnect("menus").find({ email: session.user.email }).toArray();
  menuItems = menuItems.map((menu) => ({
    ...menu,
    _id: menu._id.toString(),
  }));

  return (
    <div className="min-h-screen">
      <PageHeader
        image={MenuImg}
        title={"Manage Menus"}
        desc={"Efficiently view, modify, and delete menu items for your catering business."}
      />

      <ManageMenusPage data={menuItems} />
    </div>
  );
};

export default Page;
