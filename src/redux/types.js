export const CREATE_POST = 'POST/CREATE_POST'
export function createPost(post) {
    return {
        type: CREATE_POST,
        paylod: post
    }
}