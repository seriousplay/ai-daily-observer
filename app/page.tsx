import { getMemos } from '@/lib/memo'
import { MemoCard } from '@/components/memo-card'

export default async function Home() {
  const memos = await getMemos()
  const latestMemo = memos[0]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold mb-2">
            🤖 AI Daily Observer
          </h1>
          <p className="text-muted-foreground text-lg">
            AI 创业圈每日观察 · 前沿技术 · 热度项目 · 教育创新
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Latest Memo */}
        {latestMemo && (
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">⭐</span>
              <h2 className="text-2xl font-bold">最新观察</h2>
            </div>
            <MemoCard
              slug={latestMemo.slug}
              date={latestMemo.date}
              title={latestMemo.title}
              techInsights={latestMemo.techInsights}
              trendingProjects={latestMemo.trendingProjects}
              edTechInnovation={latestMemo.edTechInnovation}
            />
          </section>
        )}

        {/* All Memos */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">📝</span>
            <h2 className="text-2xl font-bold">历史记录</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memos.slice(1).map((memo) => (
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
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 AI Daily Observer. Made with ❤️</p>
      </footer>
    </main>
  )
}
