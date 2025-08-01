"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { HomePage } from "@/components/home-page"
import { UserManagementPage } from "@/components/user-management-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <main className="pt-16">
        {currentPage === "home" && <HomePage />}
        {currentPage === "users" && <UserManagementPage />}
      </main>
    </div>
  )
}
