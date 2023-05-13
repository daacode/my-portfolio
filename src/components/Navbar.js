// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          David Adeneye
        </Link>
      </div>

      <Link href="/blog" className="blog-menu">
        My Blog
      </Link>
      <a href="https://docs.google.com/document/d/1i7xf7ZDy0LMTIQayR6LccGqYAMv1wOexMA25yxVhcSI/edit?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;