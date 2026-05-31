import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cottesloe Beach Perth 2026: The Complete Guide | AutoTrip Perth',
  description: 'Cottesloe is Perth\'s most iconic beach — calm turquoise water, world-class sunsets, and the best fish and chips on the Indian Ocean. Here\'s everything you need to know for 2026.',
  keywords: ['Cottesloe Beach Perth', 'best beaches Perth WA', 'Cottesloe sunset 2026', 'is Cottesloe safe to swim', 'Perth beach guide', 'Cottesloe Beach parking'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/cottesloe-beach-perth-guide-2026' },
  openGraph: {
    title: 'Cottesloe Beach Perth 2026: The Complete Guide',
    description: 'Calm turquoise water, white sand, extraordinary sunsets, and a beach culture that defines Perth. The complete Cottesloe Beach guide for 2026.',
    url: 'https://autotrip-five.vercel.app/blog/cottesloe-beach-perth-guide-2026',
  },
};

export default function CottesloeBeachGuideBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Perth Beaches</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 27, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 25 min from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Cottesloe Beach Perth 2026: Everything You Need to Know
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Perth has more than 19 beaches within 30 minutes of the city. Locals will tell you they&apos;re all good — but they&apos;ll also tell you Cottesloe is the one. Here&apos;s why, and what to do when you get there.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'From airport', value: '25 min' },
            { label: 'Entry', value: 'Free' },
            { label: 'Patrolled', value: 'Year-round' },
            { label: 'Best sunset', value: '5–7 PM' },
          ].map((fact) => (
            <div key={fact.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
              <div className="text-base font-black text-slate-900">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="/cottesloe-beach-perth.jpg"
            alt="Cottesloe Beach Perth turquoise water and white sand at sunset"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            Cottesloe has been Perth&apos;s go-to beach since the 1890s — and in all that time, nobody has managed to build anything better. The water is turquoise, calm, and clear enough to see the sand bottom from 3 metres deep. The reef keeps the swell down. The sunsets face directly west over the Indian Ocean and are, frankly, ridiculous. And when you&apos;re done swimming, there&apos;s cold beer and fresh seafood a short walk up the beach.
          </p>
          <p>
            From Perth Airport it&apos;s 25 minutes heading west. If you&apos;ve got a hire car and a free afternoon, this is where you&apos;re going.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-5">
            <div className="text-2xl">🏖️</div>
            <div>
              <div className="font-black text-slate-900 mb-1">What makes Cottesloe different from other Perth beaches?</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                It&apos;s the reef. A natural limestone reef runs parallel to the beach about 100 metres offshore, and inside it the water is almost always calm — even on days when the more exposed northern beaches are rough. That&apos;s why locals bring their kids here, why older swimmers come every morning, and why it works as a swimming beach for pretty much everyone.
              </p>
            </div>
          </div>

          <h2>Is Cottesloe safe to swim?</h2>
          <p>
            Yes — it&apos;s one of Perth&apos;s safest ocean swimming beaches. No serious rips in the main bay under normal conditions, the reef keeps the surf down, and Surf Life Saving patrols run year-round on weekends and public holidays (and weekday mornings in summer). Swim between the flags and you&apos;re in good shape.
          </p>
          <p>
            One thing to know: the main patrolled Cottesloe Bay swimming area is the calm bit in front of the Marine Parade strip. South of the main beach, toward North Cottesloe (confusingly further south), conditions are more exposed and can produce rips. Stick to the flagged area and you&apos;ll be fine.
          </p>

          <div className="not-prose my-6 bg-slate-50 rounded-2xl p-4">
            <div className="font-bold text-slate-900 text-sm mb-1">New to Australian beach swimming?</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              The flags matter. Red and yellow flags mark the patrolled zone — always swim between them. If you see a red flag only, the beach is closed for swimming. Surf Life Saving volunteers are easy to spot in their bright yellow and red uniforms and are genuinely happy to answer questions. Australia takes beach safety seriously and it shows.
            </p>
          </div>

          <h2>The best time to visit Cottesloe</h2>

          <h3>Summer (December – March)</h3>
          <p>
            Peak beach season. Water temperature hits 22–24°C, the beach is packed on weekends, and the evening sunset crowd at the Cottesloe Beach Hotel terrace is a genuine Perth institution. Arrive early on weekend mornings — before 9 AM for a good spot on the sand, before 10 AM to guarantee parking in the main car park.
          </p>

          <h3>Autumn (March – May): the sweet spot</h3>
          <p>
            Honestly the best time to visit. Water is still warm from summer (20–22°C), the crowds have thinned dramatically, the weather is perfect — warm days, cool evenings, clear skies. March also brings <strong>Sculpture by the Sea</strong>, the annual outdoor art exhibition that lines the beachfront with over 70 large-scale sculptures from Australian and international artists. It&apos;s completely free and genuinely one of Perth&apos;s great annual events.
          </p>

          <h3>Winter (June – August)</h3>
          <p>
            Quiet, often dramatic, and still swimmable if you&apos;re the type (water around 18–19°C — not warm, but Perth winters are mild enough that some regulars don&apos;t stop). The sunsets are extraordinary year-round, and a winter evening at the Indiana Tea House with the stormy ocean in front of you is one of those Perth experiences that doesn&apos;t make the tourist brochures but absolutely should.
          </p>

          <h2>The Cottesloe sunset — what the fuss is about</h2>
          <p>
            Cottesloe faces almost due west — directly into the Indian Ocean. On a clear evening, which in Perth means most evenings for about 8 months of the year, the sky goes through shades of orange, red, and purple as the sun drops into the water. It&apos;s the kind of sunset that makes people stop mid-conversation. Perth people have grown up with this view and they still stop to watch it.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
            <div className="text-2xl">🍹</div>
            <div>
              <div className="font-black text-slate-900 mb-1">Best sunset spots, ranked</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>1. Indiana Tea House terrace</strong> — right on the sand, cocktails from 5 PM, direct ocean view. Book ahead.<br/>
                <strong>2. Cottesloe Beach Hotel upper terrace</strong> — slightly higher vantage point, same view, no booking needed for the bar area.<br/>
                <strong>3. The sand itself</strong> — bring a cold drink from the bottle shop and sit on the beach. Free and arguably the best.
              </p>
            </div>
          </div>

          <h2>Things to do at Cottesloe</h2>

          <h3>Swimming and snorkelling</h3>
          <p>
            The main bay is where most people swim. For snorkelling, bring or hire a mask and fins and head out to the reef edge about 80 metres from shore — consistent fish life, interesting underwater topography, and usually clear enough to make it worthwhile. The Marine Parade snorkel trail markers guide you through the best sections.
          </p>

          <h3>The coastal walk to Leighton Beach</h3>
          <p>
            The walk south from Cottesloe to Leighton Beach is about 4 km return and follows the limestone cliffs above the reef. The views back toward Cottesloe are excellent, and there are several lookout points above the water that are among the best spots in Perth for dolphin-watching. Resident Indo-Pacific bottlenose dolphins move through the area regularly from October to April — early morning is the best time to spot them.
          </p>

          <h2>Where to eat at Cottesloe</h2>
          <p>
            <strong>Indiana Tea House</strong> — the 1910 heritage-listed building right on the sand. Excellent seafood, good wine list, and a location that has no business being as good as it is. Worth booking ahead on weekends.
          </p>
          <p>
            <strong>Cottesloe Beach Hotel</strong> — a Perth institution that&apos;s been here longer than most of the city. Casual bar food, huge terrace, reliable beer. No reservations needed for the bar.
          </p>
          <p>
            <strong>Marine Parade fish and chips</strong> — the strip along Marine Parade has a few casual options. Get the fish and chips, find a bench with a view, and eat while watching the beach. It&apos;s not complicated and it&apos;s correct.
          </p>

          <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
            {[
              { q: 'How far from Perth Airport?', a: 'About 25–30 minutes by car heading west on the Mitchell Freeway or Stirling Highway. No direct public transport from the airport — hire car or rideshare is your best option.' },
              { q: 'Is there parking at Cottesloe?', a: 'Free car park on Marine Parade right at the beach. Fills completely by 10 AM on summer weekends. Arrive before 9 AM or park in nearby residential streets (usually unrestricted on weekends) and walk 5 minutes.' },
              { q: 'Can you see dolphins from the beach?', a: 'Yes — resident pods move through regularly, most often in the early morning from October to April. The best viewpoint is the elevated section of Marine Parade above the reef.' },
              { q: 'What facilities are there?', a: 'Full facilities: toilets, change rooms, freshwater showers, free electric barbecues, kiosk, playground, and Surf Life Saving patrols. Beach wheelchair available for loan from the SLSC (free, ID required).' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="font-black text-slate-900 text-sm mb-2">{item.q}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="not-prose my-10 bg-slate-900 text-white rounded-[2rem] p-7">
            <div className="font-black text-xl mb-5">Before you head to the beach</div>
            <ul className="space-y-3">
              {[
                'Arrive before 9 AM on summer weekends — parking fills fast and the beach gets crowded by 10',
                'Swim between the red and yellow flags — always, even if the water looks calm',
                'Book the Indiana Tea House if you want a table for sunset drinks — it fills completely',
                'Bring sunscreen: Perth UV is intense even when it doesn\'t feel hot',
                'The Sculpture by the Sea exhibition in March is free and worth timing your trip around',
                'For dolphins: early morning walk along the Marine Parade clifftop, October to April',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2>The bottom line</h2>
          <p>
            Cottesloe delivers on its reputation every single time. The water is extraordinary, the sunset is reliable, and the whole experience — swimming, eating, watching the sun go down over the Indian Ocean — feels like exactly what a Perth beach holiday is supposed to be.
          </p>
          <p>
            From Perth Airport it&apos;s 25 minutes heading west. Whether it&apos;s a morning swim, an afternoon session after Kings Park, or an evening sundowner at the Indiana Tea House — Cottesloe is always worth it.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Cottesloe is 25 minutes from the Airport</h3>
          <p className="text-slate-600 mb-6">
            Pick up your hire car at AutoTrip Perth Airport and be watching the Indian Ocean sunset at Cottesloe before dinner. Free 24/7 shuttle from all four terminals — T1 through T4.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>

      </div>
    </article>
  );
}
