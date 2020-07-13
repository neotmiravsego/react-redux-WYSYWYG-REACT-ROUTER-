import React from 'react'
import PostList from '../../components/PostList/PostList'
import { Helmet } from 'react-helmet'

export default function MainPage() {
    return (
        <div className="container">
             <Helmet>
                    <meta charSet="utf-8" />
                    <title>Главная</title>
                </Helmet>
            <PostList />
        </div>
    )
}