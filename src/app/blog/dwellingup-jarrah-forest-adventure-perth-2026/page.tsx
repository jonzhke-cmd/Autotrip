import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dwellingup 2026: Zip Lines, Steam Trains & Jarrah Forest Adventure, 100 km from Perth | AutoTrip Perth',
  description: 'Treetop zip lines, a heritage steam train, swimming holes on the Murray River and two of Australia’s great long-distance trails — Dwellingup packs more adventure per kilometre than almost anywhere near Perth Airport.',
  keywords: ['Dwellingup', 'Dwellingup day trip', 'Lane Poole Reserve', 'Hotham Valley Railway', 'Treetops Adventure Dwellingup', 'Munda Biddi Trail', 'Bibbulmun Track', 'Perth day trips', 'jarrah forest Western Australia', 'Murray River WA'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/dwellingup-jarrah-forest-adventure-perth-2026' },
  openGraph: {
    title: 'Dwellingup 2026: Zip Lines, Steam Trains & Jarrah Forest Adventure, 100 km from Perth',
    description: 'Treetop zip lines, a heritage steam train, swimming holes on the Murray River and two of Australia’s great long-distance trails — Dwellingup packs more adventure per kilometre than almost anywhere near Perth Airport.',
    url: 'https://autotrip-five.vercel.app/blog/dwellingup-jarrah-forest-adventure-perth-2026',
  },
};

export default function DwellingupBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Adventure Day Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> July 6, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> ~100 km south-east of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Dwellingup: Zip Lines, Steam Trains and Jarrah Forest Adventure, 100 km from Perth Airport
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Most visitors driving south from Perth aim straight for the coast. The turn-off toward the Darling Range leads somewhere just as rewarding: a small timber town wrapped in towering jarrah and marri forest, home to a heritage steam railway, a treetop zip-line course, a wild stretch of the Murray River, and the meeting point of two of Australia's best-known long-distance trails. Dwellingup is compact enough to see in a day, but it holds enough adventure to fill a long weekend.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80"
            alt="Tall jarrah forest canopy and river valley near Dwellingup, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>A Forest Town Built for Getting Outdoors</h2>
          <p>
            Dwellingup sits in the northern jarrah forest of the Peel region, about 100 kilometres south-east of Perth Airport via Pinjarra — around an hour and twenty minutes' drive along the South Western Highway and Pinjarra-Dwellingup Road. The town itself is tiny, just a few streets, but its position inside the state forest makes it the unofficial adventure capital of the Perth hills: the kind of place where visitors turn up for one activity and end up staying for three.
          </p>
          <p>
            The town has a striking history. In January 1961, a ferocious bushfire swept through the district and destroyed most of Dwellingup's original timber buildings, forcing a full evacuation and rebuild. What stands today is largely a post-1961 town, but the surrounding forest has long since recovered, and the fire is still part of local memory — worth asking about if you stop for a coffee with locals.
          </p>

          <h2>Treetops Adventure Dwellingup</h2>
          <p>
            The best-known drawcard for first-time visitors is the treetop ropes and zip-line course just out of town, built through the jarrah and marri canopy. Courses are graded from junior-friendly platforms close to the ground up to advanced aerial challenges and flying-fox zip lines strung high between the trees, so the experience works for families with young kids as well as visitors chasing an adrenaline hit. Sessions typically run for two to three hours and bookings ahead are strongly recommended, particularly on weekends and school holidays when courses fill quickly.
          </p>

          <h2>Hotham Valley Railway</h2>
          <p>
            Dwellingup is the home base of the Hotham Valley Railway, one of the last operating heritage rail lines in the state. A diesel railcar service runs through the forest year-round, dropping walkers along the Bibbulmun Track for a scenic return walk of around 8.5 kilometres back into town. Between May and October, the railway also runs its much-loved steam locomotive on a roughly 12-kilometre return journey toward Pinjarra, hauling vintage carriages through cuttings and forest that can only be reached by rail. Departures are seasonal and vary year to year, so it's worth checking the current Hotham Valley Railway timetable before planning a visit around it — but timing a trip for a steam-train weekend is one of the more memorable ways to experience the jarrah forest.
          </p>

          <h2>Lane Poole Reserve and the Murray River</h2>
          <p>
            A short drive from town, Lane Poole Reserve protects more than 50,000 hectares of forest, granite outcrops and river gorge along the Murray River — the largest area of relatively intact jarrah forest left in the northern part of the state. Within the reserve, Baden Powell Water Park and Island Pool are the most popular swimming spots, with calm, clear pools shaded by paperbarks that are ideal on a warm day. Further upstream, Nanga Mill marks the site of a long-abandoned timber mill, now a peaceful picnic and camping area with river access and interpretive signage explaining the district's timber history.
          </p>
          <p>
            The reserve also has several campgrounds with vehicle-accessible sites (bookings required through the Parks and Wildlife Service in peak periods), making it a good option for visitors wanting to extend a day trip into an overnight stay under the stars. Kayaking and canoeing on the Murray River are popular from spring through autumn, and rentals can sometimes be arranged through operators in town — check availability before you drive down, as options are limited and seasonal.
          </p>

          <h2>Trail Central: Munda Biddi and the Bibbulmun Track</h2>
          <p>
            Few towns in WA sit at the crossroads of two major trail networks the way Dwellingup does. The Bibbulmun Track, the 1,000-kilometre walking trail running from Kalamunda to Albany, passes directly through town, and Dwellingup is a popular resupply and rest stop for through-walkers as well as a launch point for shorter day walks. The Munda Biddi Trail, Australia's longest off-road cycling trail at close to 1,000 kilometres from Mundaring to Albany, also runs through Dwellingup, and the surrounding forest has a growing network of dedicated mountain bike trails for riders who want a shorter loop rather than a multi-day trek. Bike hire is available in town for visitors without their own gear, and even a casual few hours on the forest trails gives a real sense of why this stretch of jarrah country is so highly regarded by WA's hiking and riding community.
          </p>

          <h2>The Forest Heritage Centre and Local History</h2>
          <p>
            Back in town, the Forest Heritage Centre (opening hours can vary seasonally, so it's worth confirming before arrival) tells the story of the jarrah timber industry that built Dwellingup and much of early Perth, alongside displays on the region's ecology and Aboriginal heritage. It's a modest but genuinely informative stop, and a good option if the weather turns or you want an hour of shade between outdoor activities. The town's handful of cafes and the local pub serve straightforward country-town meals — nothing flashy, but reliably good after a morning on the zip lines or the trails.
          </p>

          <h2>Planning Your Visit</h2>
          <p>
            Dwellingup works well as a full-day trip from Perth Airport, or as an overnight stop if you're combining it with Lane Poole Reserve camping or a longer push south toward Pemberton and the Karri forests. Spring (September to November) brings wildflowers and comfortable walking temperatures; summer is warm and dry, making the river swimming spots especially appealing, though total fire bans can occasionally affect access to parts of the forest on extreme heat days — check current conditions before you go. Winter is cooler and can be genuinely atmospheric in the tall timber, though some river crossings and forest roads may be affected by rain.
          </p>
          <p>
            There's a petrol station in town, but it's sensible to fill up in Pinjarra or before leaving Perth, since options thin out once you're off the highway. Phone reception in Dwellingup itself is reasonable on the main networks, but drops out quickly once you're in the forest or down at Lane Poole Reserve, so download offline maps and let someone know your rough plan if you're heading out on the trails or to the river.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Get to the Forest on Your Own Schedule</h3>
          <p className="text-slate-600 mb-6">Dwellingup's best spots — the river pools, the trailheads, the steam train departures — all reward flexibility. A hire car from Perth Airport gets you there in about 80 minutes and lets you build the day around the forest, not a bus timetable. AutoTrip offers transparent pricing and terminal pickup so you're on the road south with minimal fuss.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
