import React from "react"

// Components

export default function Layout({ children }) {
    return (
      <div style={{ margin: `2rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    )
  }

