import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - UltraCollecte | Actualités et conseils microfinance',
  description: 'Découvrez nos articles sur la microfinance digitale, les bonnes pratiques et les innovations du secteur.',
  keywords: ['blog', 'articles', 'microfinance', 'conseils', 'bonnes pratiques', 'innovations'],
  openGraph: {
    title: 'Blog - UltraCollecte | Actualités microfinance',
    description: 'Articles et conseils d\'experts sur la microfinance digitale',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
