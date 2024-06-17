
import { Inter, Roboto_Mono, Ubuntu } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const ubuntu = Ubuntu({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ubuntu',
    weight: '500'
})