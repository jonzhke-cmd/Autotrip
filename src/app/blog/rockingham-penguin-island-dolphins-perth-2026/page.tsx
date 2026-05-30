import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight, Waves } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Rockingham & Penguin Island 2026: Swim with Wild Dolphins Near Perth | AutoTrip Perth",
  description: "Swim with wild dolphins at Rockingham, visit Australia's most accessible penguin colony on Penguin Island, and snorkel the Shoalwater Bay Marine Park — 45 minutes from Perth.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/rockingham-penguin-island-dolphins-perth-2026" },
};

export default function RockinghamPenguinIslandDolphinsPerth2026() {
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
            <li className="font-medium text-slate-900">Rockingham &amp; Penguin Island</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Wildlife Day Trips
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Rockingham &amp; Penguin Island 2026: Swim With Wild Dolphins and Meet Australia&apos;s Cheekiest Penguins
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>May 29, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>45 min drive from Perth</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="h-4 w-4" />
              <span>Shoalwater Bay Marine Park</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Full-day recommended</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Wild bottlenose dolphins swimming in clear blue water near Rockingham, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Rockingham&apos;s wild dolphins — 45 minutes south of Perth Airport</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            You can swim with wild dolphins at Monkey Mia — but that is a 10-hour drive. At Rockingham, 45 minutes south of Perth Airport, you can be in the water with wild bottlenose dolphins by 9am and back in the city for dinner. Add a trip to Penguin Island and you have got one of the best wildlife days in Western Australia.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Rockingham Is One of Perth&apos;s Best-Kept Secrets</h2>
          <p>
            Rockingham sits at the northern edge of Shoalwater Bay Marine Park — a protected marine environment that hosts wild bottlenose dolphins, Australian sea lions, little penguins, and dugongs. Unlike places that lure dolphins with fish, Rockingham&apos;s swim-with-dolphins experiences are conducted with a wild pod that chooses to interact with swimmers on their own terms.
          </p>
          <p>
            This makes every encounter different. Some mornings the pod ignores you entirely (they are wild animals — they have their own agenda). Other mornings they swim loops around you for 20 minutes. Either way, you are in clear shallow water with one of Australia&apos;s most spectacular dolphin habitats.
          </p>

          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Facts: Rockingham Dolphin Swims</h3>
            <p className="text-slate-700">
              Tours depart daily (weather permitting) from Rockingham foreshore. Cost: approximately $145–$175 per adult including wetsuit and snorkel gear. Duration: 3–4 hours. Minimum age varies by operator — typically 4 years for dolphin watching, 8 years for in-water swims. Book 2–3 weeks ahead for weekends.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Penguin Island: Australia&apos;s Most Accessible Penguin Colony</h2>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">What Is Penguin Island?</h3>
          <p>
            Penguin Island is a small limestone island just 800 metres offshore from Mersey Point in Rockingham. It is home to the largest colony of little penguins (also called fairy penguins) in Western Australia — around 1,200 birds. A short ferry ride ($18 return for adults, $9 for kids) takes you across. No cars on the island; you walk or snorkel.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">What to Do on Penguin Island</h3>
          <p>
            The Discovery Centre runs daily penguin feeding presentations at 10:30am, 12:30pm, and 2:30pm — a wildlife ranger feeds rescued penguins and explains the colony&apos;s conservation work. Outside presentation times you can walk the island trails and often spot penguins resting near their burrows, especially at dawn and dusk.
          </p>
          <p>
            The snorkelling off the island&apos;s sheltered northern beach is genuinely excellent — clear water, healthy reef fish, and occasionally dolphins or sea lions from the nearby shoals. Bring your own gear or hire on the mainland.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Important: Ferry Seasonality</h3>
          <p>
            The Penguin Island ferry runs September through May. In winter (June to August), the island is closed to protect nesting penguins. Plan your visit accordingly — September and April are excellent months with smaller crowds.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Dolphin Swim Tour</div>
              <p className="text-slate-600 text-sm mb-3">Wild dolphins, snorkel gear included, 3-hour experience. Book with Rockingham Wild Encounters or Dolphin Wild. From $145/adult.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Rockingham Foreshore</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Penguin Island Ferry</div>
              <p className="text-slate-600 text-sm mb-3">Short ferry from Mersey Point. $18 adults, $9 children. Penguin presentations at 10:30am, 12:30pm, 2:30pm. Sep–May only.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Mersey Point, Shoalwater</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Shoalwater Bay Snorkelling</div>
              <p className="text-slate-600 text-sm mb-3">Marine park snorkelling direct from the beach. Sea lions sometimes join in. Best at Mersey Point or Safety Bay beach on calm days.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Shoalwater Bay Marine Park</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Safety Bay Beach</div>
              <p className="text-slate-600 text-sm mb-3">Calm, protected swimming beach right next to the penguin ferry terminal. Shallow reef flat, perfect for families and post-dolphin-swim relaxing.</p>
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Safety Bay, Rockingham</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Ultimate Rockingham Day Trip Itinerary</h2>

          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">7:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Leave Perth</h4>
                <p className="text-slate-600 text-sm">Drive south via the Kwinana Freeway. 45 minutes to Rockingham foreshore.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">8:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Dolphin Swim Departs</h4>
                <p className="text-slate-600 text-sm">Check in with your tour operator. Wetsuit up. The boat heads into Shoalwater Bay.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">12:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Lunch at Rockingham</h4>
                <p className="text-slate-600 text-sm">Fish and chips on the foreshore. The Palm Beach Hotel does a solid pub lunch too.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">13:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Ferry to Penguin Island</h4>
                <p className="text-slate-600 text-sm">5-minute ferry from Mersey Point. Walk the island trails and spot penguins.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">14:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Penguin Presentation</h4>
                <p className="text-slate-600 text-sm">2:30pm feeding presentation at the Discovery Centre. Then snorkel the northern beach.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">16:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Safety Bay Beach Wind-Down</h4>
                <p className="text-slate-600 text-sm">Return ferry, then relax at Safety Bay beach before the drive back to Perth.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">17:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Back in Perth</h4>
                <p className="text-slate-600 text-sm">45-minute drive north. Home for dinner, or stop in Fremantle on the way back.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 my-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">FAQ: Swim With Dolphins Perth</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Can you swim with wild dolphins near Perth?</h4>
                <p className="text-slate-700 text-sm">Yes. Rockingham is the closest place to Perth to swim with wild (not fed) dolphins. Tours operate year-round, weather permitting, from Rockingham foreshore — 45 minutes south of Perth Airport.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">How much does it cost to swim with dolphins in Rockingham?</h4>
                <p className="text-slate-700 text-sm">Approximately $145 to $175 per adult in 2026, including wetsuit hire and snorkel equipment. Dolphin-watch (boat only, no swimming) options are cheaper at around $75 per adult.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Are the dolphins guaranteed?</h4>
                <p className="text-slate-700 text-sm">Operators find the dolphins on most tours — the pod is resident in Shoalwater Bay year-round. However, because they are wild, interaction is never guaranteed. Most operators offer a partial refund or free rebooking if the dolphins do not engage.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Is Penguin Island open year-round?</h4>
                <p className="text-slate-700 text-sm">No — Penguin Island closes June to August to protect the nesting penguin colony. Ferry services run September through May.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for Wild Dolphins &amp; Penguins?</h3>
            <p className="text-slate-700 mb-6">
              Rockingham is 45 minutes south of Perth Airport on a straight freeway. Pick up your rental at arrivals and head straight down — no tour bus schedules, no waiting around. Book your dolphin swim in advance and leave the driving logistics to us.
            </p>
            <p className="text-slate-600 text-sm mb-6">
              Perth Airport pickups from 5am. Family SUVs and 7-seaters available for group day trips.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Rockingham Day Trip Car
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
                <p className="text-sm text-slate-600">Perth local, wildlife enthusiast, has swum with dolphins 11 times</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">Share this with a wildlife lover:</p>
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
