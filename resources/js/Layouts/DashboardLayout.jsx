import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import { DashboardNav } from "@/Components/DashboardNav";

export default function DashboardLayout({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden fixed top-4 left-4 z-50"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                        <DashboardNav />
                    </ScrollArea>
                </SheetContent>
            </Sheet>

            {/* Desktop sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <Link href="/dashboard">
                            <h1 className="text-xl font-bold">
                                Admin Dashboard
                            </h1>
                        </Link>
                    </div>
                    <div className="mt-5 flex-grow flex flex-col">
                        <DashboardNav />
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="md:pl-64">
                <div className="sticky top-0 z-10 bg-white shadow-sm">
                    <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {header}
                        </h2>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-gray-600">
                                {user.name}
                            </span>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                                Log Out
                            </Link>
                        </div>
                    </div>
                </div>

                <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
        </div>
    );
}
