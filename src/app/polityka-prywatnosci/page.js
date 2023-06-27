import Privacy from "@/sections/PrivacyPolicy/PrivacyPolicy";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/polityka-prywatnosci',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/polityka-prywatnosci',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/polityka-prywatnosci', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const PrivacyPolicy = () => <Privacy />

export default PrivacyPolicy;