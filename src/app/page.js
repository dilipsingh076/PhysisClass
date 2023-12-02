import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import HeroSection from '@/app/Home/Page'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <HeroSection/>
    </main>
    </>
  )
}