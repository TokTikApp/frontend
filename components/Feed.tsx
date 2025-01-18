'use client'

import { useState } from 'react'
import { VideoPlayer } from './VideoPlayer'
import { faker } from '@faker-js/faker'

export function Feed() {
  return (
    <div className="h-screen w-[50vw] flex flex-col gap-y-32">
      <VideoPlayer src={faker.image.urlPicsumPhotos()} username={"@" + faker.internet.username()} description={faker.word.words()} />
      <VideoPlayer src={faker.image.urlPicsumPhotos()} username={"@" + faker.internet.username()} description={faker.word.words()} />
      <VideoPlayer src={faker.image.urlPicsumPhotos()} username={"@" + faker.internet.username()} description={faker.word.words()} />
      <VideoPlayer src={faker.image.urlPicsumPhotos()} username={"@" + faker.internet.username()} description={faker.word.words()} />
    </div>
  )
}

