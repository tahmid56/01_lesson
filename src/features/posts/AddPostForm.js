import React, { useState } from 'react'

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
  return (
    <section>
        <h2>Add a new post</h2>
        <form>
            <label htmlFor='PostTitle'>Post Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChange}
            />
            <label htmlFor='PostContent'>Post Content:</label>
            <input
                type="text"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChange}
            />
            <button type='Button'>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm