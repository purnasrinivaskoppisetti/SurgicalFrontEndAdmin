    "use client";

    import { useState, useRef, useEffect } from "react";
    import {
    Search,
    Moon,
    MessageSquare,
    Bell,
    ChevronDown,
    } from "lucide-react";

    export default function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener(
            "mousedown",
            handleClickOutside
        );
        };
    }, []);

    return (
        <header className="bg-white border-b border-gray-200 px-6 py-2">
        <div className="flex items-center justify-between">
            {/* Left Section */}
            <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
                Admin / Dashboard
            </p>

            <h1 className="text-lg font-bold text-gray-900 mt-1">
                Dashboard
            </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative hidden md:block">
                <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                type="text"
                placeholder="Search orders, customers, products..."
                className="w-[350px] pl-11 pr-3 py-2 bg-gray-100 text-sm rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Icons */}
            {/* <button className="text-gray-800 hover:text-black">
                <Moon size={16} />
            </button>

            <button className="relative text-gray-800 hover:text-black">
                <MessageSquare size={16} />
            </button>

            <button className="relative text-gray-800 hover:text-black">
                <Bell size={16} />
                <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                3
                </span>
            </button> */}

            {/* User Profile */}
            <div
                ref={dropdownRef}
                className="relative"
            >
                <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 cursor-pointer"
                >
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex text-xs items-center justify-center font-semibold">
                    DA
                </div>

                <div className="hidden md:block">
                    <h3 className="font-semibold text-sm text-gray-900">
                    Dr. Aarav Mehta
                    </h3>

                    <p className="text-xs text-gray-500">
                    Super Admin
                    </p>
                </div>

                <ChevronDown
                    size={14}
                    className={`text-gray-500 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                    }`}
                />
                </button>

                {/* Dropdown */}
                {open && (
                <div className="absolute right-0 top-10 w-58 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                    <div className="px-3 py-3 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">
                        admin@surgicalworld.in
                    </p>
                    </div>

                    <button className="w-full text-left px-3 py-2 text-gray-800 text-sm hover:bg-gray-50 transition">
                    Settings
                    </button>

                    <button className="w-full text-left px-3 py-1 text-gray-800 text-sm hover:bg-gray-50 transition">
                    Manage team
                    </button>

                    <div className="border-t border-gray-200">
                    <button className="w-full text-left px-3 py-3 text-sm text-red-500 hover:bg-red-50 transition">
                        Sign out
                    </button>
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>
        </header>
    );
    }