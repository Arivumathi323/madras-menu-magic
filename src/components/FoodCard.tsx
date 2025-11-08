import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface FoodCardProps {
  name: string;
  price: number;
  image: string;
  onOrder: () => void;
}

const FoodCard = ({ name, price, image, onOrder }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-muted">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-2 p-4 bg-accent/50">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="text-xl font-bold text-primary">₹{price}</p>
        <Button onClick={onOrder} className="w-full" size="sm">
          Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
