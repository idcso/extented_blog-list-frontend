import { useState } from 'react'

const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetch = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetch, isLoading, error]
}

export default useFetch