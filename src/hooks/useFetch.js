import { useState } from 'react'

const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetch = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetch, isLoading, error]
}

export default useFetch