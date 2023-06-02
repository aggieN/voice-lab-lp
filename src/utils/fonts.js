import { Alexandria, Jura, Kufam, Red_Hat_Display } from "next/font/google";

export const alexandria = Alexandria({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '800']
})

export const jura = Jura({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700']
})

export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin-ext'],
  weight: ['400', '600']
})

export const kufam = Kufam({
  subsets: ['latin'],
  weight: ['400']
})
