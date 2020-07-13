import React from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'
import { connect } from 'react-redux'
import { createPost } from '../../redux/action'
import { Helmet } from 'react-helmet'

class AddPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            author: '',
            date: new Date().toLocaleDateString(),
            errors: {
                title: false,
                content: false,
                author: false,
            }
        };
    }


    changeInput = event => {
        event.persist();
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }
    handleCkeditorState = (event, editor) => {
        let data = editor.getData();
        this.setState({
            content: data
        })
    }
    validate = (myPosts) => {
        const finded = this.props.myPosts.find(el => el.title === this.state.title)
        if (finded) {
            this.setState({
                errors: {
                    title: true
                }
            })

            return false;
        }

        return true;
    }
    submitHandler = (event, errors) => {
        event.preventDefault();
        const { title, content, author } = this.state
        const newPost = {
            content, author, title, id: Date.now().toString(), date: new Date().toLocaleDateString(),
        }

        if (!this.validate()) return;

        if (content.length <= 0) {
            this.setState({
                errors: {
                    content: true
                }
            })
        } else {
            this.props.createPost(newPost)
            this.props.history.push('/')
            this.validate()
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Добавить запись</title>
                </Helmet>
                <form className="form-container" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label className="label-input">Заголовок</label>
                        {errors.title && (
                            <p className="error-title">Пост с таким заголовком уже существует</p>
                        )}
                        <input placeholder="Заголовок поста" required name="title" value={this.state.title} onChange={this.changeInput} ></input>
                    </div>
                    <div className="form-group form-wisywig">
                        <label className="label-input">Контент</label>
                        <CKEditor
                            required
                            name="content"
                            editor={ClassicEditor}
                            value={this.state.content}
                            onInit={editor => {
                            }}
                            onChange={this.handleCkeditorState}></CKEditor>
                        {errors.content && (
                            <p className="errors-content">Добавьте контент</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="label-input" > Имя автора</label>
                        <input placeholder="Имя автора" name="author" required value={this.state.author} onChange={this.changeInput}></input>
                    </div>
                    <button className="button-created" type="submit" >Создать пост</button>
                </form>
            </div>
        )
    }
}
const mapDispathToProps = {
    createPost
}
const mapStateToProps = state => {
    return {
        myPosts: state.posts.posts
    }
}
export default connect(mapStateToProps, mapDispathToProps)(AddPost)