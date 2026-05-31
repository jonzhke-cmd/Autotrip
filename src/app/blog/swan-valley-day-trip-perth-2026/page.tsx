import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Swan Valley Day Trip from Perth 2026: The Complete Guide | AutoTrip Perth',
  description: 'Swan Valley is 25 minutes from Perth Airport — WA\'s oldest wine region with artisan chocolate, craft beer, boutique wineries, and stunning riverside scenery. Complete 2026 guide.',
  keywords: ['Swan Valley day trip from Perth', 'best day trips from Perth 2026', 'Swan Valley vs Margaret River', 'Swan Valley wineries', 'things to do Swan Valley Perth', 'Swan Valley food trail'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/swan-valley-day-trip-perth-2026' },
  openGraph: {
    title: 'Swan Valley Day Trip from Perth 2026: The Complete Guide',
    description: 'WA\'s oldest wine region is 25 minutes from Perth Airport. Here\'s how to do the Swan Valley food and wine trail properly in 2026.',
    url: 'https://autotrip-five.vercel.app/blog/swan-valley-day-trip-perth-2026',
  },
};

export default function SwanValleyDayTripBlogPost() {
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
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 25 min from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Swan Valley Day Trip from Perth 2026: The Complete Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Twenty-five minutes from Perth Airport, WA&apos;s oldest wine region is also one of the easiest and most satisfying day trips in the entire state. Wine, chocolate, craft beer, nougat, cheese — and you can be back in time for dinner. Here&apos;s how to do it right.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'From airport', value: '25 min' },
            { label: 'Trail length', value: '32 km circuit' },
            { label: 'Cellar doors', value: '150+ stops' },
            { label: 'Best day', value: 'Sunday' },
          ].map((fact) => (
            <div key={fact.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
              <div className="text-base font-black text-slate-900">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1400&q=80"
            alt="Swan Valley vineyard rows at golden hour, Western Australia wine region"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            The Swan Valley doesn&apos;t get the headlines that Margaret River does — and honestly, that&apos;s exactly what makes it great. While WA&apos;s famous southern wine region fills up with weekend visitors and destination-getaway crowds, the Swan Valley quietly gets on with producing excellent fortified wines, craft beers, artisan chocolate, nougat, cheese, and a food trail you can do in a single day without staying overnight or driving three hours.
          </p>
          <p>
            The Valley starts about 15 kilometres northeast of Perth CBD, following the Swan River upstream through Guildford — WA&apos;s oldest colonial town — and into the river flats where the vineyards begin. From Perth Airport, head north on the Great Eastern Highway and you&apos;re there in 25 minutes. No winding roads, no drama.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
            <div className="text-2xl">🍷</div>
            <div>
              <div className="font-black text-slate-900 mb-1">Swan Valley vs Margaret River — which one should you do?</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>Swan Valley</strong> = day trip from Perth, no accommodation needed, 25 minutes away, casual food trail feel, fortified wines and full-bodied whites.<br/><br/>
                <strong>Margaret River</strong> = destination in its own right, 3 hours south, needs at least 2 nights, cool-climate Cabernets and Chardonnays, coastal scenery.<br/><br/>
                One free day in Perth? Swan Valley. Three days to spare? Margaret River. Simple.
              </p>
            </div>
          </div>

          <h2>The Swan Valley Food and Wine Trail</h2>
          <p>
            The Food and Wine Trail is a self-guided driving route connecting more than 150 cellar doors, restaurants, providores, breweries, distilleries, and artisan food producers along a roughly 32-kilometre circuit. You&apos;re not meant to cover all of it — the point is picking a handful of stops that appeal and spending time properly, rather than rushing through a checklist.
          </p>
          <p>
            The trail map is available at every cellar door and from the Swan Valley Visitor Centre in Guildford. It&apos;s colour-coded by category (wine, beer, food, chocolate, etc.) and every stop is numbered. The circuit is designed to be driven clockwise starting from Guildford — follow that and you won&apos;t get confused.
          </p>

          <h2>The best Swan Valley wineries in 2026</h2>

          <h3>Sandalford Wines</h3>
          <p>
            Sandalford has had vines in the ground since 1840 — one of the oldest continuously operating wineries in Australia. The Swan Valley cellar door is a proper restaurant and function venue as well as a tasting room, and the food menu is genuinely good. The Estate Reserve fortified wines are the standout; some of the best in WA.
          </p>

          <h3>Mandoon Estate</h3>
          <p>
            The Swan Valley&apos;s most impressive modern estate — a purpose-built winery, restaurant, and boutique hotel complex that opened in 2012 and has set the regional benchmark ever since. The Homestead range is the one to try, and the restaurant terrace views over the river are the best in the Valley. Book for lunch on weekends — it&apos;s consistently one of WA&apos;s better restaurant experiences.
          </p>

          <h3>Houghton Wines</h3>
          <p>
            Houghton is probably WA&apos;s most recognised wine brand internationally — the White Classic (originally White Burgundy) has been one of Australia&apos;s best-selling whites for decades. The cellar door here is large, well-run, and a great introduction to WA wine styles across all price points.
          </p>

          <h2>Beyond wine: the artisan food trail</h2>

          <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Margaret River Chocolate Company', desc: 'Free tasting bar runs the length of the shop — work through the full couverture chocolate range at no charge. Kids go wild. Adults also go wild. The drinking chocolate is exceptional.' },
              { name: 'The Cheese Barrel', desc: 'WA-made and imported cheeses, cured meats, and accompaniments. Perfect for assembling a riverside picnic — the Swan Valley has several excellent spots by the water.' },
              { name: 'Mondo Nougat', desc: 'Handmade nougat in a huge range of flavours, including native Australian combinations you won\'t find elsewhere. The samples are generous and the gifting packs are popular WA souvenirs.' },
              { name: 'Mash Brewing', desc: 'The Valley\'s best craft brewery in a converted agricultural building. Good year-round range plus seasonal releases. Wood-fired oven food menu. Excellent beer garden.' },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="font-black text-slate-900 text-sm mb-2">{item.name}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2>Start in Guildford — WA&apos;s oldest town</h2>
          <p>
            Before heading into the vineyards, stop in Guildford — the historic township at the Valley&apos;s gateway and one of WA&apos;s most intact colonial streetscapes. The main street, James Street, has beautiful heritage buildings housing antique shops, galleries, and cafés. The <strong>Rose and Crown Hotel</strong> (1841) is the oldest continuously licensed hotel in WA and still does a good pub lunch in a genuinely historic building.
          </p>
          <p>
            <strong>Woodbridge House</strong> (National Trust, 1885) runs guided tours on weekends — a beautifully preserved colonial homestead with river views that gives you great context for the Swan River Colony&apos;s early history. Good 45-minute stop before hitting the cellar doors.
          </p>

          <div className="not-prose my-8 flex gap-4 bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-5">
            <div className="text-2xl">🚗</div>
            <div>
              <div className="font-black text-slate-900 mb-1">Practical tips before you go</div>
              <ul className="text-slate-700 text-sm leading-relaxed space-y-2 mt-1">
                <li><strong>Designated driver:</strong> If you&apos;re doing serious wine tasting, sort this out before you leave. Tasting rooms are generous and WA&apos;s 0.05 BAC limit applies on the drive home.</li>
                <li><strong>Best day:</strong> Sunday has the best atmosphere at the larger cellar doors. Weekdays are quieter with more personal service.</li>
                <li><strong>Timing:</strong> Start in Guildford around 9:30–10 AM (most cellar doors open at 10–11 AM), work the circuit clockwise, and be back in Perth by 5–6 PM.</li>
                <li><strong>Bring an esky (cooler box):</strong> Most cellar doors sell bottles and several food producers sell chilled items — worth having in the hire car boot.</li>
              </ul>
            </div>
          </div>

          <h2>Swan Valley with kids</h2>
          <p>
            More family-friendly than you might expect. Most cellar doors have lawns and outdoor spaces, several have kids&apos; menus, and the Margaret River Chocolate Company free tasting bar is a guaranteed hit with every age group. <strong>Caversham Wildlife Park</strong> at the southern end of the Valley is one of Perth&apos;s best — koala cuddle sessions, kangaroo feeding, and a wide range of Australian native animals. A great half-day stop for families with young children.
          </p>

          <div className="not-prose my-10 bg-slate-900 text-white rounded-[2rem] p-7">
            <div className="font-black text-xl mb-5">Suggested day out — starting from Perth Airport</div>
            <ul className="space-y-3">
              {[
                '9:30 AM — Pick up your hire car at AutoTrip Perth Airport',
                '10:00 AM — Arrive in Guildford, walk James Street and have coffee',
                '10:45 AM — Woodbridge House guided tour (weekends only, 45 min)',
                '11:30 AM — First cellar door — Sandalford or Houghton for a proper introduction',
                '1:00 PM — Lunch at Mandoon Estate (book ahead on weekends)',
                '2:30 PM — Artisan food trail: Chocolate Company, Mondo Nougat, Cheese Barrel',
                '4:00 PM — Mash Brewing for an afternoon beer and the beer garden',
                '5:30 PM — Back on the Great Eastern Highway, in Perth by 6 PM',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2>The bottom line</h2>
          <p>
            The Swan Valley is the day trip that Perth locals recommend when visiting friends ask &ldquo;what should I do tomorrow?&rdquo; Close enough to be casual, good enough to be memorable, and varied enough that two people with completely different interests — one for wine, one for chocolate and cheese — both come away happy.
          </p>
          <p>
            From Perth Airport, it&apos;s 25 minutes north on the Great Eastern Highway. Pick up your hire car, head toward Guildford, and take it from there.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">The Swan Valley Starts 25 Minutes from the Airport</h3>
          <p className="text-slate-600 mb-6">
            Pick up your hire car at AutoTrip Perth Airport and be tasting wines at Sandalford by mid-morning. Free 24/7 shuttle service from all Perth Airport terminals.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>

      </div>
    </article>
  );
}
