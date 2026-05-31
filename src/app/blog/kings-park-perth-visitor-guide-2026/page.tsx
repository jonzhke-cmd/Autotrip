import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kings Park Perth 2026: The Complete Visitor Guide | AutoTrip Perth',
  description: 'Kings Park is Perth\'s most visited attraction — 400 hectares of native bushland, wildflowers, and stunning city views. Free entry, open every day. Here\'s how to make the most of it in 2026.',
  keywords: ['Kings Park Perth', 'Kings Park visitor guide 2026', 'free things to do Perth', 'Kings Park wildflowers season', 'Perth botanic garden', 'Kings Park parking'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/kings-park-perth-visitor-guide-2026' },
  openGraph: {
    title: 'Kings Park Perth 2026: The Complete Visitor Guide',
    description: '400 hectares of native bushland perched above the Swan River, free entry, world-class wildflowers from August to October, and some of the best city views in Australia.',
    url: 'https://autotrip-five.vercel.app/blog/kings-park-perth-visitor-guide-2026',
  },
};

export default function KingsParkGuideBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Perth Attractions</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 27, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 10 min from Perth CBD</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Kings Park Perth 2026: The Complete Visitor Guide
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ask any Perth local where to take a visitor on their first morning in the city and you&apos;ll get the same answer every time: Kings Park. Here&apos;s why — and how to make the most of it.
          </p>
        </header>

        {/* Quick Facts Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'Entry', value: 'Free' },
            { label: 'From airport', value: '20 min drive' },
            { label: 'Best time', value: 'Aug – Oct' },
            { label: 'Opens', value: '24 hrs, every day' },
          ].map((fact) => (
            <div key={fact.label} className="bg-slate-50 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{fact.label}</div>
              <div className="text-base font-black text-slate-900">{fact.value}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1400&q=80"
            alt="Kings Park Perth wildflowers and city skyline views over the Swan River"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            Right — if you only do one thing on your first morning in Perth, make it Kings Park. It&apos;s bigger than New York&apos;s Central Park, it sits on a ridge above the Swan River with the whole city skyline laid out in front of you, it has world-class native gardens and wildflowers, and it costs you absolutely nothing to get in. There&apos;s a reason more than 7 million people visit every year.
          </p>
          <p>
            For visitors arriving at Perth Airport with a hire car, it&apos;s 20 minutes west on the Graham Farmer Freeway — a perfect first stop that gives you your bearings, introduces you to what WA&apos;s native bush actually looks like, and sets the tone for the rest of your trip.
          </p>

          {/* Local Tip Box */}
          <div className="not-prose my-8 flex gap-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
            <div className="text-2xl">👋</div>
            <div>
              <div className="font-black text-slate-900 mb-1">Perth local tip</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Drive in via Fraser Avenue — the grand tree-lined entrance boulevard — and park in the free car park right at the top. That first view of the city and river from the lookout is the one that makes visitors go quiet for a second. Don&apos;t spoil it by parking at the back entrance.
              </p>
            </div>
          </div>

          <h2>What exactly is Kings Park?</h2>
          <p>
            Kings Park and Botanic Garden covers 400 hectares of land on the western edge of the Perth CBD — a mix of natural bushland (the majority, preserved as close to its original state as possible), the Western Australian Botanic Garden (about 17 hectares), and formal public spaces including war memorials, lawns, and the park&apos;s famous elevated walkway.
          </p>
          <p>
            The Botanic Garden contains over 3,000 species of WA native plants. Western Australia is home to around 12,000 plant species found nowhere else on Earth, so this collection is genuinely one of the best places on the planet to see what WA&apos;s remarkable flora actually looks like. The plants here range from tiny native orchids to towering banksias to the red-and-green kangaroo paw — WA&apos;s floral emblem — which you&apos;ll see everywhere in September.
          </p>

          {/* Info Box */}
          <div className="not-prose my-8 bg-blue-50 rounded-2xl p-5">
            <div className="font-black text-slate-900 mb-2">Not from around here? Here&apos;s some context.</div>
            <p className="text-slate-700 text-sm leading-relaxed">
              &ldquo;Bush&rdquo; in Australia just means native vegetation — scrubby trees, wildflowers, and open woodland. It&apos;s not jungle. Kings Park&apos;s natural bushland sections look quite different from the manicured gardens — drier, more open, and quietly beautiful in a way that takes a moment to appreciate. Most visitors end up preferring it.
            </p>
          </div>

          <h2>The Federation Walkway and the best views in Perth</h2>
          <p>
            The <strong>Lotterywest Federation Walkway</strong> is a 620-metre elevated steel and glass walkway that takes you through the forest canopy of the Botanic Garden — you walk at treetop level, looking out over a mix of WA native bush and the city skyline. At the far end is the DNA Tower, a spiralling observation platform with 360-degree views over the park and city. It&apos;s free, takes about 20 minutes to walk at a relaxed pace, and is one of the most memorable things you&apos;ll do in Perth.
          </p>
          <p>
            <strong>Fraser Avenue</strong> — the grand entrance boulevard lined with lemon-scented gum trees — gives you the classic Kings Park photograph: a perfectly framed avenue of enormous eucalypts leading to a panoramic lookout over the Swan River and the CBD towers. At sunrise, with the golden light hitting the glass towers and the river turning copper below, it&apos;s genuinely stunning.
          </p>

          <h2>Kings Park wildflower season 2026</h2>
          <p>
            WA&apos;s wildflower season is the reason some people fly to Perth specifically between August and October. The Botanic Garden&apos;s beds are planted to peak in September, and the natural bushland sections bloom independently throughout the season with species that range from the kangaroo paw and banksia to hundreds of native orchids that you won&apos;t find growing wild anywhere else on Earth.
          </p>
          <p>
            The annual <strong>Kings Park Festival</strong> runs through September — free guided wildflower walks, botanic art exhibitions, outdoor concerts, and educational talks, all set against the spring bloom. If you&apos;re visiting Perth anytime in September, don&apos;t skip it.
          </p>

          {/* Callout: Wildflower tips */}
          <div className="not-prose my-8 flex gap-4 bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-5">
            <div className="text-2xl">🌸</div>
            <div>
              <div className="font-black text-slate-900 mb-1">Wildflower season insider tip</div>
              <p className="text-slate-700 text-sm leading-relaxed">
                The free guided walks from the Visitor Centre (10 AM and 2 PM daily) are worth doing during wildflower season even if you&apos;re normally the type who&apos;d skip a guided tour. The guides know exactly where the rarest species are flowering on any given day, and they&apos;ll point out things you&apos;d walk straight past.
              </p>
            </div>
          </div>

          <h2>Things to do in Kings Park</h2>

          <h3>The Botanic Garden loop</h3>
          <p>
            About 2.5 km, flat, fully accessible, and genuinely beautiful. The loop takes you through the main wildflower beds, the banksia collection, the water-wise demonstration gardens, and past several of the park&apos;s most spectacular large specimens. Allow 45 minutes to an hour at a comfortable pace — more if it&apos;s September and you keep stopping to take photos (and you will).
          </p>

          <h3>State War Memorial</h3>
          <p>
            The war memorial precinct at the park&apos;s eastern edge is one of Perth&apos;s most significant heritage sites — a dignified space of formal gardens, an eternal flame, and a series of bronze sculptures and inscribed stones along the ANZAC Memorial Walk commemorating WA&apos;s contribution across the major conflicts of the 20th century. It&apos;s sombre and worth 30 minutes of quiet walking.
          </p>

          <h3>Picnics and free barbecues</h3>
          <p>
            Kings Park has dozens of free electric barbecue stations scattered through the parkland sections — first come, first served, always well-maintained. The grassed areas around the May Drive Parkland end are the most popular spots, with good shelter from the afternoon sea breeze (Perth locals call it the &ldquo;Fremantle Doctor&rdquo; — a reliable cool wind that rolls in most afternoons from November to March, turning the city from hot to perfect in about 20 minutes) and good views.
          </p>

          {/* Info Box: Fremantle Doctor */}
          <div className="not-prose my-6 bg-slate-50 rounded-2xl p-4">
            <div className="font-bold text-slate-900 text-sm mb-1">What&apos;s the &ldquo;Fremantle Doctor&rdquo;?</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              It&apos;s just what Perth locals call the afternoon sea breeze that comes in from the Indian Ocean through Fremantle. On a 35°C Perth summer day it usually arrives around 2–4 PM and drops the temperature by 10 degrees in short order. Perth people genuinely look forward to it. If you&apos;re planning outdoor activities, scheduling them before or after it arrives makes a big difference.
            </p>
          </div>

          <h3>Cycling and running</h3>
          <p>
            Kings Park connects directly to the Swan River foreshore cycling and running network, which extends more than 30 km through the inner suburbs. Perth&apos;s riverside cycling infrastructure is world-class — if you&apos;re renting a bike during your stay, Kings Park is one of the best starting points, with flat riverside paths heading east toward the CBD or west toward Fremantle.
          </p>

          <h2>Practical info for your visit</h2>

          {/* FAQ Grid */}
          <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
            {[
              {
                q: 'Is Kings Park actually free?',
                a: 'Yes — entry to the park, Botanic Garden, Federation Walkway, War Memorial, and all walking trails is completely free. The only paid activities are some specialist guided tours and ticketed events during the Festival.',
              },
              {
                q: 'What are the opening hours?',
                a: 'Kings Park is open 24 hours, 365 days a year. The Visitor Centre opens 9:30 AM to 4 PM daily. The car parks are accessible before dawn — sunrise visits are popular and totally doable.',
              },
              {
                q: 'Where do I park?',
                a: 'Free car parks off Fraser Avenue and at the May Drive Parkland end of the park. On summer weekends they fill by 9 AM — arrive before then or park on Mounts Bay Road at the base of the ridge and walk up through the bushland trail (about 15 minutes).',
              },
              {
                q: 'How do I get here from the airport?',
                a: 'Twenty minutes by hire car via the Graham Farmer Freeway (M2) — no tolls, no complex navigation. There\'s no direct public transport from the airport to the park, so a hire car or rideshare is your best option.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="font-black text-slate-900 text-sm mb-2">{item.q}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <h2>Where to eat in Kings Park</h2>
          <p>
            <strong>The Botanical Café</strong> sits at the Botanic Garden end of the park and is open daily for breakfast, lunch, and coffee with garden views. It&apos;s popular — arrive before 9 AM on weekends if you don&apos;t want a wait.
          </p>
          <p>
            <strong>Fraser&apos;s Restaurant</strong> is Kings Park&apos;s fine-dining option — a proper special-occasion spot with spectacular city and river views from the terrace. Book well ahead for weekend evenings. One of Perth&apos;s best restaurants, in one of the best settings in WA.
          </p>
          <p>
            For more casual options, the <strong>Subiaco</strong> dining strip is 10 minutes by car from the park&apos;s western exit — one of Perth&apos;s best eating precincts for brunch, coffee, or a relaxed lunch after a morning in the park.
          </p>

          <h2>Combining Kings Park with other Perth stops</h2>
          <p>
            Kings Park pairs naturally with a <strong>Swan River foreshore walk</strong> — park at the bottom of the ridge off Mounts Bay Road and walk the riverside path east to the Barrack Street Jetty (about 4 km, flat, great views). From there, Fremantle ferries run regularly and the Elizabeth Quay waterfront precinct is a short walk.
          </p>
          <p>
            Alternatively, pair it with a morning visit to <strong>Cottesloe Beach</strong> (15 minutes by car) and an afternoon in <strong>Fremantle</strong> for a classic first-day Perth itinerary that covers the city&apos;s main highlights without rushing.
          </p>

          {/* Before You Go */}
          <div className="not-prose my-10 bg-slate-900 text-white rounded-[2rem] p-7">
            <div className="font-black text-xl mb-5">Before you head in — quick checklist</div>
            <ul className="space-y-3">
              {[
                'Arrive via Fraser Avenue for the best first impression (and the classic photo)',
                'Walk the Federation Walkway — it takes 20 minutes and is completely free',
                'In September: join the free guided wildflower walk from the Visitor Centre at 10 AM or 2 PM',
                'Bring water — the bushland sections have no shade and Perth sun is no joke',
                'Free BBQs are first-come first-served — get there by 9 AM on weekends if you want a spot',
                'Parking fills early on summer weekends — before 9 AM or walk up from Mounts Bay Road',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <h2>The bottom line</h2>
          <p>
            Kings Park is one of those rare places that works for literally everyone — seasoned travellers, families with young kids, people who don&apos;t normally do parks. In wildflower season it&apos;s one of the most spectacular natural displays in Australia. Year-round it&apos;s the best free morning activity in Perth, with views that will recalibrate your idea of what &ldquo;a city park&rdquo; can be.
          </p>
          <p>
            From Perth Airport it&apos;s 20 minutes. Drive in via Fraser Avenue, walk the Federation Walkway, have a coffee at the Botanic Café, and you&apos;ll understand within two hours why Perth locals consider this park one of their city&apos;s greatest assets.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Explore Perth from the Airport</h3>
          <p className="text-slate-600 mb-6">
            Kings Park is 20 minutes from Perth Airport. Pick up your hire car at AutoTrip and be watching the sunrise over the Swan River before most of the city is awake. Free 24/7 shuttle from all terminals.
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
