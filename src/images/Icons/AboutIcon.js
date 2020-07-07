import React from "react";

// Required props: fill

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 512 512"
      fill={props.fill}
    >
      <path d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zm-21.215 340.825C373.12 458.492 316.367 482 256 482s-117.121-23.508-159.805-66.195C53.508 373.12 30 316.367 30 256S53.508 138.879 96.195 96.195C138.88 53.508 195.633 30 256 30s117.121 23.508 159.805 66.195C458.492 138.88 482 195.633 482 256s-23.508 117.121-66.195 159.805zm0 0"></path>
      <path d="M306.91 334.02h-.7V228.03c0-12.433-10.116-22.547-22.546-22.547h-74.57c-12.434 0-22.547 10.114-22.547 22.547v36.606c0 12.433 10.113 22.547 22.547 22.547h.773v46.836h-.773c-12.434 0-22.547 10.113-22.547 22.546v36.606c0 12.433 10.113 22.547 22.547 22.547h97.816c12.434 0 22.547-10.114 22.547-22.547v-36.606c0-12.43-10.117-22.546-22.547-22.546zm-7.453 51.703h-82.914V364.02h7.207c8.887 0 16.117-7.23 16.117-16.118v-74.601c0-8.887-7.23-16.114-16.117-16.114h-7.207v-21.703h59.668v112.418c0 8.887 7.23 16.118 16.117 16.118h7.129zm0 0M258 193.129c26.703 0 48.426-21.723 48.426-48.426 0-26.7-21.723-48.426-48.426-48.426s-48.426 21.727-48.426 48.426c0 26.703 21.723 48.426 48.426 48.426zm0-66.852c10.16 0 18.426 8.27 18.426 18.426 0 10.16-8.266 18.426-18.426 18.426s-18.426-8.266-18.426-18.426c0-10.156 8.266-18.426 18.426-18.426zm0 0"></path>
    </svg>
  );
}

export default Icon;
