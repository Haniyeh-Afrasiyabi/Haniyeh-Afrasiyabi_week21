import { createContext, useReducer, useEffect } from "react";
import { getAllProducts } from "../services/config";
import HeaderDashboard from "../components/HeaderDashboard";
import MainDashboard from "../components/MainDashboard";
// import ModalDeleteSingle from "./ModalDeleteSingle";
// import ModalAddProduct from "./ModalAddProduct";
// import ModalEditProduct from "./ModalEditProduct";
import styles from "../styles/Dashboard.module.css";

export const ProductsContext = createContext();

const initialState = {
  products: [],
  modalDeleteSingle: { show: false, id: null },
  modalAddProduct: { show: false, data: null },
  modalEditProduct: { show: false, data: null },
  searchTerm: "",
  currentPage: 1,
  itemsPerPage: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "ShowDeleteSingleModal":
      return {
        ...state,
        modalDeleteSingle: { show: true, id: action.payload },
      };
    case "CloseModalDeleteSingle":
      return {
        ...state,
        modalDeleteSingle: { show: false, id: null },
      };
    case "DeleteProduct":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "ShowAddProductModal":
      return {
        ...state,
        modalAddProduct: { show: true, data: null },
      };
    case "CloseAddProductModal":
      return {
        ...state,
        modalAddProduct: { show: false, data: null },
      };
    case "AddProduct":
      return { ...state, products: [action.payload, ...state.products] };
    case "ShowEditProductModal":
      return {
        ...state,
        modalEditProduct: { show: true, data: action.payload },
      };
    case "editProduct":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == action.payload.id ? action.payload : product
        ),
      };
    case "CloseEditProductModal":
      return {
        ...state,
        modalEditProduct: { show: false, data: null },
      };
    case "SetSearchTerm":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SetCurrentPage":
      return {
        ...state,
        currentPage: action.payload,
      };
  }
};

function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await getAllProducts();
        // console.log(result);
        dispatch({ type: "products", payload: result.data });
      } catch (error) {
        console.error("خطا در گرفتن لیست محصولات:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <HeaderDashboard />
        <div className={styles.scrollableContent}>
          <MainDashboard />
        </div>
        <ModalAddProduct />
        <ModalEditProduct />
        <ModalDeleteSingle />
      </div>
    </ProductsContext.Provider>
  );
}

export default Dashboard;
