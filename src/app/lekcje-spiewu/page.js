import Offer from "@/sections/Offer/Offer";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/lekcje-spiewu',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/lekcje-spiewu',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/lekcje-spiewu', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const LekcjeSpiewu = () => <Offer />

export default LekcjeSpiewu;