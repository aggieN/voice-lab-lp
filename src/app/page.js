import Hero from "@/sections/Hero/Hero";
import Intro from "@/sections/Intro/Intro"

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
    </main>
  )
}
