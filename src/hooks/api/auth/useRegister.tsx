import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const useRegister = () => {
  //   const [isLoading, setIsLoading] = useState(false);

  //   const register = async (payload: Payload) => {
  //     setIsLoading(true);
  //     try {
  //       const { firstName, lastName, email, password } = payload;

  //       await axios.post(BASE_URL + "/users/register", {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   return { register, isLoading };

  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      await axiosInstance.post("/users/register", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      });
    },
    onSuccess: () => {
      toast.success("Register berhasil");
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message);
    },
  });
};

export default useRegister;
