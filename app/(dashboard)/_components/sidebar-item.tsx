"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);

    // Ensure the component is mounted before interacting with router
    useEffect(() => {
        setMounted(true);
    }, []);

    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const onClick = () => {
        if (mounted) {
            router.push(href); // Only push if mounted
        }
    };

    return (
        <div>
            <button
                onClick={onClick}
                type="button"
                className={cn(
                    "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 w-full transition-all hover:text-slate-600 hover:bg-slate-300/20",
                    isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
                )}  // Added w-full here for full width
            >
                <div className="flex items-center gap-x-2 py-4 w-full">  {/* Ensure this container takes full width too */}
                    <Icon
                        size={22}
                        className={cn("text-slate-500", isActive && "text-sky-700")}
                    />
                    <span>{label}</span>
                </div>
                <div 
                className={cn(
                "ml-auto w-1 h-14 bg-transparent opacity-0 transition-all duration-300 z-10",  // Added z-index
                 isActive && "opacity-100 bg-sky-700"
                )}
                />

            </button>
        </div>
    );
};
