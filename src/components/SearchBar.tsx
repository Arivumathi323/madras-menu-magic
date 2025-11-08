import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative flex-1 max-w-2xl">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <Input
        type="text"
        placeholder="Search for dishes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-12 border-2 focus:border-primary"
      />
    </div>
  );
};

export default SearchBar;
