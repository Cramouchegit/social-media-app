import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import TextInput from "../TextInput";

export default function Navbar({ auth }) {
    return (
        <nav className="bg-white py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <form action="" className="w-5/12">
                        <div className="relative">
                            <i className="bx bx-search absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2"></i>
                            <TextInput
                                placeholder="Cari Postingan"
                                className="ps-10 w-full"
                            />
                        </div>
                    </form>
                    <div className="flex items-center gap-3"></div>
                    <p className="font-semibold">{auth.user.name}</p>
                    <img
                        src={`https://ui-avatars.com/api/?name=${auth.user.name}`}
                        alt=""
                        className="rounded-full w-9 h-9"
                    />
                </div>
            </div>
        </nav>
    );
}
