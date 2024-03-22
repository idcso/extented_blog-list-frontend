import { useState, useEffect } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyModal from '../components/UI/modal/MyModal'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import Loader from '../components/UI/loader/Loader'
import PostList from '../components/PostList'
import Pagination from '../components/UI/pagination/Pagination'
import { usePosts } from '../hooks/usePosts'
import useFetch from '../hooks/useFetch'
import postService from '../API/postService'
import { getPageCount } from '../utils/pages'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, postsLoaded, errorMessage] = useFetch(async () => {
    const response = await postService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.search)

  useEffect(() => {
    fetchPosts()
  }, [page])

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const handleRemovePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={handleCreatePost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {errorMessage && <h1>Error: {errorMessage}</h1>}
      {postsLoaded ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={searchedAndSortedPosts}
          title="Posts list"
          remove={handleRemovePost}
        />
      )}
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </div>
  )
}

export default Posts
