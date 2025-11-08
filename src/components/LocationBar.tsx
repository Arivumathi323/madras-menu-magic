import { MapPin, ChevronDown } from "lucide-react";

const LocationBar = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
      <MapPin className="w-5 h-5 text-primary" />
      <div className="flex items-center gap-1">
        <span className="font-semibold">Madras</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
};

export default LocationBar;
