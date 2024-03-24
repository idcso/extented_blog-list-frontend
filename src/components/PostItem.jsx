import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = ({ post, number, remove }) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number} {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>open</MyButton>
        <MyButton onClick={() => remove(post.id)}>remove</MyButton>
      </div>
    </div>
  )
}

export default PostItem
