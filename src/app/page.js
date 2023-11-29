import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import Herosection from '@/components/HeroSection/Herosection'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Herosection/>
    </main>
    </>
  )
}
