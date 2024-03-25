import { useEffect, useRef } from 'react'

const useObserver = (postsLoaded, canLoad, ref, callback) => {
  const observer = useRef()

  useEffect(() => {
    if (postsLoaded) return
    if (observer.current) observer.current.disconnect()
    const cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb)
    observer.current.observe(ref.current)
  }, [postsLoaded])
}

export default useObserver