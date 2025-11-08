import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingCartProps {
  itemCount: number;
  total: number;
  onClick: () => void;
}

const FloatingCart = ({ itemCount, total, onClick }: FloatingCartProps) => {
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <Button 
        onClick={onClick}
        size="lg"
        className="h-14 px-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        <span className="font-semibold">{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
        <span className="mx-3 text-primary-foreground/60">|</span>
        <span className="font-bold">₹{total}</span>
      </Button>
    </div>
  );
};

export default FloatingCart;
