import { useMemo } from 'react'

const usePagination = (totalPages) => {
  const result = useMemo(() => {
    const startingArray = []
    for (let i = 0; i < totalPages; i++) {
      startingArray.push(i + 1)
    }
    return startingArray
  }, [totalPages])

  return result
}

export default usePagination