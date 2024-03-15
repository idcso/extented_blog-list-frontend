//import Counter from './components/Counter'
import PostItem from './components/PostItem'

const App = () => {
  return (
    <div className="App">
      <PostItem
        post={{ id: 1, title: 'Post title', body: 'Post description' }}
      />
    </div>
  )
}

export default App
