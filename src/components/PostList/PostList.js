import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Posts = ({ myPosts }) => {
    if (!myPosts.length) {
        return <p className="not-post">Вам нужно создать пост</p>
    }
    return (
        <div className="container">
            <ul className="post-list">

                {myPosts &&
                    myPosts.map((post) =>
                        <li className="post-list__item" key={post.id}>
                            <Link className="link-post" to={`/post/${post.id}`}>
                                <h2 className="title-post">{post.title}</h2>
                                <div className="wrap-bottom__content">
                                    <p>Автор: {post.author}</p>
                                    <p>{new Date().toLocaleDateString()}</p>
                                </div>
                            </Link>
                        </li>
                    )}
            </ul>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        myPosts: state.posts.posts
    }
}
export default connect(mapStateToProps, null)(Posts)