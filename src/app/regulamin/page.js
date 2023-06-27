import TermsOfService from "@/sections/TermsOfService/TermsOfService";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/regulamin',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/regulamin',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/regulamin', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const Terms = () => <TermsOfService />

export default Terms;