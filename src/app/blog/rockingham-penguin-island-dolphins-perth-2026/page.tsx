import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rockingham & Penguin Island 2026: Swim with Wild Dolphins Near Perth | AutoTrip Perth',
  description: 'Rockingham is 45 minutes south of Perth — swim with wild dolphins at Penguin Island, see fairy penguins up close, and explore a coastline that rarely makes the tourist brochures. 2026 guide.',
  keywords: ['Rockingham Penguin Island Perth', 'swim with dolphins Perth', 'Penguin Island day trip', 'Rockingham day trip from Perth', 'fairy penguins WA', 'Shoalwater Marine Park'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/rockingham-penguin-island-dolphins-perth-2026' },
  openGraph: {
    title: 'Rockingham & Penguin Island 2026: Swim with Wild Dolphins Near Perth',
    description: '45 minutes south of Perth, Rockingham offers wild dolphin swims, fairy penguins, and the beautiful Shoalwater Islands Marine Park. The complete 2026 guide.',
    url: 'https://autotrip-five.vercel.app/blog/rockingham-penguin-island-dolphins-perth-2026',
  },
};

export default function RockinghamPenguinIslandBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Day Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 27, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 45 min from Perth</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Rockingham &amp; Penguin Island 2026: Swim with Wild Dolphins Near Perth
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Forty-five minutes south of Perth, Rockingham packs in two of the most unusual wildlife experiences you can have near a major Australian city: swimming with wild dolphins in the open ocean, and visiting Australia&apos;s most accessible little penguin colony. In the same day. Here&apos;s how.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'From airport', value: '45 min' },
            { label: 'Dolphin swim', value: '~$195/adult' },
            { label: 'Penguin ferry', value: '~$10 return' },
            { label: 'Ferry season', value: 'Sep – May' },
          ].map((fact) => (
            <div key={fact.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
              <div className="text-base font-black text-slate-900">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="/rockingham-penguin-island.jpg"
            alt="Wild bottlenose dolphins in clear Indian Ocean water near Rockingham, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            Rockingham doesn&apos;t get the same attention as Fremantle or Rottnest, and that&apos;s a genuine oversight. For wildlife encounters close to Perth, it beats almost everything else in the region. The Shoalwater Islands Marine Park — just offshore — protects a resident population of wild bottlenose dolphins that you can legally swim with in the open ocean. Not a theme park, not a performance enclosure. The Indian Ocean, wild dolphins, and you.
          </p>
          <p>
            Add a 5-minute ferry ride to Penguin Island to see Australia&apos;s smallest penguin species up close, and you&apos;ve got one of the more remarkable day trips available within driving distance of Perth Airport.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-5">
            <div className="text-2xl">🐬</div>
            <div>
              <div className="font-black text-slate-900 mb-1">What &ldquo;swimming with wild dolphins&rdquo; actually means</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                This is not a captive experience. Rockingham Wild Encounters takes you out by boat into the Shoalwater Bay Marine Park and you enter the water in the open ocean. The resident dolphin pod (around 200 animals) has been carefully habituated to respectful human interaction over decades — they choose whether to approach. They almost always do. It&apos;s genuinely extraordinary, and nothing like the pool-based experiences you&apos;ll see elsewhere.
              </p>
            </div>
          </div>

          <h2>The wild dolphin swim</h2>
          <p>
            <strong>Rockingham Wild Encounters</strong> operates the only licensed wild dolphin swim experience in the Perth region. Tours depart daily from Rockingham beach, run about 3.5 hours, and cost around $195 per adult. Snorkelling gear is provided. Minimum age for entering the water is 8 — younger children can watch from the boat, which is still genuinely exciting.
          </p>
          <p>
            Book well in advance — this sells out on weekends, often weeks ahead in summer. The Rockingham Wild Encounters website is the only booking source. There&apos;s no walk-in option for the dolphin swim.
          </p>

          <div className="not-prose my-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
            <div className="text-2xl flex-shrink-0 inline">⚠️</div>
            <div className="inline ml-3">
              <div className="font-black text-slate-900 mb-1 inline"> Book this before anything else</div>
              <p className="text-slate-700 text-sm leading-relaxed mt-1">
                Seriously — if the dolphin swim is the reason you&apos;re coming to Rockingham, lock it in before you book your accommodation or flights. Weekend spots in summer disappear weeks in advance. Weekdays have more availability but book at least 3–4 days ahead.
              </p>
            </div>
          </div>

          <h2>Penguin Island</h2>
          <p>
            Penguin Island is a small, largely undeveloped island about 800 metres off the Rockingham foreshore, home to around 1,200 little penguins — the world&apos;s smallest penguin species (they stand about 33 cm tall, which is to say, extremely small). They share the island with pelicans, sea eagles, and various Indian Ocean seabirds.
          </p>
          <p>
            The <strong>Penguin Island Ferry</strong> departs from Mersey Point Jetty in Rockingham — 5-minute crossing, around $10 return. The <strong>Penguin Island Discovery Centre</strong> runs feeding sessions at set times (typically 10:30 AM and 1:30 PM — check current times at penguinisland.com.au). Wild penguins also come ashore, though this isn&apos;t guaranteed on any particular visit.
          </p>

          <div className="not-prose my-6 bg-slate-50 rounded-2xl p-4">
            <div className="font-bold text-slate-900 text-sm mb-1">What are &ldquo;little penguins&rdquo;? (Also called fairy penguins)</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              <em>Eudyptula minor</em> is the world&apos;s smallest penguin species, found only in southern Australia and New Zealand. They&apos;re around 33 cm tall, weigh about 1 kg, and are bluish-grey on top with a white belly. They come ashore at dusk and spend their days at sea fishing. The Penguin Island colony is one of the most accessible in WA — you can see them up close at the Discovery Centre even if the wild ones don&apos;t cooperate.
            </p>
          </div>

          <p>
            Important: the ferry and island run on a seasonal schedule, typically open September through May and reduced or closed in winter (June to August). Confirm current operating hours at penguinisland.com.au before your visit.
          </p>

          <h2>Point Peron and the Shoalwater Bay coastline</h2>
          <p>
            The Point Peron headland, just south of Rockingham&apos;s main beach, offers excellent coastal walking — limestone cliffs, clear Indian Ocean water below, and outstanding snorkelling off the point on calm days. The marine park waters around Shoalwater Bay are also home to Australian sea lions on Seal Island (visible from boats and occasionally from shore at low tide) and green turtles in the seagrass meadows.
          </p>
          <p>
            The beaches along the Rockingham foreshore are consistently calm — protected by the offshore reef and islands — making them good for swimming with children even when northern Perth beaches are rough.
          </p>

          <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
            {[
              { q: 'Best time to visit Rockingham?', a: 'September to May. Warm weather, Penguin Island ferry running, and sea conditions best for the dolphin swim. Avoid June–August for Penguin Island (ferry often closed), though the coastal walk and snorkelling are fine year-round.' },
              { q: 'Rockingham vs Rottnest Island?', a: 'Both are excellent. Rottnest needs a full day and is further/pricier (45 min ferry from Fremantle). Rockingham is closer and better for wildlife encounters specifically. Do both if you have time — they\'re completely different experiences.' },
              { q: 'How do I get to Rockingham?', a: 'Kwinana Freeway south from Perth, exit at Rockingham Road — about 45 minutes from the city or airport. No practical public transport for the dolphin swim departure times; a hire car is the right approach.' },
              { q: 'Is the dolphin swim suitable for non-swimmers?', a: 'The tour operators require basic swimming ability for the water portion. Life jackets are provided. The boat observation option is available for those not comfortable in open water — the dolphins often come close to the vessel.' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="font-black text-slate-900 text-sm mb-2">{item.q}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="not-prose my-10 bg-slate-900 text-white rounded-[2rem] p-7">
            <div className="font-black text-xl mb-5">Before you head to Rockingham</div>
            <ul className="space-y-3">
              {[
                'Book the dolphin swim at rockinghamwildencounters.com.au before anything else — it sells out',
                'Check penguinisland.com.au for current ferry and Discovery Centre hours before your visit',
                'Wear or bring a rash vest — the dolphin swim is open ocean and sun exposure is significant',
                'Bring water shoes or old trainers for Point Peron rock scrambling',
                'The ferry to Penguin Island stops running in winter (June–August) — plan accordingly',
                'Morning departures for the dolphin swim have the calmest sea conditions on most days',
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
            Rockingham and Penguin Island offer two wildlife experiences that you can&apos;t get at most places within a short drive of a major city — swimming with wild dolphins in open ocean, and seeing the world&apos;s smallest penguins on a small island a few hundred metres offshore. Neither requires overnight accommodation, and both are legitimately extraordinary.
          </p>
          <p>
            From Perth Airport, it&apos;s 45 minutes south down the Kwinana Freeway. Book the dolphin swim in advance, pick up a hire car at AutoTrip, and head south.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Rockingham is 45 Minutes from Perth Airport</h3>
          <p className="text-slate-600 mb-6">
            Swim with wild dolphins and see fairy penguins in a single day trip — all within 45 minutes of picking up your hire car at AutoTrip Perth Airport. Free 24/7 shuttle from all terminals.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>

      </div>
    </article>
  );
}
