import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface Memo {
  slug: string
  date: string
  title: string
  content: string
  techInsights?: string[]
  trendingProjects?: string[]
  edTechInnovation?: string[]
}

export async function getMemos(): Promise<Memo[]> {
  const files = fs.readdirSync(contentDir)
  const memos = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.md', ''),
        date: data.date || file.replace('.md', ''),
        title: data.title || 'AI Daily Memo',
        content,
        techInsights: data.techInsights || [],
        trendingProjects: data.trendingProjects || [],
        edTechInnovation: data.edTechInnovation || [],
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
  
  return memos
}

export async function getMemoByDate(date: string): Promise<Memo | undefined> {
  const filePath = path.join(contentDir, `${date}.md`)
  
  if (!fs.existsSync(filePath)) {
    return undefined
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content)
  
  return {
    slug: date,
    date: data.date || date,
    title: data.title || 'AI Daily Memo',
    content: String(processedContent),
    techInsights: data.techInsights || [],
    trendingProjects: data.trendingProjects || [],
    edTechInnovation: data.edTechInnovation || [],
  }
}
