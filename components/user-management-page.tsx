"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Plus, Download } from "lucide-react"

export function UserManagementPage() {
  const users = [
    {
      name: "田中太郎",
      email: "tanaka@company.com",
      role: "管理者",
      roleColor: "bg-purple-100 text-purple-800",
      lastLogin: "2024年7月8日 14:30",
      created: "2023年3月22日",
    },
    {
      name: "佐藤花子",
      email: "sato@company.com",
      role: "マネージャー",
      roleColor: "bg-blue-100 text-blue-800",
      lastLogin: "2024年7月8日 14:30",
      created: "2023年3月22日",
    },
    {
      name: "鈴木一郎",
      email: "suzuki@company.com",
      role: "メンバー",
      roleColor: "bg-green-100 text-green-800",
      lastLogin: "2024年7月8日 14:30",
      created: "2023年3月22日",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600">ホーム {">"} ユーザー管理</div>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">アプローチリスト</h1>
        <p className="text-gray-600">
          営業対象となるリードや既存顧客のアプローチリストを管理します。優先度や進捗状況を確認し、効率的な営業活動を支援します。
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          エクスポート
        </Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          ユーザーを招待
        </Button>
      </div>

      {/* User List */}
      <Card>
        <div className="bg-indigo-600 text-white px-6 py-3">
          <h2 className="font-semibold">ユーザー一覧</h2>
        </div>
        <CardContent className="p-0">
          <div className="divide-y">
            {users.map((user, index) => (
              <div key={index} className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                    <Badge className={user.roleColor}>{user.role}</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-sm text-gray-600">{user.lastLogin}</div>
                  <div className="text-sm text-gray-600">{user.created}</div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      編集
                    </Button>
                    <Button size="sm" variant="destructive">
                      削除
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <div className="bg-green-500 text-white px-6 py-3">
          <h2 className="font-semibold">通知設定</h2>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* System Notifications */}
            <div>
              <h3 className="font-semibold mb-4">システム通知</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">新規ユーザー登録</h4>
                    <p className="text-sm text-gray-600">新しいユーザーが登録されたときに管理者に通知</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">ログイン失敗アラート</h4>
                    <p className="text-sm text-gray-600">連続してログインに失敗した場合の通知</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">権限変更通知</h4>
                    <p className="text-sm text-gray-600">ユーザーの権限が変更されたときの通知</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            {/* Email Notifications */}
            <div>
              <h3 className="font-semibold mb-4">メール通知</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">日次レポート</h4>
                    <p className="text-sm text-gray-600">ユーザー活動の日次サマリーレポート</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">週次レポート</h4>
                    <p className="text-sm text-gray-600">ユーザー統計の週次レポート</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">セキュリティアラート</h4>
                    <p className="text-sm text-gray-600">セキュリティ関連のイベント通知</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
