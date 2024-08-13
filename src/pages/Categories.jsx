import "../components/ProudOf/ProudOf.module.scss";
import CategoriesHeader from "../components/CategoriesHeader/CategoriesHeader";
import { Outlet } from "react-router";

function Categories() {
  return (
    <>    
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;