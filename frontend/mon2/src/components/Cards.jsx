import React from "react";
import Card from "./Card";

const data = [
  {
    id: 1,
    brand: "Apple",
    model_name: "iPhone 16e",
    image_url:
      "https://www.oruphones.com/_next/image?url=https%3A%2F%2Fdemo-bucket-c2c-001.s3.amazonaws.com%2FGSMAimages%2Fapple_iphone_16e.webp&w=640&q=75",
  },
  {
    id: 2,
    brand: "Apple",
    model_name: "iPhone 16",
    image_url:
      "https://www.oruphones.com/_next/image?url=https%3A%2F%2Fdemo-bucket-c2c-001.s3.amazonaws.com%2FGSMAimages%2Fapple_iphone_16.webp&w=640&q=75",
  },
  {
    id: 3,
    brand: "Apple",
    model_name: "iPhone 16 Pro Max",
    image_url:
      "https://www.oruphones.com/_next/image?url=https%3A%2F%2Fdemo-bucket-c2c-001.s3.amazonaws.com%2FGSMAimages%2Fapple_iphone_16_pro_max.webp&w=640&q=75",
  },
  {
    id: 4,
    brand: "Apple",
    model_name: "iPhone 16 Plus",
    image_url:
      "https://www.oruphones.com/_next/image?url=https%3A%2F%2Fdemo-bucket-c2c-001.s3.amazonaws.com%2FGSMAimages%2Fapple_iphone_16_plus.webp&w=640&q=75",
  },
  {
    id: 5,
    brand: "Apple",
    model_name: "iPhone 16 Pro",
    image_url:
      "https://www.oruphones.com/_next/image?url=https%3A%2F%2Fdemo-bucket-c2c-001.s3.amazonaws.com%2FGSMAimages%2Fapple_iphone_16_pro.webp&w=640&q=75",
  },
];

const Cards = () => {
  return (
    <section className="w-full min-h-[60vh] bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e0e4b] mb-8 text-center tracking-tight">
          Latest Phones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
