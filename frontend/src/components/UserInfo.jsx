import { useEffect } from "react";
import axios from "axios";

export default function UserName({ token, onUserFetched, id }) {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/profile/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        onUserFetched(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) fetchProfile();
  }, [token, onUserFetched, id]);
  return null;
}
