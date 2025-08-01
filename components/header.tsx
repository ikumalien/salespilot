"use client"

import { Menu, Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-600 text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onMenuClick} className="text-white hover:bg-indigo-700">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">SalesPilot</span>
            <span className="text-sm opacity-90">ホーム</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="検索..." className="pl-10 w-64 bg-white text-gray-900 border-0" />
          </div>
          <div className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="bg-indigo-700 rounded-full p-2">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  )
}
