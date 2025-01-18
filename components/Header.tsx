import { Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="flex justify-between items-center px-4 py-2 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">TikTok Clone</h1>
        <nav>
          <Button variant="ghost" size="icon"><Home className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><Search className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><PlusCircle className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><MessageCircle className="h-6 w-6" /></Button>
          <Button variant="ghost" size="icon"><User className="h-6 w-6" /></Button>
        </nav>
      </div>
    </header>
  )
}

