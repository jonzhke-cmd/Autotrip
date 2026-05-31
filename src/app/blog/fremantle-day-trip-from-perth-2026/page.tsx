import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fremantle Day Trip from Perth: The Ultimate 2026 Local Guide | AutoTrip Perth',
  description: "Fremantle is 30 minutes south of Perth Airport and packed with world-class food, heritage sites, craft beer and coastal vibes. Here's the definitive Fremantle day trip guide for 2026.",
  keywords: ['Fremantle day trip from Perth', 'Fremantle from Perth Airport', 'Fremantle Markets 2026', 'things to do Fremantle', 'Perth car hire Fremantle'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/fremantle-day-trip-from-perth-2026' },
  openGraph: {
    title: 'Fremantle Day Trip from Perth: The Ultimate 2026 Local Guide',
    description: 'Markets, craft beer, world heritage prison, fish & chips on the harbour, and some of the best street art in Australia — all 30 minutes from Perth Airport.',
    url: 'https://autotrip-five.vercel.app/blog/fremantle-day-trip-from-perth-2026',
  },
};

export default function FremantleDayTripBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6 flex-wrap">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Day Trip</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> April 17, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 30 min from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Fremantle: Perth&apos;s Most Soulful Day Trip Is 30 Minutes From the Airport
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Forget the tourist checklist. Fremantle has a character all its own — a working port city with world heritage history, Australia&apos;s best fish and chips, craft beer that punches above its weight, and a street food market that&apos;s been running since 1897. Here&apos;s how to do it properly.
          </p>
        </header>

        {/* Quick Facts Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Distance from Airport', value: '30 min' },
            { label: 'Best Days to Visit', value: 'Fri–Sun' },
            { label: 'Budget per Person', value: '$80–$120' },
            { label: 'Time Needed', value: 'Full day' },
          ].map((f) => (
            <div key={f.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-2xl font-black text-slate-900">{f.value}</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="/fremantle-markets.jpg"
            alt="Fremantle Markets interior with crowds and stalls, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            There&apos;s a reason Fremantle has been voted one of Australia&apos;s most liveable cities for years running: it managed to stay itself. While Perth sprawled and modernised, Freo quietly held its ground — the sandstone buildings, the fishing fleet, the cappuccino strip, the markets that have run continuously since 1897. In 2026, with WA tourism at record highs, this is the day trip everyone&apos;s talking about.
          </p>

          {/* Amber tip */}
          <div className="not-prose my-8 rounded-2xl bg-amber-50 border border-amber-200 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-2">☀️ Local Tip</p>
            <p className="text-slate-800 font-medium">
              Freo locals call it &quot;the Doctor&quot; — the cool afternoon sea breeze that rolls in off the Indian Ocean around 3 PM most summer days. If you&apos;re visiting in the warmer months, plan outdoor activities for the morning and let the afternoon sort itself out on a harbour terrace.
            </p>
          </div>

          <h2>Why Fremantle Hits Different</h2>
          <p>
            WA&apos;s international visitor numbers are tracking at all-time highs in 2026, buoyed by direct European flights and a global appetite for &quot;slow travel&quot; experiences — places with genuine character, craft food scenes, and cultural depth. Fremantle delivers all three. The city&apos;s social media profile has exploded as travel creators discover what locals have always known: Freo photographs brilliantly, the food is genuinely excellent, and you can spend a full day here without touching a tourist trap.
          </p>

          {/* Blue tourist context */}
          <div className="not-prose my-8 rounded-2xl bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-2">🌏 Good to Know</p>
            <p className="text-slate-800 font-medium">
              Fremantle is a completely separate city from Perth — it has its own mayor, its own identity, and its own vibe. Think of it like Brooklyn to Manhattan. Most visitors fly into Perth Airport and drive straight to the CBD, but Freo is actually closer to the airport (30 min south vs 35 min north) and, many reckon, more interesting.
            </p>
          </div>

          <h2>The Drive: Perth Airport → Fremantle</h2>
          <p>
            Head south on the Tonkin Highway, pick up the Kwinana Freeway, and follow signs to Fremantle. It takes about 30–35 minutes depending on traffic, and outside peak hour it&apos;s genuinely smooth. Parking is easier than most visitors expect — there&apos;s a big multi-storey right next to the Markets on Henderson Street, and the outer streets are often metered at very low rates. Once parked, leave the car: everything worth seeing is within 15 minutes on foot.
          </p>

          <h2>Your Full Day in Fremantle</h2>

          <h3>🌅 Morning — Markets &amp; Cappuccino Strip</h3>
          <p>
            Start at the <strong>Fremantle Markets</strong> — open Friday through Sunday, essential on any of those days. The Victorian building has been operating since 1897, and the range is seriously impressive: fresh WA produce, artisan cheeses, hand-rolled pasta, freshly ground coffee, jewellery, ceramics, and food stalls from every corner of the world. Budget at least 90 minutes, and arrive before 10 AM on weekends to beat the crowds.
          </p>
          <p>
            From the Markets, walk two blocks to <strong>South Terrace</strong> — the famous cappuccino strip. Italian-style cafés that have been here for decades, pavement tables in the sun, and the kind of people-watching you can&apos;t manufacture. Order a flat white and do absolutely nothing for half an hour. You&apos;re on holiday.
          </p>

          <h3>🔒 Mid-Morning — Fremantle Prison</h3>
          <p>
            <strong>Fremantle Prison</strong> is a UNESCO World Heritage site and one of the most compelling historical attractions in Australia. Built by convict labour in the 1850s, it operated as a working prison until 1991. The Convict Prison Tour (90 minutes, recommended) takes you through the cell blocks, solitary confinement, the gallows, and the hand-dug tunnels below. Gripping without being gratuitous — and the scale of the place is astonishing.
          </p>

          {/* Red warning */}
          <div className="not-prose my-8 rounded-2xl bg-red-50 border border-red-200 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700 mb-2">⚠️ Book Ahead</p>
            <p className="text-slate-800 font-medium">
              The Prison Torch Tour (evening, atmospheric, wildly popular) sells out weeks in advance during peak season — book the moment you land. The daytime Convict Tour is easier to get into but still sells out on weekends. Don&apos;t just rock up.
            </p>
          </div>

          <h3>🦞 Lunch — Fishing Boat Harbour</h3>
          <p>
            Walk 15 minutes west to <strong>Fishing Boat Harbour</strong> — the working heart of Freo&apos;s fleet. <strong>Cicerello&apos;s</strong> and <strong>Kailis Fish Market Café</strong> are the perennial favourites: fish and chips (grilled or fried), fresh Fremantle octopus, eaten on the harbour wall watching boats come and go. If you want to splash out, the Western Rock Lobster caught just offshore is sold live and cooked to order. Eating fresh cray by the water in a working port is a genuine WA experience.
          </p>

          <h3>🍺 Afternoon — Little Creatures &amp; Maritime Museum</h3>
          <p>
            A short walk along the harbour brings you to <strong>Little Creatures Brewery</strong> — the craft beer institution that started in a converted boat shed in 2000 and helped change the way Australia thinks about beer. The original Freo brewpub is the best one: massive industrial space, tanks visible from the bar, and a food menu that holds its own. The Pale Ale that made the brand famous is still one of the best session beers in Australia.
          </p>
          <p>
            Not a beer drinker? The <strong>WA Maritime Museum</strong> is right next door. It houses the <em>Australia II</em> — the yacht that won the America&apos;s Cup in 1983 in one of the greatest sporting upsets in history — along with impressive WA maritime history. The building, with its curved glass and harbour views, is worth the entry alone.
          </p>

          <h3>🌊 Late Afternoon — Bathers Beach &amp; Street Art</h3>
          <p>
            As the afternoon heat eases, <strong>Bathers Beach</strong> — tucked just behind the Maritime Museum — offers a sheltered stretch of sand with calm water and excellent sunset views. It&apos;s one of Perth&apos;s best-kept beach secrets: protected, clean, and rarely crowded because most visitors don&apos;t know it&apos;s there.
          </p>
          <p>
            Fremantle also has a cracking street art scene around the West End warehouses and the laneways behind the cappuccino strip. No formal trail — just start walking and look up. The work ranges from large commissioned murals to smaller pieces tucked into alleys, and the standard is genuinely high. Good for an hour of aimless wandering before the drive home.
          </p>

          {/* Green insider tip */}
          <div className="not-prose my-8 rounded-2xl bg-green-50 border border-green-200 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700 mb-2">💡 Insider Tip</p>
            <p className="text-slate-800 font-medium">
              Freo pairs beautifully with a morning at Cottesloe Beach (15 min north along the coast) or an evening in Perth&apos;s Northbridge restaurant district. It also stacks perfectly with Rockingham&apos;s penguin island (45 min south) or Mandurah (30 min further) for a full south-coast day loop.
            </p>
          </div>

          {/* FAQ Grid */}
          <h2>Frequently Asked Questions</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {[
              {
                q: 'When are the Fremantle Markets open?',
                a: 'Friday 8 AM–8 PM, Saturday 8 AM–6 PM, Sunday 10 AM–6 PM. Closed Monday–Thursday.',
              },
              {
                q: 'How much does Fremantle Prison cost?',
                a: 'Convict Prison Tour: ~$22 adults. Torch Tour (evening): ~$30. Book at fremantleprison.com.au.',
              },
              {
                q: 'Is there free parking in Fremantle?',
                a: 'Yes — outer streets on Ord St, Marine Tce, and South Tce often have free or metered parking. The Henderson St car park is cheap and central.',
              },
              {
                q: 'Can I get from Perth to Fremantle without a car?',
                a: 'Yes — the Fremantle train line runs regularly from Perth City Station (30 min, ~$5). But a rental car gives you the flexibility to stop at Cottesloe Beach en route and continue south.',
              },
              {
                q: 'What is Little Creatures Brewery?',
                a: "Founded in Fremantle in 2000, it's credited with launching Australia's craft beer revolution. The original Freo brewpub remains the best place to try the famous Pale Ale.",
              },
              {
                q: 'Is Fremantle good for kids?',
                a: 'Very. The Maritime Museum has interactive exhibits, Bathers Beach is calm and safe, and the Markets have food kids love. The Prison tours are rated 8+ for some content.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-slate-50 rounded-2xl p-5">
                <p className="font-bold text-slate-900 mb-2">{faq.q}</p>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Checklist Panel */}
          <div className="not-prose my-10 rounded-2xl bg-slate-900 p-8 text-white">
            <h3 className="text-xl font-black mb-6">Your Fremantle Day Trip Checklist</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Arrive at Markets before 10 AM (weekends)',
                'Flat white on the cappuccino strip',
                'Book Fremantle Prison tour in advance',
                'Fish & chips at Fishing Boat Harbour',
                'Pale Ale at Little Creatures Brewery',
                'Visit WA Maritime Museum & Australia II',
                'Swim at Bathers Beach (hidden gem)',
                'Walk the West End street art laneways',
                'Check for the afternoon sea breeze (The Doctor)',
                'Combine with Cottesloe or Rockingham if time allows',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-white/40 flex items-center justify-center text-white/40 text-xs">✓</span>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <h2>What Car Do You Need?</h2>
          <p>
            Any car from the AutoTrip fleet handles a Fremantle day trip comfortably. A compact sedan is ideal — economical on the freeway, easy to park in the city. If you&apos;re combining Freo with Rockingham, Mandurah, or the Peel Region, a mid-size SUV gives you more comfort for the longer day. Either way, collect from <Link href="/">Perth Airport</Link> at T1–T4 and you&apos;re heading south within 15 minutes of landing.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Explore Fremantle?</h3>
          <p className="text-slate-600 mb-6">
            Pick up your rental car at Perth Airport and be sipping coffee on the cappuccino strip within the hour. AutoTrip offers free 24/7 shuttle service from all Perth Airport terminals — T1 through T4.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition"
          >
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>

      </div>
    </article>
  );
}
