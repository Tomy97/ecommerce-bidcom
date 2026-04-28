import ImageComponent from "./ImageComponent";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <header className="bg-[#0000FF] py-4">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6w-full max-w-4xl mx-auto px-4">
        <div className="flex justify-center md:justify-start">
          <ImageComponent />
        </div>
        <div className="w-full md:flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
