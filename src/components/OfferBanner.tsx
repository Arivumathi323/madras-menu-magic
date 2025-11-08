import { Percent } from "lucide-react";
import { Card } from "@/components/ui/card";

const OfferBanner = () => {
  return (
    <Card className="bg-gradient-to-r from-primary to-orange-600 text-primary-foreground border-0 p-6">
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-full">
          <Percent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Today's Special - 50% OFF</h3>
          <p className="text-sm opacity-90">Use code MADRAS50 on orders above ₹200</p>
        </div>
      </div>
    </Card>
  );
};

export default OfferBanner;
