import { useContext } from "react";
import { ProductsContext } from "../pages/dashboard";
import productManagement_icon from "../public/images/productManagement_icon/setting-3.png";
import TableProductsList from "./TableProductsList";
import styles from "../styles/mainDashboard.module.css";
import Pagination from "../components/Pagination";

function MainDashboard() {
  const { dispatch } = useContext(ProductsContext);
  return (
    <main>
      <div className={styles.toolbar}>
        <div>
          <img src={productManagement_icon} alt="" />
          <span>مدیریت کالا</span>
        </div>

        <button
          className={styles.buttonAddproduct}
          onClick={() => dispatch({ type: "ShowAddProductModal" })}
        >
          افزودن محصول
        </button>
      </div>
      <div>
        <TableProductsList />
        <Pagination />
      </div>
    </main>
  );
}

export default MainDashboard;
