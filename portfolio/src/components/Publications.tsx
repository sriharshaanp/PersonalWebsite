import React from 'react'
import { Publication } from '../data'

export default function Publications({ items }: { items: Publication[] }) {
  return (
    <ul id="publications-list">
      {items.map((p) => (
        <li key={p.title}><a href={p.url} target="_blank" rel="noopener">{p.citation}</a></li>
      ))}
    </ul>
  )
}
