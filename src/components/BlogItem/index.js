// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="list-item-container">
      <div className="name-time-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-time">{publishedDate}</p>
      </div>
      <p className="blog-desc">{description}</p>
    </li>
  )
}

export default BlogItem
