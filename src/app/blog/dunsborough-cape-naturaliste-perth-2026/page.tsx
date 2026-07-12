import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dunsborough & Cape Naturaliste 2026: Beaches, Lighthouse & Whales | AutoTrip Perth',
  description: "Turquoise bays, a 1904 lighthouse and land-based whale watching — Dunsborough and Cape Naturaliste are the calmer, quieter side of WA's South West, 2h40 from Perth Airport.",
  keywords: [
    'Dunsborough WA',
    'Cape Naturaliste Lighthouse',
    'Meelup Beach',
    'Bunker Bay',
    'Eagle Bay',
    'Dunsborough day trip from Perth',
    'whale watching Western Australia',
    'Perth Airport to Dunsborough',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/dunsborough-cape-naturaliste-perth-2026' },
  openGraph: {
    title: 'Dunsborough & Cape Naturaliste 2026: Beaches, Lighthouse & Whales',
    description: "Turquoise bays, a 1904 lighthouse and land-based whale watching — Dunsborough and Cape Naturaliste are the calmer, quieter side of WA's South West, 2h40 from Perth Airport.",
    url: 'https://autotrip-five.vercel.app/blog/dunsborough-cape-naturaliste-perth-2026',
  },
};

export default function DunsboroughCapeNaturalisteBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">South West Getaways</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> July 12, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 9 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 249 km south of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Dunsborough &amp; Cape Naturaliste: The Quiet, Turquoise Side of WA&apos;s South West
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            While everyone else drives straight through to Margaret River, Dunsborough keeps the calmest bays, the best land-based whale watching and a 120-year-old lighthouse mostly to itself. Here&apos;s the complete 2026 guide, 2 hours 40 minutes from Perth Airport.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80"
            alt="Turquoise water and white sand at Meelup Beach near Dunsborough, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p>
            Most Perth road trips down south funnel straight through to Margaret River for wine and surf, and Dunsborough gets treated as a fuel stop along the way. That is a mistake. Dunsborough sits right where Geographe Bay meets the wilder Indian Ocean coastline at Cape Naturaliste, which means it has both: sheltered, family-friendly bays on one side of the cape and dramatic limestone cliffs, whale lookouts and surf beaches on the other. It is quieter than Margaret River town, cheaper to stay in, and close enough to still do a winery lunch if you want one.
          </p>

          <h2>Getting There</h2>
          <p>
            Dunsborough is about 249 km south of Perth Airport, a drive of roughly 2 hours 40 minutes down the Forrest Highway and Bussell Highway. It is an easy, mostly duplicated highway drive with no tricky sections, making it comfortable to do in a single sitting or to break up with a stop in Bunbury (about halfway) for coffee. There is no direct train service, so a hire car is the practical way to get there — buses run but add hours and leave you without transport once you arrive, which matters because the best spots around Dunsborough are spread along 20-plus km of coastline with no public transport between them.
          </p>

          <h2>Cape Naturaliste Lighthouse</h2>
          <p>
            Built in 1904 from limestone quarried at nearby Bunker Bay, the 20-metre Cape Naturaliste Lighthouse sits about 13 km from central Dunsborough and is one of the most accessible lighthouses in the region — no long walk-in required. The grounds and Lightkeepers&apos; Museum are open daily from 9am to 5pm, with guided tower tours running roughly every hour between 9:30am and 4:30pm (final tours can vary seasonally, so it is worth checking on the day). The climb to the balcony is a manageable 59 steps and the payoff is a sweeping view over Geographe Bay, the Indian Ocean and the Leeuwin-Naturaliste National Park behind you. Entry passes run around $6 for adults, $5 concession and $3 for children, which also gets you into the small museum on the old lightkeepers&apos; cottages.
          </p>
          <p>
            <strong>Whale watching:</strong> the viewing platforms near the lighthouse are one of the best land-based whale watching spots in WA. Season runs roughly late May to early December, with September to November the peak stretch as humpback, southern right and occasionally blue whales pass close to the headland on their migration. Bring binoculars and expect to wait — but sightings on a clear morning are genuinely common, not just a tourism-brochure promise.
          </p>

          <h2>The Beaches: Pick Based on What You Want</h2>
          <p>
            The stretch of coast between Dunsborough and Cape Naturaliste is really a string of separate, distinct bays, and picking the right one matters more than people expect.
          </p>
          <p>
            <strong>Meelup Beach</strong> is the easy favourite — about a 10-minute drive from Dunsborough, with shallow, protected, turquoise water that is genuinely calm enough for toddlers, plus grassed picnic areas shaded by gum trees and free barbecues. It is also the best-value whale watching spot in winter and spring if you cannot be bothered driving to the lighthouse.
          </p>
          <p>
            <strong>Eagle Bay</strong>, just around the headland, is smaller and rockier with clear water good for snorkelling, and it tends to be quieter than Meelup even in peak season.
          </p>
          <p>
            <strong>Bunker Bay</strong>, on the Cape Naturaliste side, has the whitest sand of the three and a more open, wilder feel, backed by a resort and a couple of good cafes if you want lunch with the view rather than a packed esky.
          </p>
          <p>
            None of these beaches are patrolled, so swim with care, particularly outside the sheltered bays where the Indian Ocean swell picks up.
          </p>

          <h2>Old Dunsborough and the Town Itself</h2>
          <p>
            The town centre is small and unpretentious — a strip of cafes, a bakery worth stopping at, a decent pub, and a foreshore path along Geographe Bay that is flat and easy for an evening walk. Old Dunsborough, the original townsite, has a handful of heritage cottages and a quieter beach that locals tend to use over the main strip. It is not trying to be Margaret River, and that is the appeal — nobody is upselling you a $40 tasting flight at every second doorway.
          </p>

          <h2>Wineries and Day Trips from Base</h2>
          <p>
            Dunsborough makes a genuinely good base for exploring the wider Margaret River wine region without paying Margaret River town accommodation prices. Wineries around Yallingup and the northern end of the wine region are a 15 to 25 minute drive, and the Canal Rocks and Smiths Beach area near Yallingup is worth the detour for its jagged granite rock formations. If you want caves, Ngilgi Cave near Yallingup is about 20 minutes away and is one of the more accessible show caves in the region.
          </p>

          <h2>Walking Trails</h2>
          <p>
            The Cape to Cape Track — WA&apos;s 135 km coastal walking trail running all the way to Cape Leeuwin — starts right at Cape Naturaliste Lighthouse, so even non-hikers can walk a short, spectacular section. The easy 1 km Lighthouse Loop is a good introduction, while the Sugarloaf Rock walk (about 6 km return) heads south along dramatic coastal cliffs to a distinctive offshore rock stack that is also a nesting site for red-tailed tropicbirds. The Bunker Bay Walk links the lighthouse area to Bunker Bay along the coast if you want a longer, one-way option and can arrange a pickup.
          </p>

          <h2>Best Time to Visit</h2>
          <p>
            Late spring through early autumn (October to April) brings the calmest, warmest water for swimming and snorkelling. Winter (June to September) is cooler and wetter but is whale season and also when the region is at its greenest and least crowded — a genuinely good trade-off if you do not mind a jumper in the evenings. School holidays and long weekends push accommodation prices up noticeably, so a midweek visit outside peak periods is the easiest way to have Meelup Beach mostly to yourself.
          </p>

          <h2>Practical Tips</h2>
          <p>
            There is no train to Dunsborough and the bay-to-bay geography means you will be driving between beaches, the lighthouse and wineries throughout the day — a car is not optional here the way it might be in a more compact tourist town. Fuel up before leaving Perth or in Bunbury, as prices are typically higher once you are further south. Book lighthouse tower tours online in whale season, as the popular time slots do fill. And bring a jumper even in summer — the evening sea breeze off Geographe Bay is cooler than the daytime temperature suggests.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Explore Dunsborough?</h3>
          <p className="text-slate-600 mb-6">
            With bays, wineries and the lighthouse spread across 20-plus km of coastline, a hire car is the only way to see Dunsborough properly. Pick up at Perth Airport and be on Meelup Beach in under three hours.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
