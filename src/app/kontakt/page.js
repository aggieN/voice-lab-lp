import Contact from "@/sections/Contact/Contact";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/kontakt',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/kontakt',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/kontakt', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const Kontakt = () => <Contact />

export default Kontakt;