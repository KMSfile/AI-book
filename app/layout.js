import './globals.css'
import Link from "next/link"

export const metadata = {
  title: 'AI Book',
  description: '당신만의 책을 만들어보세요!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/Rendombook">랜덤북</Link>
          <Link href="/Bookmark">북마크</Link>
        </div>

        {children}
      </body>
    </html>
  )
}
