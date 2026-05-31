import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mandurah Day Trip from Perth 2026: Dolphins, Crabs & Canals | AutoTrip Perth',
  description: 'Mandurah is 75 minutes south of Perth — wild dolphins in the estuary, blue manna crabs fresh off the jetty, and canal cruises through WA\'s largest waterway network. Complete 2026 guide.',
  keywords: ['Mandurah day trip from Perth', 'Mandurah dolphins', 'blue manna crab Mandurah', 'Mandurah canal cruise', 'things to do Mandurah', 'Mandurah estuary'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/mandurah-day-trip-from-perth-2026' },
  openGraph: {
    title: 'Mandurah Day Trip from Perth 2026: Dolphins, Crabs & Canal Cruises',
    description: 'Wild dolphins, blue manna crabs, and canal waterways 75 minutes south of Perth. Here\'s how to do Mandurah properly in 2026.',
    url: 'https://autotrip-five.vercel.app/blog/mandurah-day-trip-from-perth-2026',
  },
};

export default function MandurahDayTripBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Day Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 27, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 75 min from Perth</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Mandurah Day Trip from Perth 2026: Dolphins, Crabs &amp; Canal Cruises
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Most Perth visitors head to Fremantle or Rottnest and miss this completely. Seventy-five minutes south of the city, Mandurah has wild dolphins in the estuary, fresh blue manna crabs on the foreshore, and canal waterways that genuinely look like they shouldn&apos;t exist in Australia. Here&apos;s why it&apos;s worth the drive.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'From Perth', value: '75 min drive' },
            { label: 'Dolphins', value: '100+ residents' },
            { label: 'Crab season', value: 'Nov – Apr' },
            { label: 'Canal network', value: "Southern hemisphere's largest" },
          ].map((fact) => (
            <div key={fact.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
              <div className="text-base font-black text-slate-900">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1400&q=80"
            alt="Mandurah estuary waterways and canals, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            Here&apos;s the thing about Mandurah: it&apos;s technically WA&apos;s second-largest city, but it doesn&apos;t feel like one. It feels like a relaxed waterfront town where the main event on any given morning is watching a pod of dolphins chase fish through the estuary while you drink coffee on the foreshore. That&apos;s not a tourism brochure line — it&apos;s genuinely what happens here.
          </p>
          <p>
            The drive south from Perth is 75 kilometres of mostly motorway (the Kwinana Freeway — no tolls, no confusing navigation, just head south). From Perth Airport you&apos;re in Mandurah in about 75 to 90 minutes. A hire car gives you the flexibility to explore beyond the town centre, which is where the best bits are.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-5">
            <div className="text-2xl">🐬</div>
            <div>
              <div className="font-black text-slate-900 mb-1">The dolphins are wild — and there are a lot of them</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                The Peel-Harvey Estuary is home to a resident pod of over 100 wild bottlenose dolphins — one of the largest resident populations in WA. You don&apos;t need to book a tour or pay anything to see them. Walk the foreshore boardwalk at sunrise or sunset and they regularly surface within metres of you. If you want a guaranteed up-close encounter in the water, the dolphin cruise boats know exactly where the pod is on any given day.
              </p>
            </div>
          </div>

          <h2>Top things to do in Mandurah</h2>

          <h3>Walk the foreshore and spot dolphins for free</h3>
          <p>
            The Mandurah Foreshore walkway runs about 3 kilometres along the estuary edge — flat, easy, and lined with pelicans that have long since stopped being afraid of people. Early morning and late afternoon are the best times for dolphin sightings. The boardwalk connects the historic Old Bridge to the newer marina precinct, and the café strip along the way is solid.
          </p>

          <h3>Book a dolphin or canal cruise</h3>
          <p>
            If you want a more structured experience, the dolphin and canal cruises departing from the main town jetty are genuinely worth it. Around $30 per adult for 90 minutes, and you&apos;ll almost certainly get closer to the dolphins than you would from the shore. The canal cruises take you through Mandurah&apos;s extraordinary residential waterway network — one of the largest canal systems in the southern hemisphere, lined with some of the most over-the-top waterfront properties you&apos;ll see outside the Gold Coast.
          </p>

          <h3>Go crabbing (or just eat crabs)</h3>
          <p>
            Mandurah is the blue manna crab capital of WA. Between November and April, locals wade into the estuary shallows with a hand net and a bucket — it&apos;s a genuine WA tradition and visitors are welcome to join in. You&apos;ll need a Recreational Fishing Licence (around $30/year or $15 for 3 days, from fish.wa.gov.au) and bag limits apply.
          </p>

          <div className="not-prose my-6 bg-slate-50 rounded-2xl p-4">
            <div className="font-bold text-slate-900 text-sm mb-1">Not sure what blue manna crabs are?</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Blue manna crabs (also called blue swimmer crabs) are the crabs you&apos;ll see on the menus of virtually every coastal WA restaurant in summer. They&apos;re blue when alive, turn bright orange when cooked, and have sweet, delicate white meat. Catching your own and eating them freshly cooked on the foreshore is a deeply Perth experience. If crabbing isn&apos;t your thing, several restaurants and fish-and-chip shops along the Mandurah Esplanade serve them daily.
            </p>
          </div>

          <h3>Swim at Mandurah Ocean Beach</h3>
          <p>
            Five minutes from the town centre, this long white-sand beach faces the full Indian Ocean. Calm, patrolled swimming in the family area, decent surf at the southern end, a kiosk for post-swim ice creams. The contrast between the warm, sheltered estuary and the open ocean beach — both accessible in the same visit — is genuinely one of Mandurah&apos;s best features.
          </p>

          <h3>The 3 PM pelican feeding</h3>
          <p>
            Every day at 3 PM there&apos;s a pelican feeding near the Mandurah Visitor Centre. This sounds like a minor tourist thing and somehow ends up being a highlight of the day. The pelicans are enormous, completely unafraid, and arrive from multiple directions with intent. Kids love it. Adults trying to maintain their composure also love it.
          </p>

          <h2>Where to eat in Mandurah</h2>
          <p>
            <strong>Dome Mandurah</strong> — the reliable WA café chain has a great estuary-view terrace here. Opens at 7 AM, good for breakfast before a morning cruise. <strong>The foreshore fish-and-chip shops</strong> along the Esplanade serve fresh blue manna crabs at good value — eating them outside while pelicans circle hopefully is the correct Mandurah experience. <strong>The Atrium Hotel Restaurant</strong> is the most polished option for a longer lunch, strong on local seafood.
          </p>

          <div className="not-prose my-10 bg-slate-900 text-white rounded-[2rem] p-7">
            <div className="font-black text-xl mb-5">Perfect Mandurah day — leave Perth at 8 AM</div>
            <ul className="space-y-3">
              {[
                '8:00 AM — Leave Perth. Kwinana Freeway south, 75 minutes.',
                '9:15 AM — Arrive Mandurah. Walk the foreshore, spot dolphins, have coffee at Dome.',
                '10:30 AM — Dolphin or canal cruise (book online, 90 minutes).',
                '12:00 PM — Blue manna crab lunch on the Esplanade foreshore.',
                '1:30 PM — Drive to Mandurah Ocean Beach for an afternoon swim (5 min).',
                '2:45 PM — Head back to the foreshore.',
                '3:00 PM — Pelican feeding at the Visitor Centre. Do not miss this.',
                '4:00 PM — Drive back to Perth. In by 5:30 PM.',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2>The bottom line</h2>
          <p>
            Mandurah is the day trip that Perth locals take their interstate mates on when they want to show them something real — not the polished heritage streets of Fremantle or the famous beaches, but an estuary town with wild dolphins and fresh crabs and a pace of life that makes you wonder why you ever rush anywhere.
          </p>
          <p>
            From Perth Airport, it&apos;s 75 minutes straight down the Kwinana Freeway. Pick up a hire car, head south, and be watching dolphins before your morning coffee is finished.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Mandurah is 75 Minutes from Perth Airport</h3>
          <p className="text-slate-600 mb-6">
            Pick up your hire car at AutoTrip Perth Airport and head straight south on the Kwinana Freeway. Dolphins, crabs, and canal cruises — all in a single day. Free 24/7 shuttle from all Perth Airport terminals.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>

      </div>
    </article>
  );
}
