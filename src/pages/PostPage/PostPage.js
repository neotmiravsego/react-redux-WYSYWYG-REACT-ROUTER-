import React from 'react'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { Helmet } from 'react-helmet'

const PostPage = (props) => {

    const [post, setPost] = useState({})

    useEffect(() => {

        const finded = props.myPosts.find(el => {

            return el.id === props.match.params.id

        })

        setPost(finded);

    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{post.title}</title>
            </Helmet>
            <div className="post-list">
                <h1>{post.title}</h1>
                <div className="content-wrap">
                    <div>
                        <p className="content-title">Контент новости:</p>
                        <p className="content-post" dangerouslySetInnerHTML={{ __html: post.content }} ></p>
                    </div>
                    <p className="author-post" >" Автор: {post.author}"</p>
                    <p>Дата создания: {post.date}</p>
                </div>
            </div >
        </div>
    )
}
const mapStateToProps = state => {
    return {
        myPosts: state.posts.posts
    }
}
export default withRouter(connect(mapStateToProps, null)(PostPage))