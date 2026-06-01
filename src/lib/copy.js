// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — A landing page TELJES látható szövegének forrása.
// Doc §7: Semmilyen szöveg nincs a komponensekbe égetve. Ha a képernyőn van, akkor itt is.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (A Layout.astro olvassa) ────────────────────────────────
  metadata: {
    lang: 'hu',
    title: '500 prémium koktélrecept otthonra',
    description:
      'Buli-kész koktélreceptek — egyszerű hozzávalók, gyors elkészítés. Nyűgözd le a barátaidat, spórolj a drága bárokon és légy te az este sztárja. Exkluzív bónuszokkal.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'A KOKTÉLOK VILÁGA',
  },

  // ── 1. TIMER STICKY FEJLÉC ──────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Az ajánlat lejár:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO SZEKCIÓ ─────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Exkluzív Ajánlat',
    titleHighlight: '500 Zseniális Koktélrecept',
    titleConnector: 'a Te',
    titleHighlightGreen: 'Szórakozásodért',
    titleEnd: 'Még ha teljesen kezdő is vagy',
    deliveryLabel: 'Azonnali hozzáférés a következőn keresztül:',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'Email', kind: 'email' },
    ],
    videoAlt: 'A 500 otthoni koktélrecept csomag bemutatása',
    ctaLabel: '✅ KÉREM A RECEPTEKET MOST',
    ctaSub: '🔒 100% biztonságos vásárlás • Azonnali hozzáférés',
  },

  // ── 3. ELŐNYÖK ──────────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Receptek, amiket a maximális élvezetre terveztünk — egyszerű hozzávalók, gyors elkészítés,',
    introStrong: 'elképesztő ízvilág és látvány, amivel minden vendégedet lenyűgözöd!',
    items: [
      'Bármilyen koktélt elkészíteni előzetes tapasztalat nélkül',
      'Varázsolni profi eszközök és drága konyha nélkül',
      'Letesztelt recepteket élvezni könnyen beszerezhető hozzávalókból',
      'A társaság sztárjává válni minden házibulin, nyaraláson vagy baráti összejövetelen',
    ],
    ctaLabel: '🍹 KÉREM A RECEPTEKET MOST',
  },

  // ── 4. RECEPT KÖRHintA (CAROUSEL) ───────────────────────────────────────────
  carousel: {
    title: '🍹 Íme néhány recept, amit a barátaiddal',
    titleHighlight: 'élvezhetsz majd!',
    slides: [
      { caption: 'Édes csók', alt: 'Édes csók koktél' },
      {
        caption: 'Spanyol bor maracujával',
        alt: 'Spanyol bor maracujával koktél',
      },
      { caption: 'Krémes MaracuBeats', alt: 'Krémes MaracuBeats koktél' },
      { caption: 'Halls cukorkás koktél', alt: 'Halls cukorkás koktél' },
      { caption: 'Nyári szellő', alt: 'Nyári szellő koktél' },
      {
        caption: 'Caipirinha maracujával és kávéval',
        alt: 'Caipirinha maracujával és kávéval koktél',
      },
    ],
    prevLabel: 'Előző dia',
    nextLabel: 'Következő dia',
    dotLabel: 'Ugrás a diára',
  },

  // ── 5. BÓNUSZOK ─────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 És persze, ne feledkezzünk meg a',
    titleHighlight: 'BÓNUSZOKRÓL!',
    items: [
      {
        tag: '1. Bónusz',
        title: '50 Recept alkoholos shotokhoz és puncsokhoz',
        description: 'Tökéletes partitalok, amiket gyorsan összedobhatsz és megoszthatsz a társasággal.',
        alt: '50 Recept alkoholos shotokhoz és puncsokhoz',
      },
      {
        tag: '2. Bónusz',
        title: 'Okos bevásárlólista — hogyan spórolj',
        description:
          'Tudd meg pontosan, mit vegyél a top koktélokhoz, anélkül, hogy a gatyádat is otthagynád a drága bárokban.',
        alt: 'Bevásárlólista és kalkulátor',
      },
      {
        tag: '3. Bónusz',
        title: '✅ Útmutató: Hogyan szervezz tökéletes koktélozós estét',
        description: 'Kész ötletek és lépések, hogyan teremts felejthetetlen élményt és nyűgözd le a vendégeket.',
        alt: 'Útmutató házibulihoz',
      },
      {
        tag: '4. Bónusz',
        title: 'Videós oktatóanyag: Díszíts és tálalj úgy, mint a profik',
        description:
          'Lest el a gyönyörű tálalás titkait, ami az egyszerű italt egy 5 csillagos mesterművé varázsolja.',
        alt: 'Videós oktatóanyag koktélok díszítéséhez',
      },
    ],
  },

  // ── 6. ÁRAZÁS ───────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'precos',
    title: 'Válaszd ki, hogyan szeretnél ma belevágni:',
    complete: {
      badge: '⭐ Legnépszerűbb',
      title: 'Teljes Csomag: 500+ Koktélrecept',
      descriptionLead: '500+ recept elképesztő otthoni koktélokhoz + az összes',
      descriptionStrong: 'exkluzív bónusz,',
      descriptionTail: 'hogy te lehess a legjobb házi mixer.',
      mockupAlt: 'A 500 receptes Teljes Csomag látványterve',
      includesLabel: '🎁 Az összes bónuszt tartalmazza:',
      items: [
        '500+ recept prémium koktélokhoz',
        'Lista a drága italok olcsóbb alternatíváival',
        'Útmutató az okos bevásárláshoz',
        'Gyakorlati útmutató a tökéletes házibulihoz',
        'Videós anyag a profi díszítéshez',
      ],
      strikePrice: 'Normál ár: 9 990 Ft',
      price: '2 990 Ft',
      priceNote: 'azonnali hozzáférés',
      ctaLabel: '🛒 KÉREM A TELJES CSOMAGOT',
      footer: '✅ Azonnali hozzáférés · Email + WhatsApp · 14 napos garancia',
    },
  },

  // ── 7. GARANCIA ─────────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14 napos pénzvisszafizetési garancia',
    description:
      'Ha bármilyen okból nem lennél lenyűgözve, az utolsó fillérig visszafizetjük az árát. Nincsenek kérdések, nincs felesleges idegeskedés.',
  },

  // ── 8. GYIK (Gyakran Ismételt Kérdések) ─────────────────────────────────────
  faq: {
    title: 'Gyakran Ismételt',
    titleHighlight: 'Kérdések:',
    items: [
      {
        q: 'Kell tapasztalat ahhoz, hogy megcsináljam őket?',
        a: 'Egyáltalán nem! A receptek pofonegyszerűek, bárki el tudja készíteni őket, még akkor is, ha életedben nem kevertél még koktélt.',
      },
      {
        q: 'Szükségem lesz drága shakerekre és profi felszerelésre?',
        a: 'Dehogy! Mindent meg tudsz csinálni otthon olyan egyszerű eszközökkel, amik már most is ott vannak a konyhádban.',
      },
      {
        q: 'Milyen alkalmakhoz illenek ezek a koktélok?',
        a: 'Bármihez! Egy húzós munkanap utáni lazítástól kezdve, egy romantikus vacsorán át az őrült házibulikig vagy nyaralásokig.',
      },
      {
        q: 'Drágák a hozzávalók?',
        a: 'Nem. Az okos bevásárlólistánkkal megtanulod, hogyan érj el prémium ízvilágot a sarki szupermarketben kapható, megfizethető termékekből.',
      },
      {
        q: 'Hogyan kapom meg a csomagot vásárlás után?',
        a: 'A hozzáférés azonnali! Amint átmegy a fizetés, mindent megkapsz egyenesen az e-mail címedre és WhatsAppra.',
      },
      {
        q: 'Van garancia arra az esetre, ha nem tetszik?',
        a: 'Naná! Teljes, 14 napos garanciád van. Ha nem vagy elégedett, 100%-ban visszatérítjük a pénzedet.',
      },
    ],
  },

  // ── 9. SÜRGŐSSÉG ────────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Ne halogasd — közeleg a hétvége, és vele egy újabb unalmas este. Változtass ezen még ma!',
  },

  // ── 10. VÉGSŐ CTA ───────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 KÉREM A HOZZÁFÉRÉST A 500 RECEPTHEZ MOST',
    subText: '🔒 Azonnali hozzáférés • 14 napos garancia • Biztonságos fizetés',
  },

  // ── 11. BIZTONSÁG (jelvények) ───────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Védelem' },
      { icon: '💳', label: 'Biztonságos fizetés' },
      { icon: '📲', label: 'Azonnali hozzáférés' },
    ],
  },

  // ── 12. FOOTER ──────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · A KOKTÉLOK VILÁGA · Minden jog fenntartva',
  },

  // ── A11Y / kisegítő szövegek ──
  a11y: {
    skipToContent: 'Ugrás a fő tartalomra',
  },
};