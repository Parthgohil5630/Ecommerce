import { useNavigate } from "react-router";
import { allRoutes } from "../../router/routes";

const stats = [
    { label: "Total Admins", value: "04", note: "all active", tag: "LIVE", tagStyle: "bg-emerald-50 text-emerald-600", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
    { label: "API Uptime", value: "99.98%", note: "last 30 days", tag: "GOOD", tagStyle: "bg-indigo-50 text-indigo-600", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
    { label: "Security Alerts", value: "0", note: "no issues found", tag: "SAFE", tagStyle: "bg-amber-50 text-amber-600", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
];

export default function DashboardPage() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('adminToken');
        navigate(allRoutes.login, { replace: true });
    };

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Welcome banner */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white p-8 shadow-xl shadow-slate-900/10">
                <div className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"></div>
                <div className="absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl"></div>

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Dashboard</p>
                        <h1 className="text-3xl font-extrabold tracking-tight mt-1">Welcome back, Admin 👋</h1>
                        <p className="text-sm text-slate-300 mt-2 max-w-lg">
                            Here&apos;s what&apos;s happening with your store today. Everything is running smoothly.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(`${allRoutes.dashboard}/${allRoutes.add_admin}`)}
                            className="px-4 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/30 transition-all cursor-pointer focus:outline-none"
                        >
                            + Add Admin
                        </button>
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer focus:outline-none"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="bg-white p-5 border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                                </svg>
                            </div>
                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${s.tagStyle}`}>{s.tag}</span>
                        </div>
                        <div className="mt-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">{s.label}</div>
                        <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold text-slate-900">{s.value}</span>
                            <span className="text-xs text-slate-400">{s.note}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder area */}
            <div className="border-2 border-dashed border-slate-200 rounded-3xl h-80 bg-white flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-3">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                </div>
                <h3 className="text-sm font-bold text-slate-800">Your workspace</h3>
                <p className="text-xs text-slate-400 max-w-sm mt-1">
                    Use the sidebar to add admins, manage products and orders as you build more pages.
                </p>
            </div>
        </div>
    );
}
