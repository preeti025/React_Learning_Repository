import { useRouteError } from "react-router-dom";
import styles from './PageNotFound.module.css';
import error from '../../Assets/error.png';

const PageNotFound = () =>{
    // const error = useRouteError();

    return (
        <div className={styles.error}>
            <img src = {error} alt= 'Page Not Found...'/>
        </div>
    )
}

export default PageNotFound;