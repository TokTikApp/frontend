import { Header } from './components/Header'
import { Feed } from './components/Feed'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-14">
        <Feed />
      </div>
    </main>
  )
}

