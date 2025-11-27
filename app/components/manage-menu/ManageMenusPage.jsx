"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaTrashAlt } from "react-icons/fa";

const ManageMenusPage = ({ data = [] }) => {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState(data);

  // Action Handlers (Placeholders for your logic)
  const handleView = (id) => {
    // Navigate to a details page or open a modal
    router.push(`/menus/${id}`);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete item: ${title}?`)) {
      // You would send a DELETE request to your backend here:
      fetch(`/api/menus?id=${id}`, { method: "DELETE" })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.success && data?.result?.deletedCount > 0) {
            toast.success("Delete successfully");
            setMenuItems(menuItems.filter((item) => item._id !== id));
          } else {
            toast.error(data.message || "Invalid data");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0 py-12">
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Current Menu Items ({menuItems.length})</h2>

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
                <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                  <td className="py-3 px-6 text-left font-medium">{item.title}</td>
                  <td className="py-3 px-6 text-center">${parseInt(item.price).toFixed(2)}</td>
                  <td className="py-3 px-6 text-center">{item.prepTime}</td>

                  {/* Actions Cell */}
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center space-x-2">
                      {/* View Button */}
                      <button
                        onClick={() => handleView(item._id)}
                        className="btn btn-sm btn-circle btn-ghost text-blue-500 hover:text-blue-700 tooltip"
                        data-tip="View Details"
                      >
                        <FaEye className="w-5 h-5" />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(item._id, item.title)}
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
  );
};

export default ManageMenusPage;
