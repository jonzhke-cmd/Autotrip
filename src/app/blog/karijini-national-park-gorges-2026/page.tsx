import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight, Mountain } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Karijini National Park 2026: Gorges, Waterholes & The Ultimate WA Road Trip | AutoTrip Perth",
  description: "Karijini National Park is Western Australia's most spectacular secret — ancient gorges, hidden waterholes, and the Eco Retreat that made 'glamping' a legitimate word. Complete 2026 road trip guide.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/karijini-national-park-gorges-2026" },
};

export default function KarijiniNationalParkGorges2026() {
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
            <li className="font-medium text-slate-900">Karijini National Park</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Pilbara Road Trips
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Karijini National Park 2026: Ancient Gorges, Hidden Waterholes &amp; The Road Trip Every WA Visitor Should Do
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>May 30, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>14 hrs drive from Perth (or fly to Newman)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span>WA&apos;s second-largest national park</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Best visited April to September</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Ancient red sandstone gorge with turquoise waterhole in Karijini National Park, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Karijini — where 2.5 billion-year-old gorges hide some of Australia&apos;s best swimming holes</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            Karijini National Park is the WA road trip that Australians keep to themselves. Ancient red-rock gorges carved over 2.5 billion years, waterfall-fed swimming holes that belong in a screensaver, and a remoteness that makes you feel like you have discovered something the rest of the world has not found yet. They have — but who is going to tell them?
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What Makes Karijini So Special?</h2>
          <p>
            Karijini is WA&apos;s second-largest national park, covering 627,422 hectares in the Pilbara region about 1,400 kilometres north of Perth. It sits on some of the oldest exposed rock on Earth — banded iron formations laid down 2.5 billion years ago, now carved into a network of spectacular gorges by ancient rivers.
          </p>
          <p>
            The gorges are the drawcard: Dales Gorge, Weano Gorge, Hancock Gorge, Joffre Gorge, Knox Gorge, and Red Gorge each have a completely different character. Some are accessible by family-friendly boardwalks. Others require swimming, scrambling, and squeezing through narrow rock passages with your pack above your head. All of them are extraordinary.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Answer: How Do You Get to Karijini?</h3>
            <p className="text-slate-700">
              Drive (14 hours from Perth via the Great Northern Highway, typically split over 2 days with a stop in Geraldton or Meekatharra), or fly to Newman (1.5 hours from Perth, daily flights) and hire a 4WD locally. The roads inside the park are mostly sealed or well-graded gravel — a high-clearance 2WD is fine for main gorge access, but a 4WD opens more remote areas.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Best Gorges in Karijini (Ranked)</h2>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Dales Gorge — The Classic</h3>
          <p>
            Dales Gorge is Karijini&apos;s most visited and most accessible gorge. A 2-kilometre walk along the rim leads to Fortescue Falls — one of the few permanent waterfalls in the Pilbara — and then down to Fern Pool, a natural swimming hole surrounded by ancient ferns and dappled light. The walk to Circular Pool at the gorge base is one of the best short walks in Western Australia. Grade: 3–4. Family accessible with care.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Weano Gorge — The Icon</h3>
          <p>
            Weano is the gorge in all the Karijini photos. The walk descends steeply into a tight slot canyon where the walls close to 2 metres apart and glow orange-red in the afternoon light. Handrails Pool at the bottom is one of the most beautiful natural swimming holes in Australia. Grade 5 — you will get wet. Bring water shoes and a dry bag for your phone. The Spa — a water-carved slot just beyond Handrails Pool — is worth the extra scramble.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Hancock Gorge — The Adventure</h3>
          <p>
            Hancock is for those who want a proper adventure. The walk to Kermits Pool involves wading, chimney-climbing, and squeezing sideways through the &quot;Spider Walk&quot; — a section where you brace yourself horizontally between two walls above a drop. It sounds terrifying. It is the best thing in the park. Grade 6. Guided tours are available if you want company; otherwise go with someone who has done it before.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Joffre Gorge — The Reward</h3>
          <p>
            Fewer people make it to Joffre. The lookout is excellent but the real reward is the scramble down to Joffre Falls — a stunning tiered waterfall (when flowing, April–June) into a crystal-clear pool. Grade 5. The solitude here compared to Weano is remarkable.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Knox Gorge — The Hidden Gem</h3>
          <p>
            Knox is arguably the most dramatic gorge in the park — towering vertical walls, almost no visitors, and a boulder scramble to a beautiful final pool. It is the furthest gorge from the park entrance and often missed. Do not skip it. Grade 5.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 my-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">FAQ: Karijini National Park</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">When is the best time to visit Karijini?</h4>
                <p className="text-slate-700 text-sm">April to September is ideal. Karijini&apos;s summer (October to March) brings extreme heat — temperatures regularly exceed 45°C and gorge access can be closed due to flash flood risk. April and May are best for waterfalls after the wet season. July and August are the peak tourist months with cooler temperatures (18–25°C days).</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Do you need a 4WD for Karijini?</h4>
                <p className="text-slate-700 text-sm">Not for the main gorges — the park&apos;s primary roads are sealed or well-graded gravel, accessible to any car with reasonable ground clearance. A standard SUV or station wagon handles the main gorge circuit comfortably. A 4WD opens up more remote tracks like Hamersley Gorge and Red Gorge.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Where do you stay in Karijini?</h4>
                <p className="text-slate-700 text-sm">Karijini Eco Retreat is the standout accommodation — eco tents with real beds and linen, a restaurant, and a sunset terrace overlooking red-rock hills. It is in the middle of the park and books out months ahead in season. Dales Gorge Campsite (Parks WA) is the budget option. Tom Price and Paraburdoo (1 hour away) have motels.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Is Karijini suitable for families with children?</h4>
                <p className="text-slate-700 text-sm">Yes — partly. Dales Gorge (Fern Pool, Fortescue Falls) is excellent for families. The higher-grade gorges (Weano, Hancock, Knox) involve technical scrambling and swimming in cold water that is inappropriate for young children. Plan a mix of easy and hard walks depending on your group.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Where to Stay: Karijini Eco Retreat</h2>
          <p>
            Karijini Eco Retreat is owned and operated by the Gumala Aboriginal Corporation and sits right in the heart of the park, 3 kilometres from Weano Gorge. The accommodation ranges from powered sites to deluxe eco tents with real beds, private decks, and linen — glamping before glamping was a word. The onsite restaurant serves genuinely good food (given that the nearest supermarket is an hour away, this is impressive). Book 3–6 months ahead for the April–September season.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Karijini Road Trip from Perth — The Route</h2>

          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">Day 1</div>
              <div>
                <h4 className="font-bold text-slate-900">Perth to Geraldton (5 hrs)</h4>
                <p className="text-slate-600 text-sm">Drive north via Brand Highway. Overnight in Geraldton — a proper city with good accommodation. Visit Pinnacles or Cervantes if you have not been.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">Day 2</div>
              <div>
                <h4 className="font-bold text-slate-900">Geraldton to Karijini (8 hrs)</h4>
                <p className="text-slate-600 text-sm">Long day north via Great Northern Highway through the Murchison and Pilbara. Fuel at Meekatharra and Newman. Arrive at Eco Retreat late afternoon.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">Day 3</div>
              <div>
                <h4 className="font-bold text-slate-900">Dales Gorge + Fortescue Falls</h4>
                <p className="text-slate-600 text-sm">Start early at Dales. Fern Pool for morning swim. Circular Pool. Back to camp for lunch and rest during peak heat. Evening walk at Joffre Gorge lookout.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">Day 4</div>
              <div>
                <h4 className="font-bold text-slate-900">Weano + Hancock + Knox</h4>
                <p className="text-slate-600 text-sm">The big day. Weano early morning (fewer crowds), lunch, then Hancock Gorge (Kermits Pool). Afternoon: Knox Gorge. This is a full day — start before 8am.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">Day 5</div>
              <div>
                <h4 className="font-bold text-slate-900">Drive Back to Perth (or fly from Newman)</h4>
                <p className="text-slate-600 text-sm">Morning walk, then the long drive south (14 hours) or 45-minute flight from Newman Airport back to Perth.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">What to Pack</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Water shoes (compulsory for gorge swims)</li>
                <li>• Dry bag for phone and keys</li>
                <li>• 3+ litres of water per person per day</li>
                <li>• Headtorch for early starts</li>
                <li>• Light thermal layer (gorge water is cold)</li>
                <li>• First aid kit</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">Safety Essentials</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Never enter gorges if rain is forecast</li>
                <li>• Register your trip at a police station if going remote</li>
                <li>• Mobile coverage is limited — download offline maps</li>
                <li>• Tell someone your itinerary and check-in times</li>
                <li>• Gorge water is cold — hypothermia risk is real</li>
                <li>• Never hike alone in remote gorges</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Drive to Karijini?</h3>
            <p className="text-slate-700 mb-6">
              A Karijini road trip demands the right vehicle. You need boot space for camping gear, enough fuel range for remote stretches, and ideally some ground clearance. We have 4WDs, SUVs, and station wagons ready at Perth Airport — all sorted for a Pilbara run.
            </p>
            <p className="text-slate-600 text-sm mb-6">
              Long-term rental rates available for multi-week Pilbara road trips. Airport pickup from 5am.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Karijini Road Trip Car
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
                <p className="text-sm text-slate-600">Perth local, gorge swimmer, has done the Spider Walk twice</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">Share this with an adventure traveller:</p>
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
