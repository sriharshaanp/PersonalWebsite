import React from 'react'
import { MediaItem } from '../data'

export default function Media({ items }: { items: MediaItem[] }) {
  return (
    <ul id="media-list">
      {items.map((m) => (
        <li key={m.title}><a href={m.url} target="_blank" rel="noopener">{m.title} — {m.outlet}</a></li>
      ))}
    </ul>
  )
}
