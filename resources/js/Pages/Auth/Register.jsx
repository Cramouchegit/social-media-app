import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <a
                href={route("google.redirect")}
                className="py-3 px-4 rounded-lg border flex items-center justify-center gap-2 font-semibold"
            >
                <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="w-7"
                />
                Register With Google
            </a>

            <div className="flex items-center gap-2 my-10">
                <hr className="w-full" />
                <span>OR</span>
                <hr className="w-full" />
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
