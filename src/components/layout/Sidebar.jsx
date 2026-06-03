"use client";
import Link from "next/link";

import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Boxes,
    Tags,
    Users,
    Star,
    Ticket,
    LogOut,
    ChevronLeft,
    Stethoscope,
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        name: "Orders",
        icon: ShoppingCart,
        badge: 12,
        href: "/orders",
    },
    {
        name: "Products",
        icon: Package,
        href: "/products",
    },
    {
        name: "Inventory",
        icon: Boxes,
        href: "/inventory",
    },
    {
        name: "Categories",
        icon: Tags,
        href: "/categories",
    },
    {
        name: "Customers",
        icon: Users,
        href: "/customers",
    },
    {
        name: "Reviews",
        icon: Star,
        href: "/reviews",
    },
    {
        name: "Coupons",
        icon: Ticket,
        href: "/coupons",
    },
];

export default function Sidebar() {
    return (
        <aside className="w-[280px] h-screen bg-white border-r border-gray-200 flex flex-col">
            {/* Logo */}
            <div className="h-16 border-b border-gray-200 px-5 flex items-center gap-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    <Stethoscope size={21} />
                </div>

                <div>
                    <h2 className="text-base font-bold text-slate-900">
                        Surgical World
                    </h2>

                    <p className="text-gray-500 uppercase tracking-wide text-xs">
                        Admin Panel
                    </p>
                </div>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="w-full flex items-center justify-between px-1 py-2 rounded-2xl transition-all text-slate-800 hover:bg-blue-100 hover:text-blue-600"
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon size={20} />

                                        <span className="font-semibold text-sm">
                                            {item.name}
                                        </span>
                                    </div>

                                    {item.badge && (
                                        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-2 bg-white flex-shrink-0">
                <button className="w-full flex items-center gap-4 text-slate-500 hover:text-red-500 hover:bg-red-100 rounded-xl py-3 pl-3 outline-none focus:outline-none focus:ring-0">
                    <LogOut size={20} />

                    <span className="font-bold text-sm">
                        Logout
                    </span>
                </button>

                <button className="w-full mt-3 flex items-center justify-center gap-2 text-sm text-gray-500 hover:bg-gray-100 rounded-xl py-2 outline-none focus:outline-none focus:ring-0">
                    <ChevronLeft size={16} />
                    Collapse
                </button>
            </div>
        </aside>
    );
}