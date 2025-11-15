import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RunMate - 작심삼일로 끝나는 러닝을 평생 습관으로',
  description: '실시간 AI 피드백과 유연한 챌린지로 꾸준히 달리세요. 작심삼일로 끝나는 러닝을 평생 습관으로 만드는 AI 동반자',
  keywords: ['러닝 앱', 'AI 러닝', '러닝 습관', '작심삼일', '러닝 동기부여', '팀 챌린지'],
  openGraph: {
    title: 'RunMate - 작심삼일로 끝나는 러닝을 평생 습관으로',
    description: '실시간 AI 피드백과 유연한 챌린지로 꾸준히 달리세요',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RunMate - 작심삼일로 끝나는 러닝을 평생 습관으로',
    description: '실시간 AI 피드백과 유연한 챌린지로 꾸준히 달리세요',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

