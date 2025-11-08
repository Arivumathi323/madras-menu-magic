import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface SwiggyFoodCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  deliveryTime: string;
  category: string;
  onOrder: () => void;
}

const SwiggyFoodCard = ({ name, price, image, rating, deliveryTime, category, onOrder }: SwiggyFoodCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card">
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <span className="text-white text-xs font-semibold uppercase tracking-wide">{deliveryTime}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
          <div className="flex items-center gap-1 bg-success text-success-foreground px-2 py-1 rounded">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-semibold">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-xl font-bold text-foreground">₹{price}</p>
          <Button onClick={onOrder} size="sm" className="font-semibold">
            ADD
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SwiggyFoodCard;
