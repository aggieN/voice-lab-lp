import Pricing from "@/sections/Pricing/Pricing";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie ',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/cennik',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/cennik',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/cennik', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const Cennik = () => <Pricing />

export default Cennik;