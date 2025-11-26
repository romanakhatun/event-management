"use client";
import React from "react";
import PageHeader from "../components/PageHeader";
import MenuImg from "@/public/images/manage-menus.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Menus = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

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
