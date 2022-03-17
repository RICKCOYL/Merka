import React from "react"

const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Service",
      path: "/service"
    },
    {
      name: "Blog",
      path: "/blog"
    }
  ]

  return (
    <nav>
      <div className="Heading-sec">
        <h3>Merka</h3>

        <ul>
          {links.map(link =>
            <li key={link.name}>
              <a href={link.path}>
                {link.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
