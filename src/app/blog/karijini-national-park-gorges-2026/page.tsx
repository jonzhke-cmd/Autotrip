import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Karijini National Park 2026: The Complete Gorge Guide | AutoTrip Perth',
  description: 'Karijini is WA\'s most spectacular national park — ancient red gorges, crystal-clear rock pools, and waterfalls carved through 2.5-billion-year-old rock. The complete 2026 visitor guide.',
  keywords: ['Karijini National Park gorges', 'Karijini 2026 guide', 'Karijini rock pools', 'Karijini waterfalls', 'Pilbara WA travel', 'best national parks Western Australia'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/karijini-national-park-gorges-2026' },
  openGraph: {
    title: 'Karijini National Park 2026: The Complete Gorge Guide',
    description: 'Ancient red gorges, crystal-clear rock pools, and waterfalls carved through 2.5-billion-year-old rock. Everything you need to know before visiting Karijini in 2026.',
    url: 'https://autotrip-five.vercel.app/blog/karijini-national-park-gorges-2026',
  },
};

export default function KarijiniNationalParkBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">WA Road Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 27, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 1,500 km from Perth</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Karijini National Park 2026: The Complete Gorge Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            It&apos;s a long way from Perth. It&apos;s worth every kilometre. Karijini is ancient red gorges, icy turquoise rock pools, and waterfalls carved through 2.5-billion-year-old iron-rich rock — some of the oldest exposed geology on Earth. Here&apos;s everything you need to plan the trip properly.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'From Perth', value: '1,500 km north' },
            { label: 'Drive time', value: '2 days each way' },
            { label: 'Best season', value: 'May – Aug' },
            { label: 'Rock age', value: '2.5 billion years' },
          ].map((fact) => (
            <div key={fact.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
              <div className="text-base font-black text-slate-900">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1529987405859-1f49e5624d86?w=1400&q=80"
            alt="Karijini National Park gorge with red rock walls and clear turquoise water pools, Pilbara Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            Let&apos;s be straight with you: Karijini is not a casual detour. It&apos;s 1,500 kilometres north of Perth, deep in WA&apos;s Pilbara region, and getting there properly requires either a two-day drive or a fly-drive from Newman. You need to plan for at least three nights in the park to do it justice.
          </p>
          <p>
            Having said that — Karijini is one of those places that changes the way you think about Australia. The gorges here are ancient in a way that most landscapes simply aren&apos;t. The banded iron formations you walk through are 2.5 billion years old. The colours of the rock walls — deep red, ochre, rust — change with the light throughout the day. The rock pools at the bottom are cold, clear, and an impossible shade of turquoise. Visitors who make the trip consistently describe it as the best thing they&apos;ve done in WA. Sometimes in Australia. Sometimes in their lives.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
            <div className="text-2xl">🪨</div>
            <div>
              <div className="font-black text-slate-900 mb-1">How old is &ldquo;2.5 billion years&rdquo; in context?</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                The Earth is about 4.5 billion years old. The rock you&apos;re walking through in Karijini formed when the atmosphere had almost no oxygen and the most complex life on Earth was microscopic. The banded iron formations — the layered red and grey stripes you&apos;ll see on the gorge walls — are actually records of ancient oceans rusting as cyanobacteria began producing oxygen for the first time. You&apos;re literally walking through the moment life changed Earth&apos;s chemistry forever.
              </p>
            </div>
          </div>

          <h2>The main gorges — what to see and how hard each one is</h2>

          <h3>Dales Gorge — best for first-timers</h3>
          <p>
            Start here. Dales Gorge is the most accessible of the main gorges and the best introduction to what Karijini is about. The walk to <strong>Fortescue Falls</strong> — a permanent waterfall fed by an underground aquifer — is 1.5 km return with some steep sections. Below the falls, the gorge opens up to <strong>Fern Pool</strong>: a shaded rock pool surrounded by ferns and ancient fig trees where swimming is permitted. This is the one you&apos;ve seen in photos. It is exactly that good in person.
          </p>
          <p>
            The full Dales Gorge circular walk (Circular Pool to Fortescue Falls, 5 km) takes 2–3 hours at a relaxed pace and is the best single walk in the park.
          </p>

          <h3>Hancock Gorge and the Spider Walk — for the adventurous</h3>
          <p>
            The finale of Hancock Gorge is the &ldquo;Spider Walk&rdquo; — a narrow passage through waist-deep water where you brace your feet and back against the gorge walls to shuffle through a slot barely wide enough for a person. It&apos;s not technically difficult but it is physically demanding and genuinely adventurous. The reward is <strong>Kermits Pool</strong>: a deep, cold, turquoise pool at the end of the traverse, surrounded by gorge walls that narrow to just a few metres above you. One of the most dramatic swimming spots in Australia — possibly anywhere.
          </p>

          <div className="not-prose my-6 bg-slate-50 rounded-2xl p-4">
            <div className="font-bold text-slate-900 text-sm mb-1">What to wear for Hancock Gorge</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Closed footwear is non-negotiable — old trainers or water shoes, not thongs (flip-flops) or bare feet. The rock is wet, slippery, and unforgiving. You will get wet to the waist minimum. Bring a dry bag for your phone and valuables. The gorge is cold even in summer — the water temperature is around 18°C year-round.
            </p>
          </div>

          <h3>Weano Gorge and Handrail Pool — the photographer&apos;s gorge</h3>
          <p>
            Weano Gorge descends via metal staircases and ladders into the gorge floor — steep and physical, but manageable. At the bottom, <strong>Handrail Pool</strong> is exactly what it sounds like: a serene pool in a narrow slot canyon, with a metal handrail along a ledge above the water that lets you traverse into the gorge depths. The colours here — deep red walls, clear water, narrow band of sky above — are extraordinary. Budget at least 2 hours for the 2 km return walk, longer if you want to swim and photograph.
          </p>

          <h3>Knox Gorge — the hidden one</h3>
          <p>
            The least visited of the main gorges and one of the most rewarding for that reason. Knox is narrower and deeper than the others, with excellent banded iron formation geology and a genuine sense of remoteness even when other gorges are busy. The descent to the gorge floor is steep. Swimming is possible at the base in season — check current conditions with park rangers.
          </p>

          <h2>Karijini Eco Retreat — where to stay</h2>
          <p>
            The <strong>Karijini Eco Retreat</strong> is the only accommodation inside the national park and the hands-down best base for a visit. It operates on Banjima Country with Traditional Owner involvement, and the design — tented chalets on raised platforms above the spinifex — sits lightly in the landscape. The restaurant serves evening meals, the staff know the park extremely well, and the night sky from the deck — no light pollution for hundreds of kilometres — is one of those experiences that&apos;s genuinely hard to describe.
          </p>
          <p>
            Book months in advance for the May to September peak season. Two campgrounds (Dales Gorge and Savannah) are also available for those bringing their own gear.
          </p>

          <h2>When to go — and when absolutely not to</h2>

          <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
            {[
              { q: '✅ May – August (peak season)', a: 'Ideal. Temperatures in the 20s and 30s°C, all gorges accessible, waterfalls at their best, the annual Karijini Experience festival in late May. This is when to go.' },
              { q: '⚠️ September – November', a: 'Getting warm. Still doable in September and October with early starts. By November the heat is serious and gorge conditions can deteriorate.' },
              { q: '❌ December – March (avoid entirely)', a: 'Genuinely dangerous. Temperatures regularly exceed 45°C, flash flooding can close gorges without warning, and heat exhaustion is a real risk. Do not plan a Karijini gorge trip in summer.' },
              { q: '⚠️ April', a: 'Transitional. The wet season is winding down, temperatures are dropping, but some gorges may still have flooding from late-season rains. Check conditions.' },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="font-black text-slate-900 text-sm mb-2">{item.q}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <h2>Getting to Karijini</h2>
          <p>
            <strong>By road:</strong> The Great Northern Highway from Perth to Newman, then 120 km to the park. Fully sealed road the entire way, suitable for a standard 2WD hire car for the main gorge car parks. Allow two days of driving each way and break the trip overnight at Newman, which has good accommodation and fuel. Distances in WA are real — don&apos;t underestimate them.
          </p>
          <p>
            <strong>By air:</strong> Rex Airlines flies Perth to Newman (approximately 2 hours) and Tom Price, both with hire car options. Flying in and hiring a 4WD locally is the fastest way to do it and gives you more time in the park. Book well in advance in peak season.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-5">
            <div className="text-2xl">⚠️</div>
            <div>
              <div className="font-black text-slate-900 mb-1">Safety — please read this section</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                People are injured and occasionally killed in Karijini every year. The gorges are genuinely dangerous for unprepared visitors. Always: wear closed footwear in gorges; check water level conditions with park rangers before descending; never enter a flooded gorge; carry at least 2 litres of water per person per walk; tell someone your plan for the day. The park has no mobile coverage — a personal locator beacon (PLB) is strongly recommended for any solo visitor. This is not fine print. It is practical information that keeps people safe.
              </p>
            </div>
          </div>

          <div className="not-prose my-10 bg-slate-900 text-white rounded-[2rem] p-7">
            <div className="font-black text-xl mb-5">Trip planning checklist</div>
            <ul className="space-y-3">
              {[
                'Book Karijini Eco Retreat or campground well in advance — months ahead for May–August',
                'Fly-drive from Perth via Newman is faster and gives more time in the park',
                'Start gorge walks before 8 AM — heat builds fast and afternoon conditions can be extreme',
                'Check gorge conditions with park rangers on arrival — flooding can close sections without notice',
                'Bring a PLB if hiking solo or camping at remote sites',
                'Wear or bring closed footwear for every gorge walk — no exceptions',
                'Time your visit for the Karijini Experience festival in late May if possible',
                'The drive from Perth is long — it is the trip, not just the way to the trip',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2>The bottom line</h2>
          <p>
            Karijini is not a casual destination — it takes commitment, planning, and a willingness to get into some genuinely tight gorge spaces. But it also delivers one of the most extraordinary landscapes in Australia, in a setting that genuinely feels remote and ancient in a way that very few places on Earth can match.
          </p>
          <p>
            If you have a week or more in WA and can make the journey north, Karijini belongs at the top of your list. Hire a capable vehicle from Perth Airport, plan your route carefully, allow enough time, and go properly.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Planning a WA Road Trip North?</h3>
          <p className="text-slate-600 mb-6">
            AutoTrip Perth Airport has the vehicles for the Pilbara drive — from comfortable highway cruisers to high-clearance 4WDs for the gorge tracks. Free 24/7 shuttle from all four Perth Airport terminals.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>

      </div>
    </article>
  );
}
