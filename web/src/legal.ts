import { text, type Lang } from './i18n';

const name = import.meta.env.PUBLIC_OPERATOR_NAME?.trim();
const address = import.meta.env.PUBLIC_OPERATOR_ADDRESS?.trim();
const email = import.meta.env.PUBLIC_CONTACT_EMAIL?.trim();
export const operatorReady = Boolean(name && address && email);

const operator = [name, address, email].filter(Boolean).join('\n');
const missing = {
  de: 'Die Betreiber- und Kontaktdaten müssen vor der Veröffentlichung ergänzt werden.',
  en: 'Operator and contact details must be supplied before publication.',
  pl: 'Dane operatora i dane kontaktowe wymagają uzupełnienia przed publikacją.',
};
const content = {
  de: {
    privacy: [
      'Verantwortlich für die Verarbeitung personenbezogener Daten ist der unten genannte Betreiber.',
      'Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter Cloudflare technische Verbindungsdaten, etwa IP-Adresse und Zugriffszeit, zur Auslieferung und Absicherung der Website. Rechtsgrundlage ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO.',
      'Wenn du uns kontaktierst, nutzen wir deine Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). Wir speichern sie, solange sie zur Bearbeitung erforderlich sind oder gesetzliche Aufbewahrungspflichten bestehen.',
      'Werbung kann Google-Dienste einbinden. Diese können Verbindungsdaten verarbeiten und Cookies einsetzen. Soweit erforderlich, erfolgt dies mit Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Partnerlinks führen zu externen Anbietern mit eigenen Datenschutzbestimmungen.',
      'Du hast nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Du kannst eine Einwilligung für die Zukunft widerrufen und dich bei einer Datenschutzaufsichtsbehörde beschweren.',
    ],
    terms: ['RespawnRadar bietet redaktionelle Informationen. Preise, Verfügbarkeit und Konditionen können sich ändern. Für Käufe gelten die Angaben und Bedingungen des jeweiligen Anbieters.', 'Gesetzliche Verbraucherrechte und zwingende Haftungsvorschriften bleiben unberührt.'],
    about: ['RespawnRadar berichtet auf Deutsch, Englisch und Polnisch über Spiele, Hardware und Angebote. Beiträge können mit KI erstellt werden. Hinweise zu Fehlern sind über die Kontaktseite willkommen.', 'Einige Links sind Partnerlinks. Bei einem Kauf können wir eine Provision erhalten.'],
    contact: ['Schreib uns bei Fragen, Fehlerhinweisen oder Anfragen zum Datenschutz.'],
    impressum: ['Angaben zum Betreiber gemäß § 5 DDG, soweit anwendbar.'],
  },
  en: {
    privacy: [
      'The operator listed below is the controller of personal data on this site.',
      'When you visit the site, hosting provider Cloudflare processes connection information, such as IP addresses and access times, to deliver and protect the site. Our legal basis is legitimate interest under GDPR Article 6(1)(f).',
      'If you contact us, we use your information to respond under GDPR Article 6(1)(b) or (f). We retain it for as long as needed to handle the request or meet legal retention requirements.',
      'Advertising can load Google services, which may process connection data and use cookies. Where required, this is based on consent under GDPR Article 6(1)(a). Affiliate links lead to external providers with their own privacy policies.',
      'Under the GDPR you may have rights of access, rectification, erasure, restriction, portability, and objection. You may withdraw consent for future processing and complain to a data protection authority.',
    ],
    terms: ['RespawnRadar provides editorial information. Prices, stock, and offers can change. Purchases are governed by the seller’s terms and listings.', 'Mandatory consumer protections and statutory liability rules apply.'],
    about: ['RespawnRadar covers games, hardware and deals in German, English, and Polish. Articles may be AI-assisted. Use the contact page to report errors.', 'Some links are affiliate links. We may receive a commission if you buy something.'],
    contact: ['Get in touch with questions, corrections, or privacy requests.'],
  },
  pl: {
    privacy: [
      'Administratorem danych osobowych jest operator wskazany poniżej.',
      'Podczas wizyty dostawca hostingu Cloudflare przetwarza dane połączenia, takie jak adres IP i czas dostępu, w celu dostarczenia i ochrony strony. Podstawą jest uzasadniony interes zgodnie z art. 6 ust. 1 lit. f RODO.',
      'Dane podane podczas kontaktu przetwarzamy w celu odpowiedzi na zgłoszenie (art. 6 ust. 1 lit. b lub f RODO). Przechowujemy je przez czas rozpatrywania zgłoszenia lub wymagany przepisami.',
      'Reklamy mogą wczytywać usługi Google, które mogą przetwarzać dane połączenia i używać plików cookie. Gdy jest to wymagane, podstawą jest zgoda (art. 6 ust. 1 lit. a RODO). Linki partnerskie prowadzą do serwisów z własnymi politykami prywatności.',
      'Na zasadach RODO przysługuje Ci prawo dostępu, sprostowania, usunięcia, ograniczenia, przenoszenia danych i sprzeciwu. Możesz wycofać zgodę na przyszłość i złożyć skargę do organu nadzorczego.',
    ],
    terms: ['RespawnRadar udostępnia treści informacyjne. Ceny, dostępność i warunki mogą się zmienić. Zakupy podlegają ofercie i regulaminowi sprzedawcy.', 'Obowiązują ustawowe prawa konsumenta i bezwzględnie obowiązujące zasady odpowiedzialności.'],
    about: ['RespawnRadar opisuje gry, sprzęt i okazje po niemiecku, angielsku i polsku. W tworzeniu artykułów może pomagać AI. Błędy zgłaszaj przez stronę kontaktową.', 'Niektóre odnośniki to linki partnerskie. Możemy otrzymać prowizję od zakupu.'],
    contact: ['Napisz do nas w sprawie pytań, sprostowań lub ochrony danych.'],
  },
};
type Page = { title: string; paragraphs: string[] };
export const legal = Object.fromEntries(
  (Object.keys(content) as Lang[]).map(lang => {
    const pages = Object.entries(content[lang]).map(([slug, paragraphs]) => [
      slug,
      {
        title: text[lang][slug as keyof typeof content.de],
        paragraphs: ['privacy', 'contact', 'impressum'].includes(slug) ? [...paragraphs, operatorReady ? operator : missing[lang]] : paragraphs,
      },
    ]);
    return [lang, Object.fromEntries(pages)];
  }),
) as Record<Lang, Record<string, Page>>;
