import React from "react";

export default function Post({ posts }) {
    return (
        <>
            {posts ? (
                posts.map((post, index) => (
                    <div className="bg-white rounded-xl p-5 mb-3">
                        <div className="flex gap-5">
                            <img
                                src={`https://ui-avatars.com/api/?name=${post.user.name}`}
                                alt=""
                                className="rounded-full w-10 h-10"
                            />
                            <div className="w-10/12">
                                <h5 className="text-lg font-semibold mb-0">
                                    {post.user.name}
                                </h5>
                                <p className="text-gray-500 text-sm mb-3">
                                    4 Menit yang lalu
                                </p>
                                <div className="mb-5">
                                    <p className="text-black">{post.content}</p>
                                    {post.images && post.images.length > 0 && (
                                        <div className="grid grid-cols-2 gap-3 mt-3">
                                            {post.images.map((image, idx) => (
                                                <img
                                                    src={image.image_url}
                                                    alt=""
                                                    className="rounded-lg w-full"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-5">
                                    <button className="flex items-center gap-1">
                                        <i className="bx bxs-like"></i>
                                        10
                                    </button>
                                    <button className="flex items-center gap-1">
                                        <i className="bx bxs-message-dots"></i>5
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">Belum Ada Postingan</p>
            )}
        </>
    );
}
