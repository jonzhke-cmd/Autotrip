import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bunbury & Koombana Bay: Wild Dolphins, Beaches and a Real WA City, 2 Hours from Perth Airport | AutoTrip Perth',
  description: 'Bunbury is WA\'s second city and Koombana Bay is home to wild dolphins you can wade out to meet. Beaches, wildlife, art and markets, 175 km south of Perth Airport. The complete 2026 guide.',
  keywords: [
    'Bunbury WA',
    'Koombana Bay',
    'Dolphin Discovery Centre Bunbury',
    'Bunbury day trip from Perth',
    'things to do in Bunbury',
    'Bunbury Wildlife Park',
    'Back Beach Bunbury',
    'Bunbury Farmers Market',
    'South West WA road trip',
    'Perth Airport car rental',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/bunbury-koombana-bay-dolphins-2026' },
  openGraph: {
    title: 'Bunbury & Koombana Bay: Wild Dolphins, Beaches and a Real WA City, 2 Hours from Perth Airport',
    description: 'Bunbury is WA\'s second city and Koombana Bay is home to wild dolphins you can wade out to meet. Beaches, wildlife, art and markets, 175 km south of Perth Airport. The complete 2026 guide.',
    url: 'https://autotrip-five.vercel.app/blog/bunbury-koombana-bay-dolphins-2026',
  },
};

export default function BunburyKoombanaBayDolphinsBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">South West Getaways</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> July 15, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 9 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 175 km / 2h from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Bunbury & Koombana Bay: Wild Dolphins, Real Beaches and WA's Underrated Second City
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everyone drives past Bunbury on the way to Margaret River. That's a mistake. WA's second-largest city has wild dolphins you can wade out to meet, a genuinely good regional gallery, a wildlife park hidden inside a wetland, and a working port town character the tourist strips further south don't have. It's 175 km south of Perth Airport, and it's worth a full day of its own.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80"
            alt="Turquoise water and white sand along the Bunbury coastline in Western Australia's South West"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p>
            Bunbury sits where the Leschenault Estuary, the Indian Ocean and Koombana Bay all meet, which is a large part of why the city feels different from the wine-and-cellar-door towns further south. It's a working port — you'll see bulk carriers loading mineral sands and woodchips on the horizon — wrapped around genuinely beautiful water. That mix of industry and coastline gives Bunbury an honest, lived-in feel that Margaret River's tourist strip doesn't try for. It's about two hours' drive from Perth Airport via the Kwinana Freeway and Forrest Highway, an easy, mostly dual-carriageway run with almost none of the traffic you'd hit heading into the hills.
          </p>

          <h2>Koombana Bay and the Wild Dolphins</h2>
          <p>
            The reason most people finally add Bunbury to their itinerary is Koombana Bay's wild bottlenose dolphins, and it delivers on the promise. A resident pod uses the bay daily, and the not-for-profit Dolphin Discovery Centre on the foreshore runs a free wild interaction zone every morning from 8am to 12pm, where dolphins swim right up to the shallows. There's no cage, no tank and no guarantee — these are wild animals coming in on their own terms — but sightings are frequent, especially earlier in the morning before the beach gets busy.
          </p>
          <p>
            If you want a closer look, the Centre also runs year-round Eco-Cruises out into the bay with a strong chance of sightings, and from November to April there's a "Swim with Dolphins" tour for a genuinely rare, closely managed encounter. The Interpretive Centre itself — aquariums, coral displays and a 360-degree digital dolphinarium — is open daily from 9am to 3pm and makes a good wet-weather fallback. Check current tour times and prices on the Dolphin Discovery Centre's website before you go, as cruise schedules shift with the season.
          </p>

          <h2>Bunbury's Beaches</h2>
          <p>
            Koombana Bay Beach itself is sheltered and shallow, good for families and for the dolphin-watching described above. For surf, head to Back Beach on the ocean side of the peninsula — a proper Indian Ocean beach break popular with local surfers and considerably less crowded than anything near Perth. Between the two, Ocean Drive gives you a scenic coastal run with lookout points worth a five-minute stop.
          </p>
          <p>
            Marlston Hill Lookout, just back from Back Beach, is the best free view in Bunbury — a small tower giving you a full sweep of the bay, the port, and the ocean beyond. It takes ten minutes and costs nothing, and it's the easiest way to get your bearings on arrival.
          </p>

          <h2>Bunbury Wildlife Park and Big Swamp</h2>
          <p>
            Bunbury Wildlife Park (also known as Big Swamp Wildlife Park) sits inside the Big Swamp wetland reserve in South Bunbury. It's open Tuesday to Sunday, 10am to 4pm (last entry 3:15pm), closed Mondays outside school holidays and public holidays. Entry includes a feed bag, and the walk-through aviaries let native and exotic birds fly freely around you as you wander — it's a genuinely hands-on setup that works well for kids. Confirm current admission prices on the City of Bunbury's website, as these are reviewed periodically.
          </p>
          <p>
            Next door, the Big Swamp Wetlands offer a flat, easy 2.5 km boardwalk loop with bird hides along the way — a good stretch-the-legs option if you've just driven down from Perth, and one of the better birdwatching spots in the South West outside the national parks.
          </p>

          <h2>Bunbury Regional Art Gallery and the Old Convent</h2>
          <p>
            The Bunbury Regional Art Gallery is housed in a beautifully restored 1897 convent building on Wittenoom Street, and it punches well above its weight for a regional gallery — rotating contemporary exhibitions alongside a permanent collection, all inside heritage sandstone rooms that are worth seeing on their own merits. Entry is free, and it's an easy addition to a morning that starts at Koombana Bay.
          </p>

          <h2>Markets and Food</h2>
          <p>
            The Bunbury Farmers Market, on Sandridge Road, is one of the largest fresh produce and general markets in regional WA and worth timing your visit around if you're there on a market day — check current days and hours before you go, as these can change seasonally. Down on the Koombana Bay foreshore, a strip of casual restaurants and cafes makes for an easy lunch with water views, and the CBD along Victoria Street has a decent spread of coffee and bakeries for a morning stop before you hit the beach.
          </p>

          <h2>Getting There and Practical Tips</h2>
          <p>
            Bunbury is 175 km south of Perth Airport via the Kwinana Freeway and Forrest Highway — about two hours in normal traffic, with fuel and rest stops available at Mandurah and Australind along the way. There's no direct train to Bunbury (the old line closed years ago); a hire car is genuinely the only practical way to see the city and its outlying beaches in a single day.
          </p>
          <p>
            Parking is free and plentiful around Koombana Bay and the CBD, which is more than can be said for Fremantle or Margaret River on a weekend. Aim to arrive by mid-morning for the best chance of dolphin sightings, do the wildlife park or gallery over lunch, and leave Back Beach and Marlston Hill Lookout for the golden-hour light before the drive home.
          </p>
          <p>
            Bunbury also works well as a first-night stop rather than a straight day trip — break the drive south here, see the dolphins in the morning, and continue on to Busselton, Dunsborough or Margaret River with a full day still ahead of you.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Meet Bunbury's Wild Dolphins?</h3>
          <p className="text-slate-600 mb-6">There's no train to Bunbury and the best beaches sit outside the town centre — a hire car is the easiest way to see it properly. Pick up your rental at Perth Airport and be at Koombana Bay in about two hours.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
