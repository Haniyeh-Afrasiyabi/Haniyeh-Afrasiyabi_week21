import styles from "../styles/HeaderDashboard.module.css";
import searchIcon from "../public/images/search_icon/search-normal.png";
import profileAvatar from "../public/images/profileAvatar/49a9d4a2187883bfc87aeae832ffd1ccba1e9061.jpg";
import SearchBar from "../components/SearchBar";

function HeaderDashboard() {
  const username = localStorage.getItem("username");
  return (
    <header className={styles.header}>
      <div className={styles.searchBox}>
        <img src={searchIcon} alt="" />
        <SearchBar />
      </div>

      <div className={styles.profileInfo}>
        <img
          className={styles.profileAvatar}
          src={profileAvatar}
          alt="avatar"
        />
        <div className={styles.profileText}>
          <p className={styles.profileName}> {username}</p>
          <span className={styles.profileRole}>مدیر</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderDashboard;
