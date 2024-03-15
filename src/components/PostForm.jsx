import { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const createNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form onSubmit={createNewPost}>
      <MyInput
        value={post.title}
        type="text"
        placeholder="post title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="post description"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton>create post</MyButton>
    </form>
  )
}

export default PostForm
