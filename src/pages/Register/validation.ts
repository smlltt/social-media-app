import * as yup from "yup";

const useValidationSchema = () => {
  return yup
    .object({
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(5).required(),
    })
    .required();
};

export default useValidationSchema;
