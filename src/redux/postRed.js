import { CREATE_POST } from './types'
let initState = { posts: [] }

const storageData = JSON.parse(localStorage.getItem('posts'))

if (storageData) {
    initState = {
        posts: storageData
    }
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST:
            const data = [...state.posts, action.payload]

            localStorage.setItem('posts', JSON.stringify(data))

            return { ...state, posts: state.posts.concat([action.payload]) }

        default: return state
    }
}