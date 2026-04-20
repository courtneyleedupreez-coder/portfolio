/* eslint-disable import/first */
// ── Yonex
import yn1 from '../assets/yn1.png';
import yn2 from '../assets/yn2.png';
import yn3 from '../assets/yn3.png';
import yn4 from '../assets/yn4.png';
import yn5 from '../assets/yn5.png';
import yn8 from '../assets/yn8.png';

// ── Match Point
import mp1 from '../assets/image_1.png';
import mp2 from '../assets/image2.png';
import mp3 from '../assets/image3.png';
import mp4 from '../assets/image_4.png';
import mp5 from '../assets/image_5.png';
import mp6 from '../assets/image_15.png';
import mp7 from '../assets/mp7.png';
import mp8 from '../assets/mp8.png';

// ── Lizzard
import liz1 from '../assets/image_6.png';
import liz2 from '../assets/image_7.png';
import liz3 from '../assets/image_8.png';
import liz4 from '../assets/image_9.png';
import liz5 from '../assets/image10.png';
import liz6 from '../assets/image11.png';
import liz7 from '../assets/image_12.png';
import liz8 from '../assets/image_10.png';
import liz9 from '../assets/liz9.png';
import liz10 from '../assets/liz10.png';

// ── B2B LinkedIn
import b1 from '../assets/image_11.png';
import b2 from '../assets/image_13.png';
import b3 from '../assets/image_14.png';

// ── Skincare
import sk1 from '../assets/sk1.png';
import sk2 from '../assets/sk2.jpg';
import sk3 from '../assets/sk3.jpg';
import sk4 from '../assets/sk4.jpg';
import sk5 from '../assets/sk5.jpg';
import sk6 from '../assets/sk6.png';
import sk7 from '../assets/sk7.png';
import sk8 from '../assets/sk8.png';

// ── Open Pinamar
import op1 from '../assets/op1.png';
import op2 from '../assets/op2.png';
import op3 from '../assets/op3.png';
import op4 from '../assets/op4.png';
import op5 from '../assets/op5.png';
import op6 from '../assets/op6.png';
import op7 from '../assets/op7.png';
import op8 from '../assets/op8.png';
import op9 from '../assets/op9.png';

export const PROJECTS = [
  {
    slug: 'yonex',
    num: '№ 01',
    title: 'Yonex Vcore',
    titleEm: '2026.',
    category: 'Concept · Product Campaign',
    year: '2026',
    scope: 'Art direction, composite design, motion',
    tools: 'Canva Pro, Lightroom, Photoroom',
    role: 'Designer (self-initiated)',
    cover: { type: 'image', src: yn1 },
    intro:
      'A self-initiated concept campaign built around a single product render. The brief I set myself: treat this like I was the in-house designer at Yonex — teaser, launch, colourway, OOH, motion, e-commerce. One image in, a full campaign out.',
    context:
      'I wanted a piece that proved range inside a single commercial thought — not a collection of unrelated posts. The Yonex Vcore had a distinctive red I could build a full visual system around, and the product itself is dramatic enough to carry scale.',
    approach:
      'Started with the teaser (shattered glass) to build anticipation before the reveal. Then the launch split-screen, a 3D silk colourway study, a UX phone-mockup for e-commerce context, an isometric technology feature and a digital OOH treatment. The looping video and GIF extended the stills into motion without breaking the system.',
    craft:
      'Every piece shares the same spatial language — red as signal, white space treated as negative gravity, tight Helvetica-style setting. The rule I set: each format should read as part of the same campaign without repeating the same layout twice.',
    gallery: [
      { src: yn1, label: 'Teaser — new level of power' },
      { src: yn2, label: 'Launch — level up' },
      { src: yn3, label: 'Colourway — 3D silk composite' },
      { src: yn4, label: 'E-commerce — add to cart' },
      { src: yn5, label: 'Isometric technology' },
      { src: yn8, label: 'Detail — weapon of choice' },
      { type: 'video', src: '/media/yn8.mp4', label: 'Motion loop' },
      { type: 'gif', src: '/media/yn7.gif', label: 'Animated key art' },
    ],
  },
  {
    slug: 'lizzard',
    num: '№ 02',
    title: 'Lizzard South Africa',
    titleEm: 'Tumbler 2026.',
    category: 'Product Launch · Consumer',
    year: '2025',
    scope: 'Photography, photo editing, 8-post campaign',
    tools: 'Canva Pro, Lightroom, Photoroom, iPhone',
    role: 'Photographer + Designer',
    cover: { type: 'image', src: liz5 },
    intro:
      'A maximalist product launch for the Lizzard 2026 Tumbler collection. Eight original formats — Tinder swipe card, Breaking News graphic, iMessage social proof — all shot and designed by me, built as a launch toolkit rather than a feed filler.',
    context:
      'The category is saturated and the audience is Gen-Z. Generic product photography would have disappeared. The job was to make content that behaved more like meme-adjacent editorial than a paid ad.',
    approach:
      'Shot everything on iPhone with a deliberately loud wardrobe and set. Built a reusable colour/type system in Canva — pink, violet, olive, orange — then designed each post for a specific job: the Tinder card for shares, Breaking News for urgency, iMessage for social proof, the platform-layout opener for reach.',
    craft:
      'The colour system is the same across all eight posts but never appears in the same combination twice. That\'s the reason the grid feels cohesive without being repetitive — a small discipline that lets a consumer feed read like a campaign instead of a checklist.',
    gallery: [
      { src: liz1, label: 'Campaign mood board' },
      { src: liz2, label: 'Photo selection' },
      { src: liz3, label: 'NEW — product launch' },
      { src: liz4, label: 'Tinder swipe format' },
      { src: liz5, label: "Don't sit this one out" },
      { src: liz6, label: 'Breaking News' },
      { src: liz7, label: 'iMessage social proof' },
      { src: liz8, label: 'Shop online' },
      { src: liz9, label: 'Feed mockup' },
      { src: liz10, label: 'Instagram mockup' },
    ],
  },
  {
    slug: 'match-point',
    num: '№ 03',
    title: 'Match Point',
    titleEm: 'Pádel & Tenis.',
    category: 'Brand Identity · Sport',
    year: '2025',
    scope: 'Photography, identity, social system, Figma site',
    tools: 'Canva Pro, Figma, Figma Sites, Lightroom',
    role: 'Photographer + Designer + Web',
    website: 'https://dart-plot-13422837.figma.site/',
    cover: { type: 'image', src: mp1 },
    intro:
      'A full identity for a tennis and pádel club with no prior social presence. On-location photography, dual-tone Lightroom grading, a Canva Pro system and a published Figma website — from zero brand to complete digital presence.',
    context:
      'The club had a physical space and no digital identity. Most club content sits in the same visual trap: flat phone shots, mixed filters, generic type. The ask was to make something that matched the seriousness of the sport.',
    approach:
      'Shot every court and session myself, graded everything on the same dual-tone curve so the set reads as one body of work. Built a compact type and colour system — tight geometric sans, single orange accent — then extended the identity from Instagram into a full Figma site covering bookings, coaching, events and club info.',
    craft:
      'The photography discipline is the part I care most about. Wide shots composed for overlaid type, tight shots left clean — the design is already planned when the shutter clicks, not negotiated afterwards.',
    gallery: [
      { src: mp1, label: 'Pádel action' },
      { src: mp2, label: 'Mental. Technical. Footwork.' },
      { src: mp3, label: 'Courts, community, passion' },
      { src: mp4, label: 'Tournament — celebrating a win' },
      { src: mp5, label: 'Serve sequence — triple exposure' },
      { src: mp6, label: 'Game, set, match' },
      { src: mp7, label: 'Identity study' },
      { src: mp8, label: 'Feed mockup' },
    ],
    siteCard: {
      url: 'dart-plot-13422837.figma.site',
      title: 'Match Point — Club Website',
      desc: 'A full club website designed in Figma — bookings, coaching, events, club info — extending the identity from Instagram into the web.',
    },
  },
  {
    slug: 'open-pinamar',
    num: '№ 04',
    title: 'Open Pinamar',
    titleEm: 'Resort.',
    category: 'Hospitality · Speculative',
    year: '2025',
    scope: 'Photography, content system, Figma site',
    tools: 'Canva Pro, Figma, Figma Sites, Lightroom',
    role: 'Photographer + Designer + Web',
    website: 'https://canon-lapel-04498082.figma.site/',
    cover: { type: 'image', src: op3 },
    intro:
      'A speculative brief for a luxury Argentine resort: what a full social presence and website could look like if the brand had committed the budget. All photography shot on location in one day.',
    context:
      'Open Pinamar has physical product — apartments, courts, heated pool — but no designer, no photographer, no site. I pitched this as an unsolicited case: here\'s what you could do, priced as if I were already on it.',
    approach:
      'One day on location covering every corner of the resort with the final design already planned — wide shots with space for Spanish copy, detail shots for atmosphere. Warm tonal grade in Lightroom, editorial Canva layouts, then a full responsive Figma site.',
    craft:
      'Hospitality lives on trust. I kept the design restrained — generous white space, long captions, no pushy sales graphics — so the content reads like a magazine the guest would want to save rather than an ad they\'d scroll.',
    gallery: [
      { src: op1, label: 'Apartments for 4, 5 & 7' },
      { src: op2, label: '2 fast courts available' },
      { src: op3, label: '¿Dónde quedarse? Acá, obvio' },
      { src: op4, label: '¿Vamos a jugar?' },
      { src: op5, label: 'Tranquilidad — heated pool' },
      { src: op6, label: '¿Vamos o no vamos?' },
      { src: op7, label: 'Descansar también es jugar' },
      { src: op8, label: 'Feed mockup' },
      { src: op9, label: 'Stories mockup' },
    ],
    siteCard: {
      url: 'canon-lapel-04498082.figma.site',
      title: 'Open Pinamar — Resort Website',
      desc: 'A full luxury resort site designed in Figma — apartments, courts, pool, amenities. All photography shot on location.',
    },
  },
  {
    slug: 'skincare',
    num: '№ 05',
    title: 'Skincare',
    titleEm: 'Launch.',
    category: 'Beauty · Consumer',
    year: '2025',
    scope: 'Art direction, photography direction, 6 launch posts',
    tools: 'Canva Pro, Lightroom, Photoroom',
    role: 'Art Director + Designer',
    cover: { type: 'image', src: sk4 },
    intro:
      'Launch campaign for a 4-in-1 facial serum. A deliberate editorial/colour split — B&W duotone for product authority, full colour for lifestyle warmth — designed to earn saves and shares rather than scrolls.',
    context:
      'Beauty is the most saturated category on the feed. The only content that survives is content that feels like magazine work, not advertising. The split-register approach is a strategy premium beauty brands use to carry credibility and intimacy in the same campaign.',
    approach:
      'Directed the photography (styling, pose, background — planned for the final layout), then designed six posts across launch, lifestyle and social-proof formats. Deliberately tested four colour directions before committing.',
    craft:
      'Every post has a specific role — the \'new\' graphic for launch reach, the lifestyle shot for saves, the \'your new favourite brand\' for shares. The design discipline is assigning a job per post before opening Canva.',
    gallery: [
      { src: sk1, label: 'Editorial product launch' },
      { src: sk2, label: 'Facial Serum 4-in-1' },
      { src: sk3, label: 'Product scatter — lifestyle' },
      { src: sk4, label: 'Happy skin. Happy life.' },
      { src: sk5, label: 'Your new favourite skincare brand' },
      { src: sk6, label: 'The secret to your glow' },
      { src: sk7, label: 'Instagram mockup' },
      { src: sk8, label: 'OOH mockup' },
      { type: 'gif', src: '/media/sk1.gif', label: 'Animated campaign' },
      { type: 'gif', src: '/media/sk3.gif', label: 'Animated launch' },
    ],
  },
  {
    slug: 'b2b',
    num: '№ 06',
    title: 'Editorial',
    titleEm: 'on LinkedIn.',
    category: 'B2B · Thought Leadership',
    year: '2025',
    scope: '3-post editorial series',
    tools: 'Canva Pro',
    role: 'Designer',
    cover: { type: 'image', src: b1 },
    intro:
      'Editorial content for founders on LinkedIn — the same design rigour as consumer work, shifted into a restrained, credibility-first register. Built to generate replies rather than reach.',
    context:
      'Most B2B LinkedIn content is forgettable: stock photos, generic stats, no identity. The client needed to read as a thought leader, not another account posting motivational graphics.',
    approach:
      'Researched high-performing LinkedIn formats before opening Canva. Built a scalable system: fixed background, fixed type hierarchy, custom line-art illustration per topic so each post is unique but instantly recognisable. Stripped colour and photography deliberately — credibility on LinkedIn comes from clarity.',
    craft:
      'This project is in the book to prove range. Design for a B2B reader uses the same discipline as design for a consumer feed — the register is different but the decisions are made with the same care.',
    gallery: [
      { src: b1, label: '5 Hiring Mistakes Startup Founders Make' },
      { src: b2, label: "Remote hiring isn't a trend" },
      { src: b3, label: 'Formats that generate leads on LinkedIn' },
    ],
  },
];
