import Calendly from "@/sections/Calendly/Calendly";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Umów się na darmową konsultację',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/konsultacja',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/konsultacja',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Umów się na darmową konsultację', 
    url: 'https://aggiesvoicelab.com/konsultacja', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const Konsultacja = () => <Calendly />

export default Konsultacja;