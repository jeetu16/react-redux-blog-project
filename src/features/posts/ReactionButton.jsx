import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice';


const reactionEmoji = {
    thumbsUp: '👍',
    clapping: '👏',
    heart: '❤️',
    bulb: '💡',
    thinking: '🤔'
}


const ReactionButton = ({post}) => {
    const dispatch = useDispatch();

    const reactionButton = Object.entries(reactionEmoji).map(([name,emoji]) => {
        return (
            <button
                key={name}
                type='button'
                className='reactionButtons'
                onClick={() => dispatch(reactionAdded({ postId : post.id, reaction : name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    
  return (
    <div>{reactionButton}</div>
  )
}

export default ReactionButton