import { useState } from "react";
import { Bell } from "lucide-react";
import FoodCard from "./FoodCard";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import biryaniImg from "@/assets/biryani.jpg";
import chickenRiceImg from "@/assets/chicken-rice.jpg";
import noodlesImg from "@/assets/noodles.jpg";
import dosaImg from "@/assets/dosa.jpg";
import omeletteImg from "@/assets/omelette.jpg";
import idliImg from "@/assets/idli.jpg";

interface DashboardProps {
  username: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: "Biryani", price: 150, image: biryaniImg },
  { id: 2, name: "Chicken Rice", price: 120, image: chickenRiceImg },
  { id: 3, name: "Noodles", price: 100, image: noodlesImg },
  { id: 4, name: "Masala Dosa", price: 80, image: dosaImg },
  { id: 5, name: "Omelette", price: 40, image: omeletteImg },
  { id: 6, name: "Idli (3 pcs)", price: 50, image: idliImg },
];

const Dashboard = ({ username }: DashboardProps) => {
  const [totalBill, setTotalBill] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  const handleOrder = (item: MenuItem) => {
    setTotalBill((prev) => prev + item.price);
    setOrderCount((prev) => prev + 1);
    toast.success(`${item.name} added to your order!`, {
      description: `Price: ₹${item.price}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Welcome to Madras Canteen</h1>
          <button className="p-2 hover:bg-accent rounded-full transition-colors relative">
            <Bell className="w-6 h-6 text-primary" />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Special Offer Card */}
        <Card className="bg-accent border-primary/20">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-primary mb-2">Today's Special Combo ₹49</h2>
            <p className="text-muted-foreground">Get delicious South Indian Meals at a discount!</p>
          </CardContent>
        </Card>

        {/* Popular Dishes */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Popular Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <FoodCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onOrder={() => handleOrder(item)}
              />
            ))}
          </div>
        </section>

        {/* Bill Section */}
        <Card className="bg-accent border-primary/20">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-lg text-primary font-semibold">User: {username}</p>
              <p className="text-2xl font-bold text-foreground">Total: ₹{totalBill}</p>
              {orderCount > 0 && (
                <p className="text-sm text-muted-foreground">{orderCount} item(s) in order</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
