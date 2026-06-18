import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Northbridge Perth 2026: Food, Culture & Nightlife Just 20 Minutes from the Airport | AutoTrip Perth',
  description: "Perth's most vibrant precinct is a short drive from the airport. Northbridge delivers world-class restaurants, rooftop bars, live music and multicultural street food in one walkable strip.",
  keywords: [
    'Northbridge Perth',
    'Northbridge restaurants 2026',
    'Perth food scene',
    'Perth nightlife',
    'best restaurants Perth',
    'Perth Cultural Centre',
    'Northbridge bars Perth',
    'Perth city dining',
    'William Street Perth',
    'Perth Airport to Northbridge',
  ],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/northbridge-food-scene-perth-2026' },
  openGraph: {
    title: 'Northbridge Perth 2026: Food, Culture & Nightlife Just 20 Minutes from the Airport',
    description: "Perth's most vibrant precinct is a short drive from the airport. Northbridge delivers world-class restaurants, rooftop bars, live music and multicultural street food in one walkable strip.",
    url: 'https://autotrip-five.vercel.app/blog/northbridge-food-scene-perth-2026',
  },
};

export default function NorthbridgeFoodSceneBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Perth City Guide</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 18, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 18 km from Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Northbridge: Perth&apos;s Most Exciting Precinct, 20 Minutes from the Airport
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ramen at midnight, rooftop cocktails at sunset, WA wines poured by the people who made them, and a street-art laneway that changes every month. Northbridge is where Perth lets its hair down — and it&apos;s closer to the airport than you think.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80"
            alt="Vibrant restaurant and bar precinct in an urban district at night, warm lights and outdoor dining"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p>
            Most first-time visitors to Perth spend their first evening unsure where to go. The city centre shuts down early, but Northbridge — just a ten-minute walk north of the CBD across the rail corridor — buzzes until the small hours. Bounded roughly by William Street to the east, Lake Street to the west, and Newcastle Street to the north, the precinct packs more restaurants, bars, galleries, and live music venues per square metre than anywhere else in Western Australia.
          </p>

          <p>
            From Perth Airport, Northbridge is about 18 kilometres via the Graham Farmer Freeway — typically a 20-minute drive in normal traffic, though Friday evenings can stretch that to 35 minutes. There is no need to park all night; the Wilson car park on James Street and several council bays on Aberdeen Street are convenient, and rideshare is widely available for the return journey.
          </p>

          <h2>The Food Landscape</h2>

          <p>
            Northbridge grew into a dining destination through successive waves of immigration, and that layered history is visible on every block. Chinese restaurants have anchored the northern end of William Street since the early twentieth century, and the area still has some of Perth&apos;s most reliable Cantonese and Sichuan kitchens. Over the past decade those have been joined by Vietnamese pho houses, Japanese izakayas, Korean barbecue, Filipino eateries, Levantine share-plate restaurants, and a small cluster of high-end modern Australian venues that have earned serious national attention.
          </p>

          <p>
            For a quick, affordable meal, James Street between William and Lake is the place to start. You will find dumpling shops, bánh mì bakeries, and bubble tea stalls operating well past midnight on weekends — genuinely useful if you have arrived on a late flight and need food before bed. For a more considered dinner, the strip along Aberdeen Street and the laneways off it hosts several restaurants that take bookings seriously and produce food worth planning around.
          </p>

          <h2>William Street: The Spine of Northbridge</h2>

          <p>
            William Street is the main artery and the best place to walk if you want to get a feel for the precinct without a plan. Heading north from the rail underpass, you pass small bars tucked into heritage shopfronts, independent record shops, vinyl cafés, and vintage clothing stores. The street has a genuinely independent character that has resisted the homogenising effect of major retail chains — partly because rents have historically been low enough to support passion projects, and partly because the Northbridge community actively supports local operators.
          </p>

          <p>
            Several of the best drinking spots are deliberately hidden. Perth&apos;s small-bar scene, which expanded rapidly after liquor licensing reforms in the mid-2010s, produced a generation of intimate venues — often 60 to 80 seats — that specialise in natural wine, craft spirits, or specific cocktail traditions. Look for unmarked doors, basement staircases, and handwritten chalkboard signs; finding them is part of the experience. The small-bar density is highest on William between Francis and Newcastle Streets.
          </p>

          <h2>The Perth Cultural Centre</h2>

          <p>
            Anchoring the southern edge of Northbridge, the Perth Cultural Centre is a pedestrianised public square surrounded by the Western Australian Museum, the Art Gallery of Western Australia, the State Library, and the State Theatre Centre. Entry to the Art Gallery and the main museum galleries is free. The WA Museum Boola Bardip, which reopened in 2020 after a major redevelopment, is a genuinely impressive institution — its galleries on WA&apos;s natural history, First Nations cultures, and the Indian Ocean world are worth two hours of any visitor&apos;s time.
          </p>

          <p>
            The Cultural Centre square hosts regular free events: weekend markets, outdoor film screenings in summer, and the occasional large-scale public art installation. If you are in Perth with children, the square is also a practical stopping point — there are free public toilets, shaded seating, and a café at the museum.
          </p>

          <h2>Street Art and the Laneways</h2>

          <p>
            Northbridge has one of Australia&apos;s most active street art scenes, concentrated in the laneways behind William and Lake Streets. The City of Perth has run a laneway activation programme for many years, commissioning murals from both local and international artists, and the result is a rotating outdoor gallery that changes constantly. Ezra Pound Lane and the stretch behind the Aberdeen Hotel are perennial highlights, but the best approach is simply to turn into any laneway you notice and see what&apos;s there. Nothing charges admission and nothing closes.
          </p>

          <h2>Where to Eat: Practical Picks</h2>

          <p>
            For dumplings and Sichuan food, the cluster of Chinese restaurants on the north end of William Street is reliable and affordable, with most main dishes under $20. For modern Australian share plates — good WA produce, honest cooking, decent wine list — the venues on Aberdeen Street and around the Cultural Centre tend to be the strongest performers; booking ahead at the weekend is wise. For late-night ramen or Korean fried chicken, James Street stays open when most of the city has gone home. For coffee in the morning, the cafés along Newcastle Street and around the corner onto Oxford Street are as good as anything in Australia.
          </p>

          <p>
            If you are visiting on a Sunday, the Northbridge Piazza sometimes hosts small food markets and live performances in the afternoon — worth checking the City of Perth events calendar before you arrive.
          </p>

          <h2>Rooftop Bars and Sundowners</h2>

          <p>
            Perth&apos;s clear skies and westerly aspect make rooftop drinking a genuine pleasure, and Northbridge has several options. The best rooftops face west towards the city skyline and catch the long WA sunsets — in summer the sun does not set until after 8 pm, which means golden-hour cocktails are a realistic proposition even after a full day of sightseeing. Most rooftop bars operate from early afternoon on weekends and from around 4 pm on weekdays; some require reservations for weekend evenings, particularly in summer.
          </p>

          <h2>Getting the Most from a Single Evening</h2>

          <p>
            A good Northbridge evening does not need a complicated itinerary. Drive in, park, and walk William Street from the rail underpass north to Newcastle Street — that is about 800 metres and covers most of the key blocks. Stop for a drink when something catches your eye. Eat wherever looks good. Finish with a walk through one of the lit laneways to see the murals. The precinct rewards wandering more than planning.
          </p>

          <p>
            One practical note: parking in Northbridge after 8 pm on Friday and Saturday nights can be genuinely difficult. The Wilson car park on James Street is the most reliable paid option. Alternatively, drive to a nearby suburb like Mount Lawley or Leederville and walk or rideshare the last kilometre — both suburbs have their own excellent bar and café scenes and are quieter for parking.
          </p>

          <h2>Northbridge as a Base for Exploring Perth</h2>

          <p>
            If you are spending several days in Perth, Northbridge is one of the best areas to stay. It is walkable to the CBD and the Cultural Centre, a short drive from Kings Park and the river, and central enough that day trips to Fremantle, the Swan Valley, or Cottesloe Beach are all straightforward. Having a rental car means you are not dependent on train timetables for any of those trips — and Perth&apos;s ample parking in surrounding suburbs makes driving genuinely convenient.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Drive Into Perth&apos;s Best Night Out</h3>
          <p className="text-slate-600 mb-6">Pick up your hire car at Perth Airport and you&apos;re 20 minutes from Northbridge — no buses, no timetables, just dinner, drinks, and a direct drive back to your accommodation whenever you&apos;re ready.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
