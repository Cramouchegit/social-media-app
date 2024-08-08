import { Link } from "@inertiajs/react";

export default function ApplicationLogo(props) {
    return (
        <Link href={route("home")} className="flex items-center gap-3">
            <img src="logo-app-social-media.png" alt="" className="w-8" />
            <span className="text-xl font-bold">Social Media</span>
        </Link>
    );
}
