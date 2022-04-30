import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {list} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = list
  return (
    <Link to={`/blogs/${id}`}>
      <li className="image-container">
        <img className="image-size" src={imageUrl} alt={`item${id}`} />
        <div className="topic-title-container">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="avatar-author-container">
            <img className="avatar-size" src={avatarUrl} alt={`avatar${id}`} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
