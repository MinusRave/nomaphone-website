# Relaunch changes (branch `relaunch`, 2026-10-27)

Goal: align nomaphone.com with the live product ("the internet's public phone": outgoing calls from the browser,
prepaid $5/$10/$20 phone card code, per-second billing, refundable credit, 61 countries, US/CA toll-free callable;
no numbers, no SMS/2FA, no waitlist) without losing SEO traffic. No URL was removed or changed.

## Site-wide
- New homepage (`src/pages/index.astro`): pixel-art public phone, 3 steps, corridor rates (US, UK, India, Mexico, Philippines) from rates.json, use cases, honest FAQ (+ FAQPage JSON-LD), CTA to https://app.nomaphone.com.
- New `/rates/` page: searchable table of all countries (landline, mobile, "from").
- `scripts/sync-rates.mjs` (`npm run rates:sync`) → `src/data/rates.json` from `cabina/lib/rates.ts` (US caller-ID rates; EEA origin not enabled when synced).
- `src/lib/rates.mjs` + `<RateFor country="IN" type="mobile" />` + remark plugin `src/lib/remark-rates.mjs`: posts write `[[rate:IN]]`, `[[rate:IN:mobile]]`, `[[rate:MX:both]]`, `[[countries]]`; the build fails on unknown codes.
- Header/Footer: "Make a call" CTA to the app, Rates/How it works/FAQ/Blog nav.
- Blog: waitlist form (`BlogWaitlistCTA`) replaced by static `BlogAppCTA.astro` (mid + end of post); mid-post placement script now actually works.
- Palette: paper/ink/green/orange tokens in `global.css`; Archivo + JetBrains Mono + VT323. Fixed invisible gradient titles (`hsl(var(--secondary))` was invalid with hex vars).
- `/reserve-credits/` (pre-sale founding credits) rewritten as a "how credit works" page; `/thank-you-page/` rewritten (noindex). Pre-sale Stripe API route and all unused waitlist/landing React components removed.

## Posts
Legend: one section per post; "doubts" = things for a human to check.


<!-- from log-rw1 -->
### international-sms-2fa-codes-abroad
- HAND REWRITE. Title/slug/pubDate/heroImage/tags/description/author unchanged; updatedDate: 2026-10-27 added.
- All original H2s kept (Why SMS Doesn't Work Abroad, What Services Use SMS 2FA, Solutions 1-7 with same headings, Compared, Recommended Setup, Banking Strategies, Common Problems, Security, Testing, Emergency Access Plan, Cost-Benefit, Bottom Line). Added H2s: "How to Receive Verification Codes Overseas on iPhone" (targets iPhone query), "When a Code Won't Arrive: Call Instead" (NomaPhone fallback), "FAQ".
- Removed false closing CTA (NomaPhone "virtual numbers", "receive SMS for 2FA", "join the waitlist at nomaphone.com"). Now states plainly NomaPhone doesn't receive SMS/codes or give a number; fallback = call bank/carrier US toll-free line at [[rate:US:landline]], per-second billing. One closing CTA → https://app.nomaphone.com.
- Removed unverifiable/false claims: "thousands of times daily", "most US banks (required by law)", per-SMS roaming prices, "$20" GV port fee (→ "one-time fee, check current pricing"), MVNO prices (Tello $10, US Mobile $18, Red Pocket $15, Ultra $10), virtual-number prices, "$50-100/mo", "60-70% of services", "100% of services", per-bank 2FA claims (Chase/BofA/Wells/Capital One/Schwab) and "move funds to Schwab" recommendation, 4-week testing plan.
- Added current advice: Wi-Fi calling for SMS, eSIM dual-SIM setup, don't delete US eSIM, SIM PIN/PUK, carrier port-out/number lock, short-code caveat, iOS settings paths, Filter Unknown Senders, Text Message Forwarding, passkeys, in-app approval, backup codes, GV caveats (US-only signup, VoIP rejection, inactivity reclaim, port turns number into VoIP), number parking (NumberBarn, no price) and its VoIP-lookup caveat, voice-code "call me" option, don't spam resend.
- Comparison table rewritten without invented costs/percentages.
- Internal links: google-voice-not-working-abroad (verified exists), maintain-us-phone-number-abroad, calling-banks-from-abroad-complete-guide-expats, how-to-call-us-toll-free-numbers-from-anywhere, receive-sms-otp-abroad-no-roaming, will-2fa-work-foreign-sim.
- Length: body ~2610 words (was ~2280), growth from iPhone section + FAQ.
- doubts: iOS menu paths/labels (Cellular vs Mobile Service, "Wi-Fi" next to carrier in Control Center) are from general knowledge, written hedged. Statement "Login.gov and ID.me support authenticator apps" and "PayPal/Amazon support passkeys" believed correct as of 2026 but not re-verified online.

### how-to-keep-us-number-while-living-abroad
- HAND REWRITE. Title/pubDate/heroImage/tags/description/author unchanged; updatedDate: 2026-10-27 added; readingTime "4 min read" → "7 min read" (body grew ~1090 → ~1570 words).
- Removed duplicate in-body H1 (layout already renders the title as H1).
- Kept all H2s. Options restructured: prepaid MVNO port (new, recommended for bank 2FA), port to Google Voice (new, with caveats), park with a parking service (old Option 1, now accurate: parking ≠ porting conflation fixed, VoIP-lookup caveat), scale down current carrier (new), new virtual number (old Option 2, with VoIP caveat). Added porting steps and a comparison table (no invented prices).
- Removed: "$10 per day" / "$70-100/month" roaming figures (→ hedged), "carriers cancel after 90-180 days" (→ carriers' terms allow limiting long-term roaming), "$1-$2/month" parking, "IRS defaults to calling your number", "virtual US number with SMS is the only reliable long-term solution" (wrong: VoIP often rejected by banks), "dialing a client without giving them your foreign number" (implied caller ID).
- NomaPhone section: states it gives no number and receives no calls/texts, doesn't show your US number; US incl. toll-free at [[rate:US:landline]], per second; no app/account. One closing CTA → https://app.nomaphone.com.
- Internal links: google-voice-not-working-abroad, how-to-call-us-toll-free-numbers-from-anywhere, calling-banks-from-abroad-complete-guide-expats, international-sms-2fa-codes-abroad, will-2fa-work-foreign-sim, receive-sms-otp-abroad-no-roaming.
- doubts: "some carriers let you suspend a line for a limited period" kept generic (Verizon/AT&T policies not re-verified). Description still says "migrating to a virtual setup" – not a NomaPhone claim, left as is.

<!-- from log-rw2 -->
### virtual-phone-numbers-international-guide
- full hand rewrite (2789 -> ~2520 words); kept title/slug/pubDate/heroImage/tags/description; updatedDate set
- removed all fake NomaPhone number prices ($2.19/$1.90/$4.09/$3.80/mo), "NomaPhone Setup" section, NomaPhone forwarding/number claims, waitlist CTA, invented savings scenarios, $0.03 hardcode
- now a genuine third-party guide: how they work, types (local/mobile/toll-free/national), rough price ranges hedged ("check current pricing"), per-country availability + KYC/regulation, why banks reject VoIP numbers for 2FA (line-type lookup, short codes, fraud), provider categories (Google Voice, TextNow, Hushed, Burner, OpenPhone, Dialpad, RingCentral, Grasshopper, Twilio/Telnyx/Vonage, NumberBarn, Tello/US Mobile), how to choose, FAQ
- NomaPhone stated plainly: does NOT sell numbers, no inbound calls/SMS; positioned as complementary for outgoing calls ([[countries]], [[rate:US:landline]], toll-free included, /rates/)
- internal links: how-to-keep-us-number-while-living-abroad, virtual-number-for-digital-nomads-guide, international-sms-2fa-codes-abroad, will-2fa-work-foreign-sim
- one closing CTA -> app.nomaphone.com
- doubts: third-party monthly price ranges are my rough estimates, hedged; H2 "Costs by Country" kept but now ranges/availability, not a per-country price list

### calling-banks-from-abroad-complete-guide-expats
- full hand rewrite (2348 -> ~2680 words); frontmatter kept; updatedDate set
- removed false "toll-free numbers don't work" framing for NomaPhone: US/CA toll-free callable at [[rate:US:landline]]; added toll-free and collect-call sections
- bank number directory cut down to numbers I'm reasonably confident are the published overseas lines (BoA +1 315-724-4022, Wells Fargo +1 925-825-7600, Capital One +1 804-934-2001, Amex +1 336-393-1111), with strong "verify on card/app/official site" caveat + scam warning; Chase and Citi -> "number on your card / official contact page"; UK banks -> use +44 overseas number (no specific numbers); removed invented hold-time stats and doubtful numbers (e.g. "+44 2 4231 4000", Santander Spain 902 special-rate)
- all hardcoded $0.03 / $1.35 / per-scenario costs replaced with tokens or "45 × [[rate:US:landline]]"; other-country rates via tokens (GB, DE, ES, NL, CA, AU landline)
- honest cons added: 30-min call cap (redial), bank doesn't see your number, NomaPhone can't receive verification codes; Skype shutdown May 2025
- added safety section, FAQ; links to call-chase-bank-from-overseas, call-bank-of-america-from-abroad, call-wells-fargo-from-abroad, how-to-call-us-toll-free-numbers-from-anywhere, google-voice-not-working-abroad, international-sms-2fa-codes-abroad, bank-fraud-alert-while-traveling, credit-card-declined-abroad, /rates/
- waitlist CTA -> one closing CTA to app.nomaphone.com
- doubts: this post has NO heroImage in frontmatter (left as is). Sibling post call-chase-bank-from-overseas uses +1-713-262-3300 for Chase from abroad; I believe Chase's published international collect number is +1-713-262-1679 but couldn't verify, so I didn't list either here.

### how-to-call-usa-from-thailand-3-methods-compared
- full hand rewrite (2254 -> ~2370 words); frontmatter kept (description still says "2025": not false, left); updatedDate set
- 3 method H2s kept; Method 1 now includes US carrier Wi-Fi calling; Method 2 now covers roaming AND Thai SIM with IDD codes table (AIS 003/005, dtac 004, True 006, NT 001/007), hedged; noted toll-free not reachable from Thai SIM
- NomaPhone as one browser option: [[rate:US:landline]], toll-free included, no app/account, $5/$10/$20 credit, refundable, never expires, outgoing only, 30-min cap
- removed $0.03 hardcodes and totals ($1.35, $5.40, $18, $17.40...), "crystal clear", "thousands of digital nomads' experiences", "from testing and user reports" quality claims, waitlist CTA
- time zone table fixed for US DST vs standard time (old text only gave EST/PST)
- added dtac/True 2023 merger note, stricter SIM registration (hedged), scam note, related links (international-calling-from-chiang-mai, stay-connected-southeast-asia-nomad, how-to-call-us-toll-free-numbers-from-anywhere, google-voice-not-working-abroad, calling-banks-from-abroad-complete-guide-expats)
- doubts: Thai IDD codes and "few baht per minute" from memory, hedged with "check your carrier"; carrier roaming prices left as "around" third-party figures

<!-- from log-rw3 -->
### browser-based-international-calling-complete-2025-guide
- full hand rewrite; all H2s kept (H3 "What's Coming in 2025-2026" -> "What's Changing in 2026"); added "Updated for 2026" note, new H2 "When Browser Calling Is the Wrong Tool" (receiving calls, SMS/2FA, emergency, no internet, coverage) and FAQ
- WebRTC/mic-permission/Opus/DTLS-SRTP explanation; connection (stability > speed, VPN, hotel Wi-Fi, hotspot) and headset tips (echo, Bluetooth headset mode, mic selection)
- removed waitlist CTA -> one closing CTA to https://app.nomaphone.com; removed "HD voice/crystal clear" claims; removed "remote team joins same browser link" scenario (implied conference hosting) -> US bank toll-free scenario; business section now says NomaPhone has no numbers/recording/teams
- NomaPhone price via [[rate:US:landline]] (2x), [[countries]] (2x); 30-min call "around a dollar" (verified: 30 x 3c = $0.90); 30-min call cap mentioned; code-works-like-cash warning for shared computers
- internal links: how-browser-based-calling-works-webrtc-explained, how-to-call-us-toll-free-numbers-from-anywhere, voip-quality-issues-fix, google-voice-not-working-abroad, skype-discontinued-what-it-means-for-international-callers, how-to-keep-us-number-while-living-abroad, international-sms-2fa-codes-abroad, /rates/
- updatedDate set
- doubts: length grew ~1950 -> ~2950 words (added required "wrong tool" section + FAQ). Claimed browsers "Chrome, Safari, Firefox, Edge" based on Twilio Voice JS SDK support, not tested per-browser.

### tested-7-skype-replacements
- full hand rewrite; 7 numbered H2s and other H2s kept; added disclosure that we make NomaPhone (its section = vendor description, not review), "Updated for 2026" note, new H2 "Also Worth Knowing: Yolla, WhatsApp, FaceTime and Your Carrier", FAQ (Skype Credit hedged)
- fixed false date "Skype calling killed in 2024" -> shutdown May 5, 2025, users moved to Teams Free (no calls to phone numbers)
- removed false NomaPhone SMS/2FA claims (section, table, "hidden dealbreaker" H3 rewritten to "SMS/2FA is a separate problem"), removed "210+ countries", removed claims NomaPhone "connected every time"/most reliable; NomaPhone prices -> [[rate:US:landline]], [[rate:GB:both]], [[rate:IN:both]], [[rate:ZA:both]]; honest cons (not cheapest, [[countries]] countries, outgoing only, 30-min cap, no emergency)
- YadaPhone: removed "no SMS = dealbreaker" framing and unverified Chromium-only claim; DialAnyone: removed "210+ countries", softened negative quality anecdotes, competitor prices hedged "at the time of writing"; Viber Out: corrected that its US rate (~2c) is cheaper than NomaPhone; Talk360: noted NomaPhone covers only EG/MA/NG/ZA in Africa
- table rebuilt (NomaPhone token rate, "Own Number / SMS" column honest); recommendations reordered honestly; closing CTA -> app.nomaphone.com
- updatedDate set
- doubts: the "we tested for a month" premise is kept because the title requires it; I can't verify the competitor tests happened. Kept them hedged ("small sample", "in our calls").

### skype-shut-down-7-best-alternatives-for-international-calling-in-2025
- full hand rewrite (MDX checked: compiles with @mdx-js/mdx + remark-gfm, no raw braces/angle brackets)
- H2 "The 7 Best Skype Alternatives for 2025" -> "The 7 Best Skype Alternatives for International Calls" (keyword); other H2s kept
- list now: NomaPhone, Google Voice, Rebtel, Viber Out, Yolla and Talk360, WhatsApp and FaceTime, carrier international plan (Zoom Phone dropped to a one-line business mention; calling cards folded into a sentence)
- removed: waitlist CTAs x2, "$10 bonus credits", "first 50 signups", "launches Q1 2026", "Built by nomads", "built by a telecommunications engineer", "feedback from hundreds of digital nomads", NomaPhone SMS/2FA + virtual numbers claims (incl. FAQ "NomaPhone includes virtual numbers..."), "carrier-grade quality", "browser performs better on restricted networks"
- Skype facts fixed: shutdown May 5, 2025, Teams Free doesn't call phone numbers; "credit became worthless"/"request a refund" replaced with hedged "time-limited access via Skype web portal / Teams Free dial pad, check Microsoft support"; porting answer hedged
- NomaPhone rates -> [[rate:US:landline]], [[rate:GB:both]], [[rate:IN:both]]; cost table uses "100 x [[rate:US:landline]]"; verdict says Viber Out cheaper to US and NomaPhone pricier for DE mobile/CN/PH
- setup steps rewritten to the real flow (buy $5/$10/$20, code, dial); one closing CTA to app.nomaphone.com
- updatedDate set
- doubts: description still says "Skype shut down its calling service in 2025" (true enough, left as is). Length grew ~1900 -> ~2700 words.

<!-- from log-rw4 -->
### call-china-from-abroad
- full hand rewrite; title/slug/pubDate/heroImage/tags/description/author unchanged; H2 structure kept (all original H2s retained, added H3 "Special Numbers: 400 and 800")
- updatedDate: 2026-10-27 added
- reframed GFW section: calls to Chinese PHONE NUMBERS go over PSTN and aren't blocked; GFW blocks app-to-app for people inside China (removed false "carrier-grade routes bypass the firewall" pitch)
- fixed mobile prefix list (old one listed 13x/15x/18x for both Mobile and Unicom); noted number portability since 2019; added trunk-zero format column, more area codes (Tianjin, Chongqing, Wuhan)
- NomaPhone rate → [[rate:CN:both]] (4x), [[rate:CN:mobile]] in 30-min table; honest note that NomaPhone is NOT the cheapest for China (WeChat free, Viber Out/Rebtel/Google Voice often cheaper); angle = reach landlines/mobiles/businesses without WeChat, no app/account, per-second, refundable, never-expiring credit, 30-min cap
- removed "No VPN needed / carrier-grade termination avoids VoIP blocking" claims; added "don't count on any foreign calling service, NomaPhone included, from inside China"
- FAQ "call me back on a VoIP number" rewritten: NomaPhone is outgoing-only, no number
- HK/Macau/Taiwan FAQ: added [[rate:HK:both]], [[rate:TW:both]]; Macau not covered
- carrier prices hedged ("often $1-$3+", T-Mobile Simple Global ~$0.25 "at time of writing"); removed specific AT&T/Verizon/EE/Vodafone figures and "Magenta"; removed YadaPhone "150+" / DialAnyone "210+" lines
- time zones corrected for DST; business hours incl. lunch break, CNY, Golden Week, make-up working days; anti-fraud tip (message first, people ignore unknown foreign numbers)
- 3 nomaphone.com links → one closing CTA to https://app.nomaphone.com; internal links /rates/, /blog/calling-landlines-vs-mobile-numbers-cost/, /blog/voip-quality-issues-fix/
- doubts: CNY 2027 written as "early February" (I believe Feb 6, 2027); 400/800 numbers "usually can't be reached from abroad" is hedged; WeChat registration-verification wording hedged

### call-japan-from-abroad
- full hand rewrite; frontmatter unchanged except updatedDate: 2026-10-27; all H2s kept
- fixed landline table (Yokohama/Nagoya were shown as 8-digit local numbers; are 7); added Sendai, Hiroshima, Naha; digit counts (+81 then 9 digits landline / 10 mobile)
- added 0570 Navi Dial to toll-free section, issues, cheat sheet and steps
- NomaPhone rate → [[rate:JP:both]] (2x), [[rate:JP:landline]] in 15-min table, [[rate:JP:mobile]] (note apps may be cheaper to mobiles)
- removed "connected in about 30 seconds", "it just works", "costs pennies" style claims; removed invented IVR tips (press 0/star); added keypad mention, 30-min cap/redial, can't call emergency numbers (110/119 note)
- carrier prices hedged; removed Verizon $44.85 / AT&T exact rows; T-Mobile ~$0.25 kept as "around, at time of writing"
- New Year holiday corrected to ~Dec 29–Jan 3; business/government hours softened (8:30–5:15); added "16 national holidays"; corrected US/Europe calling windows
- LINE "90 million" → "most smartphone owners"
- nomaphone.com mentions → one closing CTA to https://app.nomaphone.com; internal links to nomaphone-vs-dialanyone, nomaphone-vs-yadaphone, calling-landlines-vs-mobile-numbers-cost, voip-quality-issues-fix, call-landlines-internationally-after-skype
- doubts: Immigration Services Agency overseas 03 number mentioned without the digits (I believe 03-5796-7112, not printed)

<!-- from log-bulk-00 -->


### 7-ways-make-international-calls-without-apps
- final CTA: waitlist + "$0.03/minute" → [[rate:US:landline]] + app CTA (https://app.nomaphone.com)
- updatedDate set
- doubts: none

### call-800-numbers-from-outside-us
- added the true key fact: NomaPhone dials US/Canada toll-free (800/888/877/866/855/844/833) at the normal US rate (VoIP workarounds, Browser Calling Solution, quick reference, closing CTA)
- NomaPhone/browser "$0.03/min" → [[rate:US:landline]] (5x); hardcoded totals ($0.90, "$21-74 savings", "95-98%") reworded
- "Sign up for browser calling service" setup → NomaPhone steps (no account, $5/$10/$20 credit)
- added 30-minute call cap note in hold-time section
- waitlist CTA → app CTA
- updatedDate set
- doubts: Wells Fargo "Headquarters: +1-866-249-3302" is itself a toll-free number (not a NomaPhone claim, left as is); company international numbers not verified

### call-chase-bank-from-overseas
- NomaPhone "$0.03/min"/"three cents" → [[rate:US:landline]] (comparison table, hold-cost table, steps, timing section, CTA); hardcoded totals ($0.90/$1.20/$1.80) reworded
- added: NomaPhone can dial Chase's 1-800 number directly (toll-free supported)
- steps: NomaPhone.com → app.nomaphone.com; $5/$10/$20 credit, Apple Pay/Google Pay/card; no account
- added 30-minute call cap note (post's scenario is 40-min call)
- removed false "NomaPhone can receive SMS/2FA" claim; removed YadaPhone line implying NomaPhone supports SMS/2FA
- callback FAQ: NomaPhone can't receive callbacks
- "Reliable" quality claim in table → "Depends on connection"
- closing CTA rewritten to app CTA
- updatedDate set
- doubts: none

### call-irs-from-overseas-tax-season
- added: NomaPhone dials IRS 1-800 lines at the normal US rate; rate → [[rate:US:landline]], per-second billing; 30-min call cap note
- "no monthly subscription" → no subscription/no account, $5/$10/$20 credit, never expires, refundable
- SMS 2FA section: removed false "NomaPhone gives you a permanent US number that receives SMS"; replaced with honest advice + NomaPhone as voice fallback to call support
- closing "set up your NomaPhone number" → add credit + app CTA
- updatedDate set
- doubts: no slug in frontmatter (file-name based), left as is

### call-south-korea-from-abroad
- added real Korea rate via [[rate:KR:landline]] (same for mobile) in methods section, cost table and rate note (replacing "check the pricing page")
- added note that NomaPhone can't call emergency numbers (post lists police/fire numbers)
- closing link https://www.nomaphone.com → app CTA
- updatedDate set
- doubts: KR 1588/1345 short service numbers via NomaPhone not verified (not claimed in post)

### call-wells-fargo-from-abroad
- NomaPhone "$0.03"/"three cents" → [[rate:US:landline]] (comparison table, hold-time table, cost para, closing); hardcoded totals ($1.35/$1.80 etc.) → token multiplications / "pocket change"
- removed false SMS/2FA support claims (table pros, comparison para, 2FA section, closing); removed competitor cons ("No SMS/2FA support", "No call recording") that implied NomaPhone has those features
- added: NomaPhone dials Wells Fargo's 1-800 number (toll-free supported); quick-reference toll-free line updated
- added 30-min call cap (table cons, cost para, "(two calls)" in hold table)
- removed "210+ countries"; "reliable" claim removed
- closing CTA → app CTA
- updatedDate set
- doubts: YadaPhone/DialAnyone competitor prices left as is

### complete-guide-international-phone-calls-2026
- comparison table: NomaPhone US/UK/India rates → [[rate:US:landline]], [[rate:GB:landline]], [[rate:GB:mobile]], [[rate:IN:mobile]]; SMS/2FA "Yes" → "No (outgoing calls only)"; countries 210+ → [[countries]]
- NomaPhone paragraph rewritten: removed "focused on reliability" + SMS/2FA claims; honest angles (no app/account, per second, toll-free, refundable)
- 30-min cost rows $0.90 → 30 × [[rate:US:landline]] (2x); NomaPhone "High" quality → "Medium-High" (same as competitors)
- UK landline/mobile example → tokens; toll-free FAQ: added NomaPhone dials US/CA toll-free; receive-calls FAQ: removed NomaPhone SMS claim
- "Skype ... shut down in 2024" → May 2025 (factual; other posts say 2025)
- closing CTA → app link, rate token
- updatedDate set
- doubts: overview table "Browser-based calling $0.15 - $0.90" range left (consistent with current rate)

### google-fi-vs-esim-vs-voip
- NomaPhone "$0.03/min" → [[rate:US:landline]] (7x); hardcoded totals ($4.50, $0.90, $1.35) → token multiplication / "a few dollars" / "pocket change"
- removed "NomaPhone ... plus SMS receiving with a virtual US number"; added that NomaPhone is outgoing-only (VoIP intro, cost section, pros/cons, decision section)
- side-by-side table: NomaPhone SMS/2FA "Yes" → "No (calls only)"; combined stacks' SMS column made honest; "everything Fi does" claim softened
- removed "prioritizes reliability" claim; 45-min hold example → 30-min cap note
- closing CTA: 210+ → [[countries]], app link
- updatedDate set
- doubts: Google Fi/eSIM prices left as is

### how-to-call-india-from-usa-rates-methods-best-practices
- closing CTA: "crystal-clear calls at $0.08/minute to both landlines and mobiles" + waitlist → [[rate:IN:both]] + app CTA
- Method 4 (browser calling) typical rate widened to $0.08-0.15 and NomaPhone's real rate added via [[rate:IN:both]]
- updatedDate set
- doubts: the generic "browser calling $0.08/min" figures in scenarios/recommended setup/quick reference were left (generic market rate, not attributed to NomaPhone), but they're below NomaPhone's India landline rate (15¢); coordinator may want them softened. Post also says landlines are "usually cheaper" — opposite for NomaPhone India (landline 15¢ vs mobile 10¢); left as generic.

### international-calling-expats-requirements
- NomaPhone India "$0.08-0.09/min"/"$0.08/min" → [[rate:IN:both]]; hardcoded NomaPhone annual totals/savings in 4 cost blocks → minutes × token rates and "over 90%" (checked vs. current US/UK/IN rates)
- three-number system browser-calling price range widened to "a few cents to ~15 cents"
- toll-free problem: NomaPhone dials US/CA toll-free; long-hold tip: 30-min cap
- closing CTA: wrong UK "$0.03/min" → [[rate:GB:both]], India/US tokens, waitlist → app CTA
- updatedDate set
- doubts: the "virtual number in home country" advice is generic (third-party), left; bank/government numbers and "requirements" (e.g. "ICICI quarterly verification") are unverified claims not about NomaPhone, left as is

### international-calling-from-germany
- all NomaPhone rates → tokens: US [[rate:US:landline]], UK $0.03/$0.06 → [[rate:GB:landline]]/[[rate:GB:mobile]] (UK landline was wrong), India $0.08-0.09 → [[rate:IN:both]] (~14x)
- all hardcoded NomaPhone monthly/annual totals and € savings figures → token multiplications / percentage savings (checked vs current rates)
- removed NomaPhone virtual number prices ($2.19/mo USA, $1.90/mo UK) in 2 places → third-party providers, "NomaPhone doesn't offer numbers"
- US bank example: NomaPhone can dial the 1-800 number too
- closing waitlist CTA → app CTA
- updatedDate set
- doubts: carrier prices/coworking details left as is

### international-calling-from-mexico-complete-2025-guide
- browser-calling cost examples (old NomaPhone prices, Europe/UK understated) → NomaPhone tokens US/GB/ES/DE/IN + note that rates vary by country/number type; "call any number worldwide" removed
- scenario totals ($17.40, $11.50, $21.60) → token multiplications; Europe scenario honest about German mobile rate ([[rate:DE:mobile]])
- cost summary rows → token / rates page
- toll-free tip: NomaPhone dials US/CA toll-free
- absolute link nomaphone.com/blog/... → relative /blog/calling-banks-from-abroad-complete-guide-expats/
- "Based on thousands of expats' experience" → "what works for most expats"
- closing CTA: false "Europe for $0.05/minute", "works perfectly", waitlist → token + app CTA
- updatedDate set
- doubts: post has no heroImage (left)

### international-calling-from-uk-brexit-era-guide-2025
- browser-calling "typical rates" (£, matching old NomaPhone claims, EU/Poland understated) → NomaPhone USD tokens (US, FR, PL, IN) + note on variation; "calls any number" removed
- destination cost comparisons and 3 scenarios → tokens; hardcoded £ totals for browser calling removed (Poland scenario was £0.04/min vs real PL [[rate:PL:both]])
- "Brexit-proof ... anywhere else" → "any country your service covers"
- closing CTA: false £ prices + "works perfectly" + waitlist → USD tokens + app CTA
- updatedDate set
- doubts: carrier prices left; no heroImage in frontmatter (left)

### microsoft-teams-vs-browser-voip
- NomaPhone rates → tokens (US 5x, UK landline $0.05 → [[rate:GB:landline]], India mobile $0.05 → [[rate:IN:mobile]]); totals ($6.75, $0.90, "four times") reworded
- removed false SMS/2FA support (feature table, SMS section) and false "NomaPhone offers virtual US and Canada numbers" (FAQ)
- coverage: "NomaPhone ... cover 150+" / closing "210+" → [[countries]]
- "positions itself on call reliability" → honest angles
- heading "Call any phone number" → "Call real phone numbers" (claim was false for NomaPhone); added toll-free note
- closing CTA → app link
- updatedDate set
- doubts: YadaPhone/DialAnyone feature claims (SMS, numbers, countries) unverified, left as third-party claims

### pay-as-you-go-international-calling
- NomaPhone rates → tokens throughout; destination rate table rebuilt with tokens (old values wrong: UK landline, India landline/mobile, Mexico landline, Germany, Australia mobile); 30-min cost column dropped (hardcoded); Germany split into landline/mobile
- "landlines almost always cheaper" paragraph corrected (India exception, German mobile gap); Thailand "high-cost corridor for all VoIP providers" claim removed
- removed: SMS/2FA support (3x), "carrier-grade call quality"/reliability positioning, "210+ countries" → [[countries]], "create an account" step, "over 160 minutes" derived claim
- caller-ID FAQ: "With NomaPhone, yes ... real caller ID" → calls arrive from a NomaPhone caller ID, not your number
- call-drop FAQ: per-second billing + 30-min cap; added refundability, $5/$10/$20, Apple Pay/Google Pay/card, phone card code
- hardcoded totals ($1.20, $6.75, "under $7", "six times cheaper", "a penny cheaper") reworded
- closing CTA → app CTA
- updatedDate set
- doubts: competitor claims (YadaPhone recording, DialAnyone SMS/open source) left as third-party claims

### saved-500-year-international-calls-nomad
- NomaPhone "$0.03/min" → [[rate:US:landline]] (4x); kept "about $9 per month (at the time of writing)" since the post's $500 math depends on it (verified: 300 × 3¢)
- removed "carrier-grade reliability"/"focuses on call quality" claims and the invented "we've done client calls, bank calls, podcast recordings without issues"
- SMS section: NomaPhone is outgoing-only; FAQ: removed false "NomaPhone provides US virtual numbers with SMS/2FA"
- closing CTA: 210+ → [[countries]], app link
- updatedDate set
- doubts: whole post is a first-person "we/our team" nomad story by "The NomaPhone Team" (team members on AT&T, monthly bills of $92, coworking in Lisbon). It reads as a company-team testimonial that may be invented; left in place since it's about generic browser VoIP, not NomaPhone results, but coordinator should decide. No heroImage in frontmatter.

### t-mobile-international-vs-voip
- NomaPhone "$0.03/min" → [[rate:US:landline]] (3 tables, 4 paragraphs, FAQ, CTA); hardcoded totals ($4.50, $12, $1.35, $9, "$33", "88%") → token multiplications / reworded
- 45-min bank call row: added 30-min cap note
- toll-free: NomaPhone dials US/CA toll-free at normal US rate (stated explicitly)
- closing CTA → app CTA
- updatedDate set
- doubts: T-Mobile plan details left as is

### will-2fa-work-foreign-sim
- "The Fix" section rewritten: removed false NomaPhone virtual number / SMS 2FA / dashboard claims; kept general virtual-number advice with third-party options (Google Voice, number parking/porting, Hushed-type apps, eSIM with number) + caveat that banks may reject VoIP numbers + authenticator apps; stated plainly NomaPhone doesn't provide numbers or receive SMS
- calling section: "globally" → [[countries]] countries; added [[rate:US:landline]], toll-free, per-second; positioned NomaPhone as voice fallback when OTPs fail
- setup steps rewritten (no "get a virtual number through NomaPhone"); bottom line rewritten ("call any landline in the world" removed) + app CTA
- updatedDate set
- doubts: description still promises "how to set up a permanent virtual number for 2FA" — kept (generic, the post still covers it via third parties); no slug in frontmatter

<!-- from log-bulk-01 -->


### bank-fraud-alert-while-traveling
- NomaPhone US rate/totals → [[rate:US:landline]] (table, Option 1 list, closing)
- "1-800 number won't work from outside the US" nuanced: NomaPhone can dial US toll-free
- Option 1 now mentions prepaid credit + toll-free; removed "under 30 seconds"/"$0.90" claims
- closing CTA → https://app.nomaphone.com "Make a call"; updatedDate set
- doubts: T-Mobile row still says "200+ countries" (third-party claim about T-Mobile, left as is)

### call-australia-from-abroad
- NomaPhone AU rates were wrong ($0.05/$0.12) → [[rate:AU:landline]]/[[rate:AU:mobile]] (table, text, cheat sheet); "more than double/140%" → "about three times"
- removed "local caller ID" claim for browser calling (replaced with overseas number / callback advice)
- virtual-number paragraph: NomaPhone doesn't provide numbers / receive calls
- removed hardcoded $2.75 total; credit refundable mention; final CTA linked to app; updatedDate set
- doubts: none

### call-conference-lines-internationally
- added toll-free exception: NomaPhone dials US/CA toll-free (several spots: intro section, troubleshooting, quick reference)
- all $0.03/min + totals → [[rate:US:landline]] / [[rate:GB:landline]] with "N ×" form or qualitative savings
- "Get Virtual Number for Regular Calls" section ($2.19/mo NomaPhone number) rewritten as "Use Browser Calling for Regular Dial-Ins" (heading changed because it was false), keypad for access codes
- caller ID / "I'm calling from +[your number]" softened; virtual number = third-party provider
- waitlist CTA → app CTA; updatedDate set
- doubts: none

### call-italy-from-abroad
- NomaPhone $0.05/min → [[rate:IT:landline]]/[[rate:IT:mobile]]/[[rate:IT:both]]; totals reworded
- added 30-minute per-call cap (post promised 45-min / 2-hour holds); "reliability matters more" claim replaced with honest angles (no app/account, never expires, refundable)
- FAQ: removed "NomaPhone provides virtual numbers that receive calls and SMS"
- CTA → app; updatedDate set
- doubts: none

### call-us-banks-from-bali
- SMS/2FA section rewritten: NomaPhone doesn't receive SMS / provide numbers; advice = keep US SIM/eSIM, authenticator app, backup codes; NomaPhone = call the bank by voice
- removed "NomaPhone US number" steps (step 5, pre-trip checklist)
- rate → [[rate:US:landline]]; "$1 for 20 min" and "test call less than a cent" fixed; 800 numbers callable
- added closing app CTA; updatedDate set
- doubts: author is "NomaPhone Team" (others "The NomaPhone Team"); body has duplicate H1 + readingTime field — left

### calling-cards-vs-voip-vs-browser-calling
- NomaPhone paragraph rewritten: removed SMS/2FA claim, wrong rates ($0.05 UK, $0.05 India mobile) → tokens; added [[countries]], toll-free, refundable
- YadaPhone "doesn't support SMS" contrast removed
- comparison tables: NomaPhone rows → tokens, reordered India/UK rows (NomaPhone no longer implied cheaper); summary reworded honestly
- head-to-head: "SMS/2FA support: NomaPhone yes" row → "Receiving calls/SMS"; "Consistent quality" softened
- "210+ countries" closing → [[countries]] + app CTA; updatedDate set
- doubts: DialAnyone "210+ countries" left (competitor claim)

### credit-card-declined-abroad
- toll-free: NomaPhone can dial US toll-free
- table/hold-time scenarios → [[rate:US:landline]] multiples; added note on 30-min cap
- removed "reliable/connects without dropping" superiority claim; YadaPhone "No SMS/2FA" con → "Chromium browsers only"
- "$5 = over 160 minutes" → "well over two hours"; CTA → app; updatedDate set
- doubts: none

### google-voice-alternatives-non-us
- NomaPhone section rewritten: no SMS/2FA, no number, [[countries]] not 210+, rate token, no account, 30-min cap
- comparison table: SMS No, Virtual US number No, countries [[countries]], pricing row tokens
- "When price isn't the only factor", "How to choose", FAQ, bottom line, CTA all corrected (removed SMS/2FA + "carrier-grade audio" claims)
- updatedDate set
- doubts: competitor claims (DialAnyone SMS, YadaPhone) left as written

### how-to-call-us-banks-from-abroad-without-paying-40-in-roaming
- removed 4 waitlist/launch/Q1 2026/$10 credit/"300 early adopters" CTAs → app CTA / bookmark
- Method #1 rewritten (rate token, toll-free, 30-min cap, removed "not VoIP blocked")
- step-by-step: removed "connects in 2-3 seconds", rate emoji, "bank can't tell you're calling from abroad", call-history/export claim; costs → tokens
- "Receiving calls from your bank" section: removed NomaPhone virtual numbers $2.19/mo; NomaPhone outgoing only
- toll-free nuance; updatedDate set
- doubts: first-person founder story ("I'm a telecommunications engineer, 10 years at a global carrier", $47 Lisbon bill, "decided to build NomaPhone") under author "The NomaPhone Team" — left unchanged, needs owner confirmation. Post has no heroImage.

### international-calling-from-argentina
- all NomaPhone $0.03/$0.04 figures and annual totals → tokens / qualitative savings; Europe example tied to Spain ([[rate:ES:landline]])
- "Stable pricing/Always same price" → "priced in USD"
- waitlist CTA → app; updatedDate set
- doubts: none

### international-calling-from-greece
- NomaPhone US/UK rates + totals → tokens / qualitative; UK now [[rate:GB:both]]
- waitlist CTA → app; updatedDate set
- doubts: none

### international-calling-from-portugal
- NomaPhone rates (US, UK, Brazil was $0.08) → tokens; totals qualitative
- all NomaPhone-implied virtual-number prices ($2.19/$1.90, "professional caller ID", forwarding) → generic third-party provider + "NomaPhone doesn't provide numbers"
- "preferred by Lisbon's remote work community" removed; toll-free note
- waitlist CTA → app; updatedDate set
- doubts: none

### international-calling-from-vietnam
- NomaPhone US/AU/SG/ASEAN rates + all totals → tokens / qualitative (AU was $0.03-0.06, real 5¢/15¢)
- virtual number $2.19 → third-party
- waitlist CTA → app; updatedDate set
- doubts: none

### mobile-vs-landline-international-costs
- every NomaPhone rate card was wrong (UK, US, IN, AU, DE, FR, ES) → tokens; multipliers recomputed (UK ~1.5x, AU ~3x, DE >10x, FR ~7x, ES ~9x)
- all scenario totals → "N × [[rate:..]]" + qualitative savings
- virtual landline forwarding: third-party, not NomaPhone
- waitlist CTA → app; updatedDate set
- doubts: approximate multipliers are derived from current rates and will drift if rates.json changes; generic rate-card code block example ($0.03/$0.06) left (not attributed to NomaPhone)

### real-cost-staying-connected-digital-nomad
- table row: NomaPhone rate → token, removed "SMS/2FA, reliable"; YadaPhone con fixed
- profile tables: NomaPhone calling cells and totals made approximate (~$3.50, ~$25, ~$75)
- "NomaPhone focuses on reliability and includes SMS/2FA" rewritten
- CTA → app; updatedDate set
- doubts: profile totals kept as approximations (math verified against current US/UK rates)

### skype-alternative-for-international-calling
- SMS/2FA section rewritten (NomaPhone gives no number, no SMS); "NomaPhone checks all of these" fixed; bottom line no longer promises "a number that receives SMS"
- added [[countries]], toll-free, [[rate:US:landline]], prepaid/refund facts; app CTA; updatedDate set
- doubts: author "NomaPhone Team", duplicate H1, readingTime — left

### viber-out-review-2026
- comparison table: caller ID and SMS/2FA rows corrected for NomaPhone; setup time softened
- pricing row → 30 × [[rate:US:landline]]; YadaPhone "no SMS/2FA" notes → Chromium-only
- "210+ countries" CTA → [[countries]] + app link; updatedDate set
- doubts: none

<!-- from log-bulk-02 -->


### best-international-calling-services-2026
- comparison table: NomaPhone US rate → token, SMS/2FA Yes→No, countries 210+→[[countries]], virtual number Yes→No
- NomaPhone section rewritten: true product facts (outgoing only, $5/$10/$20, refundable, toll-free), key rates → tokens (US/GB/IN/MX), pros/cons fixed (removed SMS/2FA, 210+, "30 seconds"; added outgoing-only, 61 countries)
- corridor table + monthly cost row → tokens; "Best for expats needing bank access" rewritten (NomaPhone doesn't receive SMS; positioned as voice fallback to toll-free lines); nomads section and bottom line de-SMSed
- final CTA → app.nomaphone.com, updatedDate set
- doubts: intro "We tested all of these" is an unverifiable first-person claim — left as is

### call-bank-of-america-from-abroad
- all NomaPhone $0.03 / $0.90 / $1.35 / $1.80 → tokens or "about a dollar"; added 30-min-per-call cap note (hold times 30-45 min)
- removed "NomaPhone supports SMS / receive 2FA codes"; replaced with outgoing-only + call-the-bank angle
- YadaPhone con "No SMS/2FA" → "Chromium only" (avoid implying NomaPhone has it)
- closing CTA → app link, updatedDate set
- doubts: none

### call-government-offices-from-abroad
- NomaPhone cost & scenario examples → tokens; added 30-min cap and "can't receive callbacks" cons; removed "set up account beforehand"
- waitlist CTA → app CTA; updatedDate set
- third-party virtual-number advice kept (generic)
- doubts: none

### call-landlines-internationally-after-skype
- NomaPhone US/UK/India rates → tokens in prose and 3 tables (India landline now 15¢, more than calling cards — table left in place, honest)
- monthly/hold totals → token-based wording; caller-ID FAQ: added NomaPhone shows a NomaPhone caller ID; coverage FAQ mentions [[countries]] + /rates/
- "200+ countries" in bottom line generalized; CTA (nomaphone.com, 210+, "30 seconds") → app CTA; updatedDate set
- doubts: none

### call-usa-from-costa-rica
- (post is about calling FROM Costa Rica, fine) NomaPhone rates/totals → tokens; removed "recipient sees a real phone number on caller ID"; removed NomaPhone SMS/2FA claims (2 places), bank-verification paragraph rewritten
- added 30-min cap note for long SSA holds; waitlist CTA → app CTA; updatedDate set
- doubts: none

### calling-landlines-vs-mobile-numbers-cost
- all NomaPhone per-country rates (UK, US, IN, AU, DE, FR) → tokens; multipliers corrected (DE/FR mobile far above landline on NomaPhone)
- all 7 scenario calculations rewritten as minutes × token (no hardcoded totals); quick-reference multipliers → tokens
- waitlist CTA → app CTA; updatedDate set
- doubts: generic "rate card" code-block example ($0.03/$0.06) left as illustrative third-party example

### digital-nomad-tax-season-phone-calls
- NomaPhone totals → tokens; removed "US virtual number through a browser calling service" (CPA callback + FAQ) → third-party (Google Voice) + NomaPhone outgoing-only
- SSA toll-free paragraph: "routes through US infrastructure / originates from a US number" → NomaPhone calls 800/888/.../833 at US rate
- recording tip: noted NomaPhone doesn't record; CTA (nomaphone.com, "pick up from your laptop" = implied inbound) → app CTA; updatedDate set
- doubts: none

### google-voice-not-working-abroad
- comparison table row fixed (token, [[countries]], SMS/2FA No); NomaPhone section rewritten (no SMS/2FA, no number, no "optimized routing" claim)
- 2FA-migration and "tell your contacts" advice made honest; FAQ heading "Is three cents per minute worth it" → "Is a few cents per minute worth it" (hardcoded price in heading)
- closing CTA → app link; updatedDate set
- doubts: changed an H3 heading (FAQ) because it hardcoded the price

### how-to-call-us-toll-free-numbers-from-anywhere
- made explicit: NomaPhone calls US/Canada toll-free 800/888/877/866/855/844/833 at [[rate:US:landline]] (methods list, cost, "Which services support this")
- "Supports toll-free numbers (when we launch)" → live, plus 30-min cap and premium-rate block note
- totals → token/generic; waitlist CTA → app CTA; updatedDate set
- doubts: none

### international-calling-from-bali
- removed "recipient sees a real phone number on caller ID"; NomaPhone table rows (US/UK/AU) → tokens; monthly range recomputed as token range (old $4.80-14.40 was wrong vs real AU mobile 15¢)
- removed SMS/2FA differentiator and "carrier-grade quality" claim; CTA ("any phone number in the world") → [[countries]] + app link; updatedDate set
- doubts: none

### international-calling-from-indonesia-bali
- generic browser-calling rate lines → NomaPhone tokens (US/GB/AU, TH, VN, SG, MY); "200+ countries" + waitlist CTA → app CTA; updatedDate set
- doubts: generic scenario figures ("600 min at $0.05/min", "$0.90-1.50 per 30-min call") left as generic browser-calling estimates

### international-calling-from-south-africa
- (post is about calling FROM South Africa; fine) every NomaPhone cost block → tokens with rounded "roughly" savings; quick reference → tokens
- waitlist CTA → app CTA; updatedDate set
- doubts: none

### international-calling-rates-2025-by-destination
- intro now explains ranges = market rates and links /rates/, mentions [[countries]]; added a "NomaPhone: [[rate:XX:both]]" line to every country section (36); Costa Rica, Saudi Arabia, Kenya, Pacific Islands marked "not covered yet"
- UK/US NomaPhone lines → tokens; comparison table "Browser" column → "NomaPhone" with tokens + honest footnote (not cheapest for China/Philippines)
- scenarios rewritten with tokens (Mexico 60 min noted as two calls, 30-min cap); "$2.19/mo US virtual number" removed → third-party guidance + NomaPhone doesn't provide numbers; credit-bonus tip generalized (NomaPhone no bonuses)
- waitlist/210+ CTA → app CTA; updatedDate set
- doubts: title still says 2025 (left per rules)

### nomad-calling-problem-nobody-talks-about
- NomaPhone rate/totals → tokens; "call any number in any country" generalized; cons mention NomaPhone outgoing only; step 1 "create an account" → NomaPhone needs none; toll-free note added
- closing ("under 30 seconds") → app CTA; updatedDate set
- doubts: none

### skype-credits-gone-5-alternatives
- NomaPhone rates → tokens (US/GB/IN/DE) + /rates/ link; removed SMS/2FA, "pre-launch/waitlist", "Built by a telecom engineer with 10+ years of experience"
- comparison table fixed (SMS No, [[countries]], virtual numbers "Coming soon"→No); FAQ: removed NomaPhone virtual number / caller-ID-callback / inbound claims; "Pick NomaPhone if" and bottom line rewritten
- closing CTA → app link; updatedDate set
- doubts: removed founder bio claim (see report)

### receive-sms-otp-abroad-no-roaming
- removed "Get a virtual number with NomaPhone" and "NomaPhone routes your bank's verification call to your browser / caller ID shows US number" (false)
- kept third-party advice, added named providers + bank-rejects-VoIP caveat; new section: NomaPhone as voice fallback to call bank/carrier incl. US toll-free at [[rate:US:landline]]
- setup steps rewritten; bottom line + app CTA; updatedDate set
- doubts: description ("use virtual numbers to receive 2FA") left — not a NomaPhone claim

### virtual-number-for-digital-nomads-guide
- removed implications that NomaPhone provides numbers/porting; added third-party providers, VoIP-rejection caveat, explicit "NomaPhone doesn't provide numbers / receive calls or SMS"
- browser-calling section reframed as the outgoing complement ([[countries]], toll-free at token); bottom line + app CTA; updatedDate set
- doubts: none

<!-- from log-bulk-03 -->
### best-phone-plans-digital-nomads-2026
- NomaPhone rows in both comparison tables: $0.03/min → [[rate:US:landline]], 210+ → [[countries]], SMS/2FA and "Includes Phone Number" → No
- 30-min cost comparison reworded (no hardcoded NomaPhone total); monthly math row → "75 min x [[rate:US:landline]]", total "About $10/month"
- FAQ "receive calls": removed claim NomaPhone provides numbers; NomaPhone = outgoing only, suggest pairing with a number source
- FAQ "leaving the US": added outgoing-only caveat
- closing "nomaphone.com" CTA → single app CTA
- updatedDate set
- doubts: "About $10/month" total in math table is approximate (depends on US rate staying ~3¢)

### call-brazil-from-usa
- comparison table NomaPhone cost "check nomaphone.com" → [[rate:BR]], billed per second
- browser VoIP section: added [[rate:BR:both]] instead of "check nomaphone.com"
- "A Note on Rates": nomaphone.com link → [[rate:BR:both]] + /rates/ link
- closing CTA → single app CTA
- updatedDate set
- doubts: none

### call-india-from-usa-browser
- "few cents per minute" → [[rate:IN:landline]] / [[rate:IN:mobile]]; false "15-min call well under $1" (landline is 15¢/min) reworded to "small fraction"
- "NomaPhone account" → no account / prepaid credit $5/$10/$20
- SMS 2FA section rewritten: NomaPhone doesn't provide numbers or receive SMS; keep Indian SIM active; NomaPhone as voice fallback to call the bank
- "Pair it with a virtual Indian number" → "active Indian SIM (NomaPhone doesn't provide numbers)"
- added short app CTA at end
- updatedDate set
- doubts: description says "for pennies" (IN landline 15¢) — left as is; post suggests calling Indian bank helplines, many are 1800 toll-free not reachable from abroad (not addressed)

### call-philippines-from-abroad
- NomaPhone table cell "Varies" → 10 × [[rate:PH:mobile]]; "check nomaphone.com" (2x) → [[rate:PH:both]] (+ /rates/ link)
- removed "built for reliability / calls that don't drop" claims (2x); honest framing: not cheapest for PH, angles = no app/account, per-second, never expires, refundable
- 210+ → [[countries]]; credit amounts $5/$10/$20; added 30-min per-call cap note
- YadaPhone "lacks SMS/2FA" clause removed (implied NomaPhone has it); competitor claims hedged "advertises"
- closing CTA → single app CTA (removed "under 30 seconds")
- updatedDate set
- doubts: none

### call-usa-from-georgia
- confirmed: post is about calling the USA FROM Georgia (US supported) — kept
- NomaPhone $0.03/min / $0.90 / $1.35 / $5.10 / $3.60 → [[rate:US:landline]] or "N × [[rate:US:landline]]" in all tables, quick ref and stack (8x); totals in prose made generic
- removed SMS/2FA claims (table note, honest-comparison bullet, SMS problem section, quick ref, closing CTA); SMS section rewritten with third-party options + NomaPhone voice fallback
- removed "NomaPhone calls show a US number" caller-ID claim; rewrote bank-recognition solution
- removed "carrier-grade call quality", "thirty seconds to dial tone"; added honest angles (no account, US toll-free, per-second, refundable) + outgoing-only statement + 30-min cap note
- competitor prices hedged as "advertises"
- waitlist CTA → app CTA
- updatedDate set
- doubts: none

### calling-us-businesses-from-abroad
- "Exceptions" section: added that NomaPhone calls US/CA toll-free at [[rate:US:landline]]; quick-ref toll-free bullet adjusted
- browser calling $0.03/min (5x) → token or "a few cents/min"; hardcoded totals ($0.90, $1.35, $1.80 x2) → "about a dollar"/"a couple of dollars"
- "Setup: sign up once, add credits" → no account, prepaid $5/$10/$20; added 30-min cap note
- virtual-number section: clarified it needs a third-party number provider; NomaPhone doesn't provide numbers or show your number
- waitlist CTA → app CTA
- updatedDate set
- doubts: approximate totals ("about a dollar") rely on US rate ~3¢; scenario costs "$2-3"/"$2-4" for generic browser calling left as is

### free-international-calling-truth-vs-trap
- closing CTA: "three cents per minute" → [[rate:US:landline]], nomaphone.com → app.nomaphone.com, removed "built for digital nomads"/"no connection fees" wording
- updatedDate NOT set (only CTA/token change, no substantive fact change)
- doubts: body has a generic example "three cents per minute ... 30-minute hold costs $0.90" not attributed to NomaPhone — left as is (math matches current US rate)

### google-voice-vs-browser-calling-comparison
- "browser calling" price blocks now explicitly NomaPhone tokens: US [[rate:US:landline]], UK [[rate:GB:*]], India [[rate:IN:both]] (2x + decision matrix [[rate:IN]]), Mexico [[rate:MX:both]]; removed hardcoded 30-min/100-min totals (old India 8-9¢ was wrong, real is 10-15¢)
- setup steps: no account needed with NomaPhone
- features: added NomaPhone = outgoing only (no number/SMS/voicemail/recording)
- removed "team features / shared credits" claims for browser calling (scenario 4, choose-if list, decision matrix); removed "better quality guarantee" and "reliability over cheapness → more consistent quality"
- waitlist CTA → app CTA
- updatedDate set
- doubts: generic quality/reliability claims about browser calling as a category left (not NomaPhone-specific); "30-minute call to the US costs under $1" left (true at current rate)

### international-call-forwarding-setup
- removed NomaPhone as virtual number/forwarding provider (provider list, setup step 1, quick-ref recommended providers); added explicit note NomaPhone can't give numbers/receive/forward, fits the voicemail+callback approach
- invented NomaPhone number prices ($2.19, $1.90, £1.60) → generic "$2-4/month" or illustrative $3/month; recomputed example totals/savings
- Skype provider entries: noted Skype shut down May 2025 (consistent with other posts)
- voicemail+callback: NomaPhone as the callback tool
- waitlist/virtual-number CTA → honest app CTA
- third-party forwarding advice kept
- updatedDate set
- doubts: carrier forwarding costs/third-party prices untouched

### international-calling-from-chiang-mai
- NomaPhone US $0.03/$0.90 → [[rate:US:landline]] (table, rates section, quick ref); Thai $0.19 → [[rate:TH]]
- removed SMS/2FA and "reliability" claims (table, comparison paragraph); added outgoing-only statement and honest angles
- "virtual US number" tip: removed NomaPhone as number provider
- "$5 starting", "connected in 30 seconds" → $5/$10/$20, no app/account
- closing CTA: removed 210+, "thousands of digital nomads trust it" → single app CTA
- updatedDate set
- doubts: none

### international-calling-from-lisbon
- NomaPhone US $0.03/$0.90 → [[rate:US:landline]] (table + prose); UK landline was wrong ($0.05, real 4¢) → [[rate:GB:landline]]/[[rate:GB:mobile]] table rows
- Brazil: added NomaPhone [[rate:BR:both]]
- FAQ: clarified NomaPhone doesn't offer virtual numbers
- waitlist CTA with "200+ countries" → app CTA with tokens
- updatedDate set
- doubts: none

### international-calling-from-spain
- NomaPhone rates → tokens everywhere (US 5x, UK 3 blocks — old 3¢ landline was wrong, real 4¢; MX 3x — old 3/9¢ wrong; CO, AR added with :both — old CO 8¢/AR 9¢ wrong, AR mobile is 69¢, added note)
- hardcoded NomaPhone monthly/annual totals → approximate wording; light-user math tokenised; regular/heavy generic averages hedged "around"
- US toll-free: added that NomaPhone can dial US/CA toll-free (Chase example, toll-free problem section)
- invented NomaPhone virtual number prices ($2.19/$1.90, 2x) → generic third-party "$2-4/month", NomaPhone doesn't provide numbers
- waitlist CTA → app CTA
- updatedDate set
- doubts: generic "~$0.04/min avg" totals for regular/heavy users left as estimates

### international-calling-remote-teams-guide
- Browser-based calling section rewritten: removed NomaPhone shared team wallet/contacts, virtual numbers for caller ID, call history exports; added real facts (no accounts, prepaid code works like cash so a manager can hand it out, per-second, never expires) + explicit "what you don't get"; pricing line with [[rate:US:landline]]/[[rate:GB:landline]] + /rates/ link
- feature table browser column: team features, virtual numbers ($1.90-4), call recording ("coming"), PWA → honest values
- rollout steps de-NomaPhone'd (no "team wallet")
- "Real Team Examples" heading → "Example Team Setups" + illustrative disclaimer (invented cases); removed "after talking to dozens of founders"
- waitlist CTA ("shared team features, virtual numbers in 40+ countries") → honest app CTA
- updatedDate set
- doubts: renamed one H2 ("Real Team Examples") because "real" was false; generic per-minute cost examples ($6-10 per 200 min) kept

### nomaphone-vs-dialanyone
- NomaPhone column of feature table fixed: [[countries]] (was 210+), SMS/2FA No (was Yes), virtual numbers No (was US/Canada), receive calls No; added rows US toll-free (Yes), refund (Yes), account required (No); removed "~30 seconds to first call"
- per-minute table NomaPhone rates → tokens (old UK landline 5¢, UK mobile 12¢, IN mobile 5¢, MX 5¢, DE 5¢, AU 5/12¢ were all wrong); Germany split into landline/mobile; added note some NomaPhone mobile rates are high; /rates/ link
- 30-min and monthly tables + "Real cost difference" section: hardcoded NomaPhone totals ($0.90, $6.75, $5.62, $67, $15) → tokens / approximate wording
- "SMS and 2FA: tie" (2x) → DialAnyone advantage, NomaPhone doesn't receive SMS; voice fallback angle
- "Quality Focus" section (reliability, "stays connected through 45-min hold" — false given 30-min cap) replaced by "US Toll-Free Numbers" section; H3 renamed
- "calls that matter / doesn't drop" and "nomad-focused support" bullets → toll-free and no-account bullets; added "need to receive calls or SMS → DialAnyone" bullet
- FAQ: removed "API on the roadmap" (unverifiable) → "No"; toll-free FAQ no longer claims DialAnyone supports it (hedged); quality FAQ no longer asserts DialAnyone infra/users
- all DialAnyone claims hedged ("advertised", "according to its website at the time of writing", "check their terms"); table column header "DialAnyone (as advertised)"
- closing CTA → app CTA
- updatedDate set
- doubts: did NOT re-verify DialAnyone features/prices online (all hedged); description "DialAnyone is 6x cheaper than NomaPhone" kept (true at current 3¢ vs advertised 0.5¢); "Account required: Yes" for DialAnyone inferred from original post's "account setup" wording

### remote-work-phone-setup-international
- removed NomaPhone as virtual number provider (Number 2 example, scenarios A/B/C, 2FA tier 2) → generic "virtual number provider / Google Voice"; invented prices $2.19/$1.90/$3 → "$2-4/month"; recomputed examples
- NomaPhone browser calling $0.03 → [[rate:US:landline]]; "browser/app", "works worldwide" → browser, no account, outgoing only
- team section: removed team wallet/transparent tracking → no team accounts, shareable prepaid code
- checklist: no account needed
- waitlist CTA → app CTA (NomaPhone = outbound layer only)
- updatedDate set
- doubts: none

### skype-discontinued-what-it-means-for-international-callers
- waitlist CTA ("$0.03/minute", "when we launch") → app CTA with [[countries]]
- updatedDate NOT set (CTA-only change)
- doubts: NOT NomaPhone-related but likely false: post dates Skype's shutdown to July 1, 2024 (and description says "2024"), while Skype actually closed May 5, 2025 — other posts (free-international-calling-truth-vs-trap, call-forwarding) say May 2025. Also "based on user data" usage percentages look invented. Left untouched (out of scope of fact-fix brief), flag for coordinator.

### voip-quality-issues-fix
- waitlist CTA with invented tech claims ("WebRTC with automatic quality optimization", "falls back gracefully") → plain app CTA
- body is generic troubleshooting, no NomaPhone claims
- updatedDate NOT set (CTA-only change)
- doubts: generic "% of problems" breakdown in Bottom Line looks invented but isn't about NomaPhone; left


### skype-discontinued-what-it-means-for-international-callers (coordinator follow-up)
- Fixed false shutdown timeline (said June/July 2024; Skype announced retirement Feb 2025, shut down May 5, 2025, users moved to Teams Free); description updated accordingly
- Removed invented "based on user data" percentages (user groups, migration shares)
- Skype Credit FAQ rewritten (hedged: limited-time access via web portal/Teams Free)
- updatedDate set
- doubts: none

<!-- from log-bulk-04 -->


### browser-calling-vs-voip-apps
- "call any number internationally" → [[countries]] countries, prepaid/per-second wording
- SMS 2FA section rewritten: NomaPhone doesn't give numbers or receive SMS; positioned as voice fallback to call bank/carrier (incl. US toll-free)
- comparison table: SMS/OTP receipt → No; added "Your own phone number: No" and "Account required: No"; dropped invented "Setup time under 2 minutes"
- "permanent number of your own" claim reworded; final CTA rewritten (removed "get a virtual number / receive SMS") → app CTA
- updatedDate set
- doubts: none

### call-canada-from-abroad
- NomaPhone $0.03 rates → [[rate:CA:landline]] / [[rate:US:landline]] (6x), 30-min table total → "30 × token"
- toll-free sections (Where they differ, banks, FAQ): added that NomaPhone can dial US/CA toll-free at normal rate (hedged: some companies restrict by region)
- "45-minute hold costs $1.35" → no hardcoded total + 30-min call cap note; added "Very long calls" item; emergency: NomaPhone can't call emergency numbers
- quick-reference table "Browser VoIP ($0.03/min)" → "Browser VoIP"
- FAQ cheapest: competitor prices hedged "at the time of writing"; removed "focuses on call quality and reliability" → honest angles
- final CTA rewritten (removed "connected in about 30 seconds") → app CTA; updatedDate set
- doubts: none

### call-international-customer-service
- 16x "Cost: $0.03/min" → per-country tokens (US, GB landline for UK banks/BA, DE landline Lufthansa, FR landline Air France)
- "Toll-free (doesn't work)" → "(doesn't work from a foreign phone)"; added paragraph: NomaPhone dials US/CA toll-free at normal US rate
- all hardcoded NomaPhone totals (hold comparison, scenarios, annual) → "N × [[rate:US:landline]]" / generic savings; added 30-min cap notes (45-min scenarios)
- premium section: NomaPhone blocks premium-rate numbers; callback section: outgoing-only services can't receive callbacks
- waitlist CTA → app CTA; updatedDate set
- doubts: UK 0344/0345 non-geographic numbers mapped to [[rate:GB:landline]] and French 09 number to [[rate:FR:landline]] — assumed billed as landline. Malformed heading "##Callback Options by Company" left untouched.

### call-quality-comparison-browser-app-carrier
- invented testing ("over 100 test calls from five countries") reframed as assessment of typical experience; description "Real testing results" → "Typical results"
- "create account" setup → NomaPhone needs no account
- hardcoded NomaPhone-derived costs → tokens/generic; 60-min scenarios note 30-min cap
- remote team standup scenario: browser services don't host group calls (was "$0.45 per person")
- waitlist CTA ("carrier-like quality") → app CTA; updatedDate set
- doubts: generic codec/latency/packet-loss "measurements" for browser calling kept as generic tech claims (not NomaPhone-specific); quality scores kept as editorial opinion

### call-usa-from-uk
- NomaPhone $0.03 / $0.90 / "160 minutes for $5" / "$2.70 month" → tokens or "N × token"
- competitor prices hedged ("advertised", "at the time of writing"); removed "focuses on call quality and reliability"
- feature table NomaPhone column fixed: SMS/2FA No, Virtual US numbers No, added Account required No; credit refundable; table note re competitor info
- "pick NomaPhone for SMS/2FA" → removed; honest positioning
- caller ID FAQ rewritten: no US caller ID promise, can't call back; "receive calls" FAQ: NomaPhone doesn't provide numbers
- final CTA → app.nomaphone.com; updatedDate set
- doubts: competitor account requirement (YadaPhone/DialAnyone "Yes") in feature table is my assumption from their sign-up flows — hedged under "published information" note

### cheapest-way-call-uk-landline-from-mexico
- added NomaPhone UK rates [[rate:GB:landline]] / [[rate:GB:mobile]]; "NomaPhone account" → no account, $5/$10/$20 credit
- SMS 2FA section rewritten: NomaPhone can't receive SMS; third-party options (cheap UK PAYG SIM, app-based auth, number-keeping services) + NomaPhone as voice fallback to call bank/HMRC
- Skype section: Skype shut down May 2025 (post said it "still offers" rates) — rewritten, heading kept
- bottom line "NomaPhone covers both" → calls only; app CTA; updatedDate set
- doubts: Skype fix is a non-NomaPhone factual fix; HMRC 0300 numbers not specifically claimed callable

### google-fi-international-calling-review
- US/UK/India comparison tables: NomaPhone rates → tokens (old UK 5¢/12¢ and India 8¢/5¢ were wrong); YadaPhone hedged "~"/"advertised"; removed YadaPhone "no SMS/2FA" note; added honest note NomaPhone isn't cheapest to India
- monthly table NomaPhone row → "225 × token"
- "200+ countries" mentions are Google Fi's — kept
- CTA → app CTA; updatedDate set
- doubts: none

### how-browser-based-calling-works-webrtc-explained
- generic WebRTC content kept (no NomaPhone infrastructure specifics found in body)
- final CTA: removed "crystal-clear", "$0.03/minute", waitlist → app CTA with [[countries]]; updatedDate set
- doubts: none

### international-calling-costs-what-you-actually-pay-2025
- "Honest NomaPhone Pricing Breakdown" rewritten: removed invented wholesale costs and markup percentages (~114%, ~88-94%, "Stripe fees 3%"); now tokens for US/GB/IN, link to /rates/, how you pay (prepaid $5/$10/$20, code, per-second, never expires, refundable), honest note on destinations where NomaPhone is pricier
- CTA "$0.08/minute to India" (wrong) → [[rate:IN]]; waitlist → app CTA; updatedDate set
- doubts: generic industry wholesale rates and "Cheap to call: China (landlines)" kept as third-party/industry claims (NomaPhone China is 59¢ — not claimed). Removed "no connection fees" claim for NomaPhone since brief doesn't state it explicitly.

### international-calling-from-colombia
- all NomaPhone $ rates/totals (US, UK, Spain, Mexico, scenarios, cost examples, quick ref) → tokens or "N × token", savings made generic
- Latin America: Venezuela flagged as not covered by NomaPhone; added AR/CL tokens
- "Virtual numbers USA $2.19/month, UK $1.90/month" (2x) → third-party providers, NomaPhone doesn't provide numbers
- waitlist CTA → app CTA; updatedDate set
- doubts: none

### international-calling-from-medellin
- NomaPhone rates/totals → tokens (rate table now landline/mobile split incl. Germany mobile 69¢, old table said Germany $0.05)
- removed "call any phone number worldwide"; competitor prices hedged
- toll-free tip: NomaPhone can dial US/CA toll-free
- bank callback bullet: outgoing-only services can't receive callbacks; 30-min cap note
- 2FA: removed "NomaPhone supports receiving SMS and 2FA" → voice fallback; FAQ virtual numbers: NomaPhone doesn't offer
- CTA → app CTA; updatedDate set
- doubts: none

### international-calling-from-turkey
- NomaPhone $0.03 totals → tokens/generic; Europe rates → GB/DE tokens with note mobile rates vary
- remote team "daily standup" → one-to-one call note (group calls belong on a meeting tool)
- waitlist CTA → app CTA; updatedDate set
- doubts: none

### maintain-us-phone-number-abroad
- third-party advice untouched; added short section "When You Need to Call Your Bank or Carrier": NomaPhone as voice fallback incl. US toll-free, explicit that it doesn't provide/keep/port numbers or receive SMS
- Mistake 5 solution: save support numbers + a way to call them
- waitlist CTA ("maintaining your US identity", $0.03) → app CTA; updatedDate set
- doubts: post contradicts itself on Google Voice porting out (line ~74 "can't port", ~186 odd phrasing) — non-NomaPhone, left as is

### nomaphone-vs-yadaphone
- description: removed "210+ countries" (kept SMS/2FA keyword)
- feature table NomaPhone column: countries [[countries]], SMS/2FA No, virtual numbers No, free trial (was "Waitlist Q2 2026") → no trial/$5 refundable; added account required, toll-free rows
- removed "Where NomaPhone wins: SMS/2FA" and "More country coverage" (false); YadaPhone now wins on coverage; NomaPhone wins on no account, any browser, US toll-free, refundable credit/per-second
- pricing tables → tokens, YadaPhone hedged "~", honest note NomaPhone pricier to India/German mobiles
- "Hidden Cost of No SMS/2FA" (heading kept) rewritten: neither receives SMS; NomaPhone as voice fallback to Chase toll-free; 30-min cap; link to /blog/maintain-us-phone-number-abroad/
- who-should-use / use-both / bottom line / CTA rewritten; competitor claims hedged "as advertised at the time of writing"; updatedDate set
- doubts: YadaPhone "Account required: Yes" and "Connection fees: None" (both columns) kept/assumed; NomaPhone "Connection fees: None" not explicitly in brief (inferred from per-second billing) — please confirm

### roaming-charges-explained-why-still-expensive-2025
- "210+ countries" are Verizon/T-Mobile claims — kept; generic browser-calling ranges kept
- waitlist CTA ($0.03) → app CTA with tokens; updatedDate set
- doubts: none

### stay-connected-southeast-asia-nomad
- NomaPhone Thailand/US rates → tokens, $0.90 → "30 × token"
- comparison table: NomaPhone "SMS/2FA" removed → no SMS receiving con; YadaPhone "no SMS/2FA" con replaced (hedged); Skype row → discontinued May 2025 (post said "winding down")
- removed "supports SMS and 2FA verification" claim; softened "works without VPN in every SEA country" / VoIP-blocking claim
- CTA → app CTA; updatedDate set
- doubts: none

### whatsapp-vs-traditional-calling-when-each-makes-sense
- absolute link https://nomaphone.com/blog/7-ways-... → /blog/7-ways-make-international-calls-without-apps/
- "Do I need my number to show?" → browser services like NomaPhone don't display your number
- waitlist CTA ($0.03) → app CTA; updatedDate set
- generic browser-calling price ranges kept
- doubts: none
