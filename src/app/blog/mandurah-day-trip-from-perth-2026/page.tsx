import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, ChevronRight, Fish, Waves } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Mandurah Day Trip from Perth 2026: Dolphins, Crabs & Canal Cruises | AutoTrip Perth",
  description: "Mandurah is Perth's best-kept day trip secret — wild dolphins in the estuary, blue manna crabs fresh off the jetty, and canal cruises 75 minutes from the city. 2026 guide.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/mandurah-day-trip-from-perth-2026" },
};

export default function MandurahDayTripFromPerth2026() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li className="font-medium text-slate-900">Mandurah Day Trip</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Day Trips
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Mandurah Day Trip from Perth 2026: Dolphins, Crabs & Canal Cruises
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>May 28, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>75 min drive from Perth</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="h-4 w-4" />
              <span>Estuary &amp; ocean beaches</span>
            </div>
            <div className="flex items-center gap-2">
              <Fish className="h-4 w-4" />
              <span>Famous for blue manna crabs</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Aerial view of Mandurah canals and waterways, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Mandurah — where the estuary meets the ocean, 75 minutes south of Perth</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            Most visitors fly into Perth and make a beeline for Fremantle or Rottnest. Smart ones head 75 minutes south to Mandurah — a city built around a stunning estuary teeming with dolphins, crabs, and pelicans, with an ocean beach around the corner and a cafe strip that punches well above its weight.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What Is Mandurah and Why Should You Go?</h2>
          <p>
            Mandurah sits where the Peel-Harvey Estuary meets the Indian Ocean, about 75 kilometres south of Perth along the Kwinana Freeway. It is WA&apos;s second-largest city, but it does not feel like one — it feels like a relaxed waterfront town where the morning&apos;s main event is watching dolphins chase fish in the estuary while you drink coffee.
          </p>
          <p>
            The city has a network of residential canals that look like something out of Amsterdam, a historic foreshore precinct, and easy access to Mandurah Ocean Beach — one of the most underrated stretches of sand in the Perth region. It is doable as a half-day trip, genuinely worth a full day, and a completely different vibe to anything else in the area.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Answer: Is Mandurah Worth Visiting?</h3>
            <p className="text-slate-700">
              Yes — especially if you want wild dolphin encounters, fresh blue manna crabs, and a waterfront atmosphere without the tourist crowds of Fremantle or Rottnest. It is an easy 75-minute drive from Perth Airport and significantly less expensive than other day trips in the region.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Top Things to Do in Mandurah in 2026</h2>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Dolphin-Watching on the Estuary</h3>
          <p>
            Mandurah&apos;s estuary is home to a resident pod of over 100 bottlenose dolphins — one of the largest resident dolphin populations in Western Australia. You do not need to book a cruise to see them; walk along the foreshore at sunrise or sunset and they will often surface within metres of the boardwalk. If you want guaranteed close encounters, take a dolphin cruise from the town centre — they run daily and cost around $30 per adult.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Blue Manna Crabbing</h3>
          <p>
            Mandurah is the blue manna crab capital of Western Australia. Between November and April, locals wade into the estuary shallows with a net and a bucket. You will need a Recreational Fishing Licence from the Department of Primary Industries ($30/year), and there are bag limits — check the current rules at fish.wa.gov.au before you go. If you would rather just eat them, several restaurants on the foreshore serve crabs fresh daily.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Canal Cruise</h3>
          <p>
            Mandurah&apos;s residential canal network is one of the largest canal systems in the southern hemisphere. A 90-minute canal cruise (from $35 per adult) takes you past waterfront mansions, pelican colonies, and into the estuary proper. Highly recommended on a weekday when the water is calm.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Mandurah Ocean Beach</h3>
          <p>
            Just 5 minutes from the town centre, this long white-sand beach faces the Indian Ocean directly. It is consistently rated one of the cleaner, less crowded beaches in the Perth metro area. There is a great surf break at the southern end, calmer swimming near the families area, and a kiosk for post-swim ice creams.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Foreshore Walk &amp; Pelican Feeding</h3>
          <p>
            The Mandurah Foreshore is a 3-kilometre walking trail along the estuary edge, connecting the Old Bridge to the new boardwalk. Pelicans are everywhere and completely unafraid of humans. There is a daily pelican feeding near the Mandurah Visitor Centre at 3pm — free, kid-friendly, and genuinely chaotic in the best possible way.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 my-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">FAQ: Mandurah Day Trip from Perth</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">How far is Mandurah from Perth?</h4>
                <p className="text-slate-700 text-sm">75 kilometres south of Perth CBD via the Kwinana Freeway. Drive time is 55 to 75 minutes depending on traffic. There is also a direct Transperth train from Perth Station (75 minutes).</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Can you do Mandurah as a half-day trip?</h4>
                <p className="text-slate-700 text-sm">Yes — leave Perth at 9am, walk the foreshore, do a dolphin or canal cruise, have lunch on the waterfront, and be back in Perth by 3pm. A full day lets you add the ocean beach and a crabbing session.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">What is Mandurah known for?</h4>
                <p className="text-slate-700 text-sm">Mandurah is known for its wild dolphin population, blue manna crabs, canal waterways, and the Peel-Harvey Estuary. It is also the gateway to Yalgorup National Park and the Peel Region.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Is there parking in Mandurah?</h4>
                <p className="text-slate-700 text-sm">Free parking is available along the foreshore and near the Mandurah Forum. On weekends and school holidays, the foreshore gets busy by 10am — arrive early or park at the Forum and walk down.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Best Time to Visit Mandurah</h2>
          <p>
            Mandurah is a year-round destination, but the best times are spring (September to November) and autumn (March to May). Summer is peak dolphin-watching and crabbing season but brings crowds and 35-degree days. Winter is quieter, the estuary is beautiful in the early morning mist, and it is a great time for whale-watching from the beach (humpbacks pass the coast June to October).
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Where to Eat in Mandurah</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Dome Mandurah</div>
              <p className="text-slate-600 text-sm mb-3">Reliable WA cafe chain with a spectacular estuary-view terrace. Great for breakfast before your dolphin cruise. Open from 7am daily.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Mandurah Foreshore</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Waterfront Fish &amp; Chips</div>
              <p className="text-slate-600 text-sm mb-3">Local favourite for fresh blue manna crabs and chips. Unpretentious, excellent value, and they know their seafood.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Mandurah Esplanade</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">The Atrium Hotel Restaurant</div>
              <p className="text-slate-600 text-sm mb-3">Mandurah&apos;s most polished dining option — modern Australian with a strong local seafood menu. Book ahead for weekends.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Ormsby Terrace, Mandurah</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Mandurah Foreshore Markets</div>
              <p className="text-slate-600 text-sm mb-3">Weekend markets with local produce, street food, and artisan goods. Running most Sundays through summer and autumn.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Mandurah Foreshore (Sundays)</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Perfect Mandurah Day Trip Itinerary</h2>

          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">8:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Leave Perth</h4>
                <p className="text-slate-600 text-sm">Head south on the Kwinana Freeway. Arrive Mandurah around 9:15am.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">9:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Foreshore Walk &amp; Coffee</h4>
                <p className="text-slate-600 text-sm">Walk the estuary boardwalk. Spot dolphins. Coffee at Dome or a local cafe.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">10:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Dolphin or Canal Cruise</h4>
                <p className="text-slate-600 text-sm">90-minute cruise from the main jetty. Book online — 10:30am departure is best.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">12:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Crab Lunch on the Foreshore</h4>
                <p className="text-slate-600 text-sm">Fresh blue manna crabs and chips. Pelicans will try to steal your lunch — hold firm.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">14:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Ocean Beach Swim</h4>
                <p className="text-slate-600 text-sm">Drive 5 minutes to Mandurah Ocean Beach for an afternoon swim in the Indian Ocean.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">15:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Pelican Feeding</h4>
                <p className="text-slate-600 text-sm">Daily pelican feeding at the Visitor Centre at 3pm — do not miss it.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">16:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Drive Back to Perth</h4>
                <p className="text-slate-600 text-sm">Return via the Kwinana Freeway. Back in Perth by 5:15 to 5:30pm.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Hit the Road to Mandurah?</h3>
            <p className="text-slate-700 mb-6">
              Mandurah is 75 minutes south on a straight freeway — one of the easiest drives from Perth Airport. Pick up a rental at arrivals and go straight to the estuary. We will handle the car; you handle the crabs.
            </p>
            <p className="text-slate-600 text-sm mb-6">
              Perth Airport pickups available from 5am. All vehicles include GPS and WA-specific road guides.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Mandurah Day Trip Car
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </article>

        {/* Author & Share */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">AT</span>
              </div>
              <div>
                <p className="font-bold text-slate-900">Sarah from AutoTrip</p>
                <p className="text-sm text-slate-600">Perth local, estuary enthusiast, serial crab-catcher</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">Share this with someone who needs a day trip:</p>
              <button className="text-slate-400 hover:text-primary transition">Twitter</button>
              <button className="text-slate-400 hover:text-primary transition">Facebook</button>
              <button className="text-slate-400 hover:text-primary transition">WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
