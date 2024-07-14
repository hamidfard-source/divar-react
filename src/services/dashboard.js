import axios from "axios";
import api from "configs/api";
import toast from "react-hot-toast";
import { getCookie } from "utils/cookie";

const token = getCookie("accessToken");
const createPost = async (data) => {
  await axios
    .post(`${import.meta.env.VITE_BASE_URL}/post/create`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => toast.success(res.data.message))
    .catch((error) => toast.error("ارسال به مشکل خورد "));
};
// Get =>(/my)
const getMyPosts = () => api.get("/post/my");
const getAllPosts = () => api.get();

const deleteMyPost = (id) => api.delete(`/post/delete/${id}`);

export { createPost, getMyPosts, deleteMyPost, getAllPosts };
