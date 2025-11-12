# NomaPhone - Product Definition Document

**Documento di riferimento per definizione prodotto, features e funzionamento**

---

## ELEVATOR PITCH

**NomaPhone ti permette di chiamare qualsiasi numero nel mondo direttamente dal browser. Nessuna app, nessun contratto, paghi solo quello che usi.**

---

## COS'È NOMAPHONE

NomaPhone è un servizio di chiamate internazionali browser-based per digital nomads, expat e remote team che devono chiamare numeri tradizionali senza app, roaming costoso o contratti.

### Cosa risolve
- Chiamate a numeri landline/mobile quando WhatsApp/FaceTime non sono opzioni
- Roaming internazionale costoso
- Necessità di chiamare uffici, banche, PA, servizi business
- Complessità di app VoIP tradizionali o contratti carrier

---

## FEATURE SET COMPLETO (al lancio)

### CORE CALLING
1. Browser calling WebRTC (desktop + mobile)
2. Pay-per-use credits (packages: $10/$25/$50/$100)
3. 210+ paesi coverage (landline + mobile)
4. Fast onboarding (email + Stripe)
5. Call history & logs
6. Rate transparency (mostra costo/min prima di chiamare)
7. Balance alerts & auto-reload (optional)
8. Caller ID display

### SMS/2FA
9. Send SMS internazionali
10. Receive SMS (per 2FA/OTP)
11. SMS inbox/history

### VIRTUAL NUMBERS
12. Purchase virtual numbers (USA, UK, EU, India, altri paesi top)
13. Receive calls su virtual number
14. Voicemail
15. Call forwarding
16. Multiple numbers per account
17. Pricing: variabile per paese ($1.90-4.09/mese)

### BUSINESS/TEAM
18. Shared team wallet
19. User roles (admin/member/owner)
20. Team call logs
21. Export reports (CSV)
22. Cost allocation per user/project
23. Caller ID personalizzabile (per team)

### PAYMENT & ACCOUNT
24. Stripe payment (cards only)
25. Invoice/receipt automatic
26. Credit packages no expiration

### UX/TECHNICAL
27. PWA (installabile mobile)
28. Mobile browser optimized
29. Desktop notifications
30. Contact book (rubrica personale e team)

---

## COSA NON FA NOMAPHONE (Boundaries)

### NON è un servizio di:

1. **Video chiamate** 
   - Solo audio (no Zoom competitor)

2. **Messaging app** 
   - Non compete con WhatsApp/Telegram per chat
   - Ha SMS ma solo per necessità (2FA, business)
   - Non è una piattaforma conversazione

3. **VoIP-to-VoIP gratis** 
   - Non puoi chiamare gratis altri utenti NomaPhone
   - Focus è chiamare PSTN (numeri tradizionali)
   - Non costruiamo network effect tipo Skype

4. **Enterprise PBX** 
   - Non è sistema telefonico aziendale completo
   - No IVR (menu vocali automatici)
   - No call center features
   - No CRM integration (almeno inizialmente)
   - Target: small teams (2-20 persone), non enterprise (100+)

5. **Telefono principale sostitutivo** 
   - Non sostituisce il tuo numero mobile
   - È complementare per chiamate internazionali
   - Non è carrier/operatore telefonico

6. **Chiamate d'emergenza** 
   - No 911/112/999
   - Disclaimer chiaro: non usare per emergenze

7. **Servizio gratuito/freemium** 
   - Non c'è piano gratis
   - Pay-per-use da subito
   - No "primi 100 minuti gratis" unsustainable

### Limitazioni tecniche consapevoli:

8. **No offline** 
   - Richiede connessione Internet (ovvio per WebRTC)

9. **No landline traditional quality guarantee** 
   - Qualità dipende da Internet utente
   - Siamo onesti su questo
   - Refund policy se qualità inaccettabile

10. **No porting numero esistente** 
    - Non puoi portare tuo numero mobile su NomaPhone
    - Virtual numbers sono nuovi numeri

### Mercati esclusi (almeno inizialmente):

11. **No focus su price-sensitive markets** 
    - Non competiamo su "cheapest rates"
    - Non targetizziamo migranti low-income
    - Focus su quality/convenience

12. **No wholesale/reseller** 
    - Non vendiamo white-label o API per resell
    - B2C e small B2B only

---

## USER FLOW A: Individual User (Prima Chiamata)

### Step 1: Landing page
- CTA prominente: "Start calling"

### Step 2: Sign up
- **Opzione A:** Email + password
- **Opzione B:** Google OAuth (one-click)

### Step 3: Payment (Stripe)
- Scegli package: $10 / $25 / $50 / $100
- Add card
- Conferma

### Step 4: Dashboard
- Balance visible
- Dialpad centrale
- Sidebar: **Contacts (rubrica)** + **History**

### Step 5A: Make call (nuovo numero)
1. Digita numero nel dialpad
2. Sistema mostra: Country flag + rate (es. "🇺🇸 $0.03/min")
3. Click "Call"
4. **Opzione save:** "Save to contacts?" (nome + salva)

### Step 5B: Make call (da rubrica)
1. Click contatto salvato
2. One-click call

### Step 6: During call
- Timer running
- Cost accumulating real-time
- Hang up button

### Step 7: Post call
- Summary: duration, cost
- Opzione: "Add to contacts" (se non già salvato)
- Appears in **History**

### Step 8: Contacts (rubrica personale)
- List contacts con nome + numero
- Edit/Delete
- Quick call da qui

### Step 9: Call History
- Tutte le chiamate con timestamp, duration, cost
- Filter per date/contact

---

## USER FLOW B: Team Setup

### Step 1-3: Sign up (identico a Flow A)
- Email/Google OAuth
- Payment & add credits

### Step 4: Dashboard individual
- Banner/prompt: "Need this for your team? → Create Team"
- Click "Create Team"

### Step 5: Team Creation
- Team name (es. "Acme Marketing Agency")
- Admin diventa owner automatico

### Step 6: Team Dashboard (owner view)
- **Shared wallet** (balance condiviso)
- **Members section:** List membri + "Invite members"
- **Team settings:** Permissions, billing

### Step 7: Invite members
- Insert email addresses (multiple)
- Assign role: **Admin** / **Member**
- Send invites

### Step 8: Member receives invite
- Email con link
- Click → sign up/login
- Accepts invitation
- Accede a team dashboard

### Step 9: Member view (non-owner)
- Vede shared balance
- Può chiamare (consuma da wallet team)
- Vede solo proprie chiamate (+ team history se admin)
- **Non può:** add credits (solo owner), rimuovere membri

### Step 10: Owner capabilities
- Add credits al team wallet
- View all team call logs
- Export CSV (tutte chiamate team)
- Add/remove members
- Change permissions
- Cost breakdown per member

### Step 11: Caller ID team
- Owner può impostare caller ID custom per team
- Es. "Acme Agency +44..."
- Membri usano questo quando chiamano per team

### Step 12: Virtual numbers team
- Owner acquista virtual number
- Number belongs to team (non individual)
- Calls/SMS a quel numero → team inbox
- Members con permessi possono ricevere

---

## ACCOUNT STRUCTURE

### Personal + Team Membership
- **Login unico** (es. sarah@email.com)
- Dashboard ha **switcher**: "Personal" / "Team: Acme" / "Team: Other Co"
- **Credits separati:** Personal wallet vs Team wallet(s)
- **Contacts separati:**
  - Personal: privata
  - Team: condivisa tra tutti membri
- **History separato** per context

### Permissions
- **Owner:** Admin + add credits + billing + delete team
- **Admin:** Vede tutto team, gestisce membri, NO add credits
- **Member:** Vede solo proprie chiamate, chiama con budget team

### Multiple Teams + Billing Unica
- User può essere owner/member di più teams
- **Ogni team** ha wallet separato
- **Payment method:** Solo owner's card
- **Invoice mensile unica** con breakdown:
  ```
  Invoice Sarah Johnson
  - Personal account: $45
  - Team Acme: $320
  - Team Freelance: $80
  Total: $445
  ```

### Contacts/Rubrica Logic

**Personal account:**
- Rubrica privata
- Solo l'utente vede i propri contatti

**Team account:**
- **Rubrica condivisa** tra tutti i membri
- Qualsiasi membro può:
  - Vedere tutti i contatti team
  - Aggiungere nuovi contatti (visibili a tutti)
  - Chiamare da rubrica condivisa
  - Edit contatti
- Solo **Admin** può delete contatti team

**Switcher behavior:**
- Switch "Personal" → vedi rubrica personale
- Switch "Team Acme" → vedi rubrica team Acme
- Switch "Team Freelance" → vedi rubrica team Freelance

---

## TECHNICAL STACK (indicativo)

### Frontend
- React/Next.js
- WebRTC SDK (Twilio Client o Telnyx)
- PWA capabilities
- Tailwind CSS

### Backend
- Node.js/Python
- PostgreSQL (user data, call logs)
- Redis (sessions, rate limiting)
- Stripe (payments)
- Twilio/Telnyx (voice/SMS provider)

### Infrastructure
- AWS/Railway/Fly.io
- CloudFlare (CDN, DDoS)
- Sentry (error tracking)
- PostHog/Mixpanel (analytics)

### Security
- WebRTC encryption (DTLS/SRTP)
- OAuth/JWT authentication
- PCI compliance (Stripe handles)
- GDPR compliance

---

## PRICING MODEL

### Credit Packages
| Package | Price | Bonus | Total Credits |
|---------|-------|-------|---------------|
| Starter | $10 | - | $10 |
| Basic | $25 | - | $25 |
| Standard | $50 | +$5 | $55 |
| Pro | $100 | +$15 | $115 |

**Credits = dollars (1 credit = $1)**
**Credits never expire**

### Calling Rates (esempi principali)
- 🇺🇸 USA/Canada: $0.03/min
- 🇬🇧 UK Landline: $0.03/min
- 🇬🇧 UK Mobile: $0.06/min
- 🇮🇳 India: $0.08-0.09/min
- 🇲🇽 Mexico: $0.03/min (landline)
- 🇹🇭 Thailand: $0.19/min

### Virtual Numbers
- 🇺🇸 USA Local: $2.19/mo
- 🇺🇸 USA Toll-Free: $4.09/mo
- 🇬🇧 UK Local: $1.90/mo
- 🇬🇧 UK Toll-Free: $3.80/mo
- Altri paesi: Variable

### SMS
- USA/UK/EU: $0.02/SMS
- International: $0.02-0.04/SMS

---

## ROADMAP POST-LANCIO (features future)

**Nota:** Queste features NON sono nel lancio iniziale

### Near-term (post-MVP validation)
- Call recording
- Basic analytics dashboard
- API webhooks per developers
- More virtual number countries

### Mid-term
- AI transcription (via Claude/Whisper)
- Call summaries automatic
- Advanced team analytics
- CRM integrations (Hubspot, Salesforce)

### Long-term
- Real-time translation
- Video calls (maybe)
- Crypto payment options
- Community features per nomads
- White-label API

---

## METRICHE DI SUCCESSO

### Acquisition
- CAC target: <$30
- Conversion rate (visitor → signup): >5%
- Time to first call: <2 min

### Engagement
- DAU/MAU ratio: >30%
- Avg calls per user/month: 10+
- Minutes per user/month: 100+

### Monetization
- ARPU target: $35-50/month
- LTV target: >$100 (3x CAC)
- Payback period: <6 months

### Quality
- Call completion rate: >95%
- Call quality (MOS): >4.0
- Customer satisfaction (NPS): >50

---

**Documento creato:** `NomaPhone_Product_Definition.md`
**Ultima modifica:** Novembre 2025
