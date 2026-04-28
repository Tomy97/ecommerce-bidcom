import ImageComponent from "./ImageComponent";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <header className="flex justify-center items-center bg-[#0000FF] py-4">
      <div className="flex items-center gap-6 w-full max-w-4xl px-4">
        <div>
          <ImageComponent />
        </div>

        <div className="flex flex-1 items-center bg-white rounded px-3 py-1.5">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
