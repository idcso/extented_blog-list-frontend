import PostItem from './PostItem'

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
