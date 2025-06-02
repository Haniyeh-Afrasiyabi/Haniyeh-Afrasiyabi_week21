// export default function Home() {
//   return <h1>Home</h1>;
// }

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../schema/signUp";
import getInputs from "../constants/input";
import icon from "../public/Union.png";
import styles from "../styles/signUp&Login.module.css";
import { signUp } from "../services/config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const inputs = getInputs(register);

  const onSubmit = async (data) => {
    const payload = {
      username: data.userName.toLowerCase(),
      password: data.password,
    };
    console.log(payload);

    try {
      await signUp(payload);

      toast.success("ثبت‌نام با موفقیت انجام شد!");

   
      router.push("/login")
    } catch (error) {
      const status = error.response?.status;
      console.log("خطای کامل:", error.response);

      if (status === 409) {
        toast.error("این نام کاربری قبلاً ثبت شده است");
      } else if (status === 400) {
        toast.error("اطلاعات وارد شده معتبر نیست");
      } else {
        toast.error("مشکلی در ثبت‌نام رخ داده است");
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.h1}>بوت کمپ بوتواستارت</h1>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
          <h3 className={styles.h3}>فرم ثبت نام</h3>
          {inputs.map((input, index) => (
            <div key={index} className={styles.container_input}>
              <input
                type={input.type}
                className={styles.input}
                placeholder={input.placeholder}
                {...input.register}
              />
              {errors[input.name] && <span>{errors[input.name]?.message}</span>}
            </div>
          ))}

          <button className={styles.button}>ثبت نام</button>
          <span className={styles.span}>
            حساب
            {/* <NavLink to="/login">حساب کاربری دارید؟</NavLink> */}
          </span>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
