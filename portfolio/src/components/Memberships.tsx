import React from 'react'
import { Membership } from '../data'

export default function Memberships({ items }: { items: Membership[] }) {
  return (
    <div id="memberships-grid" className="grid">
      {items.map((m) => (
        <div className="card" key={m.title + m.org}>
          <h3>{m.title} — {m.org}</h3>
          <a className="btn" href={m.certUrl} target="_blank" rel="noopener">View Certificate</a>
        </div>
      ))}
    </div>
  )
}
