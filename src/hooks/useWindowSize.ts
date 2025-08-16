import { useState, useEffect } from "react"

interface WindowSize {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 1509,
    isDesktop: window.innerWidth > 1509,
  })

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight

      setWindowSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width <= 1509,
        isDesktop: width > 1509,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
