
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { Font } from '@fontsource/saira-stencil-one'
import BgContianerClr from './components/BgContianerClr'
import Nav from './components/Nav'
import Footer from './components/Footer'
// ("latin" | "latin-ext" | "vietnamese")[]; 
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'h-Quiz',
  description: 'Create and share engaging quizzes effortlessly with h-Quiz. Empower yourself, educators, and organizations to spark curiosity and test knowledge through interactive quizzes. Craft custom quizzes with various question types, multimedia elements, and real-time feedback. Seamlessly distribute your quizzes to your audience and gain insights with comprehensive analytics. Join h-Quiz today and revolutionize the way quizzes are created and enjoyed.',
}








export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className }>

      <BgContianerClr >
    
      <main className='m-[8px] sm:m-[16px] md:m-[32px] lg:[64px]'>
<Nav  />
      {children}
  
      <Footer />

      </main>
      </BgContianerClr>
       </body>
    </html>
  )
}
