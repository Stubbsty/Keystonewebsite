# Keystone site generator. Edit CONFIG, then: python3 build.py <outdir>
import json, os, sys, html

CONFIG = {
  "domain": "https://keystonefacilityservices.com.au",   # no trailing slash
  "phone": "0430 789 756",
  "email": "tyler.stubbs@keystonefacilityservices.com.au",
  "abn": "60 640 710 845",
  "name": "Keystone Facility Services",
  "year": "2026",
}
OUT = sys.argv[1]
E = html.escape

MARK = '<svg viewBox="0 0 120 100" aria-hidden="true"><defs><mask id="ks{n}" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="100"><rect width="120" height="100" fill="#fff"/><path d="M60 26 C62 41 67 46 82 48 C67 50 62 55 60 70 C58 55 53 50 38 48 C53 46 58 41 60 26 Z" fill="#000"/></mask></defs><path d="M10 8 L110 8 L92 92 L28 92 Z" fill="#F86C2F" stroke="#F86C2F" stroke-width="10" stroke-linejoin="round" mask="url(#ks{n})"/></svg>'
_mk = [0]
def mark():
    _mk[0] += 1
    return MARK.replace("{n}", str(_mk[0]))
ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'

# ---------------- data ----------------
SECTORS = [
 dict(slug="office-cleaning-brisbane", short="Offices", name="Office cleaning", img="office", word="offices.",
  title="Office Cleaning Brisbane | After-Hours Commercial Office Cleaners | Keystone",
  desc="After-hours office cleaning across Brisbane and SEQ. Written scope, same crew every visit, signed off before your team arrives. Book a free site walkthrough.",
  h1="Office cleaning in Brisbane, <em>done before 7am.</em>", mk="the 5am shift",
  lead="Open-plan floors, boardrooms, kitchens and washrooms, cleaned after hours by the same crew every visit and signed off before anyone badges in.",
  intro=["Your office is judged at 8:45am by people who never think about cleaning, until something is missed.",
   "Most office cleaning contracts fail quietly. A bin skipped here, a smeared glass wall there, a kitchen that smells by Wednesday. Nobody complains formally; they just stop trusting the clean. Keystone runs offices the way a good operations team runs a shift: a written scope for every area, a checklist the crew works through, and a sign-off you can see.",
   "We clean CBD towers, suburban business parks and single-floor suites across Brisbane. Whether you are 200 square metres or a full floor, you get the same thing: a walkthrough before we quote, a scope you approve, and one person to call."],
  incl=[("Every visit",["Vacuum carpets + mop hard floors","Empty bins, replace liners","Kitchen benches, sink + appliance fronts","Washrooms cleaned, restocked","High-touch points: handles, switches, lift buttons","Reception + meeting rooms reset"]),
        ("Weekly",["Glass partitions + internal doors","Desks wiped (clear desks)","Fridge wipe-out + expired food check","Skirting + spot-clean walls","Kitchen appliances inside: microwave"]),
        ("Monthly or quarterly",["High dusting: vents, ledges, frames","Carpet spot treatment","Upholstered chairs vacuumed","Washroom detail + grout","Scope review with your contact"])],
  points=[("Keys, alarms + access","We hold keys or fobs under a signed register, arm the alarm on exit and log every entry time."),
          ("Clear-desk friendly","We wipe what is clear and never move papers or touch screens. Your team sets the rules, we follow them."),
          ("Kitchens that stay fresh","Fridge and dishwasher routines built into the scope so Friday smells like Monday."),
          ("Washroom restocking","Consumables tracked against the scope. Supplied by us or by you, agreed up front.")],
  freq="Most offices run 3 or 5 nights a week. Small suites often start at 2 nights plus a monthly detail clean.",
  faq=[("Do you clean during business hours?","Our default is after hours or early morning so the clean is finished before your team arrives. Day porter cover can be scoped for larger sites."),
       ("Can we keep the same cleaner?","Yes. Every site gets an assigned crew. If someone is on leave, the replacement is briefed on your scope before they arrive."),
       ("Do you supply products and equipment?","Yes. Consumables like paper and soap can be supplied by us or you; we agree that in the scope."),
       ("How do you price office cleaning?","After a free walkthrough. Price depends on floor area, number of washrooms and kitchens, and how many nights a week. You get a fixed monthly price.")],
  areas=["commercial-cleaning-brisbane-cbd","commercial-cleaning-brisbane-east"]),
 dict(slug="medical-cleaning-brisbane", short="Medical + clinics", name="Medical + clinic cleaning", img="clinic", word="clinics.",
  title="Medical Centre & Clinic Cleaning Brisbane | GP, Dental, Allied Health | Keystone",
  desc="Clinic cleaning for Brisbane GPs, dental, physio and allied health. Colour-coded systems, documented routines and sign-off logs ready for accreditation.",
  h1="Clinic cleaning that <em>stands up to an audit.</em>", mk="consult room 3: done",
  lead="GP practices, dental, physio and allied health. Colour-coded, documented and logged, so you can show exactly what was cleaned and when.",
  intro=["In a clinic, a clean that looks fine is not good enough. It has to be done the right way, every time, and you have to be able to prove it.",
   "Keystone works to a written routine for each room type: consult rooms, treatment rooms, waiting areas, washrooms and staff spaces. Cloths and equipment are colour-coded so nothing from a washroom ever touches a treatment surface, and every visit is logged with a time and a sign-off.",
   "When accreditation comes around, you have a record, not a promise. We work around your session times, before opening or after the last patient leaves."],
  incl=[("Every visit",["Consult + treatment surfaces wiped down","Treatment beds, trolleys + stools","Waiting room seating + counters","Door handles, switches, touch screens","Washrooms cleaned + restocked","Hard floors mopped, carpets vacuumed"]),
        ("Weekly",["Skirting, vents + window ledges","Inside sinks + splashbacks detail","Staff kitchen appliances","Glass doors + reception screens"]),
        ("Monthly",["High dusting + light fittings","Chair upholstery vacuumed","Deep clean of washrooms","Routine + log review with practice manager"])],
  points=[("Colour-coded system","Separate colours for washrooms, clinical areas and general areas. Written into the scope, visible on the trolley."),
          ("Logged, every visit","Time on site, areas completed and sign-off, available to your practice manager on request."),
          ("Products agreed with you","We use hospital-grade products appropriate to each surface, agreed with the practice before we start."),
          ("Clinical waste stays clinical","We do not handle sharps or clinical waste. Those stay with your licensed provider; we keep the rooms around them spotless.")],
  freq="Most clinics need a clean every operating day, timed before the first patient or after the last.",
  faq=[("Do you handle clinical waste or sharps?","No. Clinical waste and sharps stay with your licensed waste contractor. We clean the rooms and surfaces around them."),
       ("Can you provide cleaning records for accreditation?","Yes. Every visit is logged with time on site, areas completed and sign-off, and we can share the log on request."),
       ("Do you clean dental and physio practices?","Yes. Each practice type gets its own room-by-room routine, agreed at the walkthrough."),
       ("Can you work around our session times?","Yes. Cleans are scheduled before opening or after the last patient, so you never see us during clinic hours.")],
  areas=["commercial-cleaning-brisbane-south-logan","commercial-cleaning-brisbane-north"]),
 dict(slug="commercial-kitchen-cleaning-brisbane", short="Hospitality", name="Café + kitchen cleaning", img="cafe", word="kitchens.",
  title="Café, Restaurant & Commercial Kitchen Cleaning Brisbane | Keystone",
  desc="Overnight cleaning for Brisbane cafés, restaurants and commercial kitchens. Degreasing, floors, drains and front of house, finished before the first coffee.",
  h1="Cafés + kitchens, <em>ready before the first coffee.</em>", mk="degreased by 5:30",
  lead="Front of house, back of house, floors and drains. Cleaned overnight so your team opens straight into service, not into yesterday.",
  intro=["After a full day of service, the last thing your team wants is another hour with a mop. That hour usually gets rushed, and it shows.",
   "Keystone takes over the deep part of the close: degreasing benches and canopies, scrubbing floors and drains, and resetting front of house. We work to a written routine built around how your kitchen actually runs, from a 30-seat café to a full restaurant.",
   "Our founder holds a food safety supervisor qualification, so the routine is built with food safety in mind, not bolted on afterwards."],
  incl=[("Every visit",["Stainless benches + splashbacks degreased","Floors scrubbed, drains cleared of debris","Front counter, display + pass","Tables, chairs + high chairs","Washrooms cleaned + restocked","Bins out, liners in"]),
        ("Weekly",["Behind + under equipment","Walls + doors spot-cleaned","Cool room floor + shelving","Glass + shopfront inside"]),
        ("Monthly",["Canopy + filter surface degrease","High dusting + light fittings","Grout scrub in wet areas","Routine review with owner or head chef"])],
  points=[("Built around service","We work after close or before open, and leave the kitchen set up the way your team likes it."),
          ("Food safety minded","Routines built by a qualified food safety supervisor. Food-contact surfaces get food-safe products only."),
          ("Floors that are actually clean","Scrubbed and squeegeed to the drains, not just mopped around."),
          ("No surprise costs","Fixed price per clean. Deep cleans and canopy work quoted separately and agreed first.")],
  freq="Most cafés book 3 to 7 nights a week, plus a monthly deep clean.",
  faq=[("Do you clean exhaust canopies and ducts?","We degrease accessible canopy surfaces and filters as part of a deep clean. Full duct cleaning is specialist work we can refer you for."),
       ("Do we need to be there?","No. Most hospitality clients give us a key or code. We lock up, arm the alarm and log the visit."),
       ("Are your products food safe?","Yes. Food-contact surfaces are cleaned and sanitised with food-safe products, agreed with you up front."),
       ("Can you do a one-off deep clean first?","Yes. Many kitchens start with a deep clean to reset everything, then move to a regular schedule.")],
  areas=["commercial-cleaning-brisbane-cbd","commercial-cleaning-brisbane-south-logan"]),
 dict(slug="gym-cleaning-brisbane", short="Gyms", name="Gym + fitness cleaning", img="gym", word="gyms.",
  title="Gym & Fitness Centre Cleaning Brisbane | Equipment, Change Rooms | Keystone",
  desc="Gym cleaning for Brisbane fitness centres, studios and 24/7 gyms. Equipment wipe-downs, rubber floors, change rooms and showers, done between the late and early rush.",
  h1="Gym cleaning <em>between the late rush and the 5am crew.</em>", mk="racked + wiped",
  lead="Equipment, rubber floors, mirrors, change rooms and showers. The things members notice first, cleaned in the quiet window.",
  intro=["Members do not cancel because of one dirty bench. They cancel because of the feeling that builds over a month of sticky handles and a smelly change room.",
   "Keystone cleans gyms in the low-traffic window, usually late night or very early morning, so the floor is clear and equipment is ready for the first session. We follow a set route: equipment, floors, mirrors, then wet areas, every visit.",
   "For 24/7 gyms we schedule around your quietest hours and work alongside members safely."],
  incl=[("Every visit",["Equipment, benches + handles wiped down","Rubber floors vacuumed + mopped","Mirrors + glass streak-free","Change rooms, showers + toilets","Reception + water stations","Bins, towels bins + liners"]),
        ("Weekly",["Under + behind machines","Shower grout + drains","Lockers inside + out","Studio floors detail"]),
        ("Monthly",["High dusting, fans + vents","Rubber floor deep scrub","Upholstery on benches + pads","Route review with gym manager"])],
  points=[("Equipment-safe products","Disinfectants that work and do not damage upholstery, grips or screens."),
          ("Wet areas first-class","Change rooms and showers get the most time. That is where reviews come from."),
          ("Works around 24/7","For always-open gyms we clean in zones and keep walkways clear."),
          ("Same route every time","A fixed order around the floor so nothing gets skipped on a busy night.")],
  freq="Most gyms need a nightly clean, with wet areas sometimes twice a day.",
  faq=[("Can you clean while the gym is open?","Yes, for 24/7 gyms. We clean in zones during the quietest hours and keep signage out on wet floors."),
       ("What do you use on equipment?","Gym-safe disinfectants that are effective and safe for upholstery, grips and screens."),
       ("Do you clean showers and change rooms daily?","Yes, every visit. Grout and drains get a weekly detail."),
       ("Do you supply towels or consumables?","We can supply soap and paper. Towel services are separate.")],
  areas=["commercial-cleaning-brisbane-cbd","commercial-cleaning-brisbane-north"]),
 dict(slug="warehouse-cleaning-brisbane", short="Warehouses", name="Warehouse + industrial cleaning", img="warehouse", word="warehouses.",
  title="Warehouse & Industrial Cleaning Brisbane | TradeCoast, Logan, Brendale | Keystone",
  desc="Warehouse, depot and industrial cleaning across Brisbane. Floor scrubbing, amenities, lunchrooms and offices, scheduled around your shifts and forklifts.",
  h1="Warehouse cleaning <em>that works around the forklifts.</em>", mk="aisle 4: scrubbed",
  lead="Polished concrete, amenities, lunchrooms and site offices. Scheduled around your shifts, your loading windows and your WHS rules.",
  intro=["In a warehouse, dust and debris are not just untidy. They are a slip risk, they get into stock and equipment, and they make a site look run-down to the clients who visit.",
   "Keystone cleans warehouses, depots and light industrial sites with floor scrubbers for open areas and a full routine for amenities, lunchrooms and site offices. We work to your site induction and WHS rules, wear the PPE your site requires, and schedule around shift changes and loading windows.",
   "We know these sites from the inside. Our founder's background is in production and logistics operations, where the floor has to be safe and the shift has to run on time."],
  incl=[("Every visit",["Amenities + toilets cleaned, restocked","Lunchroom benches, tables, sink + appliances","Site office floors, desks + bins","Bins emptied, liners replaced","High-touch points: doors, rails, clocks"]),
        ("Weekly",["Warehouse floors machine-scrubbed","Dock + entry areas swept","Locker rooms + showers detail","Glass + internal partitions"]),
        ("Monthly or quarterly",["Racking base + aisle edges","High dusting where safely accessible","Line-marking areas detail","Scope + WHS review with site manager"])],
  points=[("Inducted + PPE ready","Our crew completes your site induction and wears the PPE your site requires."),
          ("Around your shifts","Scrubbing scheduled outside forklift traffic and loading windows."),
          ("Machine scrubbers","Walk-behind scrubbers for polished concrete, so floors are actually clean, not just swept."),
          ("Amenities matter too","The lunchroom and toilets are where your team judges how a site is run.")],
  freq="Amenities usually need daily cleaning; open warehouse floors are often scrubbed weekly or fortnightly.",
  faq=[("Will you complete our site induction?","Yes. Every crew member completes your induction before their first shift on site."),
       ("Do you bring a floor scrubber?","Yes, for floor areas that suit one. We confirm floor type and access at the walkthrough."),
       ("Can you clean during operating hours?","Amenities and offices, yes. Open floor scrubbing is scheduled around forklift traffic and loading windows."),
       ("Do you service the TradeCoast?","Yes. Murarrie, Eagle Farm, Pinkenba, Hemmant and the surrounding industrial areas are core service areas.")],
  areas=["commercial-cleaning-brisbane-east","commercial-cleaning-brisbane-north"]),
 dict(slug="strata-cleaning-brisbane", short="Strata + retail", name="Strata + retail cleaning", img="glass", word="foyers.",
  title="Strata, Body Corporate & Retail Cleaning Brisbane | Common Areas | Keystone",
  desc="Common-area cleaning for Brisbane strata buildings, body corporates and retail. Foyers, lifts, glass, car parks and bin rooms on a reliable schedule.",
  h1="Foyers, lifts + glass <em>that make a first impression.</em>", mk="lobby glass: streak-free",
  lead="Strata common areas, body corporate buildings, shops and showrooms. The spaces everyone walks through and everyone notices.",
  intro=["A building's common areas are its front door. Smudged glass, a grubby lift and an overflowing bin room tell residents and customers more than any brochure.",
   "Keystone cleans strata and retail spaces on a fixed, visible schedule: foyers, lifts, stairwells, glass, mailbox areas, car parks and bin rooms. Committees and building managers get a written scope and a sign-off for every visit, so there is no debate about what was done.",
   "For shops and showrooms we clean before trading starts, so the first customer walks into a space that looks the way your brand should."],
  incl=[("Every visit",["Foyer floors + entry mats","Entry glass + doors streak-free","Lift cars: walls, buttons, floors","Mailbox + intercom areas","Bin room tidy + bins presented"]),
        ("Weekly",["Stairwells swept + mopped","Handrails + balustrades","Car park lobby + common corridors","Shopfront glass inside"]),
        ("Monthly",["Cobwebs + high dusting","Common-area light fittings","Bin room wash-down","Report to committee or building manager"])],
  points=[("Committee-friendly reporting","A visit log and simple monthly summary your committee can actually read."),
          ("Glass done properly","Squeegee and cloth, not a spray and a smear."),
          ("Before trading hours","Retail cleans finished before doors open."),
          ("One point of contact","Building managers deal with one person who knows the site.")],
  freq="Most strata buildings need 1 to 3 visits a week; busy retail often needs daily.",
  faq=[("Do you work with body corporate managers?","Yes. We can quote to your committee or manager and report to whoever you nominate."),
       ("Do you clean car parks?","We clean car park lobbies, lift areas and stairwells. Large car park sweeping can be scoped separately."),
       ("Can you handle bin presentation?","Yes. Bins out and back on collection days can be included in the scope."),
       ("Do you clean shops before opening?","Yes. Retail cleans are scheduled before trading so you open to a clean store.")],
  areas=["commercial-cleaning-brisbane-cbd","commercial-cleaning-brisbane-south-logan"]),
]

AREAS = [
 dict(slug="commercial-cleaning-brisbane-cbd", name="Brisbane CBD + inner city", short="CBD + inner city",
  title="Commercial Cleaning Brisbane CBD | Fortitude Valley, Newstead, South Brisbane | Keystone",
  desc="Commercial cleaning for Brisbane CBD and inner-city businesses: towers, offices, clinics and cafés in Fortitude Valley, Newstead, South Brisbane and Milton.",
  h1="Commercial cleaning in the <em>Brisbane CBD.</em>",
  lead="Towers, suites, clinics and cafés across the city and inner suburbs. After-hours access, building rules and loading docks, handled.",
  suburbs=["Brisbane City","Fortitude Valley","Newstead","Teneriffe","New Farm","Spring Hill","South Brisbane","West End","Kangaroo Point","Milton","Paddington","Bowen Hills","Woolloongabba"],
  intro=["Cleaning in the city is as much about access as it is about mops. Tower security, after-hours lifts, loading dock bookings and building-specific rules all have to be right before the clean even starts.",
   "Keystone works within your building's rules: inducted crew, registered keys and fobs, and cleans timed around building management requirements. Inside your tenancy, you get the same written scope and sign-off as every Keystone site.",
   "From a two-room suite in Spring Hill to a full floor on Eagle Street, and the cafés and clinics of the Valley, Newstead and West End."],
  local=[("Tower-ready","Security inductions, after-hours access and lift bookings managed with building management."),("Small suites welcome","Single-floor and boutique offices get the same system as big sites."),("Hospitality precincts","Overnight café and restaurant cleans in the Valley, West End and South Brisbane.")],
  sectors=["office-cleaning-brisbane","commercial-kitchen-cleaning-brisbane","medical-cleaning-brisbane","gym-cleaning-brisbane"],
  faq=[("Can you work with our building's security?","Yes. We complete building inductions and follow after-hours access rules set by building management."),
       ("Do you clean small CBD suites?","Yes. There is no minimum floor size. Small suites often start with two nights a week.")]),
 dict(slug="commercial-cleaning-brisbane-east", name="Brisbane East + TradeCoast", short="East + TradeCoast",
  title="Commercial Cleaning Brisbane East & TradeCoast | Murarrie, Eagle Farm, Hemmant | Keystone",
  desc="Commercial and industrial cleaning for Brisbane's eastside and TradeCoast: warehouses, depots, offices and clinics in Murarrie, Eagle Farm, Pinkenba, Hemmant and Cannon Hill.",
  h1="Commercial cleaning across <em>the TradeCoast.</em>",
  lead="Warehouses, depots, logistics offices and business parks from Murarrie to Eagle Farm. Cleaned around your shifts.",
  suburbs=["Murarrie","Cannon Hill","Morningside","Hemmant","Tingalpa","Lytton","Eagle Farm","Pinkenba","Hendra","Hamilton","Bulimba","Wynnum","Belmont","Carindale"],
  intro=["The TradeCoast runs on shifts, trucks and tight loading windows. Cleaning has to fit around all three without getting in the way.",
   "Keystone knows this side of Brisbane well. We clean warehouses, depots, logistics offices and the business parks around Murarrie, Eagle Farm and Hemmant, with crew who complete your site induction and work to your WHS rules.",
   "It is also home to plenty of offices, clinics and gyms around Cannon Hill, Morningside and Carindale. Same system, same sign-off."],
  local=[("Industrial sites","Inducted crew, PPE and floor scrubbers for polished concrete."),("Shift-aware scheduling","Cleans timed around shift changes and dock windows."),("Business parks","Offices and amenities in Murarrie, Cannon Hill and Eagle Farm.")],
  sectors=["warehouse-cleaning-brisbane","office-cleaning-brisbane","gym-cleaning-brisbane","medical-cleaning-brisbane"],
  faq=[("Do you clean depots that run 24/7?","Yes. We schedule amenities and offices around shift changes and scrub floors in agreed windows."),
       ("Is the TradeCoast a core area for you?","Yes. Murarrie, Eagle Farm, Pinkenba, Hemmant and Lytton are core service areas.")]),
 dict(slug="commercial-cleaning-brisbane-south-logan", name="Brisbane South + Logan", short="South + Logan",
  title="Commercial Cleaning Brisbane South & Logan | Springwood, Underwood, Eight Mile Plains | Keystone",
  desc="Commercial cleaning for Brisbane's southside and Logan: offices, medical centres, cafés and gyms in Springwood, Underwood, Eight Mile Plains, Mount Gravatt and Sunnybank.",
  h1="Commercial cleaning for <em>Brisbane South + Logan.</em>",
  lead="Business parks, medical precincts, cafés and gyms from Mount Gravatt to Logan. One crew, one scope, every visit.",
  suburbs=["Eight Mile Plains","Mount Gravatt","Upper Mount Gravatt","Sunnybank","Coopers Plains","Salisbury","Rocklea","Underwood","Springwood","Slacks Creek","Logan Central","Shailer Park","Browns Plains","Coorparoo","Greenslopes"],
  intro=["The southside is busy with business parks, medical centres and shopping-strip cafés, plus Logan's growing commercial and light industrial areas.",
   "Keystone cleans offices in the Eight Mile Plains and Mount Gravatt business parks, clinics around Greenslopes and Coorparoo, and cafés, gyms and warehouses through Springwood, Underwood and Logan.",
   "Each site gets a walkthrough, a written scope and the same assigned crew."],
  local=[("Business parks","After-hours office cleaning in Eight Mile Plains and Mount Gravatt."),("Medical precincts","Clinic routines for GP, dental and allied health practices."),("Logan industry","Warehouses and workshops through Slacks Creek, Underwood and Browns Plains.")],
  sectors=["medical-cleaning-brisbane","office-cleaning-brisbane","commercial-kitchen-cleaning-brisbane","warehouse-cleaning-brisbane"],
  faq=[("Do you cover all of Logan?","We cover Logan's main commercial areas including Springwood, Underwood, Slacks Creek, Logan Central and Browns Plains. Ask about your suburb."),
       ("Do you clean medical centres on the southside?","Yes. Clinics are a core sector, with documented routines and visit logs.")]),
 dict(slug="commercial-cleaning-brisbane-north", name="Brisbane North + Moreton Bay", short="North + Moreton Bay",
  title="Commercial Cleaning Brisbane North & Moreton Bay | North Lakes, Brendale, Chermside | Keystone",
  desc="Commercial cleaning for Brisbane's northside and Moreton Bay: offices, gyms, clinics and industrial sites in North Lakes, Brendale, Strathpine, Chermside and Virginia.",
  h1="Commercial cleaning for <em>the northside.</em>",
  lead="Industrial estates, offices, clinics and gyms from Chermside to North Lakes. Scoped, signed off, finished early.",
  suburbs=["Chermside","Aspley","Nundah","Virginia","Banyo","Northgate","Geebung","Brendale","Strathpine","Lawnton","North Lakes","Mango Hill","Kallangur","Petrie"],
  intro=["The northside mixes busy industrial estates in Brendale, Virginia and Geebung with growing commercial hubs around Chermside and North Lakes.",
   "Keystone cleans warehouses and workshops with the same care we bring to offices, clinics and gyms. Every site gets a walkthrough, a written scope, an assigned crew and a sign-off every visit.",
   "If your business is spread across a few northside sites, we can run them all under one scope and one point of contact."],
  local=[("Industrial estates","Brendale, Virginia, Geebung and Banyo warehouses and workshops."),("Growing commercial hubs","Offices, clinics and gyms around Chermside and North Lakes."),("Multi-site","Several sites, one scope, one contact.")],
  sectors=["warehouse-cleaning-brisbane","gym-cleaning-brisbane","office-cleaning-brisbane","medical-cleaning-brisbane"],
  faq=[("Do you service Moreton Bay?","Yes, including Strathpine, Brendale, Lawnton, North Lakes, Mango Hill and Kallangur. Ask about suburbs further north."),
       ("Can you manage several of our sites?","Yes. Multiple sites can run under one scope, one invoice and one contact.")]),
]

SLIDES = [
 dict(img="office", word="offices.", chip="Offices", site="Level 12 offices", t1="Floors vacuumed + mopped", t2="Kitchen + bins", time="05:52", bg="#C0D6FF", alt="Cleaner vacuuming an open-plan Brisbane office at sunrise"),
 dict(img="clinic", word="clinics.", chip="Medical + clinics", site="GP clinic, Coorparoo", t1="Consult rooms disinfected", t2="Waiting room + touch points", time="06:10", bg="#FFD5FB", alt="Cleaner wiping a medical trolley in a bright GP consult room"),
 dict(img="cafe", word="cafés.", chip="Hospitality", site="Café, West End", t1="Counter + machine area", t2="Floors + drains", time="05:31", bg="#C0D6FF", alt="Cleaner wiping a café counter at sunrise"),
 dict(img="gym", word="gyms.", chip="Gyms", site="Gym, Newstead", t1="Equipment wiped down", t2="Change rooms + showers", time="04:48", bg="#FFD5FB", alt="Cleaner wiping a dumbbell rack in a Brisbane gym"),
 dict(img="warehouse", word="warehouses.", chip="Warehouses", site="Warehouse, Murarrie", t1="Floor scrubbed", t2="Amenities + lunchroom", time="06:25", bg="#C0D6FF", alt="Cleaner scrubbing a polished concrete warehouse floor"),
]

SCOPE_LIB = {
 "office": {"time":"Before 7:00am","base":[["Vacuum + mop all floors","Every visit"],["Kitchen benches, sink + appliance fronts","Every visit"],["Washrooms cleaned + restocked","Every visit"],["High-touch points wiped","Every visit"]],"big":[["Glass partitions + meeting rooms","Weekly"],["High dusting + vents","Monthly"]]},
 "clinic": {"time":"Before first patient","base":[["Consult + treatment surfaces","Every visit"],["Treatment beds + trolleys","Every visit"],["Waiting room + reception","Every visit"],["Colour-coded washroom clean","Every visit"]],"big":[["Skirting, vents + ledges","Weekly"],["Visit log for accreditation","Every visit"]]},
 "cafe": {"time":"Before opening","base":[["Benches + splashbacks degreased","Every visit"],["Floors scrubbed to the drains","Every visit"],["Front counter + display","Every visit"],["Tables + chairs","Every visit"]],"big":[["Behind + under equipment","Weekly"],["Canopy surface degrease","Monthly"]]},
 "gym": {"time":"Before 5:00am","base":[["Equipment + handles wiped","Every visit"],["Rubber floors vacuumed + mopped","Every visit"],["Mirrors streak-free","Every visit"],["Change rooms + showers","Every visit"]],"big":[["Under machines + lockers","Weekly"],["Rubber floor deep scrub","Monthly"]]},
 "warehouse": {"time":"Around your shifts","base":[["Amenities + toilets","Every visit"],["Lunchroom + appliances","Every visit"],["Site office floors + desks","Every visit"],["High-touch points","Every visit"]],"big":[["Warehouse floor machine-scrub","Weekly"],["Racking bases + aisle edges","Monthly"]]},
}

BRIEFS = [
 dict(id="five-questions", tag="Contracts", title="5 questions to ask before you sign a cleaning contract",
  body="""<p>Most cleaning contracts look the same on paper. The difference shows up three months in. These five questions sort the reliable operators from the rest.</p>
<h3>1. Who actually turns up?</h3><p>The person who quotes is rarely the person who cleans. Ask who will be on your site, whether it is the same crew every visit, and what happens when they are on leave. "We'll allocate a team" is a red flag.</p>
<h3>2. Can I see the scope in writing?</h3><p>A real scope lists every area, every task and how often it happens: nightly, weekly, monthly. If the quote just says "office clean, 3 nights", you have nothing to hold anyone to.</p>
<h3>3. How will I know it was done?</h3><p>Ask how visits are recorded. Sign-off sheets, time logs or photos all work. "Just let us know if there's a problem" means you become the quality control.</p>
<h3>4. Who do I call when something is missed?</h3><p>You want one named person who knows your site, not a call centre or a shared inbox.</p>
<h3>5. What are the notice terms?</h3><p>Check the minimum term and notice period. A provider confident in their work does not need to lock you in for years.</p>
<div class="note">At Keystone, every one of these is answered before you sign: a walkthrough, a written scope, an assigned crew, a sign-off every visit and one point of contact.</div>"""),
 dict(id="high-touch", tag="Hygiene", title="The 10 most-touched surfaces in your workplace",
  body="""<p>Floors look dirty; touch points make people sick. These are the surfaces that get touched dozens or hundreds of times a day and should be on every nightly scope.</p>
<ol><li>Entry and internal door handles</li><li>Lift call and floor buttons</li><li>Light switches</li><li>Kitchen tap handles</li><li>Fridge and microwave handles</li><li>Kettle and coffee machine controls</li><li>Toilet flush buttons and cubicle locks</li><li>Shared desk phones and keyboards (on clear desks)</li><li>Handrails and stair rails</li><li>Printer and photocopier panels</li></ol>
<p>If your current scope just says "wipe surfaces", ask whether these are covered by name. If they are not listed, they are probably being missed.</p>
<div class="note">Keystone scopes list high-touch points by name, so you can see they are done every visit.</div>"""),
 dict(id="brisbane-humidity", tag="Brisbane conditions", title="Brisbane humidity, mould and your building",
  body="""<p>Brisbane's summer brings heat, storms and humidity, and with them, mould in washrooms, air-con vents and anywhere air does not move.</p>
<h3>Where it shows up first</h3><p>Shower and washroom grout, around air-conditioning vents, behind fridges, in storerooms with no airflow and under sinks.</p>
<h3>What helps</h3><ul><li>Regular high dusting and vent cleaning, so spores have less to grow on.</li><li>Weekly grout and wet-area detail cleaning through summer, not just monthly.</li><li>Reporting early: cleaners are the first to see mould coming back, and should tell you.</li></ul>
<p>Persistent or spreading mould usually points to a ventilation or leak issue that needs a building or HVAC professional, not just more cleaning.</p>
<div class="note">Keystone adjusts wet-area routines for the Brisbane wet season and reports early signs of mould to your contact.</div>"""),
]

# ---------------- page shell ----------------
NAV = [("Sectors","office-cleaning-brisbane/"),("Areas","commercial-cleaning-brisbane-cbd/"),("How we work","how-we-work/"),("Why Keystone","why-keystone/"),("Briefings","briefings/")]

def jsonld(o): return '<script type="application/ld+json">'+json.dumps(o,ensure_ascii=False)+'</script>'

def business():
    b={"@context":"https://schema.org","@type":"CleaningService","@id":CONFIG["domain"]+"/#business","name":CONFIG["name"],
       "url":CONFIG["domain"]+"/","image":CONFIG["domain"]+"/assets/img/og.jpg","slogan":"Holds it all together.",
       "description":"Commercial cleaning for offices, clinics, hospitality, gyms, warehouses and strata across Brisbane and South East Queensland.",
       "areaServed":[{"@type":"City","name":"Brisbane"},{"@type":"Place","name":"Logan"},{"@type":"Place","name":"Moreton Bay"},{"@type":"State","name":"Queensland"}],
       "address":{"@type":"PostalAddress","addressLocality":"Brisbane","addressRegion":"QLD","addressCountry":"AU"}}
    if CONFIG["phone"]: b["telephone"]=CONFIG["phone"]
    if "@" in CONFIG["email"]: b["email"]=CONFIG["email"]
    return b

def crumbs_ld(items):
    return {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":i+1,"name":n,"item":CONFIG["domain"]+"/"+u} for i,(n,u) in enumerate(items)]}

def faq_ld(faq):
    return {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in faq]}

def page(path, title, desc, body, schema=(), header="light", noindex=False):
    depth = path.count("/")
    p = "../"*depth
    canon = CONFIG["domain"]+"/"+path.replace("index.html","")
    navlinks = "".join(f'<a href="{p}{u}">{n}</a>' for n,u in NAV)
    hcls = {"light":"hd light","ondark":"hd light ondark","solid":"hd solid"}[header]
    tel = f'<a href="tel:{CONFIG["phone"].replace(" ","")}">{E(CONFIG["phone"])}</a>' if CONFIG["phone"] else ""
    sec_links="".join(f'<a href="{p}{s["slug"]}/">{s["name"]}</a>' for s in SECTORS)
    area_links="".join(f'<a href="{p}{a["slug"]}/">{a["name"]}</a>' for a in AREAS)
    s="".join(jsonld(o) for o in (business(),)+tuple(schema))
    return f'''<!DOCTYPE html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{E(title)}</title><meta name="description" content="{E(desc)}"><link rel="canonical" href="{canon}"><meta name="robots" content="{'noindex,follow' if noindex else 'index,follow'}"><meta name="theme-color" content="#6D0101">
<link rel="icon" href="{p}favicon.svg" type="image/svg+xml"><link rel="preload" href="{p}assets/fonts/bric-800.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="{p}site.css">
<meta property="og:site_name" content="Keystone Facility Services"><meta property="og:locale" content="en_AU"><meta property="og:type" content="website"><meta property="og:title" content="{E(title)}"><meta property="og:description" content="{E(desc)}"><meta property="og:url" content="{canon}"><meta property="og:image" content="{CONFIG['domain']}/assets/img/og.jpg"><meta name="twitter:card" content="summary_large_image">
{s}</head><body>
<a class="skip" href="#main">Skip to content</a>
<header class="{hcls}"><div class="wrap"><a class="logo" href="{p}" aria-label="Keystone home">{mark()}<span>keystone</span></a>
<nav id="navigation" aria-label="Main"><button class="x" type="button">Close</button>{navlinks}<a class="btn or" href="{p}book-a-walkthrough/">Book a walkthrough</a></nav>
<button class="menu" type="button" aria-expanded="false" aria-controls="navigation">Menu</button></div></header>
<main id="main">
{body}
</main>
<footer class="ft"><div class="wrap">
<div class="ft-top">
 <div class="ft-brand"><a class="logo" href="{p}">{mark()}<span>keystone</span></a><p>Commercial cleaning for Brisbane and South East Queensland. Scoped, signed off, finished before you clock on.</p><a class="btn or" href="{p}book-a-walkthrough/">Book a site walkthrough</a></div>
 <nav class="ft-col" aria-label="Sectors"><h3>Sectors</h3>{sec_links}</nav>
 <nav class="ft-col" aria-label="Areas"><h3>Areas</h3>{area_links}</nav>
 <nav class="ft-col" aria-label="Keystone"><h3>Keystone</h3><a href="{p}why-keystone/">Why Keystone</a><a href="{p}how-we-work/">How we work</a><a href="{p}briefings/">FM Briefings</a><a href="{p}privacy-policy/">Privacy policy</a></nav>
 <div class="ft-col"><h3>Talk to us</h3>{tel}<a href="mailto:{CONFIG['email']}">{E(CONFIG['email'])}</a><span>Brisbane + SEQ</span></div>
</div>
<div class="ft-word" aria-hidden="true">keystone</div>
<div class="ft-base"><span>© {CONFIG['year']} {CONFIG['name']} · ABN {CONFIG['abn']}</span><span>Images are illustrative.</span><span>Site by <a href="https://www.finemess.studio/" target="_blank" rel="noopener">Fine Mess</a></span></div>
</div></footer>
<div class="callbar"><a class="btn line" href="tel:{CONFIG['phone'].replace(' ','')}" style="color:var(--ox)">Call {E(CONFIG['phone'])}</a><a class="btn or" href="{p}book-a-walkthrough/">Book a walkthrough</a></div>
<script src="{p}app.js" defer></script></body></html>'''

def write(path, html_):
    full=os.path.join(OUT,path); os.makedirs(os.path.dirname(full),exist_ok=True)
    open(full,"w").write(html_)

def faq_block(faq, title="Good questions."):
    items="".join(f'<details><summary>{E(q)}</summary><p>{E(a)}</p></details>' for q,a in faq)
    return f'<section class="sec"><div class="wrap faq"><div class="rv"><span class="kick mono">Questions</span><h2>{title}</h2></div><div class="rv">{items}</div></div></section>'

def close_block(p, h="holds it all together.", sub="Book a free site walkthrough. We look at the space, agree the scope, and send a fixed price."):
    return f'''<section class="close">
<h2 class="rv">{h}</h2><p class="rv">{sub}</p><div class="acts rv"><a class="btn ox" href="{p}book-a-walkthrough/">Book a site walkthrough {ARROW}</a><a class="btn line" href="{p}how-we-work/">How we work</a></div></section>'''

def img(p, name, alt, cls="", eager=False):
    return f'<img src="{p}assets/img/{name}.webp" srcset="{p}assets/img/{name}-sm.webp 800w, {p}assets/img/{name}.webp 1600w" sizes="(max-width:900px) 100vw, 50vw" alt="{E(alt)}" {"" if eager else "loading=\"lazy\""} {cls}>'

COMMIT = [("01","Walkthrough first","We see your site before we quote. No guessing from a floor plan."),
          ("02","A written scope","Every area, every task, every frequency, in writing, approved by you."),
          ("03","The same crew","An assigned crew who know your site. Replacements are briefed first."),
          ("04","Signed off, every visit","Time on site and areas done, logged and available to you."),
          ("05","Done before you open","Cleans timed to finish before your first person walks in."),
          ("06","One person to call","A named contact who knows your site and answers."),]
def commit_block():
    return '<div class="prose-plain rv"><p>Before we quote, we walk through your site. You get a written scope that lists every area and how often it gets done, and you approve it before we start.</p><p>The same crew cleans your site every visit, and if someone is away, their replacement is briefed first. Every visit is signed off with the time we arrived and left. We finish before your first person walks in, and you have one person to call who actually knows your building.</p></div>'

def sector_cards(p, slugs=None):
    ss=[s for s in SECTORS if not slugs or s["slug"] in slugs]
    return '<div class="sectors">'+"".join(f'<a class="scard rv" href="{p}{s["slug"]}/">{img(p,s["img"]+"-sm" if False else s["img"],s["name"]+" in Brisbane")}<span class="go">Explore →</span><div class="t"><h3>{s["short"]}</h3><p>{E(s["lead"][:110].rsplit(" ",1)[0])}…</p></div></a>' for s in ss)+'</div>'

def area_cards(p):
    return '<div class="areas">'+"".join(f'<a class="area rv" href="{p}{a["slug"]}/"><div><h3>{a["short"]}</h3><p>{", ".join(a["suburbs"][:5])} and surrounds.</p></div><span class="mono">Cleaners in {a["short"].split(" +")[0]} →</span></a>' for a in AREAS)+'</div>'

# ---------------- HOME ----------------
def home():
    p=""
    slides=[{k:s[k] for k in ("site","t1","t2","time","bg")} for s in SLIDES]
    words="".join(f'<b>{("<i style=\"transform:scale(.62)\">"+s["word"]+"</i>") if len(s["word"])>9 else s["word"]}</b>' for s in SLIDES)
    chips="".join(f'<button type="button" aria-pressed="{str(i==0).lower()}">{s["chip"]}</button>' for i,s in enumerate(SLIDES))
    imgs="".join(f'<img class="{"on" if i==0 else ""}" src="assets/img/{s["img"]}.webp" srcset="assets/img/{s["img"]}-sm.webp 800w, assets/img/{s["img"]}.webp 1600w" sizes="(max-width:900px) 100vw, 48vw" alt="{E(s["alt"])}" {"fetchpriority=high" if i==0 else "loading=lazy"}>' for i,s in enumerate(SLIDES))
    lib=json.dumps(SCOPE_LIB).replace("'","&#39;")
    briefs="".join(f'<a class="brief rv" href="briefings/#{b["id"]}"><span class="mono">{b["tag"]}</span><h3>{b["title"]}</h3><span class="rd">Read the briefing →</span></a>' for b in BRIEFS)
    home_faq=[("What does Keystone clean?","Offices, medical and allied health clinics, cafés and commercial kitchens, gyms, warehouses and industrial sites, strata common areas and retail."),
              ("Which areas do you cover?","Brisbane and South East Queensland, including the CBD and inner city, the eastside and TradeCoast, Brisbane South and Logan, and the northside and Moreton Bay."),
              ("How do you price commercial cleaning?","After a free site walkthrough. You get a written scope and a fixed monthly price based on your space, your sector and how often you need us."),
              ("When do you clean?","Usually after hours or early morning, timed so we are finished before your first person arrives. Day cover can be scoped for larger sites."),
              ("Do I need to sign a long contract?","Ask us about terms at the walkthrough. We would rather keep you because the clean is good, not because of the contract.")]
    body=f'''
<section class="hero" id="story" data-slides='{json.dumps(slides)}' aria-label="Keystone commercial cleaning by sector">
 <div class="bars" aria-hidden="true">{"<i><b></b></i>"*len(SLIDES)}</div>
 <button class="tapz" data-d="-1" style="left:0" aria-label="Previous sector"></button><button class="tapz" data-d="1" style="right:0" aria-label="Next sector"></button>
 <div class="left">
  <h1 aria-label="Commercial cleaning in Brisbane, done by 6am">clean<br>clean<span class="l3" aria-hidden="true">{words}</span></h1>
  <div class="by bric">by 6am.</div>
  <p class="sub">Commercial cleaning for Brisbane offices, clinics, cafés, gyms and warehouses. Scoped in writing, signed off every visit, finished before you clock on.</p>
  <div class="chips" role="group" aria-label="Choose a sector">{chips}</div>
  <div class="acts"><a class="btn ox" href="book-a-walkthrough/">Book a site walkthrough {ARROW}</a><a class="btn line" href="#sectors">What we clean</a></div>
 </div>
 <div class="right">{imgs}
  <div class="sheet" aria-live="polite"><div class="stamp">signed<br>off ✓</div>
   <div class="mono" style="font-size:10px;margin-bottom:6px">Job sheet · <span data-f="site"></span></div>
   <div class="row mono"><span data-f="t1"></span><b>✓</b></div><div class="row mono"><span data-f="t2"></span><b>✓</b></div>
   <div class="row mono"><span>Finished</span><b data-f="time"></b></div></div>
 </div>
</section>





<section class="sec"><div class="wrap signwrap">
 <div class="rv"><div class="sign"><span class="vert mono">( cleaning hours )</span><div class="big">05:00 IN<br>06:30 OUT</div><div class="rule"></div><div class="mono" style="font-size:11px">Your team arrives</div><div class="st"><span>07:00</span><i></i><b>SPOTLESS</b></div></div>
 <p class="lead" style="margin-top:30px;font-weight:600;font-size:20px">You never see us. That's the point.</p></div>
 <div class="rv"><span class="kick mono">A typical morning</span><h2 style="font-size:clamp(40px,5vw,76px);margin-bottom:24px">Done before <em style="font-style:normal;color:var(--or)">you clock on.</em></h2>
  <p style="font-size:19px;max-width:520px">We let ourselves in at five, work through your kitchens, washrooms and floors, wipe down everything people touch, lock up and sign off. By the time your first person walks in, we're long gone and the place is ready.</p>
  <div style="margin-top:26px"><a class="btn ox" href="how-we-work/">How we work {ARROW}</a></div></div>
</div></section>

<section class="sec bl" id="sectors"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">What we clean</span><h2>Built for the way <em>your space</em> works.</h2></div><p class="lead">Six sectors, each with its own routine. Not one checklist stretched over everything.</p></div>
 {sector_cards(p)}
</div></section>





<section class="band"><img src="assets/img/set-desk-wide.webp" alt="Powder-blue office desk set with a single orange spray bottle" decoding="async">
 <div class="wrap copy rv" style="width:100%"><h2>You see<br>a clean desk.</h2><p class="lead" style="margin-top:18px;font-size:22px;font-weight:600;max-width:420px">We see the 5am shift behind it.</p></div></section>

<section class="sec"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">Where we clean</span><h2>Brisbane <em>+ South East Queensland.</em></h2></div><p class="lead">Four service areas, one standard. Not sure if we cover you? Ask at the walkthrough.</p></div>
 {area_cards(p)}
</div></section>


{faq_block(home_faq)}
{close_block(p)}'''
    write("index.html", page("index.html","Commercial Cleaning Brisbane | Offices, Clinics, Gyms & Warehouses | Keystone",
      "Commercial cleaning for Brisbane and SEQ businesses. Offices, clinics, cafés, gyms and warehouses, scoped in writing, signed off every visit and finished before you open.",
      body, schema=(faq_ld(home_faq),{"@context":"https://schema.org","@type":"WebSite","name":"Keystone Facility Services","url":CONFIG["domain"]+"/"})))

# ---------------- SECTOR PAGES ----------------
def sector_page(s):
    p="../"
    incl="".join(f'<div class="col rv"><span class="mono">{t}</span><h3>{t}</h3><ul>{"".join(f"<li>{E(i)}</li>" for i in items)}</ul></div>' for t,items in s["incl"]).replace('<span class="mono">Every visit</span><h3>Every visit</h3>','<span class="mono">Nightly</span><h3>Every visit</h3>').replace('<span class="mono">Weekly</span>','<span class="mono">+ Weekly</span>').replace('<span class="mono">Monthly','<span class="mono">+ Monthly')
    pts="".join(f'<div class="point rv"><h3>{t}</h3><p>{d}</p></div>' for t,d in s["points"])
    other=[x for x in SECTORS if x["slug"]!=s["slug"]][:3]
    alinks="".join(f'<a href="{p}{a["slug"]}/">{s["short"]} cleaning · {a["short"]}</a>' for a in AREAS if a["slug"] in s["areas"])
    body=f'''
<section class="phero"><div class="wrap grid">
 <div><nav class="crumbs" aria-label="Breadcrumb"><a href="{p}">Home</a><span>/</span><span>{s["name"]}</span></nav>
  <h1>{s["h1"]}</h1><p class="lead">{s["lead"]}</p>
  <div class="acts"><a class="btn ox" href="{p}book-a-walkthrough/?sector={s["short"].split(" ")[0]}">Book a site walkthrough {ARROW}</a><a class="btn line" href="#included">What's included</a></div></div>
 <div class="pic rv">{img(p,s["img"],s["name"]+" in Brisbane by a Keystone cleaner",eager=True)}</div>
</div></section>
<section class="sec"><div class="wrap prose"><div class="rv"><span class="kick mono">{s["name"]}</span><h2>Why it matters</h2></div><div class="body rv">{"".join(f"<p>{E(x)}</p>" for x in s["intro"])}</div></div></section>
<section class="sec pk" id="included"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">The scope</span><h2>What's <em>included.</em></h2></div><p class="lead">A starting point. Your written scope is built at the walkthrough. {E(s["freq"])}</p></div>
 <div class="incl">{incl}</div></div></section>

<section class="sec" style="padding-top:56px;padding-bottom:56px"><div class="wrap"><div class="links rv">{alinks}<a href="{p}how-we-work/">How we work</a><a href="{p}why-keystone/">Why Keystone</a></div></div></section>
{faq_block(s["faq"])}
<section class="sec bl"><div class="wrap"><div class="head rv"><div><span class="kick mono">More sectors</span><h2>We also <em>clean.</em></h2></div></div>{sector_cards(p,[o["slug"] for o in other])}</div></section>
{close_block(p, h=s["word"].rstrip(".")+", sorted.")}'''
    svc={"@context":"https://schema.org","@type":"Service","name":s["name"]+" Brisbane","serviceType":s["name"],"provider":{"@id":CONFIG["domain"]+"/#business"},"areaServed":{"@type":"City","name":"Brisbane"},"description":s["desc"]}
    write(s["slug"]+"/index.html", page(s["slug"]+"/index.html", s["title"], s["desc"], body,
      schema=(svc,faq_ld(s["faq"]),crumbs_ld([("Home",""),(s["name"],s["slug"]+"/")]))))

# ---------------- AREA PAGES ----------------
def area_page(a):
    p="../"
    subs="".join(f"<span>{x}</span>" for x in a["suburbs"])
    loc="".join(f'<div class="point rv"><h3>{t}</h3><p>{d}</p></div>' for t,d in a["local"])
    others="".join(f'<a href="{p}{o["slug"]}/">{o["name"]}</a>' for o in AREAS if o["slug"]!=a["slug"])
    body=f'''
<section class="phero pk"><div class="wrap grid">
 <div><nav class="crumbs" aria-label="Breadcrumb"><a href="{p}">Home</a><span>/</span><span>{a["name"]}</span></nav>
  <h1>{a["h1"]}</h1><p class="lead">{a["lead"]}</p>
  <div class="acts"><a class="btn ox" href="{p}book-a-walkthrough/">Book a site walkthrough {ARROW}</a><a class="btn line" href="#suburbs">Suburbs we cover</a></div></div>
 <div class="pic rv">{img(p,{"commercial-cleaning-brisbane-cbd":"glass","commercial-cleaning-brisbane-east":"warehouse","commercial-cleaning-brisbane-south-logan":"clinic","commercial-cleaning-brisbane-north":"gym"}[a["slug"]],"Keystone commercial cleaner at work in "+a["name"],eager=True)}</div>
</div></section>
<section class="sec"><div class="wrap prose"><div class="rv"><span class="kick mono">{a["name"]}</span><h2>Commercial cleaning on this side of town</h2></div><div class="body rv">{"".join(f"<p>{E(x)}</p>" for x in a["intro"])}</div></div></section>
<section class="sec bl" id="suburbs"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">Coverage</span><h2>Suburbs <em>we cover.</em></h2></div><p class="lead">Plus surrounding suburbs. Not listed? Ask, we probably cover you.</p></div>
 <div class="suburbs rv">{subs}</div></div></section>

<section class="sec"><div class="wrap"><div class="head rv"><div><span class="kick mono">Common here</span><h2>Sectors in <em>{a["short"]}.</em></h2></div></div>{sector_cards(p,a["sectors"][:3])}
 <div class="links rv">{others}</div></div></section>
{faq_block(a["faq"])}
{close_block(p, h="your side of town.")}'''
    write(a["slug"]+"/index.html", page(a["slug"]+"/index.html", a["title"], a["desc"], body,
      schema=(faq_ld(a["faq"]),crumbs_ld([("Home",""),(a["name"],a["slug"]+"/")]))))

# ---------------- WHY ----------------
def why():
    p="../"
    rows=[("Quoting","From a phone call or floor plan","After a walkthrough of your actual site"),
          ("Scope","\"Office clean, 3 nights\"","Every area, task and frequency in writing"),
          ("Who cleans","Whoever is rostered","An assigned crew who know your site"),
          ("Proof","\"Let us know if anything's missed\"","Sign-off and time log every visit"),
          ("Timing","Sometimes still there at 8am","Finished before your first person arrives"),
          ("Contact","A shared inbox","One named person who answers"),
          ("Review","When something goes wrong","Scheduled scope reviews")]
    tbl="".join(f"<tr><td><b>{a}</b></td><td>{E(b)}</td><td>{E(c)}</td></tr>" for a,b,c in rows)
    faq=[("What makes Keystone different?","A walkthrough before quoting, a written scope, an assigned crew, a sign-off every visit, cleans finished before you open, and one person to call."),
         ("Are you insured?","Ask for our certificate of currency at the walkthrough."),
         ("Do you lock us into long contracts?","We discuss terms openly at the walkthrough. We would rather keep you because the clean is good.")]
    body=f'''
<section class="phero ox"><div class="wrap grid">
 <div><nav class="crumbs" aria-label="Breadcrumb"><a href="{p}">Home</a><span>/</span><span>Why Keystone</span></nav>
  <h1>Why Brisbane businesses <em>choose Keystone.</em></h1><p class="lead">Cleaning is easy to promise and easy to get wrong. We built Keystone around the things that usually go wrong, and wrote the fix into every scope.</p>
  <div class="acts"><a class="btn or" href="{p}book-a-walkthrough/">Book a site walkthrough {ARROW}</a></div></div>
 <div class="pic rv">{img(p,"set-desk-cloth","Powder-blue desk set with one orange microfibre cloth",eager=True)}</div>
</div></section>
<section class="sec"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">Our commitments</span><h2>What you can expect from us</h2></div></div>
 {commit_block()}</div></section>
<section class="sec pk"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">Side by side</span><h2>Keystone vs <em>the usual.</em></h2></div></div>
 <div class="tablewrap rv"><table class="cmp"><thead><tr><th scope="col"></th><th scope="col">The usual</th><th scope="col">Keystone</th></tr></thead><tbody>{tbl}</tbody></table></div></div></section>
<section class="sec"><div class="wrap prose">
 <div class="rv"><span class="kick mono">Who's behind it</span><h2>Run like <em style="font-style:normal;color:var(--or)">an operation.</em></h2></div>
 <div class="body rv"><p>Keystone was started by Tyler Stubbs, whose background is in production and operations supervision: shifts that run to a checklist, sites that have to be safe, and nothing signed off until it is right.</p>
 <p>Tyler is also a qualified food safety supervisor, which shapes how we clean kitchens, cafés and clinics.</p>
 <p>That is the whole idea behind Keystone. Commercial cleaning is not complicated, but it has to be run properly every single night. A scope, a checklist, a sign-off and someone who answers the phone.</p></div>
</div></section>
<section class="sec ox"><div class="wrap">
 <div class="head rv"><div><span class="kick mono" style="color:var(--pk)">Straight answers</span><h2>What we <em>won't do.</em></h2></div></div>
 <div class="prose-plain rv"><p>We won't quote without seeing your site, and we won't send someone who hasn't been briefed on it. If something gets missed, we fix it without you having to quote the contract at us. And if a job needs a specialist, like duct cleaning or clinical waste, we'll tell you rather than pretend.</p></div>
 </div></div></section>
{faq_block(faq)}
{close_block(p, h="see it for yourself.")}'''
    write("why-keystone/index.html", page("why-keystone/index.html","Why Choose Keystone | Brisbane's Go-To Commercial Cleaners",
      "Why Brisbane businesses choose Keystone for commercial cleaning: a walkthrough before quoting, a written scope, an assigned crew and a sign-off every visit.",
      body, header="ondark", schema=(faq_ld(faq),crumbs_ld([("Home",""),("Why Keystone","why-keystone/")]))))

# ---------------- HOW ----------------
def how():
    p="../"
    steps=[("01","Site walkthrough","We visit, look at every area and ask how your space is used. 20 to 40 minutes."),
           ("02","Written scope + fixed price","Every area, task and frequency in writing, with a fixed monthly price."),
           ("03","Keys, alarms + access","Keys and fobs signed into a register. Alarm codes and site rules documented."),
           ("04","Crew briefing","Your assigned crew is walked through the site and the scope before their first clean."),
           ("05","Every visit, signed off","The crew works through the checklist and logs time on site and completion."),
           ("06","Review + adjust","Regular check-ins with your contact. The scope changes when your site does.")]
    st="".join(f'<li><span class="tm">{n}</span><div><h3>{t}</h3><p>{d}</p></div></li>' for n,t,d in steps)
    faq=[("How long does the walkthrough take?","Usually 20 to 40 minutes depending on the size of the site."),
         ("How soon can you start?","Once the scope is approved, we confirm keys and access and set a start date with you."),
         ("What happens if something is missed?","Tell your contact. We fix it, and if it is a scope gap we update the scope.")]
    body=f'''
<section class="phero"><div class="wrap grid">
 <div><nav class="crumbs" aria-label="Breadcrumb"><a href="{p}">Home</a><span>/</span><span>How we work</span></nav>
  <h1>How we work, <em>start to sign-off.</em></h1><p class="lead">From the first walkthrough to the nightly checklist. No mystery, no guesswork.</p>
  <div class="acts"><a class="btn ox" href="{p}book-a-walkthrough/">Book step one {ARROW}</a></div></div>
 <div class="pic rv">{img(p,"glass","Keystone cleaner squeegeeing a glass meeting room wall",eager=True)}</div>
</div></section>
<section class="sec"><div class="wrap signwrap">
 <div class="rv"><span class="kick mono">The process</span><h2 style="font-size:clamp(44px,5.4vw,84px)">Six steps. <em style="font-style:normal;color:var(--or)">Every site.</em></h2>
 </div>
 <ol class="steps rv">{st}</ol></div></section>
<section class="sec pk"><div class="wrap">
 <div class="head rv"><div><span class="kick mono">Security + access</span><h2>Your keys, <em>handled properly.</em></h2></div></div>
 <div class="points">
  <div class="point rv"><h3>Key register</h3><p>Every key and fob signed in and out. You always know who holds what.</p></div>
  <div class="point rv"><h3>Alarms + lock-up</h3><p>Alarm armed and doors checked on exit, every visit, logged.</p></div>
  <div class="point rv"><h3>Site rules</h3><p>Clear desks, restricted rooms, parking, inductions: written into the scope.</p></div>
  <div class="point rv"><h3>Entry + exit times</h3><p>Logged each visit, so you can see when we were on site.</p></div>
 </div></div></section>
<section class="sec ox"><div class="wrap signwrap">
 <div class="rv"><span class="kick mono" style="color:var(--pk)">Proof, not promises</span><h2 style="font-size:clamp(44px,5.4vw,84px)">Signed off. <em style="font-style:normal;color:var(--pk)">Every visit.</em></h2>
 <p style="margin-top:20px;font-size:19px;max-width:480px">Each visit ends with the checklist completed and logged. Washrooms and kitchens can carry a visible clean-check sheet so your staff can see it too, with a QR code to report anything we missed.</p></div>
 <div class="rv"><div class="jobsheet"><div class="top"><div><span class="mono" style="color:var(--pk)">Washroom · Level 3</span><h3>Clean check ✓</h3></div></div>
  <ul><li><span>Mon 05:40<small>Signed off</small></span></li><li><span>Tue 05:35<small>Signed off</small></span></li><li><span>Wed 05:42<small>Signed off</small></span></li></ul>
  <div class="foot"><span class="mono" style="font-size:11px">Something not right? Scan the QR on the sheet to tell us.</span></div></div></div>
</div></section>
{faq_block(faq)}
{close_block(p, h="step one is free.")}'''
    write("how-we-work/index.html", page("how-we-work/index.html","How We Work | After-Hours Commercial Cleaning Process Brisbane | Keystone",
      "How Keystone runs commercial cleaning in Brisbane: site walkthrough, written scope, key register, briefed crew, sign-off every visit and regular reviews.",
      body, schema=(faq_ld(faq),crumbs_ld([("Home",""),("How we work","how-we-work/")]))))

# ---------------- BRIEFINGS ----------------
def briefings():
    p="../"
    toc="".join(f'<a class="brief rv" href="#{b["id"]}"><span class="mono">{b["tag"]}</span><h3>{b["title"]}</h3><span class="rd">Read →</span></a>' for b in BRIEFS)
    arts='<div class="art-sep"></div>'.join(f'<article class="article rv" id="{b["id"]}"><span class="kick mono">{b["tag"]}</span><h2>{b["title"]}</h2>{b["body"]}</article>' for b in BRIEFS)
    body=f'''
<section class="phero"><div class="wrap grid">
 <div><nav class="crumbs" aria-label="Breadcrumb"><a href="{p}">Home</a><span>/</span><span>FM Briefings</span></nav>
  <h1>FM Briefings. <em>Know what good looks like.</em></h1><p class="lead">Short, practical guides for facility, office and practice managers in Brisbane. No fluff, no sales pitch.</p></div>
 <div class="pic rv">{img(p,"set-desk-spray","Powder-blue desk with an orange spray bottle",eager=True)}</div>
</div></section>
<section class="sec bl"><div class="wrap"><div class="briefs">{toc}</div></div></section>
<section class="sec">{arts}</section>
{close_block(p, h="want this on your site?")}'''
    arts_ld=[{"@context":"https://schema.org","@type":"Article","headline":b["title"],"author":{"@id":CONFIG["domain"]+"/#business"},"url":CONFIG["domain"]+"/briefings/#"+b["id"]} for b in BRIEFS]
    write("briefings/index.html", page("briefings/index.html","FM Briefings | Commercial Cleaning Guides for Brisbane Facility Managers | Keystone",
      "Practical commercial cleaning guides for Brisbane facility and office managers: what to ask before you sign, high-touch surfaces, and humidity and mould.",
      body, schema=tuple(arts_ld)+(crumbs_ld([("Home",""),("FM Briefings","briefings/")]),)))

# ---------------- BOOK ----------------
def book():
    p="../"
    sec_opts="".join(f"<option>{s}</option>" for s in ["Office","Medical clinic","Café / kitchen","Gym","Warehouse","Strata / retail","Something else"])
    body=f'''
<section class="phero pk" style="padding-bottom:40px"><div class="wrap">
 <nav class="crumbs" aria-label="Breadcrumb"><a href="{p}">Home</a><span>/</span><span>Book a walkthrough</span></nav>
 <h1>Book a free <em>site walkthrough.</em></h1><p class="lead">Tell us about the space. We will confirm a time to visit, then send a written scope and a fixed price.</p></div></section>
<section class="sec" style="padding-top:48px"><div class="wrap formwrap">
 <form class="form" id="walkthrough" name="walkthrough" method="POST" action="/api/enquiry">
  <p hidden><label>Leave empty<input name="company-url" tabindex="-1" autocomplete="off"></label></p>
  <p id="form-error" style="margin-bottom:16px;padding:12px 14px;border-radius:10px;background:var(--pk);font-weight:600" hidden>Sorry, that didn't send. Please try again or call {E(CONFIG['phone'])}.</p>
  <div class="row2"><label><span>Your name</span><input name="name" autocomplete="name" required></label><label><span>Business</span><input name="business" autocomplete="organization" required></label></div>
  <div class="row2"><label><span>Email</span><input name="email" type="email" autocomplete="email" required></label><label><span>Phone</span><input name="phone" type="tel" autocomplete="tel" required></label></div>
  <div class="row2"><label><span>Site suburb</span><input name="suburb" placeholder="e.g. Murarrie" required></label><label><span>Type of space</span><select name="sector">{sec_opts}</select></label></div>
  <div class="row2"><label><span>Approx. size</span><select name="size"><option>Under 300 m²</option><option>300–1,000 m²</option><option>1,000 m²+</option><option>Not sure</option></select></label>
  <label><span>How often</span><select name="frequency"><option>2 nights / week</option><option selected>3 nights / week</option><option>5 nights / week</option><option>Every day</option><option>One-off clean</option><option>Not sure</option></select></label></div>
  <label><span>Best time for a walkthrough</span><select name="walkthrough-time"><option>Weekday morning</option><option>Weekday afternoon</option><option>After hours</option><option>Flexible</option></select></label>
  <label><span>Anything we should know?</span><textarea name="notes" placeholder="Access, current issues, start date…"></textarea></label>
  <button class="btn ox" type="submit">Request my walkthrough {ARROW}</button>
  <p class="small">We use your details only to arrange your walkthrough and quote. See our <a href="{p}privacy-policy/">privacy policy</a>.</p>
 </form>
 <aside class="aside"><h3>What happens next</h3><ol><li>We confirm a walkthrough time, usually within one business day.</li><li>We visit your site, 20 to 40 minutes.</li><li>You get a written scope and a fixed price.</li><li>Approve it and we set a start date.</li></ol>
 <p style="color:var(--pk);margin-top:20px;font-weight:600">No obligation. No hard sell.</p><p style="margin-top:18px">Prefer to talk? <a href="tel:{CONFIG['phone'].replace(' ','')}" style="color:#fff;font-weight:700">Call {E(CONFIG['phone'])}</a></p></aside>
</div></section>'''
    write("book-a-walkthrough/index.html", page("book-a-walkthrough/index.html","Book a Free Site Walkthrough | Commercial Cleaning Quote Brisbane | Keystone",
      "Book a free site walkthrough for commercial cleaning in Brisbane. We visit, write your scope and send a fixed price.", body, header="solid",
      schema=(crumbs_ld([("Home",""),("Book a walkthrough","book-a-walkthrough/")]),)))

def support():
    p="../"
    write("thank-you/index.html", page("thank-you/index.html","Thanks | Keystone","Your walkthrough request has been received.",
      f'<section class="close" style="min-height:80vh;display:flex;flex-direction:column;justify-content:center"><h2>got it.</h2><p>Thanks. We will be in touch within one business day to confirm your walkthrough time.</p><div class="acts"><a class="btn ox" href="{p}">Back to home</a></div></section>', noindex=True))
    write("privacy-policy/index.html", page("privacy-policy/index.html","Privacy Policy | Keystone Facility Services","How Keystone Facility Services handles your personal information.",
      f'''<section class="phero" style="padding-bottom:40px"><div class="wrap"><h1>Privacy <em>policy.</em></h1></div></section><section class="sec" style="padding-top:40px"><div class="article">
<p>{CONFIG["name"]} (ABN {CONFIG["abn"]}) collects the personal information you give us, such as your name, business, email, phone number and site details, when you request a walkthrough or contact us.</p>
<p>We use it only to respond to you, arrange walkthroughs, prepare quotes and deliver our services. We do not sell or rent your information. We may use trusted service providers (for example, our website host and email provider) to store and process it.</p>
<p>You can ask to access or correct your information, or ask us to delete it, by emailing {E(CONFIG["email"])}. We handle personal information in line with the Australian Privacy Principles.</p>
<div class="note">Have this reviewed before launch to make sure it matches how you actually store and use enquiries.</div></div></section>''', header="solid"))
    open(os.path.join(OUT,"404.html"),"w").write(page("404.html","Page not found | Keystone","Page not found.",
      '<section class="close" style="min-height:80vh;display:flex;flex-direction:column;justify-content:center"><h2>missed a spot.</h2><p>That page does not exist. It happens to the best of us.</p><div class="acts"><a class="btn ox" href="/">Back to home</a></div></section>', noindex=True))

def extras():
    open(os.path.join(OUT,"favicon.svg"),"w").write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="26" fill="#6D0101"/><g transform="translate(10 14)"><path d="M10 8 L90 8 L76 78 L24 78 Z" fill="#F86C2F" stroke="#F86C2F" stroke-width="10" stroke-linejoin="round"/><path d="M50 22 C51.6 34 55.6 38 68 40 C55.6 42 51.6 46 50 58 C48.4 46 44.4 42 32 40 C44.4 38 48.4 34 50 22 Z" fill="#6D0101"/></g></svg>')
    urls=[""]+[x["slug"]+"/" for x in SECTORS+AREAS]+["why-keystone/","how-we-work/","briefings/","book-a-walkthrough/","privacy-policy/"]
    open(os.path.join(OUT,"sitemap.xml"),"w").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+"".join(f"<url><loc>{CONFIG['domain']}/{u}</loc></url>" for u in urls)+"</urlset>")
    open(os.path.join(OUT,"robots.txt"),"w").write(f"User-agent: *\nAllow: /\nSitemap: {CONFIG['domain']}/sitemap.xml\n")
    open(os.path.join(OUT,"vercel.json"),"w").write(json.dumps({"headers":[{"source":"/assets/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]}]},indent=2))

home()
for s in SECTORS: sector_page(s)
for a in AREAS: area_page(a)
why(); how(); briefings(); book(); support(); extras()
print("built", sum(1 for r,d,f in os.walk(OUT) for x in f if x.endswith(".html")), "html files")
