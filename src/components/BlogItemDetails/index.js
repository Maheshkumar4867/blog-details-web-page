import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-main-container">
        <h1>{title}</h1>
        <div className="avatar-author-container">
          <div className="avatar-author">
            <img className="img" src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
          <div className="img-content">
            <img className="image-2" src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, blogData} = this.state
    console.log(blogData)

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
