import { useEffect } from "react";
import axios from "axios";

export default function UserName({ token, onUserFetched, id }) {
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${api}/api/user/profile/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        onUserFetched(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) fetchProfile();
  }, [token, onUserFetched, id, api]);
  return null;
}
