import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Werther | Barber-Shop Tuğşad Özata</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Barber-Shop Tuğşad Özata in Werther für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Werther"
        />
        <link rel="canonical" href="https://barbershop-werther.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Barber-Shop Tuğşad Özata | Premium Barbershop Werther" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Werther."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbershop-werther.de" />
        <meta property="og:image" content="https://barbershop-werther.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barber-Shop Tuğşad Özata | Premium Barbershop Werther" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://barbershop-werther.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Barber-Shop Tuğşad Özata",
            "image": "https://barbershop-werther.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ravensberger Str. 89",
              "addressLocality": "Werther",
              "postalCode": "33824",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.0769",
              "longitude": "8.4168"
            },
            "url": "https://barbershop-werther.de",
            "telephone": "+49 176 32844901",
            "openingHours": "Di-Fr 09:00-19:00, Sa 09:00-15:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/barbershopwerther",
              "https://www.instagram.com/barbershopwerther"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
