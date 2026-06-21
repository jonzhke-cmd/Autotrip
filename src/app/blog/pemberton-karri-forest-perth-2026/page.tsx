import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pemberton Karri Forest 2026: Climb a 60-Metre Tree & Walk the Ancient Forest | AutoTrip Perth',
  description: 'Pemberton is WA\'s most dramatic forest destination — giant karri trees, a terrifying 61-metre climbing tree, Beedelup Falls and the Yeagarup Dunes. 3.5 hours from Perth Airport.',
  keywords: [
    'Pemberton karri forest Perth',
    'Gloucester Tree Pemberton',
    'Pemberton day trip from Perth',
    'karri forest Western Australia',
    'Beedelup Falls Pemberton',
    'Warren National Park WA',
    'Yeagarup Dunes Pemberton',
    'Pemberton Tramway',
    'Perth to Pemberton drive',
    'tall trees WA',
    'Pemberton WA 2026',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/pemberton-karri-forest-perth-2026' },
  openGraph: {
    title: 'Pemberton Karri Forest 2026: Climb a 60-Metre Tree & Walk the Ancient Forest',
    description: 'Pemberton is WA\'s most dramatic forest destination — giant karri trees, a terrifying 61-metre climbing tree, Beedelup Falls and the Yeagarup Dunes. 3.5 hours from Perth Airport.',
    url: 'https://autotrip-five.vercel.app/blog/pemberton-karri-forest-perth-2026',
  },
};

export default function PembertonKarriForesttBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">South West Road Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 21, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 6 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 340 km south of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Pemberton: Climb a 61-Metre Tree in WA&apos;s Greatest Forest
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ancient karri trees taller than a 20-storey building, a fire lookout tree you can actually climb, hidden waterfalls, and an inland sand dune system straight out of a fever dream. Pemberton is 3.5 hours south of Perth Airport and completely worth every kilometre.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80"
            alt="Sunlight streaming through the canopy of an ancient tall karri forest in Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>Why Pemberton Surprises Every Visitor</h2>
          <p>
            Most international visitors associate Western Australia with red dirt, coral reefs, and infinite beaches. Pemberton is something else entirely: a pocket of temperate forest in the far south-west where karri trees — the third-tallest tree species on Earth — push 80-plus metres into the sky and block out the sun. The town itself is a quiet timber community of about 1,000 people, but the national parks surrounding it are world-class.
          </p>
          <p>
            Pemberton sits 340 km south of Perth Airport, roughly 3.5 hours down the South Western Highway. It&apos;s best done as an overnight trip — two nights gives you time to actually absorb the forest rather than rushing — but a long day trip is possible if you&apos;re efficient with your time.
          </p>

          <h2>The Gloucester Tree: One of the World&apos;s Highest Climbing Trees</h2>
          <p>
            The single most-talked-about thing in Pemberton is also the most polarising. The Gloucester Tree is a living karri 61 metres tall — about the height of a 20-storey office building — and it doubles as a historical fire lookout. From 1947 until the 1970s, a ranger would sit in a small cabin at the top during fire season, scanning the forest canopy for smoke. The lookout is still up there today, and members of the public are free to climb it.
          </p>
          <p>
            The climb uses 153 metal pegs hammered into a spiral around the trunk. There are no handrails, no safety harness, and no cage. You grip the pegs with your hands and work your way up, the ground shrinking below you until the forest canopy is at eye level and the treetops spread out in every direction. Most people stop somewhere in the middle — the view is remarkable long before the top. A small number make it all the way up.
          </p>
          <p>
            The Gloucester Tree is located in Gloucester National Park, 3 km east of Pemberton town. Entry is free with a WA national parks pass ($15 per vehicle per day or $45 for an annual pass). The climb is open daily during daylight hours and is entirely at your own risk — there is no operator involvement, no booking required, and no minimum age. It is, genuinely, not for the faint-hearted. Wet weather makes the pegs slippery; check conditions before attempting.
          </p>

          <h2>Dave Evans Bicentennial Tree: Even Taller</h2>
          <p>
            If the Gloucester Tree didn&apos;t finish you off, 25 km north in Warren National Park stands the Dave Evans Bicentennial Tree — at 68 metres, one of the tallest climbable trees in the world. The pegs here spiral even higher, with three viewing platforms along the way. The forest around it is if anything denser and darker than Gloucester, and the walk-in track from the car park takes you through a stand of karri so immense it&apos;s genuinely disorienting. Many visitors rate this one above Gloucester, both for height and for the quality of the surrounding forest.
          </p>

          <h2>Beedelup Falls and the Suspension Bridge</h2>
          <p>
            About 18 km west of Pemberton, Beedelup National Park protects a waterfall that drops through a karri and peppermint forest into a green pool below. The walk from the car park is easy — 1.5 km return — and crosses a wooden suspension bridge above the falls. In winter and spring (June–October), the falls run hard and the forest is lush and dripping. In summer they thin to a trickle, but the forest itself is still spectacular. Don&apos;t skip this — it&apos;s one of the most photogenic spots in the South West.
          </p>

          <h2>The Yeagarup Dunes: Forest Meets Desert</h2>
          <p>
            One of Pemberton&apos;s strangest and most memorable experiences sits 50 km south of town in Warren National Park: the Yeagarup Dunes, a massive active dune system slowly advancing inland through the karri forest. The sight of towering white sand dunes pressing against a wall of giant trees is genuinely surreal — the kind of landscape that makes you stop and look twice. A 4WD track reaches the base of the dunes (standard 2WD vehicles can park at the start of the track and walk in), and from the top the view extends over the forest canopy to the Southern Ocean. Allow 3–4 hours for the return walk from the 2WD car park.
          </p>

          <h2>The Pemberton Tramway</h2>
          <p>
            For a gentler way to see the forest, the Pemberton Tramway runs heritage tram rides from the town centre through karri forest and out to Warren River and back. The full return trip takes about two hours and passes through stands of karri, marri, and peppermint trees you can&apos;t reach by road. Trams run Wednesday to Sunday; check the Pemberton Visitor Centre for current timetables and fares (roughly $25–30 adult return). This is a great option for families with young children, or as a morning activity on day two when your legs have given up on dune climbing.
          </p>

          <h2>Eating, Drinking, and Staying</h2>
          <p>
            Pemberton town itself is small but has everything you need. The <strong>Gloucester Ridge Winery</strong>, about 4 km from town, makes honest South West wines in a beautiful valley setting — the pinot noir has picked up awards. A handful of cafés on Brockman Street handle breakfasts and lunches; the <strong>Pemberton Café</strong> is reliable for coffee and house-made pies. For dinner, the <strong>Gloucester Motel</strong> does solid pub meals. If you want something more atmospheric, stay at one of the self-contained cottages or chalets scattered through the surrounding forest — waking up among the karri trees is the whole point.
          </p>
          <p>
            Marron — Western Australia&apos;s native freshwater crayfish — is a Pemberton speciality. In season, several operators run marron fishing experiences at local dams, and some supermarkets sell fresh marron direct. If you see it on a menu, order it.
          </p>

          <h2>Getting There from Perth Airport</h2>
          <p>
            Pemberton is 340 km south of Perth Airport via the South Western Highway — about 3.5 hours of mostly dual carriageway and clear country highway. The route takes you through Bunbury, Donnybrook, Bridgetown, and Manjimup before arriving in Pemberton. There is no public transport connection. A hire car from Perth Airport is the only practical option, and the drive itself is worth doing: the highway climbs through the jarrah and marri forest of the Darling Range before descending to the coastal plain, and by the time you reach the karri country around Manjimup the trees are already enormous.
          </p>
          <p>
            Fuel up in Manjimup (30 km north of Pemberton) — it&apos;s cheaper than in town. Phone reception is patchy in the national parks; download offline maps before you leave and let someone know your itinerary if you&apos;re venturing onto forest tracks.
          </p>

          <h2>Best Time to Visit</h2>
          <p>
            Pemberton is good year-round but each season offers something different. <strong>Spring (September–November)</strong> brings the most dramatic waterfalls and wildflowers on the drive south. <strong>Summer (December–February)</strong> is warm and dry — great for the dunes, but the falls are lower. <strong>Autumn (March–May)</strong> offers golden light in the forest and is the quietest period. <strong>Winter (June–August)</strong> is cold and wet, but the forest is at its most atmospheric — mist in the canopy, swollen creeks, and almost no other visitors. Pack layers regardless of when you go; the karri forest stays cool even on warm Perth days.
          </p>

          <h2>Two-Day Pemberton Itinerary</h2>
          <p>
            <strong>Day 1 —</strong> Pick up your hire car at Perth Airport by 7am. Drive south, stopping in Bridgetown for coffee and a stretch. Arrive Pemberton by lunch. Afternoon: Gloucester Tree and Gloucester National Park. Dinner and overnight in town.
          </p>
          <p>
            <strong>Day 2 —</strong> Morning: Dave Evans Bicentennial Tree in Warren National Park and the Yeagarup Dunes (4–5 hours). Afternoon: Beedelup Falls before heading back north. Stop at Manjimup Cherry Harmony Farm or Gloucester Ridge Winery on the way out. Return to Perth Airport by 9pm.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Head into the Karri Forest?</h3>
          <p className="text-slate-600 mb-6">Pemberton has no public transport links — a hire car from Perth Airport is the only way in. Pick up on arrival, drive south through magnificent WA countryside, and be standing at the base of the Gloucester Tree by lunchtime.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
