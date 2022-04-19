import React, { useLayoutEffect } from "react"
import { useEffect } from "react"

const LayoutComponent = () => {
  const ref = React.useRef("val")

  useEffect(() => {
    ref.current = "secondValue"
  }, [])

  useLayoutEffect(() => {
    console.log("I run after DOM ready & mount", ref.current)
  })
  return <div>Test</div>
}

export default LayoutComponent
