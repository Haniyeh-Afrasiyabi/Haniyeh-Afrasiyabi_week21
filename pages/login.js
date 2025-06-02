import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/login";
import getInputs from "../constants/input";
import Image from "next/image";
import icon from "../public/images/Union.png";
import styles from "../styles/SignUp&Login.module.css";
import { login } from "../services/config";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const inputs = getInputs(register, "login");

  const onSubmit = async (data) => {
    const payload = {
      username: data.userName.toLowerCase(),
      password: data.password,
    };
    console.log(payload);

    try {
      const result = await login(payload);

      toast.success("ثبت‌نام با موفقیت انجام شد!");

      localStorage.setItem("token", result.token);
      localStorage.setItem("username", payload.username);
      router.push("/dashboard");
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
            <Image src={icon} alt="" />
          </div>
          <h3 className={styles.h3}> فرم ورود</h3>
          {inputs.map((input, index) => (
            <div key={index} className={styles.container_input}>
              <input
                type={input.type}
                className={styles.input}
                placeholder={input.placeholder}
                {...input.register}
              />
              {errors[input.name] && <span className={styles.span}>{errors[input.name]?.message}</span>}
            </div>
          ))}

          <button className={styles.button}> ورود</button>
          <span className={styles.span}>
            <Link href="/">ایجاد حساب کاربری! </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Login;
