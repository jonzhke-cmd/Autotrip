import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scarborough Beach Perth 2026: Surf, Sunsets & The Esplanade | AutoTrip Perth',
  description: "Scarborough Beach is Perth's liveliest stretch of coast — surf, a geothermal beach pool, sunset markets and a buzzing esplanade, 30 minutes from Perth Airport.",
  keywords: [
    'Scarborough Beach Perth',
    'Scarborough Beach guide 2026',
    'Perth beaches',
    'Scarborough Esplanade',
    'Scarborough Beach Pool',
    'surfing Scarborough Perth',
    'Perth Airport to Scarborough',
    'best sunset Perth',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/scarborough-beach-perth-guide-2026' },
  openGraph: {
    title: 'Scarborough Beach Perth 2026: Surf, Sunsets & The Esplanade',
    description: "Scarborough Beach is Perth's liveliest stretch of coast — surf, a geothermal beach pool, sunset markets and a buzzing esplanade, 30 minutes from Perth Airport.",
    url: 'https://autotrip-five.vercel.app/blog/scarborough-beach-perth-guide-2026',
  },
};

export default function ScarboroughBeachBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Perth Beaches</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 12, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 26 km west of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Scarborough Beach: Perth&apos;s Liveliest Coastline, 30 Minutes from the Airport
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Surf, sunsets, a heated beachfront pool and the liveliest esplanade in Perth — all 30 minutes from the airport. Here&apos;s how to do Scarborough properly.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1574473084259-9839447145a2?w=1400&q=80"
            alt="Skateboarders silhouetted against the sunset at the Snake Pit, Scarborough Beach, Perth"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">26 km</div>
            <div className="text-sm font-semibold text-slate-500">from Perth Airport</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">~30 min</div>
            <div className="text-sm font-semibold text-slate-500">drive time</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">365 days</div>
            <div className="text-sm font-semibold text-slate-500">heated beach pool</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">1928</div>
            <div className="text-sm font-semibold text-slate-500">surf club patrols since</div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>Why Locals Pick Scarborough</h2>
          <p>
            Cottesloe gets the postcards, but Scarborough is where Perth goes to play. It&apos;s the only beach in the city that combines real surf, a heated ocean-side pool, a buzzing esplanade and a dining strip that stays alive after dark. And because it faces directly west, <strong>every sunset is a show</strong> &mdash; locals time their evening swim so they&apos;re in the water as the sun drops into the Indian Ocean.
          </p>

          <h2>Getting There</h2>
          <p>
            From Perth Airport it&apos;s one simple run: Tonkin Highway, through the Graham Farmer tunnel, up the Mitchell Freeway, then west on Scarborough Beach Road straight to the ocean. About 30 minutes outside peak hour.
          </p>
          <p>
            Public transport takes over an hour with two connections &mdash; and you&apos;ll want a car anyway, because the best of this coast is spread along ten kilometres of beaches no bus links together. In summer, arrive before 10am or after 4pm for easy parking.
          </p>

          <h2>The Beach</h2>
          <p>
            A broad stretch of squeaky white sand with water shifting from turquoise to deep blue. The consistent beach breaks make Scarborough one of Perth&apos;s most popular learn-to-surf spots &mdash; schools run lessons on the southern end most mornings.
          </p>
          <p>
            Take the water seriously, though. Rips form along the sandbanks, so <strong>swim between the red and yellow flags</strong> in front of Scarboro Surf Life Saving Club, which has patrolled this beach since 1928. Families with small kids may prefer the pool a few steps away.
          </p>

          <h2>The Esplanade</h2>
          <p>
            A major redevelopment turned Scarborough&apos;s foreshore into Perth&apos;s most complete beach precinct &mdash; all free to wander.
          </p>
          <ul>
            <li><strong>Scarborough Beach Pool:</strong> a six-lane, geothermally heated outdoor pool right on the beachfront, open year-round. Swimming warm laps while winter surf rolls in behind the glass is a uniquely Perth experience.</li>
            <li><strong>The Snake Pit:</strong> a skate bowl with an impressive standard of skaters most evenings &mdash; great spectator sport with an ice cream in hand.</li>
            <li><strong>Sunset Markets:</strong> Thursday evenings in the warmer months, the foreshore fills with food trucks, live music and stalls. The best-value dinner on the coast.</li>
          </ul>

          <h2>Eat &amp; Drink</h2>
          <p>
            Fish and chips on the grass overlooking the water is the classic Scarborough meal, with several contenders within a hundred metres of each other. For a longer evening, the beachfront pubs and restaurants all trade on their west-facing windows &mdash; book ahead for a sunset table on weekends. Mornings, the caf&eacute; strip fires early with swimmers and runners off the coastal path.
          </p>

          <h2>Make a Day of It</h2>
          <p>
            With a car, Scarborough is the start of one of Perth&apos;s great short drives north along West Coast Highway:
          </p>
          <ul>
            <li><strong>Trigg Beach</strong> (3 min): Perth&apos;s premier surf break</li>
            <li><strong>Mettams Pool</strong> (7 min): a protected reef pool, perfect for first-time snorkellers</li>
            <li><strong>Hillarys Boat Harbour</strong> (15 min): marina, calm swimming beach and the AQWA aquarium</li>
          </ul>

          <h2>Your Perfect Scarborough Day</h2>
          <ul>
            <li><strong>9:00am</strong> &mdash; coffee on the caf&eacute; strip, walk the coastal path</li>
            <li><strong>10:00am</strong> &mdash; surf lesson on the southern end, or laps in the heated pool</li>
            <li><strong>12:30pm</strong> &mdash; fish and chips on the grass overlooking the water</li>
            <li><strong>2:00pm</strong> &mdash; drive the coast: Trigg, Mettams Pool, Hillarys</li>
            <li><strong>5:30pm</strong> &mdash; back for the sunset swim, then dinner on the strip</li>
          </ul>

          <h2>When to Go</h2>
          <p>
            Summer brings hot days and the afternoon &quot;Fremantle Doctor&quot; sea breeze &mdash; swim in the morning. Autumn is arguably perfect: warm ocean, lighter crowds, glassy conditions. Winter belongs to the heated pool and storm-watching from a caf&eacute; window. Whenever you come, be on the beach an hour before sunset. It never gets old.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Perth&apos;s Best Coastline Is a 30-Minute Drive Away</h3>
          <p className="text-slate-600 mb-6">Pick up your hire car at Perth Airport and you can be parked at Scarborough Beach within half an hour of landing — with the whole northern coast waiting beyond it.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
