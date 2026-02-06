import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

interface MemoCardProps {
  slug: string
  date: string
  title: string
  techInsights?: string[]
  trendingProjects?: string[]
  edTechInnovation?: string[]
}

export function MemoCard({
  slug,
  date,
  title,
  techInsights,
  trendingProjects,
  edTechInnovation,
}: MemoCardProps) {
  return (
    <Link href={`/memos/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            <time>{date}</time>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {techInsights && techInsights.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm">🔬 技术观察</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {techInsights.slice(0, 3).map((insight, i) => (
                    <li key={i} className="truncate">• {insight}</li>
                  ))}
                </ul>
              </div>
            )}

            {trendingProjects && trendingProjects.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm">🔥 热度项目</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {trendingProjects.slice(0, 3).map((project, i) => (
                    <li key={i} className="truncate">• {project}</li>
                  ))}
                </ul>
              </div>
            )}

            {edTechInnovation && edTechInnovation.length > 0 && (
              <div>
                <h4 className="font-medium mb-2 text-sm">📚 教育创新</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {edTechInnovation.slice(0, 3).map((item, i) => (
                    <li key={i} className="truncate">• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
