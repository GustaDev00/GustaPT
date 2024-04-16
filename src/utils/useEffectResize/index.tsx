import type { DependencyList } from 'react'
import { useEffect } from 'react'

const useEffectResize = (
  callback: () => void,
  deps: DependencyList,
  shouldCallWhenEnter = false
) => {
  useEffect(() => {
    if (shouldCallWhenEnter) {
      callback()
    }
  }, [])

  useEffect(() => {
    window.removeEventListener('resize', callback)
    window.addEventListener('resize', callback)

    return () => {
      window.removeEventListener('resize', callback)
    }
  }, [...deps])
}

export default useEffectResize
