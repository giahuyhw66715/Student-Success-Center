import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Image,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/react";
import { v4 } from "uuid";
import { useLocation } from "react-router-dom";
import {
    Bell,
    BookOpen,
    CircleUserRound,
    FileText,
    FileUser,
    Menu,
    Upload,
    UserRound,
} from "lucide-react";
import Icon from "../components/Icon";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const menuItems = [
    {
        label: "Việc làm",
        href: "/viec-lam",
    },
    {
        label: "CV cá nhân",
        href: "cv",
        children: [
            {
                label: "Tạo cv, portfolio",
                href: "/cv/tao-cv",
                icon: FileUser,
            },
            {
                label: "Tải cv, portfolio",
                href: "#",
                icon: Upload,
            },
            {
                label: "Quản lý cv, portfolio",
                href: "#",
                icon: FileUser,
            },
            {
                label: "Tạo cover letter",
                href: "#",
                icon: FileText,
            },
            {
                label: "Cá nhân hóa đề xuất công việc",
                href: "#",
                icon: CircleUserRound,
            },
            {
                label: "Trắc nghiệm tính cách MBTI",
                href: "/cv/trac-nghiem-mbti",
                icon: Bell,
            },
            {
                label: "Hướng dẫn viết CV",
                href: "#",
                icon: BookOpen,
            },
        ],
    },
    {
        label: "Doanh nghiệp",
        href: "/doanh-nghiep",
    },
    {
        label: "Cẩm nang",
        href: "#",
    },
    {
        label: "Tin tức",
        href: "#",
    },
    {
        label: "Liên hệ",
        href: "#",
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const iconClassName = "text-primary cursor-pointer w-5 h-5";
    const itemClassName = (condition: boolean) => {
        return `${
            condition
                ? "text-secondary border-2 px-4 py-2 border-secondary rounded-full"
                : "text-primary border-b-2 border-transparent hover:border-primary transition-all"
        } font-medium cursor-pointer`;
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="overflow-hidden">
                    <Link href="/" className="font-bold border-none">
                        <Image
                            src="https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507491/logo_wkfjqs.png"
                            alt="Logo"
                            width={100}
                            className="object-cover"
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem
                        key={v4()}
                        isActive={location.pathname === `${item.href}`}
                    >
                        {item.children ? (
                            <Dropdown>
                                <DropdownTrigger
                                    className={itemClassName(
                                        location.pathname.startsWith(
                                            `/${item.href}`
                                        )
                                    )}
                                >
                                    {item.label}
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="CV Links"
                                    className="p-5 min-w-[350px]"
                                    classNames={{
                                        list: "gap-2",
                                    }}
                                >
                                    {item.children.map((child) => (
                                        <DropdownItem
                                            key={v4()}
                                            href={child.href}
                                            startContent={
                                                <Icon
                                                    icon={child.icon}
                                                    className="text-primary group-hover:text-white transition-colors"
                                                />
                                            }
                                            color="primary"
                                            className="bg-[#f2f2f2] text-primary group"
                                        >
                                            <span className="font-medium">
                                                {child.label}
                                            </span>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Link
                                className={`${
                                    location.pathname === `${item.href}`
                                        ? "text-secondary border-2 px-4 py-2 border-secondary rounded-full"
                                        : "text-primary border-b-2 border-transparent hover:border-primary transition-all "
                                } font-medium`}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="items-center">
                <NavbarItem className="relative">
                    <Dropdown>
                        <DropdownTrigger>
                            <div>
                                <div className="w-2 h-2 rounded-full bg-secondary absolute top-0 left-0 border-2 border-white"></div>
                                <Bell
                                    fill="currentColor"
                                    className={iconClassName}
                                />
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant="faded"
                            aria-label="Dropdown notification"
                            className="max-w-80"
                        >
                            <DropdownSection
                                title="Notifications"
                                classNames={{
                                    heading:
                                        "text-lg font-semibold text-primary",
                                }}
                            >
                                <DropdownItem
                                    key={v4()}
                                    startContent={
                                        <UserRound className={iconClassName} />
                                    }
                                >
                                    Nhà tuyển dụng đã xem hồ sơ của bạn và sẽ
                                    phản hồi trong thời gian sớm nhất
                                </DropdownItem>
                                <DropdownItem
                                    key={v4()}
                                    startContent={
                                        <UserRound className={iconClassName} />
                                    }
                                >
                                    Bạn đã tạo CV thành công
                                </DropdownItem>
                                <DropdownItem
                                    key={v4()}
                                    startContent={
                                        <UserRound className={iconClassName} />
                                    }
                                >
                                    Chào mừng bạn vừa tạo tài khoản. Bắt đầu tìm
                                    công việc ngay nào!
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
                <NavbarItem>
                    <Menu className={iconClassName} />
                </NavbarItem>
                <SignedOut>
                    <Link href="/sign-in">
                        <CircleUserRound className={iconClassName} />
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
