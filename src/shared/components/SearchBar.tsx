"use client";
import { SearchIcon } from "lucide-react";
export const SearchBar = ({ defaultValue = "" }: { defaultValue?: string }) => (
  <form
    action="/search"
    className="flex flex-1 items-center bg-white rounded px-3 py-1.5"
  >
    <input
      type="search"
      name="s"
      defaultValue={defaultValue}
      placeholder="¿Qué estás buscando?"
      className="w-full outline-none text-black placeholder-gray-500 bg-transparent"
    />
    <button type="submit" className="pl-2" aria-label="Buscar">
      <SearchIcon size={20} className="text-gray-500" />
    </button>
  </form>
);
