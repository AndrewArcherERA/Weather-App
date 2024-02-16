import "./HomePage.css";
import SearchBar from "../searchBar/SearchBar.jsx";
import SavedCity from "../savedCity/SavedCity.jsx";

export default function Homepage() {
    return (
        <div className='homePageContainer'>
            <img id='homeBgImg' src='' alt='' />
            <SearchBar />
            <SavedCity />
        </div>
    );
}
