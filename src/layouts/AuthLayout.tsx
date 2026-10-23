import { Outlet } from 'react-router'

export default function AuthLayout() {
    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row bg-slate-50 antialiased">

            {/* LEFT: form side */}
            <div className="w-full md:w-[55%] min-h-screen flex items-center justify-center p-6 sm:p-10 md:p-16 bg-slate-50">
                <div className="w-full max-w-md space-y-8 my-auto bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-900/5 p-8 sm:p-10 animate-fade-in">
                    {/* Mobile brand */}
                    <div className="flex md:hidden items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm">S</div>
                        <span className="text-lg font-extrabold tracking-tight text-slate-900">
                            Shop<span className="text-indigo-600">Nest</span>
                        </span>
                    </div>

                    <Outlet />
                </div>
            </div>

            {/* RIGHT: brand / hero side */}
            <div className="hidden md:flex md:w-[45%] relative overflow-hidden flex-col justify-between p-12 lg:p-16 text-white bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900">
                {/* decorative glows */}
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl"></div>
                <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"></div>
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[22px_22px]"></div>

                {/* Brand */}
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-indigo-500 flex items-center justify-center font-extrabold text-lg shadow-lg shadow-indigo-500/40">
                            S
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight">
                            Shop<span className="text-indigo-400">Nest</span>
                        </span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                        Admin Portal
                    </span>
                </div>

                {/* Message */}
                <div className="relative z-10 max-w-md space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                        Store is live &amp; running
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
                        Manage your store <span className="text-indigo-400">smarter</span>, sell faster.
                    </h1>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        Products, orders, customers and admins &mdash; everything you need to run your online shop, in one clean dashboard.
                    </p>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                        {[
                            ["12k+", "Orders"],
                            ["4.9", "Rating"],
                            ["24/7", "Support"],
                        ].map(([value, label]) => (
                            <div key={label} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-3">
                                <div className="text-xl font-bold">{value}</div>
                                <div className="text-[11px] text-slate-400 uppercase tracking-wider">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-6 border-t border-white/10">
                    <div>&copy; 2026 ShopNest</div>
                    <div className="flex gap-4">
                        <a href="#help" className="hover:text-white transition-colors">Help</a>
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
