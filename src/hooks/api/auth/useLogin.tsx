import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/user";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Payload {
  login: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post<User>("/users/login", {
        login: payload.login,
        password: payload.password,
      });
      return data;
    },
    onSuccess: (data) => {
      dispatch(loginAction(data));
      localStorage.setItem("tweet-storage", JSON.stringify(data));
      toast.success("Login berhasil");
      router.push("/");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useLogin;
