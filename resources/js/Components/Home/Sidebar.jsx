import { Link } from "@inertiajs/react";
import React from "react";

export default function Sidebar() {
    return (
        <div className="w-2/12">
            <Link
                href={route("home")}
                className="mb-3 py-5 px-5 rounded-full flex items-center gap-3 text-gray-700 bg-white"
            >
                <i className="bx bx-home"></i>Beranda
            </Link>
            <Link
                href={route("home")}
                className="mb-3 py-5 px-5 rounded-full flex items-center gap-3 text-gray-700 hover:bg-white"
            >
                <i className="bx bx-home"></i>Hashtag
            </Link>
            <Link
                href={route("home")}
                className="mb-3 py-5 px-5 rounded-full flex items-center gap-3 text-gray-700 hover:bg-white "
            >
                <i className="bx bx-home"></i>Foto
            </Link>
        </div>
    );
}
