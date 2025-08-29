'use client'

import React, { useState, useEffect } from "react";

const NavigationBar = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        {
            name: "Real Estate",
            href: "/real_estate",
            submenu: {
                topCountries: [
                    "United States",
                    "Spain",
                    "Italy",
                    "France",
                    "Portugal",
                    "Canada",
                    "United Kingdom",
                    "Greece",
                    "Switzerland",
                    "United Arab Emirates",
                    "Mexico",
                    "South Africa",
                    "Australia",
                    "Germany",
                    "Netherlands",
                    "Japan",
                ],
                topCities: [
                    "Los Angeles",
                    "Marbella",
                    "London",
                    "New York",
                    "Paris",
                    "Miami",
                    "Ibiza",
                    "Beverly Hills",
                    "Cannes",
                    "Mallorca",
                    "Madrid",
                    "Lisbon",
                    "Rome",
                    "Milan",
                    "Nice",
                    "Toronto",
                ],
                topRegions: [
                    "French Riviera",
                    "Costa del Sol",
                    "French and Swiss Alps",
                    "Costa Blanca",
                    "California, USA",
                    "Hamptons, NY, USA",
                    "Florida, USA",
                    "Tuscany",
                    "Algarve",
                    "Greek Islands",
                    "Balearic Islands",
                    "Caribbean",
                    "Dubai",
                    "Amalfi Coast",
                    "Lombardy",
                    "Costa Brava",
                ],
            },
        },
        {
            name: "Cars",
            href: "/cars",
            submenu: {
                popularMakes: [
                    "Bugatti",
                    "Pagani",
                    "Koenigsegg",
                    "Ferrari",
                    "Lamborghini",
                    "Mercedes",
                    "Rolls-Royce",
                    "McLaren",
                    "Brabus",
                    "Porsche",
                    "Aston Martin",
                    "Bentley",
                    "Maybach",
                    "BMW",
                    "Ford",
                    "Audi",
                ],
                popularModels: [
                    "Ferrari LaFerrari",
                    "Bugatti Chiron",
                    "Ferrari F40",
                    "Lamborghini Aventador",
                    "McLaren P1",
                    "Porsche 918",
                    "Ford GT",
                    "Mercedes SLR McLaren",
                    "Pagani Huayra",
                    "Porsche Carrera GT",
                    "Lamborghini Urus",
                    "Lamborghini Murcielago",
                    "Ferrari Enzo",
                    "Lexus LFA",
                    "Brabus G-Class",
                    "Rolls-Royce Cullinan",
                ],
            },
        },
        { name: "Watches", href: "/watches" },
        { name: "Yachts", href: "/yachts" },
        { name: "Jets", href: "/jets" },
        { name: "Motorcycles", href: "/motorcycles" },
        { name: "Helicopters", href: "/helicopters" },
        { name: "Jewelry", href: "/jewelry" },
        { name: "Collectibles", href: "/lifestyle-collectibles" },
        { name: "Rentals", href: "#", isButton: true },
        { name: "Journal", href: "https://www.jamesedition.com/stories" },
    ];

    const handleMouseEnter = (menuName: any) => {
        setActiveSubmenu(menuName);
    };

    const handleMouseLeave = () => {
        setActiveSubmenu(null);
    };

    // Scroll detection effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const LogoIcon = () => (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 0C7.36932 0 2 0.737706 2 0.737706C2 0.737706 2 9.66955 2 16.1362C2 21.6573 4.07286 24.8065 8.19987 27.022L16 31L23.8001 27.022C27.9295 24.8065 30 21.6573 30 16.1362C30 9.66955 30 0.737706 30 0.737706C30 0.737706 24.633 0 16 0ZM14.7015 6.01604C14.2243 6.20747 14.0652 6.46193 14.0652 7.06424V16.0778C14.0652 18.5407 13.0896 19.3018 11.2717 19.7126C9.9756 20.0068 8.05481 19.5539 8.05481 19.5539L7.84191 17.8497L8.16009 17.7423C8.71223 18.7975 9.38135 19.6403 10.4248 19.4068C11.5478 19.1523 11.4542 16.0801 11.4542 16.0801C11.4542 16.0801 11.4542 7.56382 11.4542 7.06657C11.4542 6.46193 11.3115 6.20747 10.8342 6.01838V5.78025H10.8506H14.6898H14.7062V6.01604H14.7015ZM23.5872 19.2387H15.6093V19.0169C16.0866 18.8115 16.2457 18.557 16.2457 17.9687V7.06657C16.2457 6.46193 16.0866 6.20747 15.6093 6.01838V5.78025H23.4141L23.5896 7.81362H23.2246C22.7473 6.6697 22.0127 6.17712 20.7704 6.17712H19.8954C19.1467 6.17712 18.8449 6.43158 18.8449 7.06657V11.8336H20.2931C21.3272 11.8336 21.8372 11.4998 21.9495 10.7364H22.2841V13.4538H21.9495C21.9027 12.6437 21.4231 12.2935 20.2931 12.2935H18.8449V17.824C18.8449 18.1112 18.8777 18.3166 18.9408 18.445C19.0836 18.7158 19.4977 18.8419 20.1995 18.8419H20.995C21.9495 18.8419 22.6046 18.6037 23.1614 18.0481C23.4632 17.747 23.6083 17.5089 23.8305 16.9206L24.1651 17.063L23.5872 19.2387Z"
                fill="currentColor"
            />
        </svg>
    );

    const HamburgerIcon = () => (
        <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 13.0444H20" strokeWidth="1.6" stroke="currentColor" />
            <path d="M0 7.04443H20" strokeWidth="1.6" stroke="currentColor" />
            <path d="M0 1.04443H20" strokeWidth="1.6" stroke="currentColor" />
        </svg>
    );

    const UserIcon = () => (
        <svg viewBox="0 0 14 15" strokeWidth="1.2" className="w-5 h-5">
            <path
                fill="none"
                d="M7 8C8.79493 8 10.25 6.54493 10.25 4.75C10.25 2.95507 8.79493 1.5 7 1.5C5.20507 1.5 3.75 2.95507 3.75 4.75C3.75 6.54493 5.20507 8 7 8Z"
                stroke="currentColor"
            />
            <path
                fill="none"
                d="M13.1801 14.5C12.7602 13.1908 11.9355 12.0488 10.8249 11.2386C9.71416 10.4284 8.37487 9.99182 7.00007 9.99182C5.62526 9.99182 4.28597 10.4284 3.17528 11.2386C2.0646 12.0488 1.23989 13.1908 0.820068 14.5"
                stroke="currentColor"
            />
        </svg>
    );

    const ArrowIcon = () => (
        <svg viewBox="0 0 13 12" className="w-4 h-4 ml-2">
            <path
                d="M0.5 6L11 6"
                strokeWidth="1.6"
                stroke="currentColor"
                fill="none"
            />
            <path
                d="M6 11L11 6L6 1"
                strokeWidth="1.6"
                stroke="currentColor"
                fill="none"
            />
        </svg>
    );

    const renderSubmenu = () => {
        if (activeSubmenu === "Real Estate") {
            const submenu = menuItems.find(
                (item) => item.name === "Real Estate"
            )?.submenu;
            return (
                <div
                    className={`sticky top-0 w-full shadow-lg z-[300] transition-all duration-[250ms] ease-in-out font-['Inter',Arial,sans-serif] ${
                        isScrolled
                            ? "bg-white border-t border-[#eaeaea]"
                            : "bg-black bg-opacity-40 backdrop-blur-sm border-t border-white border-opacity-20"
                    }`}
                    style={{ padding: "0 5vw" }}
                >
                    <div className="max-w-7xl mx-auto py-8">
                        <div className="grid grid-cols-4 gap-8">
                            <div>
                                <h3
                                    className={`font-semibold mb-4 transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    Top Countries
                                </h3>
                                <ul className="space-y-2">
                                    {submenu?.topCountries
                                        ?.slice(0, 8)
                                        .map((country, index) => (
                                            <li key={index}>
                                                <a
                                                    href={`/real_estate/${country
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className={`text-sm transition-all duration-[250ms] ${
                                                        isScrolled
                                                            ? "text-gray-600 hover:text-gray-900"
                                                            : "text-gray-200 hover:text-white"
                                                    }`}
                                                >
                                                    {country}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div>
                                <h3
                                    className={`font-semibold mb-4 transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    Top Cities
                                </h3>
                                <ul className="space-y-2">
                                    {submenu?.topCities
                                        ?.slice(0, 8)
                                        .map((city, index) => (
                                            <li key={index}>
                                                <a
                                                    href={`/real_estate/${city
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className={`text-sm transition-all duration-[250ms] ${
                                                        isScrolled
                                                            ? "text-gray-600 hover:text-gray-900"
                                                            : "text-gray-200 hover:text-white"
                                                    }`}
                                                >
                                                    {city}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div>
                                <h3
                                    className={`font-semibold mb-4 transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    Top Regions
                                </h3>
                                <ul className="space-y-2">
                                    {submenu?.topRegions
                                        ?.slice(0, 8)
                                        .map((region, index) => (
                                            <li key={index}>
                                                <a
                                                    href={`/real_estate/${region
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}`}
                                                    className={`text-sm transition-all duration-[250ms] ${
                                                        isScrolled
                                                            ? "text-gray-600 hover:text-gray-900"
                                                            : "text-gray-200 hover:text-white"
                                                    }`}
                                                >
                                                    {region}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-end">
                                <a
                                    href="/real_estate/all"
                                    className={`inline-flex items-center px-6 py-3 rounded transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "bg-black text-white hover:bg-gray-800"
                                            : "bg-white text-black hover:bg-gray-100"
                                    }`}
                                >
                                    View all homes
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (activeSubmenu === "Cars") {
            const submenu = menuItems.find(
                (item) => item.name === "Cars"
            )?.submenu;
            return (
                <div
                    className={`sticky top-0 w-full shadow-lg z-[300] transition-all duration-[250ms] ease-in-out font-['Inter',Arial,sans-serif] ${
                        isScrolled
                            ? "bg-white border-t border-[#eaeaea]"
                            : "bg-black bg-opacity-40 backdrop-blur-sm border-t border-white border-opacity-20"
                    }`}
                    style={{ padding: "0 5vw" }}
                >
                    <div className="max-w-7xl mx-auto py-8">
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h3
                                    className={`font-semibold mb-4 transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    Popular Makes
                                </h3>
                                <ul className="space-y-2">
                                    {submenu?.popularMakes
                                        ?.slice(0, 8)
                                        .map((make, index) => (
                                            <li key={index}>
                                                <a
                                                    href={`/cars/${make
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "_")}`}
                                                    className={`text-sm transition-all duration-[250ms] ${
                                                        isScrolled
                                                            ? "text-gray-600 hover:text-gray-900"
                                                            : "text-gray-200 hover:text-white"
                                                    }`}
                                                >
                                                    {make}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div>
                                <h3
                                    className={`font-semibold mb-4 transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    Popular Models
                                </h3>
                                <ul className="space-y-2">
                                    {submenu?.popularModels
                                        ?.slice(0, 8)
                                        .map((model, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className={`text-sm transition-all duration-[250ms] ${
                                                        isScrolled
                                                            ? "text-gray-600 hover:text-gray-900"
                                                            : "text-gray-200 hover:text-white"
                                                    }`}
                                                >
                                                    {model}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-end">
                                <a
                                    href="/cars?order=premium"
                                    className={`inline-flex items-center px-6 py-3 rounded transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "bg-black text-white hover:bg-gray-800"
                                            : "bg-white text-black hover:bg-gray-100"
                                    }`}
                                >
                                    View all cars
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="relative">
            {/* Single unified header */}
            <header
                className={`sticky top-0 left-0 right-0 z-[301] transition-all duration-[250ms] ease-in-out font-['Inter',Arial,sans-serif] ${
                    isScrolled ? "bg-white shadow-md" : "bg-transparent"
                } ${!isScrolled ? "-mb-28" : ""}`}
                style={{ padding: "0 5vw" }}
            >
                {/* Main header row with logo and user controls */}
                <div
                    className={`transition-all duration-[250ms] ease-in-out ${
                        isScrolled
                            ? "border-b border-[#eaeaea]"
                            : "border-b border-white border-opacity-20"
                    }`}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between h-16">
                            {/* Mobile menu button */}
                            <button
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                className={`md:hidden p-2 rounded-md transition-all duration-[250ms] ${
                                    isScrolled
                                        ? "text-gray-900 hover:bg-gray-100"
                                        : "text-white hover:bg-white hover:bg-opacity-20"
                                }`}
                                aria-label="Menu"
                            >
                                <HamburgerIcon />
                            </button>

                            {/* Logo */}
                            <a
                                href="/"
                                className="flex items-center"
                                aria-label="JamesEdition"
                            >
                                <div
                                    className={`transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-900"
                                            : "text-white"
                                    }`}
                                >
                                    <LogoIcon />
                                </div>
                            </a>

                            {/* User controls */}
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/professional_seller"
                                    className={`hidden md:inline-block text-sm transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-700 hover:text-gray-900"
                                            : "text-white hover:text-gray-200"
                                    }`}
                                >
                                    Sell With Us
                                </a>
                                <button
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-[250ms] ${
                                        isScrolled
                                            ? "text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400"
                                            : "text-white hover:text-gray-200 border-white border-opacity-40 hover:border-opacity-60"
                                    }`}
                                >
                                    <UserIcon />
                                    <span className="hidden sm:inline text-sm">
                                        Log in
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation menu bar */}
                <div
                    className={`transition-all duration-[250ms] ease-in-out ${
                        isScrolled
                            ? "bg-white"
                            : "bg-black bg-opacity-40 backdrop-blur-sm"
                    }`}
                >
                    <div className="max-w-7xl mx-auto">
                        <nav className="flex items-center justify-center space-x-8 py-3 overflow-x-auto scrollbar-hide">
                            {menuItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative whitespace-nowrap"
                                    onMouseEnter={() =>
                                        handleMouseEnter(item.name)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.isButton ? (
                                        <button
                                            className={`text-sm font-medium transition-all duration-[250ms] px-3 py-2 rounded ${
                                                isScrolled
                                                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                    : "text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-10"
                                            }`}
                                        >
                                            {item.name}
                                        </button>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`text-sm font-medium transition-all duration-[250ms] px-3 py-2 rounded ${
                                                isScrolled
                                                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                    : "text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-10"
                                            }`}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Submenu */}
                {renderSubmenu()}
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-white">
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="text-gray-900">
                            <LogoIcon />
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-md hover:bg-gray-100 text-gray-900"
                        >
                            ✕
                        </button>
                    </div>
                    <nav className="p-4">
                        <ul className="space-y-4">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block text-gray-700 hover:text-gray-900 py-2 text-lg"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/professional_seller"
                                    className="block text-gray-700 hover:text-gray-900 py-2 text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sell With Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}

            {/* Content spacer */}
            <div className="h-20"></div>
        </div>
    );
};

export default NavigationBar;