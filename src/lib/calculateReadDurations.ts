export const calculateReadDuration = (
  content: string,
  wordsPerMinute: number = 200,
): number => {
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
