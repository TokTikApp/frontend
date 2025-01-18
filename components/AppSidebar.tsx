import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {CompassIcon, HomeIcon, PlusSquareIcon, UserIcon, UserSearchIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {ThemeToggle} from "@/components/ThemeToggle";

export function AppSidebar() {

    return (
        <Sidebar side={"right"}>
            <SidebarHeader>
                <Image src={"/logo.png"} alt={"Logo"} width={128} height={128} />
            </SidebarHeader>
            <SidebarContent className={"bg-primary text-secondary"}>
                <div className={"flex flex-row items-center hover:bg-gray-500"}>
                    <HomeIcon className={"h-8 w-8"}/> For You
                </div>
                <div className={"flex flex-row items-center hover:bg-gray-500"}>
                    <CompassIcon className={"h-8 w-8"}/> Explore
                </div>
                <div className={"flex flex-row items-center hover:bg-gray-500"}>
                    <UserSearchIcon className={"h-8 w-8"}/> Following
                </div>
                <div className={"flex flex-row items-center hover:bg-gray-500"}>
                    <PlusSquareIcon className={"h-8 w-8"}/> Upload
                </div>
                <div className={"flex flex-row items-center hover:bg-gray-500"}>
                    <UserIcon className={"h-8 w-8"}/> Profile
                </div>
                <Button className={"bg-red-500 hover:bg-red-500 text-md mt-5"}>Log In</Button>
            </SidebarContent>
            <SidebarFooter className={"bg-primary text-muted-foreground flex flex-col text-sm"}>
                <ThemeToggle />
                <Link href={"#"}>
                    <p>Company</p>
                </Link>
                <Link href={"#"}>
                    <p>Program</p>
                </Link>
                <Link href={"#"}>
                    <p>Terms & Policies</p>
                </Link>
                <p>&copy; 2025 TokTik</p>
            </SidebarFooter>
        </Sidebar>
    )
}