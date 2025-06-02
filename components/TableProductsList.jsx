import { useContext } from "react";
import { ProductsContext } from "../pages/dashboard";
import styles from "../styles/TableProductsList.module.css";
import TableProductItem from "../components/TableProductItem";

function TableProductsList() {
  const { state } = useContext(ProductsContext);
  const search = state.searchTerm;

  //  فقط محصولاتی که با مقدار سرچ وارد شده یکی هستن نمایش داده می‌شن.
  const filteredProducts = state.products.filter((product) =>
    [product.name, product.id, product.price, product.quantity]
      .map((val) => String(val).toLowerCase())
      .some((field) => field.includes(search))
  );

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.thead_tr}>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paginatedProducts.map((product) => (
          <TableProductItem key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default TableProductsList;
