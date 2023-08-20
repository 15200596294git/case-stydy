/**
 * 禁用章
 */
import { ChapterConfiguration } from '@/constants'
export const banChapter = (chapterConfiguration: ChapterConfiguration[], chapters: string[]): ChapterConfiguration[] => {
  chapterConfiguration.forEach(chapter=> {
    chapter.disabled = chapters.includes(chapter.id)
  })
  return chapterConfiguration
}
