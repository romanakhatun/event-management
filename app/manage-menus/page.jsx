"use client";
import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import MenuImg from "@/public/images/manage-menus.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaEye, FaTrashAlt } from "react-icons/fa"; // Icons for actions

// --- Dummy Data (Replace with your MERN API Fetch) ---
const dummyMenuItems = [
  {
    id: 1,
    title: "Signature Seafood Paella",
    price: 25.99,
    prepTime: "45 mins",
  },
  {
    id: 2,
    title: "Artisan Margherita Pizza",
    price: 15.0,
    prepTime: "30 mins",
  },
  { id: 3, title: "Spicy Lamb Biryani", price: 18.5, prepTime: "60 mins" },
  {
    id: 4,
    title: "Classic Chocolate Lava Cake",
    price: 9.99,
    prepTime: "20 mins",
  },
];

const ManageMenusPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Authentication and Data Fetch
  useEffect(() => {
    if (status === "loading") return; // Wait until session status is resolved

    if (!session) {
      router.push("/login");
      return;
    }

    // --- MERN Fetch Logic Placeholder ---
    const fetchMenus = async () => {
      // In a real MERN app, this is where you'd fetch data:
      // const res = await fetch('/api/menus');
      // const data = await res.json();

      // Simulating a fetch delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMenuItems(dummyMenuItems);
      setIsLoading(false);
    };

    fetchMenus();
  }, [session, status, router]);

  // Action Handlers (Placeholders for your logic)
  const handleView = (id) => {
    // Navigate to a details page or open a modal
    router.push(`/menu/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete item ID: ${id}?`)) {
      // --- MERN Delete Logic Placeholder ---
      console.log(`Deleting item ${id}...`);
      // You would send a DELETE request to your backend here:
      // fetch(`/api/menus/${id}`, { method: 'DELETE' }).then(...)

      // Update local state after successful API deletion
      setMenuItems(menuItems.filter((item) => item.id !== id));
    }
  };

  // 2. Loading and Auth Guards
  if (status === "loading" || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return null; // Already handled redirect in useEffect
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        image={MenuImg}
        title={"Manage Menus"}
        desc={
          "Efficiently view, modify, and delete menu items for your catering business."
        }
      />

      <div className="container mx-auto px-4 md:px-0 py-12">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">
          Current Menu Items ({menuItems.length})
        </h2>

        {/* 3. Responsive Table/Grid Layout */}
        <div className="shadow-xl rounded-lg overflow-x-auto bg-white">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-center">Price</th>
                <th className="py-3 px-6 text-center">Prep Time</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-600 text-sm font-light">
              {menuItems.length > 0 ? (
                menuItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="py-3 px-6 text-left font-medium">
                      {item.title}
                    </td>
                    <td className="py-3 px-6 text-center">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-3 px-6 text-center">{item.prepTime}</td>

                    {/* Actions Cell */}
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center space-x-2">
                        {/* View Button */}
                        <button
                          onClick={() => handleView(item.id)}
                          className="btn btn-sm btn-circle btn-ghost text-blue-500 hover:text-blue-700 tooltip"
                          data-tip="View Details"
                        >
                          <FaEye className="w-5 h-5" />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-sm btn-circle btn-ghost text-red-500 hover:text-red-700 tooltip"
                          data-tip="Delete Item"
                        >
                          <FaTrashAlt className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-10 text-center text-gray-500">
                    No menu items found. Please add a new menu item.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMenusPage;
