"use client"

import { Menu, Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-600 text-white px-2 sm:px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="sm" onClick={onMenuClick} className="text-white hover:bg-indigo-700 p-1 sm:p-2">
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold">SalesPilot</span>
            <span className="text-xs sm:text-sm opacity-90 hidden sm:inline">ホーム</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="検索..."
              className="pl-10 w-48 lg:w-64 bg-white text-gray-900 border-0"
              onClick={() => alert("検索機能を開きます")}
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-indigo-700"
            onClick={() => alert("検索機能を開きます")}
          >
            <Search className="h-4 w-4" />
          </Button>
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-indigo-700 p-1 sm:p-2"
              onClick={() => alert("通知一覧を表示します")}
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="bg-indigo-700 rounded-full p-1 sm:p-2"
            onClick={() => alert("ユーザーメニューを開きます")}
          >
            <User className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
