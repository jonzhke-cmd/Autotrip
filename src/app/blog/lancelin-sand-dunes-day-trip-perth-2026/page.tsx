import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lancelin Sand Dunes Day Trip from Perth 2026 | AutoTrip Perth',
  description: "Lancelin's towering white sand dunes are just 2 hours north of Perth Airport. Sandboarding, kitesurfing, fresh crayfish, and a scenic Indian Ocean drive — the complete 2026 guide.",
  keywords: [
    'Lancelin sand dunes Perth',
    'Lancelin day trip from Perth',
    'sandboarding Lancelin',
    'Lancelin kitesurfing',
    'Perth to Lancelin drive',
    'Indian Ocean Drive day trip',
    'Lancelin WA 2026',
    'Perth day trips by car',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/lancelin-sand-dunes-day-trip-perth-2026' },
  openGraph: {
    title: 'Lancelin Sand Dunes Day Trip from Perth 2026',
    description: "Lancelin's towering white sand dunes are just 2 hours north of Perth Airport. Sandboarding, kitesurfing, fresh crayfish, and a scenic Indian Ocean drive — the complete 2026 guide.",
    url: 'https://autotrip-five.vercel.app/blog/lancelin-sand-dunes-day-trip-perth-2026',
  },
};

export default function LancelinSandDunesBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Day Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 9, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 130 km north of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Lancelin Sand Dunes: The Wildest Day Trip Just 2 Hours from Perth
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Towering white dunes, sandboards, quad bikes and crayfish straight off the boat. Here&apos;s how to do Lancelin in a day.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1597687499209-a823b50abd5e?w=1400&q=80"
            alt="Brilliant white sand dunes under a blue sky at Lancelin, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">130 km</div>
            <div className="text-sm font-semibold text-slate-500">from Perth Airport</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">~2 hrs</div>
            <div className="text-sm font-semibold text-slate-500">drive each way</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">60 m</div>
            <div className="text-sm font-semibold text-slate-500">tallest dunes</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-black text-slate-900 mb-1">$25&ndash;35</div>
            <div className="text-sm font-semibold text-slate-500">sandboard hire</div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>Why Lancelin</h2>
          <p>
            About 130 km north of Perth, a field of enormous white dunes rises without warning out of the coastal scrub &mdash; some over 60 metres high. Weekends bring sandboarders flying down the faces, quad bikes carving the ridges, and kitesurfers working the lagoon just offshore. It&apos;s a landscape unlike anything else near an Australian capital city, and most visitors have never heard of it.
          </p>

          <h2>Getting There</h2>
          <ul>
            <li><strong>Fast route (just under 2 hrs):</strong> Mitchell Freeway &rarr; Brand Highway through Gingin. Best if you want maximum dune time.</li>
            <li><strong>Scenic route (+30 min):</strong> Indian Ocean Drive along the coast past Guilderton and Moore River. Long ocean views, tiny fishing towns &mdash; take it at least one way.</li>
          </ul>
          <p>
            There&apos;s no public transport to Lancelin. A hire car from Perth Airport is the only practical way in &mdash; and the better experience: dunes in the morning, crayfish lunch, surf in the afternoon, all on your own clock.
          </p>

          <h2>The Dunes</h2>
          <p>
            Free entry, no bookings &mdash; just park and climb. The sand is blindingly white and the scale surprises everyone on a first visit.
          </p>
          <ul>
            <li><strong>Sandboarding:</strong> hire a board in town ($25&ndash;35 for a half day). Beginners start lying down; the learning curve is short and the speed is real.</li>
            <li><strong>Quad bike tours:</strong> guided 30&ndash;60 minute circuits across the wider dune field &mdash; ideal with kids or if you&apos;d rather ride than climb.</li>
            <li><strong>Timing:</strong> go before 10am for cool air, long shadows and empty dunes. Summer weekend middays get crowded and hot.</li>
          </ul>

          <h2>Kitesurfing Capital of WA</h2>
          <p>
            Consistent afternoon sea breezes and a reef-protected lagoon make Lancelin a world-class kitesurfing and windsurfing spot, best from October to March. Each January the <strong>Lancelin Ocean Classic</strong> draws competitors from around the world &mdash; watching from the beach is a show in itself. Lessons are available for beginners at the town beach off Gingin Street.
          </p>

          <h2>Crayfish Lunch</h2>
          <p>
            Lancelin sits on WA&apos;s rock lobster coast, and in season (November to June) fresh crayfish comes straight off the boats at well below Perth restaurant prices. The <strong>Lobster Shack near the main beach</strong> sells it cooked by weight &mdash; half a cray with bread at a picnic table overlooking the ocean is the definitive Lancelin lunch. The town pub does honest bistro food and cold beer if crays aren&apos;t your thing.
          </p>

          <h2>Your Perfect Day, Hour by Hour</h2>
          <ul>
            <li><strong>7:30am</strong> &mdash; pick up your car at Perth Airport, head north</li>
            <li><strong>9:30am</strong> &mdash; arrive Lancelin, hire a sandboard, hit the dunes while it&apos;s cool</li>
            <li><strong>12:30pm</strong> &mdash; crayfish lunch at the Lobster Shack</li>
            <li><strong>2:00pm</strong> &mdash; watch the kitesurfers, swim, or push 75 km north to the Pinnacles</li>
            <li><strong>5:00pm</strong> &mdash; golden hour at the Pinnacles, or cruise home down Indian Ocean Drive</li>
          </ul>

          <h2>Know Before You Go</h2>
          <ul>
            <li><strong>Sun:</strong> the white sand reflects huge UV &mdash; sunscreen, hat and sunglasses are non-negotiable, even on cloudy days.</li>
            <li><strong>Water:</strong> no shade on the dunes. Carry 2+ litres per person.</li>
            <li><strong>Shoes:</strong> the sand gets seriously hot by midday in summer &mdash; wear slip-ons.</li>
            <li><strong>Fuel:</strong> fill up in Perth or Wanneroo; country petrol costs more, and distances stretch fast north of Lancelin.</li>
            <li><strong>Best season:</strong> April&ndash;October for sandboarding (less wind), November&ndash;March for kitesurfing, September&ndash;November for wildflowers on the drive.</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Hit the Lancelin Dunes?</h3>
          <p className="text-slate-600 mb-6">Lancelin is a 2-hour drive from Perth Airport &mdash; and you can&apos;t get there any other way. Book a hire car with AutoTrip and pick up straight from arrivals. No queues, no shuttles, no wasted time.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
