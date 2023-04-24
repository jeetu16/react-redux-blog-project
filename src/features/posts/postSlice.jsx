import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("blogs")) || []

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title,content,userId) {
                return {
                    payload: {
                        id:nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            clapping: 0,
                            heart: 0,
                            bulb: 0,
                            thinking: 0
                        }
                    }
                }
            }
        },
        deletePost : (state,action) => { 
            return state.filter((post) => post.id !== action.payload)
        },
        reactionAdded: (state,action) => {
            const {postId,reaction} = action.payload
            const existingPost = state.find((post) => post.id===postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})


export const allPosts = state => state.posts

export const { addPost, reactionAdded, deletePost } = postSlice.actions;

export default postSlice.reducer