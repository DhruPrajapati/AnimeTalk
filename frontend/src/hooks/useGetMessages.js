import { useEffect, useState } from "react";
import useConversation from "../Components/Zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const handleError = (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Something failed in sending the message";
    toast.error(errorMessage);
  };

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );

        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading };
};

export default useGetMessages;
