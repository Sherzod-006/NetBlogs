import axios from "axios";

const UserInfo = ({ id }) => {
  const conf = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${id}`);
      if (res.status === 200) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return conf(id);
};

export default UserInfo;
