import usePagination from '../../../hooks/usePagination'

const Pagination = ({ totalPages, setPage, page }) => {
  let pagesArray = usePagination(totalPages)

  return (
    <div className="pagination__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => setPage(p)}
          className={page === p ? 'page page__active' : 'page'}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
