export const languages = ['de', 'en', 'pl'] as const;
export type Lang = typeof languages[number];
export const names = { de: 'Deutsch', en: 'English', pl: 'Polski' };
export const legalPages = ['privacy', 'terms', 'about', 'contact', 'impressum'] as const;
export const text = {
  de: {
    headline: 'Gaming im Blick.', intro: 'Spiele, Hardware und Angebote. Was gerade zählt, auf einen Blick.',
    latest: 'Aktuelle Artikel', read: 'Artikel lesen', faq: 'Häufige Fragen', offers: 'Angebote vergleichen',
    disclosure: 'Partnerlinks können uns eine Provision einbringen.', close: 'Anzeige schließen', ad: 'Anzeige',
    game: 'Spiele', hardware: 'Hardware', deals: 'Angebote',
    privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', about: 'Über uns', contact: 'Kontakt', impressum: 'Impressum',
  },
  en: {
    headline: 'Gaming in focus.', intro: 'Games, hardware, and deals. Find out what matters right now.',
    latest: 'Latest articles', read: 'Read article', faq: 'Frequently asked questions', offers: 'Compare offers',
    disclosure: 'We may earn a commission through affiliate links.', close: 'Close advertisement', ad: 'Advertisement',
    game: 'Games', hardware: 'Hardware', deals: 'Deals',
    privacy: 'Privacy policy', terms: 'Terms of use', about: 'About', contact: 'Contact', impressum: 'Legal notice',
  },
  pl: {
    headline: 'Gry na celowniku.', intro: 'Gry, sprzęt i okazje. Sprawdź, co jest teraz na czasie.',
    latest: 'Najnowsze artykuły', read: 'Czytaj artykuł', faq: 'Często zadawane pytania', offers: 'Porównaj oferty',
    disclosure: 'Linki partnerskie mogą przynieść nam prowizję.', close: 'Zamknij reklamę', ad: 'Reklama',
    game: 'Gry', hardware: 'Sprzęt', deals: 'Okazje',
    privacy: 'Polityka prywatności', terms: 'Warunki korzystania', about: 'O nas', contact: 'Kontakt', impressum: 'Informacje prawne',
  },
};
