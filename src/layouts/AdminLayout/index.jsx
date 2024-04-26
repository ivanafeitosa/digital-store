import HeaderAdmin from "../../components/HeaderAdmin";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="h-screen flex">
            <HeaderAdmin />
            <div className="p-6 flex-1 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;