"use client";
import MenuImg from "@/public/images/add-menus.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormInput from "../components/FormInput";
import PageHeader from "../components/PageHeader";
import toast from "react-hot-toast";

const Menus = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const initialMenuState = {
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    preparationTime: "",
    imageUrl: "",
  };

  const [menu, setMenu] = useState(initialMenuState);

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/menus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menu),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Something went wrong");
        console.log(result);
        return;
      }
      toast.success("Menu added successfully!");
      // reset form
      setMenu(initialMenuState);
      // console.log("Success:", result);
    } catch (error) {
      toast.error("Server error. Please try again");
      // console.error("Error:", error);
    }
  };

  const {
    title,
    shortDescription,
    fullDescription,
    price,
    imageUrl,
    preparationTime,
  } = menu;

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <PageHeader
        image={MenuImg}
        title={"Add New Menu Item"}
        desc={
          "Use this form to add a delicious new item to your digital menu, complete with details and pricing."
        }
      />
      <form
        className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg"
        onSubmit={handleSubmit}
      >
        <h3 className="font-serif text-3xl text-base-content font-medium mb-6 border-b pb-3">
          Recipe Details
        </h3>

        <div className="space-y-6 mb-6">
          {/* Title */}
          <FormInput
            label="Menu Title"
            type="text"
            name="title"
            required={true}
            handleChange={handleChange}
            value={title}
            placeholder="e.g., Signature Seafood Paella"
          />

          {/* Short Description */}
          <FormInput
            label="Short Description"
            type="text"
            name="shortDescription"
            required={true}
            handleChange={handleChange}
            value={shortDescription}
            placeholder="A concise, enticing summary (e.g., Saffron rice with mussels and prawns)"
          />

          {/* 3. Full Description */}
          <div>
            <label
              htmlFor="fullDescription"
              className="label text-sm font-semibold"
            >
              Full Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="fullDescription"
              name="fullDescription"
              onChange={handleChange}
              value={fullDescription}
              required
              rows="6"
              className="textarea textarea-bordered w-full"
              placeholder="List ingredients, preparation method, and dietary notes..."
            ></textarea>
          </div>

          {/* Price & Preparation Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <FormInput
              label="Price (USD)"
              type="number"
              name="price"
              required={true}
              placeholder="25.99"
              handleChange={handleChange}
              value={price}
            />

            {/* Preparation Time */}
            <FormInput
              label="Preparation Time"
              type="text"
              name="preparationTime"
              required={true}
              placeholder="e.g., 30 mins, 45-60 mins"
              handleChange={handleChange}
              value={preparationTime}
            />
          </div>

          {/* Optional Image URL */}
          <FormInput
            label="Image URL (Optional)"
            type="url"
            name="imageUrl"
            required={false}
            isRequired={false}
            handleChange={handleChange}
            value={imageUrl}
            placeholder="Paste a direct link to the menu image here"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary cursor-pointer w-full text-white text-lg mt-4"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
};

export default Menus;
