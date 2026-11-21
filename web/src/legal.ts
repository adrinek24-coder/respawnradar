import type { Lang } from './i18n';

export type LegalPage = {
  title: string;
  paragraphs: string[];
};

export const operatorReady = true;

const SITE_NAME = 'RespawnPing';
const SITE_URL = 'https://respawnping.com';
const CONTACT_EMAIL = 'contact@respawnping.com';
const OPERATOR_NAME = 'RespawnPing Media (Poland)';

export const legal: Record<Lang, Record<string, LegalPage>> = {
  pl: {
    privacy: {
      title: 'Polityka prywatności',
      paragraphs: [
        `Niniejsza Polityka prywatności określa zasady przetwarzania danych oraz korzystania z plików cookies w serwisie ${SITE_NAME} (${SITE_URL}).`,
        `1. Administrator danych\nAdministratorem serwisu jest ${OPERATOR_NAME}. Kontakt w sprawach ochrony danych osobowych: ${CONTACT_EMAIL}.`,
        `2. Hosting i logi techniczne (Cloudflare)\nSerwis działa na infrastrukturze Cloudflare Pages. Podczas przeglądania strony automatycznie przetwarzane są podstawowe dane techniczne (adres IP, typ przeglądarki, czas żądania) w celu zapewnienia bezpieczeństwa, ochrony przed atakami DDoS oraz stabilności witryny (podstawa: art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora).`,
        `3. Osadzone materiały wideo (YouTube)\nArtykuły mogą zawierać osadzone filmy z YouTube w trybie rozszerzonej prywatności (youtube-nocookie.com). Połączenie z serwerami Google Ireland Ltd. oraz ewentualne zapisanie plików cookies następuje dopiero w momencie uruchomienia odtwarzacza przez użytkownika.`,
        `4. Linki afiliacyjne i reklamy\nSerwis zawiera linki afiliacyjne (partnerskie) do sklepów z grami i sprzętem oraz boksy reklamowe. Kliknięcie linku partnerskiego może wiązać się z zapisaniem pliku cookie przez partnera w celu rozliczenia prowizji — nie generuje to żadnych dodatkowych kosztów dla użytkownika.`,
        `5. Prawa użytkownika\nZgodnie z RODO przysługuje Ci prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).`,
      ],
    },
    terms: {
      title: 'Warunki korzystania',
      paragraphs: [
        `Korzystając z serwisu ${SITE_NAME} (${SITE_URL}), akceptujesz poniższe warunki.`,
        `1. Charakter treści\nWszystkie poradniki, opisy mechanik, glitchy, sposobów na walutę w grach oraz zestawienia sprzętowe mają charakter wyłącznie informacyjny i rozrywkowy. Wydawcy gier regularnie publikują aktualizacje (patche), dlatego ${SITE_NAME} nie gwarantuje bezterminowego działania opisanych metod ani aktualności cen promocyjnych.`,
        `2. Prawa autorskie i znaki towarowe\n${SITE_NAME} jest niezależnym serwisem gamingowym i nie jest powiązany ani sponsorowany przez wydawców opisywanych gier (m.in. Rockstar Games, Microsoft, Sony, Nintendo, Valve). Wszystkie nazwy gier, znaki towarowe i materiały źródłowe należą do ich prawowitych właścicieli.`,
        `3. Linki zewnętrzne i afiliacja\nSerwis zawiera odnośniki do witryn trzecich, w tym linki partnerskie. Nie ponosimy odpowiedzialności za treści, ceny, dostępność produktów ani polityki prywatności zewnętrznych serwisów.`,
        `4. Zgłaszanie błędów i naruszeń\nJeśli zauważysz błąd w poradniku lub uważasz, że jakakolwiek treść narusza Twoje prawa autorskie, napisz na adres ${CONTACT_EMAIL} — niezwłocznie zweryfikujemy i poprawimy lub usuniemy materiał.`,
      ],
    },
    about: {
      title: 'O nas',
      paragraphs: [
        `${SITE_NAME} to niezależny, wielojęzyczny portal gamingowy stworzony dla graczy szukających konkretnych odpowiedzi bez zbędnego lania wody.`,
        `Skupiamy się na tym, co naprawdę liczy się w trakcie rozgrywki: dokładnych lokalizacjach, sprawdzonych metodach na szybki progres, ukrytych sekretach, poradnikach sprzętowych oraz najciekawszych okazjach cenowych.`,
        `Publikujemy w trzech językach (polskim, angielskim i niemieckim), łącząc szybki monitoring trendów ze świata gier z przejrzystymi instrukcjami krok po kroku i materiałami wideo.`,
        `Serwis utrzymuje się z programów partnerskich (afiliacji) oraz reklam, dzięki czemu wszystkie poradniki są całkowicie darmowe.`,
      ],
    },
    contact: {
      title: 'Kontakt',
      paragraphs: [
        `Masz pytanie, znalazłeś błąd w poradniku, chcesz zaproponować temat lub nawiązać współpracę? Napisz do nas bezpośrednio.`,
        `Redakcja i sprawy techniczne: ${CONTACT_EMAIL}`,
        `Prywatność (RODO) i zgłoszenia praw autorskich (DMCA): ${CONTACT_EMAIL}`,
        `Operator serwisu: ${OPERATOR_NAME}`,
      ],
    },
  },

  en: {
    privacy: {
      title: 'Privacy Policy',
      paragraphs: [
        `This Privacy Policy explains how ${SITE_NAME} (${SITE_URL}) processes technical data and cookies when you visit our website.`,
        `1. Data Controller\nThis website is operated by ${OPERATOR_NAME}. For privacy inquiries, contact us at: ${CONTACT_EMAIL}.`,
        `2. Hosting & Server Logs (Cloudflare)\nThis site is hosted on Cloudflare Pages. Technical access data (IP address, browser type, request timestamp) is processed automatically to maintain security, prevent DDoS attacks, and ensure reliable delivery (Art. 6(1)(f) GDPR – legitimate interest).`,
        `3. Embedded YouTube Videos\nSelected guides include embedded YouTube videos in privacy-enhanced mode (youtube-nocookie.com). Data is transmitted to Google Ireland Ltd. only when you actively play a video.`,
        `4. Affiliate Links & Advertising\n${SITE_NAME} includes affiliate links to gaming retailers and advertising slots. Clicking an affiliate link may set a partner cookie to attribute commissions at no extra cost to you.`,
        `5. Your Rights\nUnder the GDPR, you have the right to request access, rectification, erasure, or restriction of your personal data, as well as the right to lodge a complaint with a supervisory authority.`,
      ],
    },
    terms: {
      title: 'Terms of Use',
      paragraphs: [
        `By accessing ${SITE_NAME} (${SITE_URL}), you agree to these Terms of Use.`,
        `1. Informational Purpose\nAll game guides, walkthroughs, glitches, money methods, and hardware tips are provided for informational and entertainment purposes only. Game developers frequently release patches, so we cannot guarantee that every method or deal remains active indefinitely.`,
        `2. Trademarks & Intellectual Property\n${SITE_NAME} is an independent gaming media site and is not affiliated with or endorsed by game publishers. All game titles, trademarks, and third-party media belong to their respective owners.`,
        `3. External & Affiliate Links\nOur pages contain links to third-party websites, including affiliate links. We are not responsible for the content, pricing, availability, or privacy practices of external sites.`,
        `4. Corrections & Takedowns\nIf you spot an error or believe content infringes your copyright, contact ${CONTACT_EMAIL} for prompt review and resolution.`,
      ],
    },
    about: {
      title: 'About Us',
      paragraphs: [
        `${SITE_NAME} is an independent, multilingual gaming portal built for players who want fast, actionable answers without filler.`,
        `We cover game guides, exact locations, progression methods, glitches, hardware recommendations, and gaming deals across English, German, and Polish editions.`,
        `Our content is supported through affiliate partnerships and advertising, keeping all guides free to access for every player.`,
      ],
    },
    contact: {
      title: 'Contact',
      paragraphs: [
        `Questions, guide corrections, partnership inquiries, or copyright notices? Reach out directly.`,
        `General & Editorial Contact: ${CONTACT_EMAIL}`,
        `Privacy (GDPR) & Copyright / DMCA: ${CONTACT_EMAIL}`,
        `Site Operator: ${OPERATOR_NAME}`,
      ],
    },
  },

  de: {
    privacy: {
      title: 'Datenschutzerklärung',
      paragraphs: [
        `Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten beim Besuch von ${SITE_NAME} (${SITE_URL}).`,
        `1. Verantwortlicher\nVerantwortlich für diese Website ist ${OPERATOR_NAME}. Kontakt für Datenschutzanfragen: ${CONTACT_EMAIL}.`,
        `2. Hosting & Server-Logfiles (Cloudflare)\nDiese Website wird über Cloudflare Pages bereitgestellt. Beim Aufruf werden technisch notwendige Verbindungsdaten (IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) zur Sicherstellung der Betriebssicherheit und Abwehr von Angriffen verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).`,
        `3. Eingebettete YouTube-Videos\nEinzelne Guides binden YouTube-Videos im erweiterten Datenschutzmodus (youtube-nocookie.com) ein. Erst beim Abspielen eines Videos werden Daten an Google Ireland Ltd. übertragen.`,
        `4. Affiliate-Links & Werbung\nUnsere Beiträge enthalten Affiliate-Links (Partnerlinks) und Werbeflächen. Beim Klick auf einen Affiliate-Link kann der jeweilige Partner ein Cookie zur Provisionszuordnung setzen – für Sie entstehen dabei keine Mehrkosten.`,
        `5. Ihre Rechte\nSie haben nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.`,
      ],
    },
    terms: {
      title: 'Nutzungsbedingungen',
      paragraphs: [
        `Mit der Nutzung von ${SITE_NAME} (${SITE_URL}) erklären Sie sich mit den folgenden Bedingungen einverstanden.`,
        `1. Informationszweck\nAlle Gaming-Guides, Tipps, Glitches, Hardware-Empfehlungen und Deals dienen ausschließlich zu Informations- und Unterhaltungszwecken. Da Spiele regelmäßig gepatcht werden, übernehmen wir keine Gewähr für die dauerhafte Funktionalität einzelner Methoden oder die Aktualität von Angebotspreisen.`,
        `2. Marken- und Urheberrechte\n${SITE_NAME} ist ein unabhängiges Gaming-Portal und steht in keiner offiziellen Verbindung zu Spielepublishern. Alle genannten Spieltitel, Marken und Logos sind Eigentum der jeweiligen Rechteinhaber.`,
        `3. Externe Links & Affiliate-Hinweis\nDiese Website enthält Links zu externen Websites Dritter (einschließlich Affiliate-Links). Für deren Inhalte, Preise und Datenschutzbestimmungen übernehmen wir keine Haftung.`,
      ],
    },
    about: {
      title: 'Über uns',
      paragraphs: [
        `${SITE_NAME} ist ein unabhängiges, mehrsprachiges Gaming-Portal für Spieler, die schnelle und praxisnahe Lösungen ohne Umwege suchen.`,
        `Wir liefern Guides, Fundorte, Methoden, Hardware-Tipps und Gaming-Deals auf Deutsch, Englisch und Polnisch.`,
        `Die Finanzierung erfolgt über Affiliate-Partnerschaften und Werbung, sodass alle Inhalte kostenlos zugänglich bleiben.`,
      ],
    },
    contact: {
      title: 'Kontakt',
      paragraphs: [
        `Fragen, Korrekturen zu Guides, Kooperationsanfragen oder rechtliche Hinweise erreichen uns direkt per E-Mail.`,
        `E-Mail: ${CONTACT_EMAIL}`,
        `Betreiber: ${OPERATOR_NAME}`,
      ],
    },
    impressum: {
      title: 'Impressum',
      paragraphs: [
        `Angaben gemäß § 5 DDG:`,
        `${OPERATOR_NAME}`,
        `Kontakt:\nE-Mail: ${CONTACT_EMAIL}\nWebsite: ${SITE_URL}`,
        `Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.`,
      ],
    },
  },
};
