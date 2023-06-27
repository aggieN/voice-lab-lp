import AboutMe from "@/sections/AboutMe/AboutMe";
import Wrapper from "@/components/Wrapper/Wrapper";

export const metadata = {
  title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie',
  description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.',
  alternates: {
    canonical: 'https://aggiesvoicelab.com/o-mnie',
    languages: {
      'pl-PL': 'https://aggiesvoicelab.com/o-mnie',
    },
  },
  openGraph: {
    title: 'Aggie\'s Voice Lab | Lekcje śpiewu w Warszawie', 
    description: 'Szkoła śpiewu stworzona, aby wspierać Cię w poszerzaniu granic Twojego głosu.', 
    url: 'https://aggiesvoicelab.com/o-mnie', 
    siteName: 'Aggie\'s Voice Lab', 
    images: ['/image.png']
  }
}

const OMnie = () => <Wrapper><AboutMe /></Wrapper>

export default OMnie;