import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50 flex antialiased text-slate-900">
            <Sidebar />

            <div className="flex-1 pl-64 flex flex-col min-h-screen">
                <main className="flex-1 p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}
