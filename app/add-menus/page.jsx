"use client";
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import MenuImg from "@/public/images/add-menus.jpg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FormInput from "../components/FormInput";

const Menus = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

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
      <form className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
        <h3 className="font-serif text-3xl text-base-content font-medium mb-6 border-b pb-3">
          Recipe Details
        </h3>

        <div className="space-y-6 mb-6">
          {/* 1. Title */}
          <FormInput
            label="Menu Title"
            type="text"
            name="title"
            required={true}
            placeholder="e.g., Signature Seafood Paella"
          />

          {/* 2. Short Description */}
          <FormInput
            label="Short Description"
            type="text"
            name="shortDescription"
            required={true}
            placeholder="A concise, enticing summary (e.g., Saffron rice with mussels and prawns)"
          />

          {/* 3. Full Description (Textarea) */}
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
              required
              rows="6"
              className="textarea textarea-bordered w-full"
              placeholder="List ingredients, preparation method, and dietary notes..."
            ></textarea>
          </div>

          {/* 4. Price & Preparation Time (Two fields in a row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <FormInput
              label="Price (USD)"
              type="number"
              name="price"
              required={true}
              placeholder="25.99"
            />

            {/* Preparation Time (Relevant Field) */}
            <FormInput
              label="Preparation Time"
              type="text"
              name="preparationTime"
              required={true}
              placeholder="e.g., 30 mins, 45-60 mins"
            />
          </div>

          {/* 5. Optional Image URL */}
          <FormInput
            label="Image URL (Optional)"
            type="url"
            name="imageUrl"
            required={false}
            placeholder="Paste a direct link to the menu image here"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-white text-lg mt-4"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
};

export default Menus;
