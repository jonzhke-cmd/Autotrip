import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Busselton & the Jetty 2026: Complete Visitor Guide | AutoTrip Perth',
  description: 'Busselton Jetty is the longest wooden jetty in the Southern Hemisphere. Complete 2026 guide: underwater observatory, Geographe Bay beaches, and the 2.5-hour drive from Perth Airport.',
  keywords: [
    'Busselton Jetty',
    'Busselton day trip from Perth',
    'Geographe Bay',
    'longest jetty Southern Hemisphere',
    'Busselton underwater observatory',
    'Perth to Busselton drive',
    'Busselton Western Australia',
    'Margaret River region',
    'WA road trip',
    'Perth Airport car hire',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/busselton-jetty-geographe-bay-2026' },
  openGraph: {
    title: 'Busselton & the Jetty 2026: Complete Visitor Guide',
    description: 'Busselton Jetty is the longest wooden jetty in the Southern Hemisphere. Complete 2026 guide: underwater observatory, Geographe Bay beaches, and the 2.5-hour drive from Perth Airport.',
    url: 'https://autotrip-five.vercel.app/blog/busselton-jetty-geographe-bay-2026',
  },
};

export default function BusseltonJettyBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">South West Road Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 6, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 230 km from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Busselton & the World's Longest Wooden Jetty: Your 2026 Visitor Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Walk 1.8 kilometres over Geographe Bay to an underwater observatory teeming with coral and fish. Swim the calmest, clearest water in the South West. Then drive 40 minutes and you're in Margaret River wine country. Busselton rewards visitors who skip straight past it — don't make that mistake.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80"
            alt="Long wooden jetty extending over calm turquoise waters at Busselton, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p>
            Most travellers treat Busselton as a blur on the way to Margaret River. They're missing one of WA's most quietly spectacular experiences. The Busselton Jetty stretches 1,841 metres over Geographe Bay — making it the longest wooden jetty in the Southern Hemisphere — and beneath it lies a self-sustaining coral ecosystem that would be a major attraction anywhere else in the world. Add the region's calm swimming beaches, excellent seafood, and easy proximity to the Margaret River wine region, and you have a destination that deserves its own dedicated trip.
          </p>

          <h2>Getting There from Perth Airport</h2>
          <p>
            Busselton sits 230 kilometres south of Perth Airport via the Kwinana Freeway and Bussell Highway — a drive that takes around 2.5 hours in normal traffic. The route is entirely sealed, well-signed, and straightforward for international visitors. There is no direct public transport from Perth to Busselton that's practical for tourists, which makes a hire car essential. Most visitors combine Busselton with Margaret River (40 minutes further south) into a two- or three-day itinerary.
          </p>
          <p>
            If you're heading down on a Friday afternoon, allow an extra 30–45 minutes for traffic leaving Perth. Saturdays and Sundays are notably easier. Petrol stations are plentiful along the route, particularly in Mandurah and Harvey, though prices are slightly higher once you leave the metro area.
          </p>

          <h2>The Busselton Jetty</h2>
          <p>
            The jetty was originally built in 1865 to ship timber out of the South West. Over the following century it was extended several times to reach its current length of 1,841 metres. Today it's managed by the Busselton Jetty Environment and Conservation Association, and a restoration and preservation effort over the past two decades has turned it into one of WA's most visited landmarks.
          </p>
          <p>
            You can walk the full length of the jetty at no cost and at any time, though the jetty train (a small electric shuttle that runs along the deck) costs around $5 each way and saves your legs. At the far end sits the Underwater Observatory — a cylindrical structure that descends 8 metres below the surface into a permanent coral ecosystem that has grown on the jetty's timber pylons over more than a century. Inside, 11 viewing windows look out onto corals, sponges, nudibranchs, and hundreds of fish species including batfish, wobbegong sharks, and schools of blue-throated wrasse. Tours run every hour and cost approximately $40 for adults and $20 for children. Book online in advance during school holidays and long weekends, as sessions sell out.
          </p>
          <p>
            The walk out and back takes roughly 45–60 minutes at a comfortable pace. Early mornings are the best time — the light on the water is extraordinary, crowds are minimal, and on calm days the bay is mirror-flat. Sunsets are equally spectacular from the jetty, with the structure silhouetted against a western sky that turns orange and pink as the light falls.
          </p>

          <h2>Geographe Bay Beaches</h2>
          <p>
            Geographe Bay is naturally sheltered from the Southern Ocean swell, which means the water here is dramatically calmer than Perth beaches or Cottesloe. The trade-off is that you don't get waves — but for families with children, snorkellers, or anyone who simply wants to float in warm, clear water without being knocked around, Busselton's beach is genuinely superb.
          </p>
          <p>
            The main beach in front of the town is a long strip of fine white sand with good facilities including toilets, showers, a café, and a children's playground. During summer the water temperature reaches the mid-20s Celsius. Dunsborough, 20 kilometres west of Busselton, offers a slightly more sheltered version of the same bay and is a popular alternative base. Eagle Bay and Meelup Beach near Dunsborough are considered among the most beautiful beaches in the South West — both are worth the short detour.
          </p>

          <h2>Food and Drink in Busselton</h2>
          <p>
            Busselton has grown considerably as a food destination in recent years, driven partly by its role as the gateway to the Margaret River wine region. For breakfast, the cafés along Queen Street and near the foreshore are reliably good. Shelter Brewing Co, housed in a converted heritage building on the foreshore, brews its own craft beers and serves food with views directly over the bay — it's one of the most atmospheric spots in town for lunch or a late afternoon beer.
          </p>
          <p>
            For seafood, the South West delivers: Geographe Bay blue swimmer crabs are a regional speciality in season (roughly December through April), and local fish including snapper, dhufish, and baldchin groper appear on most restaurant menus. The Goose Beach Bar and Kitchen on the beachfront is a perennial local favourite, with good reason.
          </p>
          <p>
            If you're making the short drive to Dunsborough, Yarri Restaurant at Cape Lodge (a luxury lodge in the forest between Dunsborough and Margaret River) represents one of the finest dining experiences in regional WA — worth booking ahead for a special occasion.
          </p>

          <h2>What to Do Beyond the Jetty</h2>
          <p>
            The region has enough to fill two to three days without touching the Margaret River wine trail. Sugarloaf Rock, a striking granite sea stack at Cape Naturaliste, is a 30-minute drive from Busselton and produces extraordinary photography at sunset. The Cape Naturaliste Lighthouse (open for guided tours daily) sits adjacent and offers panoramic views of the Indian Ocean and Geographe Bay from the same headland.
          </p>
          <p>
            Snorkellers should head to the tidal pools and reef flats at Eagle Bay or the rocky headlands around Cape Naturaliste — visibility is excellent and marine life is abundant. Cape-to-Cape Track walkers use Busselton or Dunsborough as a starting point for sections of the 135-kilometre trail between Cape Naturaliste and Cape Leeuwin.
          </p>
          <p>
            The Busselton Margaret River Airport also hosts the Margaret River Pro surfing competition (World Surf League Championship Tour) each April at nearby Surfer's Point in Prevelly, 45 minutes south. If your travel dates overlap with the event, it's worth building into your itinerary — the wave quality at Surfer's Point is world-class and watching a Championship Tour event is free.
          </p>

          <h2>Combining Busselton with Margaret River</h2>
          <p>
            The most popular approach is to use Busselton or Dunsborough as a base and day-trip into the Margaret River wine region. The town of Margaret River is 40 minutes from Busselton and the cellar doors are spread along a 30-kilometre corridor of the Bussell Highway and Caves Road. Over 200 cellar doors operate in the region — Abbey Vale, Vasse Felix, Leeuwin Estate, and Cullen Wines are among the most acclaimed. Hire cars remain essential here: there is no shuttle between wineries, and the distances between cellar doors make walking or cycling impractical for most visitors.
          </p>
          <p>
            The three main cave systems in the Margaret River region — Lake Cave, Mammoth Cave, and Jewel Cave — are all within easy driving distance. Lake Cave is the most visually dramatic, with a suspended calcite table reflected in a still underground lake.
          </p>

          <h2>Practical Information</h2>
          <p>
            Busselton's peak season runs from December through January (Australian summer school holidays) and Easter long weekend. Accommodation books out quickly during these periods and prices spike — book at least two to three months ahead. June through August (WA winter) is quieter, cooler (daytime temperatures around 17–19°C), and notably cheaper, with most attractions still fully operational.
          </p>
          <p>
            Parking near the jetty and foreshore is paid (ticket machines, typically $3–5 per hour) during peak periods. Free parking is available on surrounding residential streets a short walk from the waterfront. The town centre is compact and walkable once you've arrived by car.
          </p>
          <p>
            The Busselton Jetty Environment and Conservation Association website (busseltonjetty.com.au) has current operating hours, tour times, and online booking for the Underwater Observatory — worth checking before you go, as seasonal hours vary.
          </p>

          <h2>Is Busselton Worth the Drive?</h2>
          <p>
            For most Perth visitors, the answer is yes — provided you understand what it is. Busselton is not an adrenaline destination. It rewards those who want calm water, a genuinely unique attraction in the underwater observatory, and a comfortable base for exploring the broader South West. The 2.5-hour drive from Perth Airport is manageable as a day trip, but a two-night stay unlocks considerably more — the beaches are better in the morning, the wine region takes a full day, and the sunsets from the jetty are worth staying for.
          </p>
          <p>
            If you're already planning a Margaret River trip, adding a day in Busselton costs almost nothing extra and gives you a markedly different experience: calm water, a heritage landmark, and good food, as a counterpoint to the vineyards and forest further south.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Explore Busselton and the South West?</h3>
          <p className="text-slate-600 mb-6">Pick up your hire car at Perth Airport and you'll be walking the world's longest wooden jetty in under three hours. AutoTrip offers late-model vehicles with unlimited kilometres — ideal for multi-day South West road trips.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
