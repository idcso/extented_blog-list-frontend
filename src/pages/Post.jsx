import { useParams } from 'react-router-dom'
import postService from '../API/postService'
import useFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import Loader from '../components/UI/loader/Loader'

const Post = () => {
  const params = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [fetchPost, isPostLoading, postError] = useFetch(async (id) => {
    const response = await postService.getById(id)
    setPost(response.data)
  })
  const [fetchComments, areCommentsLoading, commentsError] = useFetch(
    async (id) => {
      const response = await postService.getCommentsById(id)
      setComments(response.data)
    }
  )

  useEffect(() => {
    fetchPost(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      {isPostLoading ? (
        <Loader />
      ) : (
        <div style={{ padding: '10px 40px' }}>
          <h3 style={{ marginTop: 15 }}>Page of the post with id {post.id}</h3>
          <hr style={{ margin: '15px 0' }} />
          <h2 style={{ marginBottom: 15 }}>{post.title}</h2>
          <p style={{ marginBottom: 20 }}>{post.body}</p>
          <h2>Comments</h2>
          {areCommentsLoading ? (
            <Loader />
          ) : (
            comments.map((comment) => (
              <div key={comment.id} style={{ marginTop: 20 }}>
                <h5>{comment.email}</h5>
                <p>{comment.body}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Post
