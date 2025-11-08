import { useState } from "react";
import SearchBar from "./SearchBar";
import LocationBar from "./LocationBar";
import CategoryFilter from "./CategoryFilter";
import SwiggyFoodCard from "./SwiggyFoodCard";
import FloatingCart from "./FloatingCart";
import OfferBanner from "./OfferBanner";
import { toast } from "sonner";
import biryaniImg from "@/assets/biryani.jpg";
import chickenRiceImg from "@/assets/chicken-rice.jpg";
import noodlesImg from "@/assets/noodles.jpg";
import dosaImg from "@/assets/dosa.jpg";
import omeletteImg from "@/assets/omelette.jpg";
import idliImg from "@/assets/idli.jpg";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  deliveryTime: string;
  category: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Biryani", price: 150, image: biryaniImg, rating: 4.5, deliveryTime: "25-30 mins", category: "Rice & Biryani" },
  { id: 2, name: "Chicken Rice", price: 120, image: chickenRiceImg, rating: 4.3, deliveryTime: "20-25 mins", category: "Rice & Biryani" },
  { id: 3, name: "Hakka Noodles", price: 100, image: noodlesImg, rating: 4.2, deliveryTime: "15-20 mins", category: "Chinese" },
  { id: 4, name: "Masala Dosa", price: 80, image: dosaImg, rating: 4.6, deliveryTime: "20-25 mins", category: "South Indian" },
  { id: 5, name: "Masala Omelette", price: 40, image: omeletteImg, rating: 4.0, deliveryTime: "10-15 mins", category: "Breakfast" },
  { id: 6, name: "Idli (3 pcs)", price: 50, image: idliImg, rating: 4.4, deliveryTime: "15-20 mins", category: "South Indian" },
];

const categories = ["All", "South Indian", "Rice & Biryani", "Chinese", "Breakfast"];

const SwiggyDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);

  const handleOrder = (item: MenuItem) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    toast.success(`${item.name} added to cart!`);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  const totalPrice = cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <LocationBar />
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6 pb-32">
        {/* Offer Banner */}
        <OfferBanner />

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Restaurant Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-foreground mb-1">Madras Canteen</h1>
          <p className="text-muted-foreground">South Indian, Chinese, North Indian</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span>⭐ 4.3</span>
            <span>•</span>
            <span>₹150 for two</span>
            <span>•</span>
            <span>2.5 km</span>
          </div>
        </div>

        {/* Food Grid */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            {activeCategory === "All" ? "Recommended" : activeCategory} ({filteredItems.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <SwiggyFoodCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                rating={item.rating}
                deliveryTime={item.deliveryTime}
                category={item.category}
                onOrder={() => handleOrder(item)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Floating Cart */}
      <FloatingCart
        itemCount={totalItems}
        total={totalPrice}
        onClick={() => toast.info("Cart feature coming soon!")}
      />
    </div>
  );
};

export default SwiggyDashboard;
