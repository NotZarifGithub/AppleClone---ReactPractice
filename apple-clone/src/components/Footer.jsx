import React from "react";
import { footerLinks } from "../constats";
const Footer = () => {
    return (
        <footer className="p-5 sm:px-10">
            <div className="screen-max-width">
                <div>
                    <p className="text-gray text-xs font-semibold">
                        More Ways to Shop:{" "}
                        <span className="text-blue cursor-pointer hover:underline">
                            Find a retailer
                        </span>{" "}
                        near you. Or call 1800-80-6419.
                    </p>
                </div>
                <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                    <p className="text-gray text-xs font-semibold">
                    &copy; {new Date().getFullYear()} Apple Inc. All rights reserved
                    </p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={link} className="text-gray text-xs font-semibold">
                                <span className="mx-2 cursor-pointer hover:underline">
                                    {link}
                                </span>
                                {i !== footerLinks.length - 1 && "|"}
                            </p>
                        ))}
                    </div>
                    <div className="flex">
                        <p className="text-gray text-xs font-semibold">Malaysia</p>
                    </div>
                </div>
            </div>
        </footer>

    );
};
export default Footer;