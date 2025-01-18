'use client'

import { useState } from 'react'
import { VideoPlayer } from './VideoPlayer'

const mockVideos = [
  { id: 1, src: '/placeholder.svg?height=1920&width=1080', username: '@user1', description: 'This is a cool video #fyp' },
  { id: 2, src: '/placeholder.svg?height=1920&width=1080', username: '@user2', description: 'Check out this amazing trick! #viral' },
  { id: 3, src: '/placeholder.svg?height=1920&width=1080', username: '@user3', description: 'Just another day in paradise #travel' },
]

export function Feed() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0 && currentVideoIndex < mockVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    } else if (event.deltaY < 0 && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  return (
    <div className="h-screen overflow-hidden" onWheel={handleScroll}>
      <VideoPlayer {...mockVideos[currentVideoIndex]} />
    </div>
  )
}

