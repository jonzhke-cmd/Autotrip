import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cottesloe Beach Perth 2026: The Complete Guide | AutoTrip Perth',
  description: 'Cottesloe is Perth\'s most iconic beach — calm turquoise water, world-class sunsets, and the best fish and chips on the Indian Ocean. Here\'s everything you need to know for 2026.',
  keywords: ['Cottesloe Beach Perth', 'best beaches Perth WA', 'Cottesloe sunset 2026', 'is Cottesloe safe to swim', 'Perth beach guide', 'Cottesloe Beach parking'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/cottesloe-beach-perth-guide-2026' },
  openGraph: {
    title: 'Cottesloe Beach Perth 2026: The Complete Guide',
    description: 'Calm turquoise water, white sand, extraordinary sunsets, and a beach culture that defines Perth. The complete Cottesloe Beach guide for 2026.',
    url: 'https://autotrip-five.vercel.app/blog/cottesloe-beach-perth-guide-2026',
  },
};

export default function CottesloeBeachGuideBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Perth Beaches</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 27, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 25 min from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Cottesloe Beach Perth 2026: Everything You Need to Know
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            There are more than 19 beaches within 30 minutes of Perth&apos;s CBD. Cottesloe is the one that defines the city&apos;s identity. Calm, clear, turquoise water inside a natural reef — and sunsets over the Indian Ocean that draw crowds every single evening of summer. Here&apos;s the complete guide.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80"
            alt="Cottesloe Beach Perth turquoise water and white sand at sunset"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">

          <p>
            Cottesloe sits on Perth&apos;s Indian Ocean coast, 12 kilometres southwest of the CBD and 25 minutes from Perth Airport. It&apos;s been Perth&apos;s premier beach since the 1890s, when the Cottesloe Beach Hotel opened its doors and the railway line brought Perthites down to swim in the protected bay. In 2026, the hotel is still there, the railway still runs, and the beach is still the benchmark against which every other Perth beach is measured.
          </p>
          <p>
            What sets Cottesloe apart is the reef. A natural limestone reef runs parallel to the beach about 100 metres offshore, and inside it the water is almost always calm — even on days when ocean swells make the more exposed beaches uncomfortable. The water is also exceptionally clear; on a still morning you can see the sand bottom from 3 metres depth. The colour it turns in afternoon light is the exact shade of blue-green that appears on every Perth tourism poster.
          </p>

          <h2>Is Cottesloe Beach Safe to Swim?</h2>
          <p>
            Yes — Cottesloe is one of Perth&apos;s safest ocean swimming beaches. The reef protects the main swimming area from ocean swells and significantly reduces surf. There are no rips in the main bay area under normal conditions. Surf Life Saving patrols operate year-round on weekends and public holidays, and seasonally on weekdays during summer.
          </p>
          <p>
            Standard ocean swimming caution applies: always swim between the flags, check the surf conditions board at the beach entrance before entering, and be aware that conditions south of the main beach — toward North Cottesloe Beach — are more exposed and can carry rips. The main Cottesloe Bay swimming area, marked by the patrol flags, is suitable for all swimming abilities including children.
          </p>

          <h2>The Best Time to Visit Cottesloe Beach</h2>
          <p>
            Cottesloe works year-round but peaks in different ways across the seasons.
          </p>
          <p>
            <strong>Summer (December to March):</strong> Maximum beach energy. Water temperatures reach 22–24°C, the beach is packed on weekends, and the sunset crowd at the Cottesloe Beach Hotel terrace is genuinely spectacular. Book the hotel terrace in advance if you want a table for sundowners — it fills completely on warm evenings. Arrive early on weekend mornings (before 9 AM) to get a good spot on the sand.
          </p>
          <p>
            <strong>Autumn (March to May):</strong> The sweet spot. The water is still warm from summer (20–22°C), the crowds have thinned dramatically, and the weather is genuinely perfect — warm days, cool evenings, clear skies. The annual Sculpture by the Sea installation at Cottesloe typically runs in March and transforms the beach into an outdoor gallery with over 70 large-scale sculptures along the waterfront. One of Perth&apos;s great free events.
          </p>
          <p>
            <strong>Winter (June to August):</strong> Quiet, often dramatic, and still swimmable for the brave (water around 18–19°C). Winter storms occasionally produce spectacular wave activity outside the reef. The sunsets remain extraordinary year-round.
          </p>
          <p>
            <strong>Spring (September to November):</strong> Crowds start to return from October as temperatures warm. Wildflower season in the city makes September an excellent time to combine a Kings Park visit with an afternoon at Cottesloe.
          </p>

          <h2>Cottesloe Beach Sunset: Perth&apos;s Best Evening Experience</h2>
          <p>
            Cottesloe faces almost due west — directly into the Indian Ocean sunset. On a clear evening (which is to say, most evenings in Perth, where sunshine is virtually guaranteed for 8 months of the year), the sky turns extraordinary shades of orange, red, and purple over the water as the sun drops below the horizon. It&apos;s the kind of sunset that makes people stop walking and just stand there.
          </p>
          <p>
            The <strong>Indiana Tea House</strong> — the heritage-listed 1910 building right on the beach — has a bar and terrace with direct sunset views and serves cocktails from 5 PM. It&apos;s one of Perth&apos;s most atmospheric spots and genuinely hard to improve on as a sundowner location. The <strong>Cottesloe Beach Hotel</strong> just up the hill has a slightly higher vantage point and the same view from its ocean-facing terrace.
          </p>

          <h2>What to Do at Cottesloe Beach</h2>

          <h3>Swimming and Snorkelling</h3>
          <p>
            The main bay is the place to swim. The reef creates a natural snorkelling opportunity — bring or hire a mask and fins and explore the reef edge about 80 metres from shore, where fish life is consistent and the underwater topography is interesting. The Marine Parade snorkel trail markers guide you through the best reef sections.
          </p>

          <h3>Sculpture by the Sea (March 2026)</h3>
          <p>
            The annual Sculpture by the Sea Cottesloe exhibition transforms the beachfront into a 2-kilometre outdoor gallery each March. Over 70 large-scale sculptures by Australian and international artists are installed along the beach, the promenade, and into the water itself. Entry is free; it runs for about two weeks. In 2026 the exhibition drew record attendances and received considerable international media attention — book accommodation early if you&apos;re visiting Perth in March.
          </p>

          <h3>Walking the Coastal Trail</h3>
          <p>
            The Cottesloe to Leighton Beach coastal walk (about 4 km return) follows the limestone cliffs and foreshore south, passing North Cottesloe Beach and the quieter Leighton Beach before returning. The views south toward Fremantle are excellent, and the walk passes several lookout points above the reef that are ideal for spotting dolphins (resident pods move through the area regularly from October to April).
          </p>

          <h2>Where to Eat at Cottesloe Beach</h2>
          <p>
            <strong>Indiana Tea House</strong> — heritage building directly on the sand. Excellent seafood, reliable wine list, unbeatable location. Best for a long lunch or sundowners. Book ahead on weekends.
          </p>
          <p>
            <strong>Cottesloe Beach Hotel</strong> — a Perth institution for good reason. Casual bar food, large terrace, great for a beer and the view. No reservations needed for the bar area.
          </p>
          <p>
            <strong>Sea Salt</strong> — the Marine Parade strip has several casual cafés and fish-and-chip shops. Sea Salt has the best fish and chips in the area — fresh WA fish, properly battered, eaten on a bench watching the beach. No pretension, excellent value.
          </p>

          <h2>Frequently Asked Questions: Cottesloe Beach</h2>

          <h3>How far is Cottesloe Beach from Perth Airport?</h3>
          <p>
            Cottesloe Beach is approximately 25–30 minutes from Perth Airport by car, heading west on the Mitchell Freeway or via the Stirling Highway. There is no direct public transport from the airport to Cottesloe; a hire car or rideshare is the practical option.
          </p>

          <h3>Is there parking at Cottesloe Beach?</h3>
          <p>
            Yes — there is a large free car park on Marine Parade directly adjacent to the beach. On summer weekends it fills completely by 10 AM. Arrive before 9 AM for a guaranteed spot, or park in the residential streets one block back (generally unrestricted on weekends) and walk 5 minutes.
          </p>

          <h3>Can you see dolphins at Cottesloe Beach?</h3>
          <p>
            Yes — Indo-Pacific bottlenose dolphins are resident in Perth&apos;s coastal waters and regularly seen from Cottesloe. They move through most frequently in the early morning, particularly between October and April. The best viewpoint is from the elevated section of Marine Parade above the reef.
          </p>

          <h3>What facilities does Cottesloe Beach have?</h3>
          <p>
            Cottesloe has full facilities: public toilets and change rooms, freshwater showers, free electric barbecues on the grassed area, kiosk, playground, and year-round Surf Life Saving patrols on weekends. The beach is fully accessible with a beach wheelchair available for loan from the Surf Life Saving clubhouse (no charge, ID required).
          </p>

          <h2>Cottesloe vs Other Perth Beaches: Which Should You Visit?</h2>
          <p>
            Perth has genuinely world-class beaches across its 60-kilometre coastline. Here&apos;s how Cottesloe compares to the main alternatives:
          </p>
          <p>
            <strong>Cottesloe vs Scarborough:</strong> Scarborough is Perth&apos;s most popular beach for surf. It faces the full Indian Ocean swell, the waves are better for surfing and bodyboarding, and the recently redeveloped foreshore precinct is excellent. But for calm swimming and the classic Perth beach experience, Cottesloe wins.
          </p>
          <p>
            <strong>Cottesloe vs City Beach:</strong> City Beach is larger, less crowded, and has better parking. The swimming is good but slightly more exposed. Cottesloe has the better atmosphere and the better cafés.
          </p>
          <p>
            <strong>Cottesloe vs Rottnest Island beaches:</strong> Not really a fair comparison — Rottnest Island beaches (accessible by ferry from Fremantle, 30 minutes) are among the most beautiful in the world. If you have a full day, Rottnest is the destination. Cottesloe is the perfect beach when you have a few hours and want to stay on the mainland.
          </p>

          <h2>The Bottom Line</h2>
          <p>
            Cottesloe is the beach that defines Perth to the world — and it delivers on its reputation every single time. The water is extraordinary, the sunset is reliably magnificent, and the beachside dining options are well above average for a beach suburb anywhere in Australia.
          </p>
          <p>
            From Perth Airport it&apos;s 25 minutes in a hire car heading west. Whether it&apos;s a morning swim before heading into the city, an afternoon session after Kings Park, or an evening sundowner at the Indiana Tea House, Cottesloe is worth the detour every time.
          </p>

        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Cottesloe is 25 Minutes from the Airport</h3>
          <p className="text-slate-600 mb-6">
            Pick up your hire car at AutoTrip Perth Airport and be watching the Indian Ocean sunset at Cottesloe before dinner. Free 24/7 shuttle from all four terminals — T1 through T4.
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
