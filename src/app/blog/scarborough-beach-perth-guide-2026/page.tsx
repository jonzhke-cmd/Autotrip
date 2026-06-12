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
            Cottesloe gets the postcards, but Scarborough is where Perth actually goes to play. A wide white-sand surf beach backed by a redeveloped esplanade with a geothermally heated beach pool, sunset markets, skate bowls and some of the best fish and chips on the coast — all an easy half-hour drive from Perth Airport.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80"
            alt="Wide white-sand beach and turquoise Indian Ocean at Scarborough Beach, Perth, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>Why Scarborough Should Be Your First Perth Beach</h2>
          <p>
            Every Perth local has a beach allegiance, and Scarborough&apos;s case is simple: it does more than any other beach in the city. Cottesloe is prettier at golden hour and City Beach is calmer for families, but Scarborough is the only Perth beach that combines genuine surf, a full entertainment precinct, year-round swimming in a heated ocean-side pool, and a dining strip that stays busy long after the sun drops into the Indian Ocean.
          </p>
          <p>
            The beach itself is a broad, west-facing stretch of squeaky white sand with water that shifts from turquoise in the shallows to deep blue past the banks. Because it faces directly west, <strong>every single sunset is a show</strong> — locals time their evening swim so they&apos;re floating in the water as the sun goes down.
          </p>

          <h2>Getting There from Perth Airport</h2>
          <p>
            Scarborough sits about <strong>26 kilometres west of Perth Airport</strong>, and with your own hire car the drive takes roughly 30 to 35 minutes outside of peak hour. The easiest route runs along the Tonkin Highway, through the Graham Farmer Freeway tunnel, then up the Mitchell Freeway before cutting west on Scarborough Beach Road, which delivers you straight to the ocean.
          </p>
          <p>
            Public transport from the airport requires a train into the city and a second connection out to the coast — comfortably over an hour with luggage. By car it&apos;s one straight run, and you&apos;ll want the car anyway: the best of this coastline is spread along ten kilometres of beaches that no bus route links together well.
          </p>
          <p>
            <strong>Parking:</strong> the multi-storey carpark on The Esplanade is the reliable option and puts you a two-minute walk from the sand. Street parking exists but fills fast on summer weekends — arrive before 10am or after 4pm if you&apos;re visiting between December and February.
          </p>

          <h2>The Beach: Surf, Swimming and Staying Safe</h2>
          <p>
            Scarborough is a true surf beach. The consistent beach-break peaks make it one of the most popular learn-to-surf spots in Perth, and surf schools run lessons on the southern end most mornings. If you&apos;ve ever wanted to stand up on a wave, this is a forgiving place to try.
          </p>
          <p>
            That same swell means you should take the water seriously. Rips do form along the sandbanks, so <strong>swim between the red and yellow flags</strong> in front of the surf club. Scarboro Surf Life Saving Club — one of the oldest in Western Australia, founded in 1928 — patrols the beach through the warmer months. The flagged area is generally calm enough for confident swimmers, while families with small children may prefer the pool a few steps away.
          </p>

          <h2>The Esplanade: More Than Just a Beach</h2>
          <p>
            A major redevelopment transformed Scarborough&apos;s foreshore into the most complete beach precinct in Perth, and it&apos;s all free to wander.
          </p>
          <h3>Scarborough Beach Pool</h3>
          <p>
            The headline act is a six-lane, geothermally heated outdoor pool sitting right on the beachfront, open year-round. Swimming laps in warm water while watching winter surf roll in behind the glass fence is a uniquely Perth experience. Entry is inexpensive, and there&apos;s a café attached for post-swim coffee.
          </p>
          <h3>Skate Park, Amphitheatre and Sunset Markets</h3>
          <p>
            The Snake Pit skate bowl draws an impressive standard of skaters most evenings and is genuinely fun to watch with an ice cream in hand. The grassed amphitheatre hosts free concerts and outdoor cinema in summer, and on Thursday evenings in the warmer months the <strong>Scarborough Sunset Markets</strong> fill the foreshore with food trucks, live music and market stalls — easily the best-value dinner on the coast.
          </p>

          <h2>Where to Eat and Drink</h2>
          <p>
            The dining strip along The Esplanade covers everything from quick post-swim feeds to long sunset dinners. Fish and chips eaten on the grass overlooking the water remains the classic Scarborough meal, and you&apos;ll find several contenders within a hundred metres of each other. For something longer, the beachfront pubs and restaurants along the strip all trade heavily on their west-facing windows — book ahead for a sunset table on Friday or Saturday. Morning visitors are well served too: the café scene fires from early, full of swimmers and runners doing the coastal path.
          </p>

          <h2>Make a Day of It: The Coastal Drive North</h2>
          <p>
            With a hire car, Scarborough becomes the start of one of Perth&apos;s great short drives. Head north along the West Coast Highway and you hit <strong>Trigg Beach</strong> (Perth&apos;s premier surf break) in three minutes, <strong>Mettams Pool</strong> (a protected natural reef pool that&apos;s perfect for first-time snorkellers) in seven, and <strong>Hillarys Boat Harbour</strong> with its marina, swimming beach and the AQWA aquarium in about fifteen. String them together and you have a full coastal day without ever being more than 25 minutes from your Scarborough base.
          </p>

          <h2>When to Visit</h2>
          <p>
            Summer (December to February) brings hot days, busy sand and the famous afternoon sea breeze — the &quot;Fremantle Doctor&quot; — which cools everything down but can chop up the water, so swim in the morning. Autumn (March to May) is arguably perfect: warm ocean, lighter crowds, glassy mornings. Winter swims belong to the heated pool, though storm-watching from a café window has its own appeal. Year-round, plan to be on the beach an hour before sunset. It never gets old.
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
