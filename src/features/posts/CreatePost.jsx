import React, { useState } from 'react'
import { addPost } from './postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectAllUsers } from '../users/userSlice';

const CreatePost = () => {

    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const addTitle = e => setTitle(e.target.value)
    const addContent = e => setContent(e.target.value)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const addBlog = () => {
        if (title && content && userId) {
            dispatch(addPost(title, content, userId));
        }
        setTitle("");
        setContent("");
        setUserId("");
    }

    const handleAuhtor = (e) => {
        setUserId(e.target.value);
    }

    const auhtorOpts = users.map((user) => (
            <option value={user.id} key={user.id}>
                {user.name}
            </option>
    ))
    return (
        <div className='newBlog'>
            <h2>Post New Blog</h2>

            <form>
                <label htmlFor="author">Select Author : </label>
                <select 
                    name="author"
                    id="author"
                    value={userId}
                    onChange={handleAuhtor}
                >
                    <option value=""></option>
                    {auhtorOpts}
                </select>

                <label htmlFor="title">Blog Title :</label>
                <input
                    placeholder='Write your blog title'
                    type="text"
                    value={title}
                    id='title'
                    onChange={addTitle}
                />
                <label htmlFor="content">Blog Content :</label>
                <input
                    placeholder='Write your blog'
                    type='text'
                    id='content'
                    value={content}
                    onChange={addContent}
                />

                <button
                    onClick={addBlog}
                    disabled={!canSave}
                    style={{cursor:!canSave ? "not-allowed": "pointer"}}
                >Add Post</button>
            </form>
        </div>
    )
}

export default CreatePost