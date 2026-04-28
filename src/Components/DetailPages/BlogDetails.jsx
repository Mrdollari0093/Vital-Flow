import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailsData from "./BlogDetailsData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = BlogDetailsData.find((item) => item.id === Number(id));

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div className="w-full bg-white">
      {/* TOP HEADER */}
      <div className="max-w-5xl mx-auto px-4 pt-12 text-center">
        <p className="text-gray-500 text-lg font-medium mb-4">{blog.date}</p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 px-8 landing-tight my-12">
          {blog.title}
        </h1>

        {/* AUTHOR */}
      <a href="/doctor/3">

          <div className="flex items-center justify-center gap-3 mt-8" >
        
          <img
            src={blog.author.image}
            alt="author"
            className="w-12 h-12 rounded-full object-cover  "
          />

          <div className="text-left text-md">
            <p className="font-medium text-gray-800">
              {blog.author.name}
            </p>
            <p className="text-sm text-gray-500">
              {blog.author.role}
            </p>
          </div>

          <img
            src={blog.icons.go}
            alt="go"
            className="w-4 h-4 ml-2 cursor-pointer"
          />
        </div>
      </a>
      </div>

      {/* HERO IMAGE */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <img
          src={blog.heroImage}
          alt="hero"
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 mt-10 pb-4">
        {blog.content.map((section, index) => (
          <div key={index} className="mb-8">
            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                {section.heading}
              </h2>
            )}

            <p className="text-gray-500 leading-relaxed font-semibold text-md md:text-lg">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;