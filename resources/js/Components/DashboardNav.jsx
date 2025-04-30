import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";

export function DashboardNav() {
    const { url } = usePage();

    const navItems = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: "LayoutDashboard",
        },
        {
            title: "Users",
            href: "/users",
            icon: "Users",
        },
        {
            title: "Products",
            href: "/products",
            icon: "Package",
        },
        {
            title: "Settings",
            href: "/settings",
            icon: "Settings",
        },
    ];

    return (
        <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium rounded-md",
                        url.startsWith(item.href)
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                >
                    <span className="mr-3">{item.title}</span>
                </Link>
            ))}
        </nav>
    );
}
