"use client";
import React, { useState, useEffect } from "react";
import { assets, blog_data } from "../../../../Assets/assets";
import Image from "next/image";
import Footer from "@/app/Componenets/Footer";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newRating, setNewRating] = useState(1);
  const [editingComment, setEditingComment] = useState(null);
  const [editedText, setEditedText] = useState("");

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  const handleAddComment = () => {
    if (newComment.trim() && newUsername.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          username: newUsername,
          text: newComment,
          rating: newRating,
        },
      ]);
      setNewComment("");
      setNewUsername("");
      setNewRating(1);
    }
  };

  const handleEditComment = (id) => {
    setEditingComment(id);
    const commentToEdit = comments.find((comment) => comment.id === id);
    setEditedText(commentToEdit.text);
  };

  const handleSaveEdit = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, text: editedText } : comment
      )
    );
    setEditingComment(null);
    setEditedText("");
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo1}
              width={70}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started <Image src={assets.arrow_icon} alt="" width={25} />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-black"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h1 className="my-8 text-[26px] font-semibold">Main:</h1>
        <p>{data.details}</p>
        <h1 className="my-8 text-[26px] font-semibold">Conclusion:</h1>
        <p>{data.conclusion}</p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>

          <div className="mb-4">
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Your name"
              className="w-full mb-2 border border-gray-300 rounded p-2"
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded p-2"
            />
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="mt-2 w-full border border-gray-300 rounded p-2"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddComment}
              className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            >
              Add Comment
            </button>
          </div>

          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="border p-4 rounded shadow">
                {editingComment === comment.id ? (
                  <div>
                    <textarea
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                    <button
                      onClick={() => handleSaveEdit(comment.id)}
                      className="mt-2 bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold">{comment.username}</p>
                        <p>{comment.text}</p>
                      </div>
                      <p className="text-yellow-500">{`⭐ ${comment.rating}`}</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleEditComment(comment.id)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
