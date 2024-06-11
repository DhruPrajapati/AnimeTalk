import { useState } from "react";

import axios from "axios";
import useConversation from "../Components/Zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const handleError = (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "Something failed in sending the message";
    toast.error(errorMessage);
  };

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
