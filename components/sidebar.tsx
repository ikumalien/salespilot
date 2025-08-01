"use client"

import { X, Home, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  currentPage: string
  onPageChange: (page: string) => void
}

export function Sidebar({ isOpen, onClose, currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: "home", label: "ホーム", icon: Home },
    { id: "users", label: "ユーザー管理", icon: Users },
    { id: "analysis", label: "商材分析", icon: BarChart3 },
  ]

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">メニュー</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                className="w-full justify-start mb-2"
                onClick={() => {
                  onPageChange(item.id)
                  onClose()
                }}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
