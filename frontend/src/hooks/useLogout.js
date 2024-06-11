import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "api/auth/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.error) throw new Error(data.error);

      localStorage.removeItem("User-Info");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
