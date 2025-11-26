import React from "react";
import PageHeader from "../components/PageHeader";
import MenuImg from "@/public/images/manage-menus.jpg";

const Menus = () => {
  return (
    <div>
      <PageHeader
        image={MenuImg}
        title={"Manage Menus"}
        desc={
          "Our Team Our team of culinary experts delivers exceptional service and unforgettable experiences for every event."
        }
      />
    </div>
  );
};

export default Menus;
