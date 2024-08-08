import Navbar from "@/Components/Home/Navbar";
import Post from "@/Components/Home/Post";
import Sidebar from "@/Components/Home/Sidebar";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";
// import { preview } from "vite";

export default function Home({ auth, posts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        content: "",
        images: [],
    });
    const [imagepreviews, setImagePreviews] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const files = e.target.files;
        const previews = [];
        const images = [];

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                previews.push(reader.result);
                images.push(file);

                if (previews.length === files.length) {
                    setImagePreviews(previews);
                    setData("images", images);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("content", data.content);
        data.images.forEach((image, idx) => {
            formData.append(`images.${idx}`, image);
        });

        post(route("post.store"), {
            data: formData,
            onSuccess: () => {
                reset();
                setImagePreviews([]);
                fileInputRef.current.value = "";
            },
            forceFormData: true,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Beranda" />

            <Navbar auth={auth} />

            <section className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex gap-10">
                        {/* Sidebar */}
                        <Sidebar />

                        {/* Post */}
                        <div className="w-7/12">
                            <div className="bg-white rounded-xl p-5 mb-5">
                                <div className="flex gap-5">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${auth.user.name}`}
                                        alt=""
                                        className="rounded-full w-10 h-10"
                                    />
                                    <div className="w-full ">
                                        <form onSubmit={submit}>
                                            <input
                                                type="file"
                                                id="upload"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleImageChange}
                                                multiple
                                            />
                                            <textarea
                                                onChange={(e) =>
                                                    setData(
                                                        "content",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Apa Yang Lagi Trend Sekarang?"
                                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                            ></textarea>

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-5">
                                                    <label
                                                        htmlFor="upload"
                                                        className="border-blue-500 bg-gray-100 rounded-full p-4 w-10 h-10 flex items-center justify-center"
                                                    >
                                                        <i className="bx bx-image"></i>
                                                    </label>
                                                    <div className="flex gap-2">
                                                        {imagepreviews.map(
                                                            (
                                                                preview,
                                                                index
                                                            ) => (
                                                                <img
                                                                    src={
                                                                        preview
                                                                    }
                                                                    key={index}
                                                                    className="h-11 w-11 rounded"
                                                                    alt=""
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                <PrimaryButton
                                                    disabled={processing}
                                                >
                                                    Posting
                                                </PrimaryButton>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <Post posts={posts} />
                        </div>

                        {/* Trends */}
                    </div>
                </div>
            </section>
        </div>
    );
}
