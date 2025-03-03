import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

export const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string()
    .min(6)
    .minUppercase(1)
    .minNumbers(1)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("Confirm password is required"),
});
