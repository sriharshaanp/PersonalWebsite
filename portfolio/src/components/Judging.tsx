import React, { useState } from 'react'
import { JudgingEntry } from '../data'

export default function Judging({ items }: { items: JudgingEntry[] }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalBody, setModalBody] = useState<JSX.Element | null>(null)

  function openModalWith(entry: JudgingEntry) {
    setModalBody(
      <div>
        <img className="cert-preview" src={entry.certImg} alt="Certificate" />

        {entry.pics && entry.pics.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 8, marginTop: 12 }}>
            {entry.pics.map((p) => <img key={p} src={p} style={{ width: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: 4 }} />)}
          </div>
        )}

        <div style={{ marginTop: 12 }}>
          <label style={{ display: 'block' }}>Upload pictures (they will only be stored locally in your browser):</label>
          <input type="file" multiple accept="image/*" onChange={(ev) => handleFiles(ev.target.files)} />
          <div id="gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 8, marginTop: 10 }} />
        </div>
      </div>
    )
    setModalOpen(true)
  }

  function handleFiles(files: FileList | null) {
    if (!files) return
    const gallery = document.getElementById('gallery')
    if (!gallery) return
    gallery.innerHTML = ''
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = document.createElement('img')
        img.src = e.target?.result as string
        img.style.width = '100%'
        img.style.height = 'auto'
        img.style.border = '1px solid #ddd'
        img.style.borderRadius = '4px'
        gallery.appendChild(img)
      }
      reader.readAsDataURL(file)
    })
  }

  return (
    <>
      <div id="judging-grid" className="grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title} ({item.year})</h3>
            <button className="btn" onClick={() => openModalWith(item)}>Open Details</button>
          </div>
        ))}
      </div>

      <div id="modal" className="modal" aria-hidden={modalOpen ? 'false' : 'true'} onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false) }}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
          <div id="modal-body">{modalBody}</div>
        </div>
      </div>
    </>
  )
}
