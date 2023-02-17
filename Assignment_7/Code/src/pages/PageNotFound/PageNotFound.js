import { useRouteError } from "react-router-dom";
import styles from './PageNotFound.module.css';

const PageNotFound = () =>{
    const error = useRouteError();

    return (
        <div className={styles.error}>
            <h1> Oops! Something Went Wrong !!</h1>
            <h3>{error.status} : Page {error.statusText}</h3>
        </div>
    )
}

export default PageNotFound;