"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Folder, Mail } from "lucide-react"

export function HomePage() {
  const [animatedValues, setAnimatedValues] = useState({
    leads: 0,
    campaigns: 0,
    openRate: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        leads: 58,
        campaigns: 5,
        openRate: 24.8,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const campaigns = [
    {
      date: "2025/05/02",
      name: "春季プロモーション",
      target: "30件",
      list: "新規顧客リスト",
      channel: "メール",
      status: "実行中",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      date: "2025/04/25",
      name: "製品アップデート案内",
      target: "",
      list: "既存顧客",
      channel: "SMS",
      status: "準備中",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      date: "2025/04/15",
      name: "セミナー招待",
      target: "20件",
      list: "VIPリスト",
      channel: "メール+電話",
      status: "完了",
      statusColor: "bg-purple-100 text-purple-800",
    },
    {
      date: "2025/04/10",
      name: "年間契約更新案内",
      target: "15件",
      list: "更新予定顧客",
      channel: "メール+電話",
      status: "保留中",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      date: "2025/04/05",
      name: "新製品発表会",
      target: "45件",
      list: "業界関係者",
      channel: "メール",
      status: "計画中",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-500 text-white border-0 overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm opacity-90">今月の獲得リード</p>
              <p className="text-4xl font-bold transition-all duration-1000 ease-out">{animatedValues.leads}</p>
              <p className="text-sm opacity-90">前月比 +12%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-500 text-white border-0 overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm opacity-90">実行中のキャンペーン</p>
              <p className="text-4xl font-bold transition-all duration-1000 ease-out">{animatedValues.campaigns}</p>
              <p className="text-sm opacity-90">新規 2件</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-500 text-white border-0 overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm opacity-90">開封率向上</p>
              <p className="text-4xl font-bold transition-all duration-1000 ease-out">
                {animatedValues.openRate.toFixed(1)}%
              </p>
              <p className="text-sm opacity-90">前月比 +2.3%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">お知らせ</h2>
                <Button variant="link" className="text-blue-600 p-0">
                  すべて見る &gt;
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm">2025/01/03 13:00 定期メンテナンス実施予定です。</span>
                  <Badge className="bg-yellow-200 text-yellow-800">メンテナンス</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">2024/12/25 新機能がリリースされました。</span>
                  <Badge className="bg-blue-200 text-blue-800">新機能</Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">2024/12/20 年末年始のサポート対応について</span>
                  <Badge className="bg-gray-200 text-gray-800">サポート</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Actions */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">ネクストアクション</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <FileText className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <h3 className="font-medium mb-2">新規案件の登録</h3>
                  <p className="text-sm text-gray-600 mb-3">自社提案書を登録し、AIによる分析を開始</p>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">登録する</Button>
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <Folder className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <h3 className="font-medium mb-2">アプローチリスト作成</h3>
                  <p className="text-sm text-gray-600 mb-3">顧客リストを作成し最適化</p>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">作成する</Button>
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <Mail className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <h3 className="font-medium mb-2">アプローチ設定</h3>
                  <p className="text-sm text-gray-600 mb-3">チャネルと方法を最適化し設定</p>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">設定する</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Running Campaigns */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">実行中キャンペーン一覧</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">情報日</th>
                    <th className="text-left py-2">キャンペーン名</th>
                    <th className="text-left py-2">リスト名</th>
                    <th className="text-left py-2">チャネル</th>
                    <th className="text-left py-2">ステータス</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3">{campaign.date}</td>
                      <td className="py-3">
                        <div>
                          <div className="font-medium">{campaign.name}</div>
                          {campaign.target && <div className="text-xs text-gray-500">期間目標: {campaign.target}</div>}
                        </div>
                      </td>
                      <td className="py-3">{campaign.list}</td>
                      <td className="py-3">{campaign.channel}</td>
                      <td className="py-3">
                        <Badge className={campaign.statusColor}>{campaign.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
