# NomaPhone - Target Audience & Personas

**Documento di riferimento per target utenti e profili dettagliati**

---

## BISOGNO PRINCIPALE

NomaPhone risponde al bisogno di **fare chiamate vocali a numeri di telefono tradizionali** (landline/mobile) quando:

- Non hai l'app del destinatario (WhatsApp/FaceTime richiedono entrambe le parti)
- Il destinatario non ha smartphone o Internet stabile
- Devi chiamare uffici, banche, servizi governativi, hotline aziendali

**Contesto specifico:**
Persone che vivono/viaggiano fuori dal proprio paese d'origine e hanno bisogno di:
- Chiamare numeri nel paese d'origine senza roaming costoso
- Evitare contratti/abbonamenti telefonici
- Usare qualsiasi dispositivo con browser (no app da installare)
- Pagare solo per ciò che usano

**Pain point concreto:**
"Sono in Thailandia, devo chiamare la mia banca in USA per un problema sul conto, ma il roaming mi costa troppo e non posso usare WhatsApp per chiamare il numero del customer service"

---

## TARGET PRIMARI

### Target #1: Digital Nomads
**Priorità:** Alta - Target principale per MVP

### Target #2: Small Business / Remote Teams
**Priorità:** Media-alta - Target secondario

### Target #3: Expat Professionisti
**Priorità:** Media - Overlap con nomads ma use case specifici

---

## PERSONA #1: DIGITAL NOMAD

### Profilo Base
- **Nome:** Mike
- **Età:** 34 anni
- **Nazionalità:** Americana (USA)
- **Lavoro:** Software developer freelance / consulente tech
- **Reddito:** $90,000/anno
- **Tech-savvy:** Alto

### Situazione Attuale
- **Base attuale:** Chiang Mai, Thailand (da 5 mesi)
- **Pattern:** Cambia città ogni 3-6 mesi (prossimi: Bali, Medellín, Lisbona)
- **Setup:** Laptop, smartphone US (T-Mobile), lavora da coworking
- **SIM:** Usa eSIM locale Thai per dati + mantiene numero US per 2FA/banking

### Comportamento Chiamate

**Chi chiama (numeri USA):**
- Bank of America / Chase - 2-3 volte/anno per fraud alerts, problemi carte
- IRS / CPA (commercialista) - 1-2 volte/anno (tax season)
- Famiglia (genitori 65+) - 2-3 volte/mese (preferiscono landline casa)
- Clienti USA - 2-4 volte/mese (sales calls, check-in)
- Healthcare providers - 1 volta/anno

**Frequenza totale:** ~15-20 chiamate/mese a numeri USA tradizionali
**Durata media:** 10-20 minuti
**Spesa attuale:** $30-50/mese (T-Mobile international roaming add-on $15/mo + extra per minuti)

### Pain Points

- **WhatsApp/FaceTime:** Famiglia non sempre disponibile, banche/IRS non chiamabili
- **T-Mobile roaming:** Plan internazionale costa $15/mo extra + still charges per minute sopra allowance
- **Google Voice:** Ha numero ma quality variable da Asia, spesso eco/lag
- **App VoIP (Skype was his go-to):** Dismesso, ora cerca alternativa
- **Friction:** Ogni volta deve ricordarsi credenziali, account, quale app usare

### Jobs-to-be-Done

"Quando ricevo alert dalla banca o devo parlare con il mio CPA durante tax season da Chiang Mai, voglio chiamare numeri USA in modo immediato e affidabile, senza pensare a costi folli o qualità audio pessima, così posso risolvere velocemente e tornare a lavorare"

### Obiezioni Potenziali

- "È affidabile da Asia? Non voglio lag/eco come Google Voice"
- "Funziona davvero dal browser? Anche da mobile?"
- "Quanto costa vs il mio piano T-Mobile international?"
- "Posso ricevere chiamate? (per 2FA)"

### Trigger di Ricerca

- Riceve SMS Bank of America: "Suspicious activity, call us immediately"
- Tax deadline approaching, deve chiamare CPA
- Mom: "Call us on the home phone this weekend"
- Nuovo cliente USA, vuole fare intro call professionale
- Google Voice quality frustration: "There must be something better"

---

## PERSONA #2: SMALL BUSINESS OWNER

### Profilo Base
- **Nome:** Sarah
- **Età:** 38 anni
- **Nazionalità:** Britannica (UK)
- **Lavoro:** Founder di agenzia marketing digitale (5 persone, remote team)
- **Reddito business:** £180K/anno fatturato, £45K personale
- **Tech-savvy:** Medio-alto

### Situazione Attuale
- **Base:** Londra, UK (team distribuito: 2 UK, 1 Polonia, 1 Spagna, 1 Portogallo)
- **Clienti:** 60% UK, 30% EU, 10% USA
- **Setup:** Team usa Slack, Notion, Zoom per internal; bisogno chiamate outbound clienti/prospect

### Comportamento Chiamate

**Chi chiama (team complessivo):**
- Prospect calls UK/EU - 10-15 volte/settimana
- Client check-ins - 5-10 volte/settimana
- Vendor/supplier - 2-3 volte/settimana
- Follow-up after proposal - costante

**Frequenza totale:** ~100-150 chiamate/mese (team combined)
**Durata media:** 15-30 minuti
**Spesa attuale:** £80-120/mese (mobile plans team + international charges)

### Pain Points

- **Mobile personali:** Team usa propri numeri, no tracking, no professionale
- **Skype Business/Teams:** Troppo complesso/costoso per 5 persone (£££)
- **8x8/RingCentral:** Quote enterprise-level, overkill per team piccolo
- **No caller ID control:** Quando chiamano clienti EU da UK numbers, alcuni non rispondono
- **No visibility:** Chi ha chiamato chi? Quanto spendiamo? Impossibile tracciare

### Jobs-to-be-Done

"Quando il mio team deve fare sales calls a prospect in Europa, voglio che possano chiamare facilmente con un numero professionale, tracciare le chiamate, e condividere i costi dal budget aziendale, così possiamo sembrare professionali e io posso controllare le spese"

### Obiezioni Potenziali

- "È troppo basic per business? Abbiamo bisogno di features pro"
- "Possiamo avere numeri UK/EU locali per sembrare locali?"
- "C'è reportistica? Devo giustificare spese con commercialista"
- "Il team può condividere wallet senza che io debba approvare ogni chiamata?"
- "È GDPR compliant?"

### Trigger di Ricerca

- Fattura mobile team troppo alta per chiamate internazionali
- Cerca "affordable business calling solution small team"
- Prospect lamenta: "Non riconosco questo numero, non rispondo"
- Commercialista: "Ho bisogno log dettagliato chiamate business"
- Nuovo hire remoto in Spagna: "Come faccio chiamate clienti?"

### Features Importanti

- Shared team wallet con permessi
- Virtual numbers (UK/EU)
- Call logs e export CSV per contabilità
- Caller ID personalizzabile
- Dashboard admin (chi chiama cosa)

---

## PERSONA #3: EXPAT PROFESSIONISTA

### Profilo Base
- **Nome:** Raj
- **Età:** 41 anni
- **Nazionalità:** Indiana (vive in USA da 8 anni)
- **Lavoro:** Senior Software Engineer presso tech company (Google/Meta/simili)
- **Reddito:** $180,000/anno
- **Tech-savvy:** Alto
- **Status:** H1-B visa, green card in processo

### Situazione Attuale
- **Base:** San Francisco, CA (stabile, non si muove)
- **Famiglia:** Moglie + 2 figli (6 e 9 anni)
- **Setup:** Casa propria, vita stabilizzata USA
- **Ties con India:** Genitori anziani a Mumbai, proprietà immobiliare, conti bancari attivi

### Comportamento Chiamate (verso India)

**Chi chiama:**
- ICICI Bank / HDFC Bank - 3-4 volte/anno (problemi carte, investimenti, mutuo proprietà)
- CA (Chartered Accountant) in India - 2-3 volte/anno (tax filing India)
- Property manager Mumbai - 1-2 volte/mese (gestione appartamento affittato)
- Government offices - 1-2 volte/anno (PAN card, Aadhaar, documenti)
- Insurance companies India - 1 volta/anno
- Genitori mobile - 1-2 volte/settimana (WhatsApp ok, ma a volte chiamano da landline casa)

**Frequenza totale:** ~15-20 chiamate/mese verso numeri indiani tradizionali
**Durata media:** 15-30 minuti (spesso hold time lunghi con banche/PA)
**Spesa attuale:** $40-60/mese (AT&T international calling add-on $15/mo + per-minute charges)

### Pain Points

- **AT&T International:** Costoso, qualità variabile verso India
- **WhatsApp:** Funziona per genitori su mobile, ma banche/CA/property manager hanno solo landline office
- **Google Voice:** Ha provato, ma numeri indiani business spesso bloccano chiamate VoIP (fraud prevention)
- **Calling cards:** Troppo old-school, scomodo
- **Time zone:** Deve chiamare India business hours (sera SF) = vuole soluzione rapida senza friction

### Jobs-to-be-Done

"Quando la mia banca in India mi manda email 'call us urgently about your account', voglio chiamarli immediatamente dal mio laptop senza pensare a costi o setup complicati, così posso risolvere il problema velocemente anche se è sera dopo lavoro"

### Obiezioni Potenziali

- "Le banche indiane bloccano numeri VoIP? Funziona con loro?"
- "Posso avere caller ID indiano? (alcuni business non rispondono a numeri USA)"
- "Qualità audio affidabile India? Non voglio drop calls durante hold time 20 min"
- "È sicuro per chiamate bancarie sensibili?"

### Trigger di Ricerca

- Email ICICI Bank: "Urgent: Update required on your NRI account, call immediately"
- Property manager non risponde WhatsApp, ha solo office landline
- Tax season India (July): deve parlare con CA per ore
- Genitori: "Il property manager dice che c'è un problema, chiamalo"
- Frustrazione con AT&T bill: "$80 questo mese solo per chiamate India?!"

### Contesto Importante

- **NRI (Non-Resident Indian):** Status speciale con obblighi fiscali/bancari India
- **Property management:** Molti indiani in USA mantengono proprietà in India
- **Dual tax filing:** USA + India = chiamate frequenti a CA entrambi paesi

---

## CORRIDOI GEOGRAFICI PRINCIPALI

### Traffico Validato (dal report di mercato)

**Digital Nomads:**
1. 🇺🇸 USA nomads → 🇹🇭🇮🇩🇲🇽🇨🇴🇵🇹 (chiamano USA)
2. 🇬🇧 UK nomads → 🇹🇭🇮🇩🇵🇹🇪🇸 (chiamano UK)
3. 🇪🇺 EU nomads → 🇹🇭🇮🇩🇲🇽🇨🇴🇬🇪 (chiamano home)

**Expat Professionisti:**
1. 🇺🇸 USA → 🇮🇳 India (chiamano India)
2. 🇬🇧 UK → 🇮🇳🇵🇰 (chiamano home)
3. 🇺🇸 USA → 🇲🇽 Mexico (chiamano Mexico)

**Nota importante:** Traffico intra-UE è SECONDARIO (roaming gratis "Roam Like at Home")

---

## SEGMENTI ESCLUSI (almeno per MVP)

### Chi NON targetizziamo inizialmente:

1. **Migranti low-income**
   - Troppo price-sensitive
   - WhatsApp domina
   - Non allineato a strategia "no price competition"

2. **Enterprise (>50 persone)**
   - Sales cycle lungo
   - Compliance richieste complesse
   - Budget e procurement rigidi

3. **Viaggiatori casuali**
   - Uso sporadico
   - CAC alto per LTV basso
   - No recurring

---

## ACQUISITION CHANNELS PER TARGET

### Mike (Digital Nomad)
- SEO: "call USA from Thailand", "international calling for nomads"
- Reddit: r/digitalnomad, r/expats
- Facebook Groups: Digital nomad groups
- Partnerships: Nomad List, coworking spaces
- Content: Blog su nomad lifestyle

### Sarah (Small Business)
- SEO: "affordable business calling", "team calling solution"
- LinkedIn: Founder groups, remote work communities
- Direct: Outreach a agencies, small teams
- Content: Business ROI calculators

### Raj (Expat)
- SEO: "call India from USA cheap", "NRI calling solution"
- Community: Indian expat forums, H1B groups
- Content: Guides su NRI banking, taxes

---

**Documento creato:** `NomaPhone_Target_Audience.md`
**Ultima modifica:** Novembre 2025
