"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Zap, ArrowLeft, Download, Share2, BarChart3 } from "lucide-react"

export function ProductAnalysisPage() {
  const [currentStep, setCurrentStep] = useState("form") // "form" or "results"
  const [formData, setFormData] = useState({
    productName: "",
    landingPageUrl: "",
    additionalInfo: "",
    uploadedFile: null as File | null,
  })
  const [activeTab, setActiveTab] = useState("target")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, uploadedFile: file }))
    }
  }

  const handleStartAnalysis = () => {
    if (formData.productName) {
      // Simulate analysis process
      setTimeout(() => {
        setCurrentStep("results")
      }, 2000)
    }
  }

  const handleBackToForm = () => {
    setCurrentStep("form")
  }

  const handleReAnalysis = () => {
    setCurrentStep("form")
  }

  const handleSaveResults = () => {
    alert("分析結果を保存しました！")
  }

  if (currentStep === "results") {
    return (
      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600">ホーム {">"} 商材分析</div>

        {/* Results Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleBackToForm}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            戻る
          </Button>
          <div>
            <h1 className="text-2xl font-bold">商材分析結果</h1>
            <p className="text-gray-600">
              AIによる商材分析が完了しました。以下の結果を営業戦略の立案にお役立てください。
            </p>
          </div>
        </div>

        {/* Analysis Results Card */}
        <Card>
          <div className="bg-indigo-600 text-white px-6 py-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-semibold">営業支援SaaS「SalesPilot」</h2>
                <p className="text-sm opacity-90">分析完了日: 2025年7月8日</p>
              </div>
            </div>
          </div>

          <CardContent className="p-0">
            {/* Tabs */}
            <div className="border-b overflow-x-auto">
              <div className="flex min-w-max">
                {[
                  { id: "fact", label: "ファクト" },
                  { id: "3c", label: "3C分析" },
                  { id: "target", label: "ターゲットセグメント" },
                  { id: "persona", label: "ペルソナ" },
                  { id: "details", label: "詳細" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 sm:px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "target" && (
                <div className="space-y-6">
                  {/* Target Segment 1 */}
                  <div className="border rounded-lg p-4 sm:p-6 bg-blue-50">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold mb-3">IT・Webサービス業の管理部門</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                          <Badge className="bg-blue-100 text-blue-800">資本金</Badge>
                          <Badge className="bg-blue-100 text-blue-800">売上高</Badge>
                          <Badge className="bg-blue-100 text-blue-800">従業員数</Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium mb-4">
                          <span>8,000万円</span>
                          <span>25億円</span>
                          <span>150人</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 w-full lg:max-w-md">
                        <h4 className="font-medium mb-2">適応理由</h4>
                        <p className="text-sm text-gray-600">
                          IT業界の管理部門責任者は、効率化に関わる管理業務と人材育成での問題を同時に抱え、自社内のコア業務に専念できる体制を構築したいというニーズがある。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Target Segment 2 */}
                  <div className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3">不動産業・建築設計業の営業事務部門</h3>
                        <div className="flex gap-3 mb-4">
                          <Badge className="bg-gray-100 text-gray-800">資本金</Badge>
                          <Badge className="bg-gray-100 text-gray-800">売上高</Badge>
                          <Badge className="bg-gray-100 text-gray-800">従業員数</Badge>
                        </div>
                        <div className="flex gap-6 text-sm font-medium mb-4">
                          <span>2,500万円</span>
                          <span>11億円</span>
                          <span>70人</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 max-w-md">
                        <h4 className="font-medium mb-2">適応理由</h4>
                        <p className="text-sm text-gray-600">
                          不動産・建築業は設計業務が大きく、時期によって営業事務・契約管理業務の負担が集中しがちである。区域に顧客数が限られアプローチや追跡を効率化したいため、教育コストや追跡プロセスの管理となっている。コンプライアンスは営業担当の業務テンプレート時期のため分析問題で効率化し、営業成績を平準化したい、新規案件情報を地方営業のタブの向上という課題に対してソリューションを求めている。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Target Segment 3 */}
                  <div className="border rounded-lg p-6 bg-green-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3">
                          データ分析会社・マーケティングリサーチ会社のリサーチ部門
                        </h3>
                        <div className="flex gap-3 mb-4">
                          <Badge className="bg-green-100 text-green-800">資本金</Badge>
                          <Badge className="bg-green-100 text-green-800">売上高</Badge>
                          <Badge className="bg-green-100 text-green-800">従業員数</Badge>
                        </div>
                        <div className="flex gap-6 text-sm font-medium mb-4">
                          <span>9,000万円</span>
                          <span>40億円</span>
                          <span>180人</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 max-w-md">
                        <h4 className="font-medium mb-2">適応理由</h4>
                        <p className="text-sm text-gray-600">
                          分析・リサーチ業務は突発的な依頼や大量データの取り扱いが必要な一方、社内人員では対処しきれない場合が多い。業務によってはコンサルタントの業務量を調整し課題となるため、専門スキルを持った専門の人材を機動的に確保できるサービスを求めている。受託業務スポットのアウトソーシングが主だった、コンプライアンスの導入大幅業務効率やプロジェクト管理を上げ、人材やすく主体性上に配慮する。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "fact" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">市場ファクト分析</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                      className="space-y-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => alert("市場規模の詳細データを表示します")}
                    >
                      <h4 className="font-medium">市場規模</h4>
                      <p className="text-sm text-gray-600">営業支援SaaS市場は年間成長率15%で拡大中</p>
                    </div>
                    <div
                      className="space-y-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => alert("競合分析の詳細を表示します")}
                    >
                      <h4 className="font-medium">競合状況</h4>
                      <p className="text-sm text-gray-600">主要競合は5社、差別化ポイントはAI機能</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "3c" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3C分析結果</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Company（自社）</h4>
                      <p className="text-sm text-gray-600">AI機能に強み、UI/UXが優秀</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Competitor（競合）</h4>
                      <p className="text-sm text-gray-600">価格競争が激化、機能差別化が重要</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Customer（顧客）</h4>
                      <p className="text-sm text-gray-600">効率化とROI向上を重視</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "persona" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">ペルソナ分析</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">メインペルソナ：営業部長（40代男性）</h4>
                    <p className="text-sm text-gray-600">
                      チーム管理に課題を抱え、数値管理とメンバー育成の両立を求めている。
                      ITリテラシーは中程度で、直感的な操作性を重視。
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "details" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">詳細分析</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium">推奨アプローチ戦略</h4>
                      <p className="text-sm text-gray-600">ROI重視の提案資料作成、無料トライアル期間の設定</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium">価格戦略</h4>
                      <p className="text-sm text-gray-600">段階的価格設定、成果連動型オプションの提供</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Button variant="outline" onClick={handleReAnalysis} className="w-full sm:w-auto bg-transparent">
            再分析実行
          </Button>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex items-center justify-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">結果をダウンロード</span>
              <span className="sm:hidden">ダウンロード</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">結果を共有</span>
              <span className="sm:hidden">共有</span>
            </Button>
            <Button
              onClick={handleSaveResults}
              className="bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2"
            >
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">分析結果を保存</span>
              <span className="sm:hidden">保存</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600">ホーム {">"} 商材分析</div>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">商材分析</h1>
        <p className="text-gray-600">
          商材の目的や情報を入力し、AIによる分析を開始します。営業資料やLPをアップロードすることで、より精度の高い分析結果を得ることができます。
        </p>
      </div>

      {/* Form Card */}
      <Card>
        <div className="bg-indigo-600 text-white px-6 py-3">
          <h2 className="font-semibold">商材情報の入力</h2>
        </div>
        <CardContent className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5" />
              <h3 className="font-semibold">基本情報</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Input placeholder="例：営業支援SaaS「SalesPilot」" className="w-full" />
              </div>
              <div>
                <Textarea
                  placeholder="商材を1言で表わす名称を入力してください（最大50文字）"
                  className="w-full"
                  value={formData.productName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, productName: e.target.value }))}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Sales Materials */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Upload className="h-5 w-5" />
                <h3 className="font-semibold">営業資料</h3>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="text-gray-500">
                    <p>ファイルをドラッグ&ドロップ</p>
                    <p>または、ファイルを選択してアップロード</p>
                  </div>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    onChange={handleFileUpload}
                  />
                  <Button
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    ファイルを選択
                  </Button>
                  <p className="text-xs text-gray-500">
                    対応形式: PDF, PowerPoint (ppt, pptx), Word (doc, docx) / 最大ファイルサイズ: 10MB
                  </p>
                  {formData.uploadedFile && (
                    <p className="text-sm text-green-600">✓ {formData.uploadedFile.name} がアップロードされました</p>
                  )}
                </div>
              </div>
            </div>

            {/* Landing Page */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5" />
                <h3 className="font-semibold">ランディングページ</h3>
              </div>
              <div className="space-y-4">
                <Input
                  placeholder="https://example.com/product"
                  value={formData.landingPageUrl}
                  onChange={(e) => setFormData((prev) => ({ ...prev, landingPageUrl: e.target.value }))}
                />
                <p className="text-sm text-gray-600">商材の詳細情報が掲載されているWebページのURLを入力してください</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5" />
              <h3 className="font-semibold">補足情報・特記事項</h3>
            </div>
            <Textarea
              placeholder="例：ターゲット業界、競合商材との差別化ポイント、価格帯、導入事例など"
              className="w-full h-32"
              value={formData.additionalInfo}
              onChange={(e) => setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
            />
            <p className="text-sm text-gray-500 mt-2">
              分析の精度を高めるため、できるだけ詳細な情報をご入力ください（最大1000文字）
            </p>
          </div>

          {/* Process Steps */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs">
                  1
                </span>
                商材情報入力
              </span>
              <span>→</span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs">
                  2
                </span>
                AI分析完了
              </span>
              <span>→</span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs">
                  3
                </span>
                結果確認
              </span>
            </div>
          </div>

          {/* Start Analysis Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleStartAnalysis}
              disabled={!formData.productName.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 px-8"
            >
              <Zap className="h-4 w-4" />
              商材分析を開始
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
