import Button from "../../components/UI/Button";
import styles from "./Login.module.css";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  console.log( formik.values);
  return (
    <div className={styles["form-container"]}>
      <div className={styles.heading}>
        <h2> Login to FoodCity</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.form}>
          <div className={styles["input-item"]}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles["input-item"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles["checkbox-item"]}>
            <div>
              <input type="checkbox" id="remember_me" name="vehicle1" />
              <label htmlFor="remember_me"> Rembember Me</label>
            </div>
            <a href="/">Forgot Password</a>
          </div>
          <div className={styles.button}>
            <Button type="submit">LOGIN</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
