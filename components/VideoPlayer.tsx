'use client'

import { useState, useRef } from 'react'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  src: string
  username: string
  description: string
}

export function VideoPlayer({ src, username, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative h-screen w-full bg-black">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-contain"
        loop
        onClick={togglePlay}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h2 className="text-white font-bold">{username}</h2>
        <p className="text-white">{description}</p>
      </div>
      <div className="absolute right-4 bottom-20 flex flex-col space-y-4">
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 text-white">
          <Heart className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 text-white">
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 text-white">
          <Share2 className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

