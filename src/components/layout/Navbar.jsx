import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Logo from "../../assets/logo-light.png";
import Button from "../common/Button";

export default function Navbar() {
    const [state, setState] = useState(false);
    const location = useLocation(); // Get the current location/path

    // Check if the current route matches the link for each section
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white border-b border-outline w-full md:static font-base text-text-body">
            <div className="items-center px-4 mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <img src={Logo} alt="FindVaidya Logo" className="h-12" />
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-primary-base hover:text-primary-dark"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}
                >
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {/* About Link */}
                        <li>
                            <Link
                                to="/about"
                                className={`${isActive("/about")
                                    ? "text-primary-base font-bold cursor-default"
                                    : "hover:text-primary-dark"
                                    }`}
                                style={isActive("/about") ? { pointerEvents: "none" } : {}}
                                onClick={() => setState(false)}
                            >
                                About
                            </Link>
                        </li>

                        {/* Contact Link */}
                        <li>
                            <Link
                                to="/contact"
                                className={`${isActive("/contact")
                                    ? "text-primary-base font-bold cursor-default"
                                    : "hover:text-primary-dark"
                                    }`}
                                style={isActive("/contact") ? { pointerEvents: "none" } : {}}
                                onClick={() => setState(false)}
                            >
                                Contact
                            </Link>
                        </li>

                        {/* Register Link */}
                        <li className="mb-4 md:mb-0">
                            <Button to="/register" labelName="List your practice for Free" isActive={isActive("/register")} onClick={() => setState(false)} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
