'use client';
import { useState } from 'react';

export default function BlogUpdateForm() {




  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value
    const slug = form.slug.value
    const authorName = form.authorName.value
    const thumbnail = form.thumbnail.value
    const category = form.category.value
    const readingTime = form.readingTime.value
    const content = form.content.value
    const tags = form.tags.value
    const tagsArray = tags.split(',')
    
    const blogData = {
      title,
      slug,
      authorName,
      thumbnail,
      category,
      readingTime,
      content,
      tags: tagsArray
    }
    console.log(blogData)

  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow grid grid-cols-2 gap-6">

        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          className="input border-2 py-2 px-4 rounded"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug (URL-friendly)"
          className="input border-2 py-2 px-4 rounded"
        />
        <input
          type="text"
          name="authorName"
          placeholder="Author Name"
          className="input border-2 py-2 px-4 rounded"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          className="input border-2 py-2 px-4 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input border-2 py-2 px-4 rounded"
        />
        <input
          type="text"
          name="readingTime"
          placeholder="Reading Time (e.g., 5 min)"
          className="input border-2 py-2 px-4 rounded"
        />

        <textarea
          name="content"
          placeholder="Blog Content"
          rows={5}
          className="input border-2 py-2 px-4 rounded"
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="input border-2 py-2 px-4 rounded"
        />

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Update Blog
        </button>
      </form>
    </div>
  );
}
