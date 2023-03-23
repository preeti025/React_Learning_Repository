import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import error from "../../Assets/error.png";

const PageNotFound = () => {
  // const error = useRouteError();
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate('/');
  }

  return (
    <div>
      <div className={styles.error}>
        <img src={error} alt="Page Not Found..." />
      </div>
      <div className= {styles.btn}>
        <button className={styles.button} onClick= {backButtonHandler}>BACK TO HOMEPAGE</button>
      </div>
    </div>
  );
};

export default PageNotFound;
