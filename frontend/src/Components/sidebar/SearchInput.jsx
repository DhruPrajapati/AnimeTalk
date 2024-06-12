import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../Zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No Such User Found");
  };
  return (
    <form onSubmit={handleSubmit} className="flex item-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full bg-red-400 border-red-500 bg-opacity-80 custom-placeholder text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-red-400 bg-opacity-80">
        <IoSearchSharp className="w-6 h-6 text-white outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
