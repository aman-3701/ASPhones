import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const API = import.meta.env.VITE_BACKEND_URL;



const Cards = () => {
  const [mobiles, setMobiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMobile, setSelectedMobile] = useState(null);
  const [form, setForm] = useState({ address: "", upi: "" });
  const [buying, setBuying] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/api/GetMobile`)


      
      .then((res) => setMobiles(res.data))
      .catch(() => setMobiles([]));
  }, []);

  const handleBuyClick = (mobile) => {
    setSelectedMobile(mobile);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBuyNow = async () => {
    setBuying(true);
    setTimeout(() => {
      setBuying(false);
      setShowModal(false);
      setForm({ address: "", upi: "" });
      alert("Purchase request sent!");
    }, 1200);
  };

  return (
    <section className="w-full min-h-[60vh] bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e0e4b] mb-8 text-center tracking-tight">
          Latest Phones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {mobiles.map((item) => (
            <div
              key={item.id}
              onClick={() => handleBuyClick(item)}
              style={{ cursor: "pointer" }}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
      {showModal && selectedMobile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              Buy{" "}
              {selectedMobile.mobile_name || selectedMobile.model_name || "Mobile"}
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={form.address}
                onChange={handleFormChange}
                className="border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                name="upi"
                placeholder="Enter your UPI ID"
                value={form.upi}
                onChange={handleFormChange}
                className="border rounded px-3 py-2"
                required
              />
              <button
                type="button"
                className="bg-[#7747ff] text-white px-6 py-2 rounded font-semibold mt-2 disabled:opacity-60"
                onClick={handleBuyNow}
                disabled={buying || !form.address || !form.upi}
              >
                {buying
                  ? "Processing..."
                  : `Buy Now (ID: ${selectedMobile.id || "-"})`}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;
