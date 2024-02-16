import styles from "./HomePage.module.css";
import SearchBar from "../searchBar/SearchBar.jsx";
import { useEffect } from "react";
import axios from "axios";

export default function Homepage() {
    useEffect(() => {
        axios
            .get(
                "https://api.unsplash.com/search/photos/?san-fransisco/?client_id=k6kZxCBgIFiypQSUZ3WICAniq3lYxUisfSyEGJDrubo",
                {
                    headers: {
                        "Accept-Version": "v1",
                    },
                }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data.errors));
    }, []);

    return (
        <div className={styles.homePageContainer}>
            <img id='homeBgImg' src='' alt='' />
            <SearchBar />
            <div className={styles.bgImage}>
                <img src='' alt='' />
            </div>
        </div>
    );
}
