import { useContext } from "react";
import { ProductsContext } from "../pages/dashboard";
import edit_icon from "../public/images/edit_trash_icon/edit.png";
import trash_icon from "../public/images/edit_trash_icon/trash.png";
import { formatPriceText } from "../format/format";
import styles from "../styles/TableProductItem.module.css";
import Image from "next/image";

function TableProductItem({ product }) {
  const { dispatch } = useContext(ProductsContext);
  console.log(dispatch);
  console.log(typeof product.price, product.price);
  console.log(typeof product.quantity, product.quantity);
  return (
    <tr className={styles.tr_productItem} key={product.id}>
      <td>{product.name}</td>
      <td>{Number(product.quantity).toLocaleString("fa-IR")}</td>
      <td>{formatPriceText(product.price)}</td>
      <td>{product.id}</td>
      <td>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: "ShowEditProductModal", payload: product })
          }
        >
          <Image src={edit_icon} alt="ویرایش" />
        </button>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: "ShowDeleteSingleModal", payload: product.id })
          }
        >
          <Image src={trash_icon} alt="" />
        </button>
      </td>
    </tr>
  );
}

export default TableProductItem;
