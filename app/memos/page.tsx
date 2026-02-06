import { getMemos } from '@/lib/memo'
import { MemoCard } from '@/components/memo-card'

export default async function MemosPage() {
  const memos = await getMemos()

  return (
    <main className="min-h-screen">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold mb-2">
            📝 所有观察
          </h1>
          <p className="text-muted-foreground">
            浏览所有 AI 创业圈观察记录
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memos.map((memo) => (
            <MemoCard
              key={memo.slug}
              slug={memo.slug}
              date={memo.date}
              title={memo.title}
              techInsights={memo.techInsights}
              trendingProjects={memo.trendingProjects}
              edTechInnovation={memo.edTechInnovation}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
