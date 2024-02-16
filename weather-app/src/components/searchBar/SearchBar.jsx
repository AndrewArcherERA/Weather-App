import styles from "./searchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <input
                type='text'
                placeholder='Search by City...'
                className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search Icon</button>
        </div>
    );
}
