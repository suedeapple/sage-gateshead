'use client'

import { useState, useEffect, useRef } from 'react'

export default function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [active, setActive] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const modal = wrapperRef.current?.closest('.modal') as HTMLElement | null
    if (!modal) return

    const observer = new MutationObserver(() => {
      if (modal.style.display === 'none') setActive(false)
    })
    observer.observe(modal, { attributes: true, attributeFilter: ['style'] })
    return () => observer.disconnect()
  }, [active])

  return (
    <div ref={wrapperRef}>
      {active ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title={title}

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', aspectRatio: '16/9', display: 'block' }}
        />
      ) : (
        <button
          className="yt-facade"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            aspectRatio: '16/9',
            padding: 0,
            border: 'none',
            cursor: 'pointer',
            background: '#000',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="68" height="48" viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M66.5 7.7c-.8-2.9-2.9-5-5.8-5.8C55.8 0 34 0 34 0S12.2 0 7.3 1.9C4.4 2.7 2.3 4.8 1.5 7.7 0 12.5 0 24 0 24s0 11.5 1.5 16.3c.8 2.9 2.9 5 5.8 5.8C12.2 48 34 48 34 48s21.8 0 26.7-1.9c2.9-.8 5-2.9 5.8-5.8C68 35.5 68 24 68 24s0-11.5-1.5-16.3z" fill="red" />
              <path d="M45 24L27 14v20" fill="white" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
