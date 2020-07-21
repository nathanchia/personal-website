import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 30 30" width={40} height={40} fill={props.fill}  {...props}>
      <path d="M7 4a.995.995 0 00-.707.293l-2 2a.999.999 0 000 1.414L11.586 15l-7.293 7.293a.999.999 0 000 1.414l2 2a.999.999 0 001.414 0L15 18.414l7.293 7.293a.999.999 0 001.414 0l2-2a.999.999 0 000-1.414L18.414 15l7.293-7.293a.999.999 0 000-1.414l-2-2a.999.999 0 00-1.414 0L15 11.586 7.707 4.293A.996.996 0 007 4z" />
    </svg>
  )
}

export default SvgComponent
