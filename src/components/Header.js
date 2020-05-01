import React from 'react'

export default function Header() {
    return (
        <div>
        <section className="wave">
        <div className="virus"></div>
          <h1 className="h1">Stay Home</h1>
        <img src={Dr} className="img" alt="logo"  width="150px"/>
      </section>
      <Navbar/>
      </div> 
    )
}
