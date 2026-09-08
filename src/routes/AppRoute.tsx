import { Route, Routes } from "react-router-dom";
import Dashboard from "../features/dashboard/page/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import OrderManagment from "../features/order/page/OrderManagment";
import AddProduct from "../features/addProduct/page/AddProduct";
import Categories from "../features/categories/page/Categories";
import Customers from "../features/customers/page/Customers";
import LoginPage from "../features/auth/page/LoginPage";
import NotFound from "../features/notFound/page/NotFound";
import Profile from "../features/profiles/page/Profile";

export default function AppRoute() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/order" element={<OrderManagment />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/addProduct" element={<AddProduct />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
