import React from 'react'

const Footer = () => {
  return (
    <footer className="d-flex justify-content-end gap-4 bg-secondary mt-5 p-2">
        <a
          className="text-decoration-none "
          id="link-ig"
          href="https://www.instagram.com/"
        >
          Instagram
        </a>
        <a
          className="text-decoration-none "
          id="link-lkdn"
          href="https://www.linkedin.com/"
        >
          LinkedIn
        </a>
        <a
          className="text-decoration-none"
          id="link-fb"
          href="https://www.facebook.com/"
        >
          Facebook
        </a>
      </footer>
  )
}

export default Footer