import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hillarys Boat Harbour 2026: AQWA, Dolphin Cruises & Sorrento Quay, 25 Minutes from Perth Airport | AutoTrip Perth',
  description: 'A working marina turned family playground — AQWA aquarium, whale and dolphin watching cruises, a beach that never gets crowded, and sunset seafood on the water. The complete 2026 guide to Hillarys Boat Harbour, 25 minutes from Perth Airport.',
  keywords: ['Hillarys Boat Harbour', 'AQWA Perth', 'Aquarium of Western Australia', 'Sorrento Quay', 'Perth dolphin cruise', 'Hillarys Marina', 'things to do near Perth Airport', 'Perth family day trip', 'Mettams Pool', 'Rottnest ferry Hillarys'],
  alternates: { canonical: 'https://autotrip-five.vercel.app/blog/hillarys-boat-harbour-perth-guide-2026' },
  openGraph: {
    title: 'Hillarys Boat Harbour 2026: AQWA, Dolphin Cruises & Sorrento Quay, 25 Minutes from Perth Airport',
    description: 'A working marina turned family playground — AQWA aquarium, whale and dolphin watching cruises, a beach that never gets crowded, and sunset seafood on the water. The complete 2026 guide to Hillarys Boat Harbour.',
    url: 'https://autotrip-five.vercel.app/blog/hillarys-boat-harbour-perth-guide-2026',
  },
};

export default function HillarysBoatHarbourBlogPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Perth Attractions</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> July 9, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 min read</div>
            <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> ~25 minutes north-west of Perth Airport</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Hillarys Boat Harbour: AQWA, Dolphin Cruises and Sorrento Quay, 25 Minutes from Perth Airport
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Most Perth Airport arrivals head straight for the CBD or the coast highway south. Twenty-five minutes north-west, a working marina has quietly built itself into one of the city's best all-ages days out — a walk-through aquarium tunnel, whale and dolphin cruises departing from the same jetty, a sheltered swimming beach, and enough waterfront restaurants to fill an entire evening. Hillarys Boat Harbour rewards visitors who bother to look past the CBD skyline.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80"
            alt="Boats moored at a marina with a sandy beach and clear water near Perth, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2>A Marina That Doubles as a Day Out</h2>
          <p>
            Hillarys Boat Harbour sits on Perth's northern coastline, about 20 kilometres from the city and roughly 25 to 30 minutes' drive from Perth Airport depending on traffic and which terminal you're starting from. Unlike a lot of purpose-built tourist precincts, it started life — and still operates — as a genuine working marina, home to a large recreational boating fleet, the Rottnest Island fast ferry terminal, and a busy fishing charter fleet. The public precinct, known as Sorrento Quay, was built up around that working harbour, which is part of why it feels more authentic than a shopping-strip-with-a-view.
          </p>
          <p>
            It's an easy half-day or full-day destination depending on how much you pack in, and it works equally well for families with young kids, couples wanting a relaxed waterfront dinner, or visitors killing a few hours before or after a flight — the airport is close enough that it's a genuinely practical stop on the way in or out of Perth.
          </p>

          <h2>AQWA — The Aquarium of Western Australia</h2>
          <p>
            The main drawcard for most first-time visitors is AQWA, Western Australia's largest aquarium, right on the harbour front. Its signature feature is a 98-metre underwater viewing tunnel running through the Shipwreck Coast exhibit, where grey nurse sharks, rays and schools of fish swim directly overhead as you walk through on a slow-moving travellator. Beyond the tunnel, the aquarium is organised into zones that broadly track the WA coastline from north to south — tropical coral reef species from the Kimberley and Ningaloo through to the cooler, kelp-forest species found around the southern capes — giving visitors a genuine sense of how varied Western Australia's 12,000-kilometre coastline actually is.
          </p>
          <p>
            AQWA typically opens daily from around 10am, with last entry a couple of hours before closing; hours can shift seasonally and around public holidays, so it's worth checking the current AQWA timetable before you drive out, especially if you're planning a tight connection with an interstate or international flight. Adult tickets sit in the mid-$30s with family and concession pricing available, and allow two to three hours to see the exhibits properly, longer if you want to catch a scheduled dive show or feeding session.
          </p>

          <h2>Whale Watching and Dolphin Cruises</h2>
          <p>
            Operators based at the harbour run whale watching cruises during the migration season — humpback and southern right whales pass along this stretch of coast broadly from September through November as they head south, though sightings vary year to year and it's worth checking current season dates before booking. Outside whale season, several operators run shorter dolphin-watching cruises most days, taking advantage of the resident bottlenose dolphin pods that frequent the waters just offshore. Both types of cruise typically run two to three hours and depart directly from the harbour, meaning no separate transfer is needed beyond getting yourself to the marina car park.
          </p>
          <p>
            Hillarys is also one of two departure points (alongside Fremantle) for the fast ferry to Rottnest Island, so it's worth considering as a Rottnest departure point if you're staying in Perth's northern suburbs — the crossing from Hillarys is shorter than from Fremantle, and the car park is generally easier to navigate than Fremantle's port precinct.
          </p>

          <h2>Sorrento Quay Beach and the Foreshore</h2>
          <p>
            The harbour encloses a sheltered, shallow swimming beach that's popular with families precisely because it lacks the swell and rip currents of Perth's open ocean beaches. There's a small waterslide and inflatable water park operating seasonally in summer, a grassed foreshore with shade and picnic tables, and a playground that keeps younger kids occupied while older members of the group wander the shops. It's a genuinely relaxed alternative to the more crowded ocean beaches at Scarborough or Cottesloe on a hot weekend, though it's also smaller and busier with boat traffic, so it suits a calmer swim rather than serious laps.
          </p>
          <p>
            For visitors wanting a proper ocean swim without the marina traffic, Mettams Pool — a naturally sheltered reef pool that's one of the best snorkelling spots on Perth's coastline — is a five-minute drive south, and makes a good pairing with a Hillarys visit if you want both a marina afternoon and some open-water snorkelling in the same trip.
          </p>

          <h2>Eating and Shopping at the Harbour</h2>
          <p>
            Sorrento Quay's dining strip runs along the water's edge, with a mix of casual fish and chip shops, pizza, ice-creameries and sit-down seafood restaurants — most with outdoor seating looking straight over the moored boats. It's a genuinely nice spot to time a sunset dinner, since the harbour faces west and catches the evening light well. A Sunday market operates on the foreshore on a regular basis with local produce, crafts and food stalls, though days and hours can vary, so it's worth checking before planning a visit specifically around it.
          </p>

          <h2>Planning Your Visit</h2>
          <p>
            Hillarys Boat Harbour is a year-round destination — AQWA is indoors and unaffected by weather, and the sheltered beach makes it a viable swim spot even on days when the open coast is too rough or windy for a comfortable swim. Summer (December to February) is the busiest period, particularly on weekends and school holidays, when the car parks fill early and the beach gets genuinely crowded by early afternoon. Spring and autumn offer a good balance of warm weather and thinner crowds, and whale season (roughly September to November) adds an extra reason to visit if the cruises interest you.
          </p>
          <p>
            There's free parking around the harbour precinct, though the closest bays to AQWA and the main dining strip fill up quickly on weekends, so arriving before 10am or after 4pm gives the easiest access. Because Hillarys sits close to Perth Airport relative to most other attractions in this guide, it's a genuinely practical option for visitors with a late flight out or an early arrival who want a few productive hours rather than sitting in a terminal — just build in enough buffer for the drive back and airport check-in.
          </p>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem]">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Get to the Harbour Without the Timetable Stress</h3>
          <p className="text-slate-600 mb-6">Hillarys is close enough to Perth Airport to fit into almost any itinerary — a stopover on the way to your accommodation, a half-day between flights, or a relaxed sunset dinner before you fly out. A hire car gets you there in under 30 minutes and means you're not tied to a bus route or cruise transfer schedule. AutoTrip offers transparent pricing and terminal pickup so you can build your own timeline.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition">
            Book Your Hire Car at Perth Airport →
          </Link>
        </div>
      </div>
    </article>
  );
}
