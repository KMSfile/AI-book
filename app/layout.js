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
          AI로 나만의 책 만들기!
        </div>

        {children}
        
      </body>
    </html>
  )
}
