import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

export default function NavbarP({href1, href2, link1, link2}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            name: {link1},
            href: {href1}
        },
        {
            name: {link2},
            href: {href2}
        }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gradient-to-l from-[#673ab7] from-0% to-[#000000] to-60%">
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-white"/>
                <NavbarBrand>
                    <p className="title font-bold text-[30px] text-[#fff]">
                        COMPONENTS
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href={href1} className="text-[20px] text-[#fff] hover:text-[#ffffff70] cursor-pointer">
                        {link1}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={href2} className="text-[20px] text-[#fff] hover:text-[#ffffff70] cursor-pointer">
                        {link2}
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-[#000]">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full text-[#fff] hover:text-[#ffffff70] cursor-pointer" href={item.href} size="lg">
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}