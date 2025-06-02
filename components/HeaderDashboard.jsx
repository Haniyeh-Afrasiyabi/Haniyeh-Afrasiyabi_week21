import { useEffect, useState } from "react";
import styles from "../styles/HeaderDashboard.module.css";
import searchIcon from "../public/images/search_icon/search-normal.png";
import profileAvatar from "../public/images/profileAvatar/49a9d4a2187883bfc87aeae832ffd1ccba1e9061.jpg";
import SearchBar from "../components/SearchBar";
import Image from "next/image";

function HeaderDashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.searchBox}>
        <Image className={styles.searchIcon} src={searchIcon} alt="" />
        <SearchBar />
      </div>

      <div className={styles.profileInfo}>
        <Image
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
