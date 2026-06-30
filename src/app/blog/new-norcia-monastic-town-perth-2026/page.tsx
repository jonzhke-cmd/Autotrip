import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "New Norcia: Australia's Only Monastic Town, 90 Minutes from Perth Airport | AutoTrip Perth",
  description: "Explore New Norcia — Australia's only monastic town, 132 km north of Perth Airport. Spanish Benedictine architecture, world-class museum, and famous monk-baked bread.",
  keywords: [
    'New Norcia',
    'New Norcia day trip Perth',
    'Australia monastic town',
    'New Norcia museum',
    'Benedictine monks Western Australia',
    'New Norcia hotel',
    'Perth day trips',
    'Western Australia heritage',
    'New Norcia tour',
    'WA road trip',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/new-norcia-monastic-town-perth-2026' },
  openGraph: {
    title: "New Norcia: Australia's Only Monastic Town, 90 Minutes from Perth Airport",
    description: "Explore New Norcia — Australia's only monastic town, 132 km north of Perth Airport. Spanish Benedictine architecture, world-class museum, and famous monk-baked bread.",
    url: 'https://autotrip-five.vercel.app/blog/new-norcia-monastic-town-perth-2026',
  },
};

export default function NewNorciaBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Heritage Day Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 30, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 132 km north of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            New Norcia: The Spanish Monastery Town Most Perth Visitors Have Never Heard Of
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Drive 90 minutes north of Perth Airport and you'll find something you absolutely should not expect to find in the WA wheatbelt: an intact 19th-century Spanish Benedictine monastery town, complete with ornate colleges, a working abbey, a world-class art collection, and bread that people genuinely drive four hours to buy. New Norcia is Australia's only monastic town and one of the most quietly extraordinary day trips in the state.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1548625149-720334b2c44d?w=1400&q=80"
            alt="Historic monastery buildings with Spanish colonial architecture set against a blue sky in rural Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>A Town Like No Other in Australia</h2>
          <p>
            New Norcia sits 132 kilometres north of Perth, about 90 minutes along the Great Northern Highway. There is nothing subtle about arriving: the road crests a gentle rise and suddenly the twin towers of St Gertrude's and St Joseph's Colleges rise from the flat wheatbelt plain, their Iberian silhouettes completely incongruous with the surrounding gumtrees. It looks like someone moved a piece of rural Spain to the Western Australian bush — because, in a sense, someone did.
          </p>
          <p>
            The town was founded in 1846 by two Spanish Benedictine monks, Dom Rosendo Salvado and Dom Joseph Serra, who had sailed from Europe to establish a mission for the local Yued Noongar people. Salvado, a trained concert pianist who would later become the founding Bishop of Port Victoria, is said to have performed piano concerts in Melbourne to raise funds for the mission — appearing on stage in full Aboriginal dress to make a point about the humanity of First Nations Australians. The story of New Norcia's founding is as strange and human as the town itself.
          </p>
          <p>
            Today, a small community of Benedictine monks still lives and works here, maintaining the monastery, baking bread, and operating the town's heritage precinct. They take guests — the New Norcia Hotel, built in 1927, offers overnight stays — and they welcome day visitors who arrive genuinely curious about what this place is and why it exists. The town has not been prettified for tourism. The history sits right on the surface, complicated and worth reckoning with.
          </p>

          <h2>The Museum and Art Gallery</h2>
          <p>
            The New Norcia Museum and Art Gallery is the anchor of any day visit, and it's substantially better than you'd expect from a regional heritage site. The collection includes Spanish and Italian religious paintings that arrived in the colony in the 19th century, including works by Murillo and Ribera that would be remarkable in any capital city gallery. Alongside these are Aboriginal artefacts, photographs, and documents that trace the complex, often painful history of the mission's relationship with the Yued Noongar community.
          </p>
          <p>
            The museum is open daily from 9:30am to 4:30pm, and adult entry is $15. Allow at least 90 minutes if you want to do it properly. There is an excellent audio guide available, and the staff are genuinely knowledgeable about both the artworks and the broader history of the town.
          </p>

          <h2>Guided Town Tours</h2>
          <p>
            Guided walking tours of New Norcia depart daily at 10:30am and 1:30pm from the museum, running approximately two hours and costing around $12 per person. These tours are the single best way to understand what you're looking at. The guides take you through the historic precinct — the Abbey Church, the monks' private grounds as far as visitors can go, the two colleges, the granary, and several outbuildings — and explain how and why this extraordinary ensemble came to exist in the Western Australian bush.
          </p>
          <p>
            Book in advance during school holidays, when the tour spots fill quickly. Outside peak periods, you can generally join on the day. The walk is largely flat and accessible, though wear comfortable shoes as the ground surface varies.
          </p>

          <h2>The Bread and the Bakery</h2>
          <p>
            Benedictine monks have been baking bread here since the 19th century, and the New Norcia Bakeries — now operated commercially rather than solely within the monastery — have become one of the town's most famous exports. The New Norcia nut cake, a dense, fruit-and-nut-laden loaf based on an old monastic recipe, is sold throughout Perth and ships nationally. The monastery sourdough and the Australis bread (a spelt and barley loaf) have cult followings.
          </p>
          <p>
            You can buy the bread, cakes, and other products at the monastery shop, open daily until 4:30pm. If you want fresh-baked bread rather than packaged goods, call ahead to ask what's available that day — the baking schedule varies. The shop also sells honey, nougat, and a range of products made by the monks or sourced from the monastery's gardens.
          </p>

          <h2>The New Norcia Hotel</h2>
          <p>
            The New Norcia Hotel, built in 1927 for visiting clergy and guests, is one of the oldest continuously operating hotels in WA. It has been restored and now offers overnight accommodation in heritage rooms, making New Norcia a viable overnight stop rather than just a day trip. The hotel bar is open to non-guests, and the food is honest pub fare — nothing revolutionary, but solid and reasonably priced. Sitting on the veranda of the New Norcia Hotel with a cold beer, looking out at the monastery buildings in the afternoon light, is one of those WA travel experiences that doesn't photograph especially well but lodges firmly in the memory.
          </p>

          <h2>Getting There and Practical Tips</h2>
          <p>
            New Norcia is 132 kilometres north of Perth Airport via the Great Northern Highway — a straightforward drive with almost no traffic once you leave the northern suburbs. Allow 90 minutes each way. There is no public transport to New Norcia, which makes a hire car essential. Fuel up in Bindoon or Moora if you need to; New Norcia has no petrol station.
          </p>
          <p>
            The town is best visited on a weekday or during school terms, when the guided tours are less crowded and the monastery feels genuinely active rather than tourist-facing. Arrive by 10am to do the museum before the morning tour, have lunch at the hotel, and then browse the shop before the afternoon drive back to Perth. A 9am departure from Perth Airport will get you there comfortably.
          </p>
          <p>
            There is no entry fee to the town itself — you only pay for the museum and the guided tour. Parking is plentiful and free.
          </p>

          <h2>Combining New Norcia with Other Stops</h2>
          <p>
            New Norcia pairs well with Yanchep National Park, which sits about 90 kilometres to the southwest and is an easy diversion on the return journey. Yanchep gives you native wildlife — wild koalas, a limestone cave, wetland birds — as a counterpoint to New Norcia's human and architectural history. Between the two, you have a full and genuinely varied day out of Perth.
          </p>
          <p>
            Alternatively, if you're driving north toward Kalbarri or the Coral Coast, New Norcia makes a logical and worthwhile first stop. Breaking the long drive north with a couple of hours in New Norcia is much more satisfying than grinding through to Geraldton without stopping.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to Explore WA's Hidden Heritage?</h3>
          <p className="text-slate-600 mb-6">New Norcia has no public transport — a hire car is the only practical way to get there. Pick up your rental at Perth Airport and make this extraordinary monastic town your first stop on a WA road trip.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
