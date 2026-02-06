import { getMemoByDate, getMemos } from '@/lib/memo'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

export default async function MemoPage({ params }: { params: { date: string } }) {
  const memo = await getMemoByDate(params.date)
  const memos = await getMemos()

  if (!memo) {
    notFound()
  }

  // Find previous and next memo
  const currentIndex = memos.findIndex(m => m.slug === params.date)
  const previousMemo = currentIndex < memos.length - 1 ? memos[currentIndex + 1] : null
  const nextMemo = currentIndex > 0 ? memos[currentIndex - 1] : null

  return (
    <main className="min-h-screen">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
          <h1 className="text-4xl font-bold mb-2">{memo.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <time>{memo.date}</time>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div
          className="prose prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: memo.content }}
        />

        {/* Navigation */}
        <div className="flex justify-between mt-12 pt-8 border-t">
          {previousMemo && (
            <Link
              href={`/memos/${previousMemo.slug}`}
              className="flex-1 text-left"
            >
              <div className="text-sm text-muted-foreground mb-1">上一篇</div>
              <div className="font-medium">{previousMemo.title}</div>
              <div className="text-sm text-muted-foreground">{previousMemo.date}</div>
            </Link>
          )}
          <div className="flex-1"></div>
          {nextMemo && (
            <Link
              href={`/memos/${nextMemo.slug}`}
              className="flex-1 text-right"
            >
              <div className="text-sm text-muted-foreground mb-1">下一篇</div>
              <div className="font-medium">{nextMemo.title}</div>
              <div className="text-sm text-muted-foreground">{nextMemo.date}</div>
            </Link>
          )}
        </div>
      </article>
    </main>
  )
}
