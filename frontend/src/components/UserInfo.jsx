import { useEffect } from "react";
import axios from "axios";

const UserInfo = ({ token, onUserFetched }) => {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        onUserFetched(res.data.username);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) fetchProfile();
  }, [token, onUserFetched]);
  return null;
};

export default UserInfo;
