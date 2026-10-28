import { useState, type ReactNode } from "react";

type Role = "home" | "roleSelection" | "student" | "teacher" | "office" | "schoolSearch";
type IconName =
  | "home"
  | "calendar"
  | "book"
  | "wallet"
  | "user"
  | "users"
  | "car"
  | "chart"
  | "settings"
  | "file"
  | "clock"
  | "check"
  | "arrow"
  | "spark"
  | "plus"
  | "search"
  | "info"
  | "bell"
  | "menu"
  | "x"
  | "lock"
  | "logout";

const paths: Record<IconName, ReactNode> = {
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z" /><path d="M4 6.5v13" /></>,
  wallet: <><path d="M3 7h18v13H3zM3 7l3-3h13v3" /><path d="M16 13h5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  car: <><path d="m5 17-2-1v-5l2-5h14l2 5v5l-2 1" /><path d="M5 17h14v-6H5zM7 17v3M17 17v3M7 13h2M15 13h2" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20V7" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
  file: <><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <><path d="m9 18 6-6-6-6" /></>,
  spark: <><path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8zM5 15l.7 2.3L8 18.5l-2.3 1.2L5 22l-.7-2.3L2 18.5l2.3-1.2z" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  logout: <><path d="M10 17l5-5-5-5M15 12H3M14 3h7v18h-7" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Button({ children, onClick, kind = "primary", className = "", disabled = false }: { children: ReactNode; onClick?: () => void; kind?: "primary" | "secondary" | "ghost"; className?: string; disabled?: boolean }) {
  return <button type="button" onClick={onClick} disabled={disabled} className={`btn btn-${kind} ${className}`}>{children}</button>;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return <div className="logo"><span className="logo-mark"><span /></span>{!compact && <span>Digitale<br /><b>Fahrschule</b></span>}</div>;
}

const abilityData = [
  ["Kreuzungen", 86, "good"],
  ["Kreisverkehr", 74, "good"],
  ["Autobahn", 64, "warn"],
  ["Einparken", 48, "bad"],
  ["Landstraße", 78, "good"],
];

function ProgressBar({ value, tone = "yellow" }: { value: number; tone?: string }) {
  return <div className="progress-track"><span className={`progress-fill ${tone}`} style={{ width: `${value}%` }} /></div>;
}

function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(e) => e.stopPropagation()}>{children}</div></div>;
}

function MobileHeader({ title, onHome }: { title: string; onHome: () => void }) {
  return <header className="mobile-header"><button className="header-logo" onClick={onHome} aria-label="Zur Rollenwahl"><Logo compact /></button><div><span className="eyebrow">{title}</span><strong>Fahrschule Musterstadt</strong></div><button className="icon-btn" aria-label="Benachrichtigungen"><Icon name="bell" /></button></header>;
}

function LandingHome({ onChoose }: { onChoose: (role: Role) => void }) {
  return <main className="role-page">
    <div className="role-top"><Logo /><span className="prototype-pill">Interaktiver Prototyp</span></div>
    <section className="role-hero landing-hero">
      <div className="hero-copy"><span className="eyebrow yellow">Eine Plattform. Ein gemeinsames Ziel.</span><h1>Wer möchte<br />heute starten?</h1><p>Finde deine Fahrschule oder starte direkt mit deiner Fahrschule.</p></div>
      <div className="hero-orbit"><div className="orbit-ring" /><div className="orbit-center"><Icon name="spark" size={32} /><b>KI-Prognose</b><small>Individuell & transparent</small></div><span className="orbit-dot one" /><span className="orbit-dot two" /><span className="orbit-dot three" /></div>
    </section>
    <section className="entry-grid">
      <article className="entry-card featured">
        <span className="entry-icon"><Icon name="search" size={30} /></span><span className="role-meta">Für Fahrschüler ohne Fahrschule</span><h2>Fahrschule finden</h2><p>Vergleiche Fahrschulen in deiner Nähe – mit Ranking aus echten Ausbildungsdaten und deiner persönlichen Prognose. Kostenlos.</p><Button onClick={() => onChoose("schoolSearch")}>Suche starten <Icon name="arrow" /></Button>
      </article>
      <article className="entry-card">
        <span className="entry-icon"><Icon name="home" size={30} /></span><span className="role-meta">Für Fahrschüler, Fahrlehrer & Fahrschulen</span><h2>Meine Fahrschule</h2><p>Du bist bereits bei einer Fahrschule, die Digitale Fahrschule nutzt? Hier geht&apos;s zu deiner Ansicht.</p><div className="entry-chips"><span>Fahrschüler</span><span>Fahrlehrer</span><span>Fahrschulbüro</span></div><Button kind="secondary" onClick={() => onChoose("roleSelection")}>Weiter zur Rollenwahl <Icon name="arrow" /></Button>
      </article>
    </section>
    <footer className="home-footer"><span>Prototyp – studentisches Konzeptprojekt, Hochschule Esslingen</span><span>Alle Daten sind fiktiv</span></footer>
  </main>;
}

function RoleHome({ onChoose, onBack }: { onChoose: (role: Role) => void; onBack: () => void }) {
  const roles = [
    { id: "student" as Role, icon: "user" as IconName, title: "Fahrschüler", text: "Lernen, buchen und Fortschritt verfolgen", meta: "Mobile App" },
    { id: "teacher" as Role, icon: "car" as IconName, title: "Fahrlehrer", text: "Fahrstunden planen und dokumentieren", meta: "Mobile App" },
    { id: "office" as Role, icon: "chart" as IconName, title: "Fahrschulbüro", text: "Alles im Blick und zentral verwalten", meta: "Web-Dashboard" },
  ];
  return <main className="role-page role-selection-page">
    <div className="role-top"><button className="start-back" onClick={onBack}><Icon name="arrow" /> Zurück zur Startseite</button><Logo /><span className="prototype-pill">Interaktiver Prototyp</span></div>
    <section className="selection-heading"><span className="eyebrow yellow">Deine Fahrschule nutzt die Plattform</span><h1>Wie nutzt du<br />Digitale Fahrschule?</h1><p>Wähle deine Rolle und öffne deine persönliche Ansicht.</p></section>
    <section className="role-grid">
      {roles.map((role, index) => <button key={role.id} className="role-card" onClick={() => onChoose(role.id)}>
        <span className="role-number">0{index + 1}</span><span className="role-icon"><Icon name={role.icon} size={28} /></span><span className="role-meta">{role.meta}</span><strong>{role.title}</strong><span className="role-description">{role.text}</span><span className="role-link">Ansicht öffnen <Icon name="arrow" /></span>
      </button>)}
    </section>
    <footer className="home-footer"><span>Prototyp – studentisches Konzeptprojekt, Hochschule Esslingen</span><span>Alle Daten sind fiktiv</span></footer>
  </main>;
}

const drivingSchools = [
  { name: "Fahrschule Neckarblick", distance: "1,8 km", lessons: 31, cost: 3150, pass: 78, weeks: 14, personal: 3050, address: "Neckarstraße 24, 73728 Esslingen", teachers: 6, cars: "8 Fahrzeuge · E-Auto & Automatik" },
  { name: "Drive Esslingen", distance: "2,4 km", lessons: 29, cost: 3290, pass: 82, weeks: 13, personal: 3180, address: "Pliensaustraße 8, 73728 Esslingen", teachers: 5, cars: "7 Fahrzeuge · Automatik" },
  { name: "Fahrschule Am Markt", distance: "3,1 km", lessons: 33, cost: 2990, pass: 75, weeks: 15, personal: 2940, address: "Marktplatz 11, 73728 Esslingen", teachers: 4, cars: "6 Fahrzeuge · E-Auto" },
  { name: "Fahrwerk Zollberg", distance: "4,7 km", lessons: 30, cost: 3210, pass: 80, weeks: 14, personal: 3110, address: "Zollernplatz 5, 73734 Esslingen", teachers: 5, cars: "7 Fahrzeuge · Schaltung & Automatik" },
  { name: "Fahrschule Stadtmitte", distance: "5,2 km", lessons: 34, cost: 2890, pass: 73, weeks: 17, personal: 2870, address: "Küferstraße 17, 73728 Esslingen", teachers: 3, cars: "5 Fahrzeuge · Automatik" },
];

function SchoolSearchApp({ onHome, onRequest, onStudent }: { onHome: () => void; onRequest: () => void; onStudent: () => void }) {
  const [step, setStep] = useState(1);
  const [license, setLicense] = useState("B");
  const [radius, setRadius] = useState(15);
  const [priority, setPriority] = useState("Schnell fertig");
  const [sort, setSort] = useState("Beste Prognose");
  const [detail, setDetail] = useState<typeof drivingSchools[number] | null>(null);
  const [form, setForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [info, setInfo] = useState(false);
  const sorted = [...drivingSchools].sort((a, b) => sort === "Günstigste" ? a.cost - b.cost : sort === "Schnellste" ? a.weeks - b.weeks : sort === "Bestehensquote" ? b.pass - a.pass : a.personal - b.personal);
  const submit = () => { onRequest(); setForm(false); setSent(true); };
  return <div className="app-stage"><div className="phone-shell search-phone">
    <header className="mobile-header"><button className="header-logo" onClick={onHome} aria-label="Zur Rollenwahl"><Logo compact /></button><div><span className="eyebrow">Kostenlos für Fahrschüler</span><strong>Fahrschule finden</strong></div><button className="icon-btn" onClick={onHome} aria-label="Schließen"><Icon name="x" /></button></header>
    <div className="phone-content">
      {step <= 3 && <div className="screen-pad search-onboarding">
        <div className="step-dots">{[1,2,3].map(n => <span className={step >= n ? "active" : ""} key={n} />)}</div>
        {step === 1 && <><span className="eyebrow">Schritt 1 von 3</span><h2>Welche Klasse<br />möchtest du machen?</h2><p className="muted intro">Wähle deine gewünschte Führerscheinklasse.</p><div className="choice-grid">{["B", "A", "BE", "A1", "B196", "C"].map(x => <button className={license === x ? "choice-card active" : "choice-card"} onClick={() => setLicense(x)} key={x}><strong>{x}</strong><small>{x === "B" ? "Auto" : x === "A" ? "Motorrad" : x === "BE" ? "Auto + Anhänger" : "Weitere Klasse"}</small></button>)}</div></>}
        {step === 2 && <><span className="eyebrow">Schritt 2 von 3</span><h2>Wo suchst du?</h2><p className="muted intro">Wir zeigen dir Fahrschulen in deiner Nähe.</p><label className="search-form-field"><span>Wohnort oder PLZ</span><div><Icon name="search" /><input defaultValue="73728 Esslingen" /></div></label><div className="radius-card card"><div><span>Umkreis</span><strong>{radius} km</strong></div><input type="range" min="5" max="30" step="5" value={radius} onChange={e => setRadius(Number(e.target.value))} /><div><small>5 km</small><small>30 km</small></div></div></>}
        {step === 3 && <><span className="eyebrow">Schritt 3 von 3</span><h2>Was ist dir<br />am wichtigsten?</h2><p className="muted intro">Damit wir die Ergebnisse passend sortieren.</p><div className="priority-list">{[["Schnell fertig","clock","Kurze Ausbildungsdauer"],["Günstig","wallet","Niedrige Gesamtkosten"],["Hohe Bestehensquote","check","Erfolgreich zur Prüfung"]].map(([label,icon,text]) => <button className={priority === label ? "priority-card active" : "priority-card"} onClick={() => setPriority(label)} key={label}><span><Icon name={icon as IconName} /></span><div><strong>{label}</strong><small>{text}</small></div><i>{priority === label && <Icon name="check" />}</i></button>)}</div></>}
        <div className="onboarding-actions">{step > 1 && <Button kind="secondary" onClick={() => setStep(step - 1)}>Zurück</Button>}<Button onClick={() => setStep(step + 1)}>{step === 3 ? "Ergebnisse anzeigen" : "Weiter"} <Icon name="arrow" /></Button></div>
      </div>}
      {step === 4 && !detail && <div className="screen-pad"><span className="eyebrow">Klasse {license} · {radius} km</span><h2>Deine passenden<br />Fahrschulen</h2><div className="ranking-banner"><Icon name="info" /><p>Das Ranking basiert nur auf Ausbildungsdaten der Plattform – Plätze können nicht gekauft werden.</p><button onClick={() => setInfo(true)}>Mehr erfahren</button></div><div className="sort-scroll">{["Beste Prognose","Günstigste","Schnellste","Bestehensquote"].map(x => <button onClick={() => setSort(x)} className={sort === x ? "active" : ""} key={x}>{x}</button>)}</div><div className="school-results">{sorted.map((school, i) => <button className="school-card card" onClick={() => setDetail(school)} key={school.name}><span className="rank-number">{i + 1}</span><div className="school-card-head"><div><strong>{school.name}</strong><small><Icon name="home" size={13} /> {school.distance} entfernt</small></div><Icon name="arrow" /></div><div className="school-badges"><span>Ø {school.lessons} Fahrstunden</span><span>Ø {school.cost.toLocaleString("de-DE")} €</span><span>{school.pass} % bestanden</span></div><div className="personal-prediction"><Icon name="spark" /><span><small>Deine persönliche Prognose</small><strong>Fertig in ca. {school.weeks} Wochen · ca. {school.personal.toLocaleString("de-DE")} €</strong></span></div></button>)}</div></div>}
      {detail && !sent && <div className="screen-pad school-detail"><button className="back-link" onClick={() => setDetail(null)}><Icon name="arrow" /> Zur Ergebnisliste</button><div className="detail-hero"><span className="class-badge">Platz {sorted.indexOf(detail) + 1}</span><h2>{detail.name}</h2><p><Icon name="home" /> {detail.address}</p></div><div className="detail-facts"><div><Icon name="users" /><b>{detail.teachers}</b><span>Fahrlehrer</span></div><div><Icon name="car" /><b>{detail.cars.split(" ")[0]}</b><span>Fahrzeuge</span></div><div><Icon name="calendar" /><b>4,6</b><span>Tage Wartezeit</span></div></div><h3 className="subheading">Preisübersicht</h3><div className="card price-list">{[["Grundbetrag","449 €"],["Fahrstunde (45 Min.)","69 €"],["Sonderfahrt (45 Min.)","79 €"]].map(x => <div key={x[0]}><span>{x[0]}</span><b>{x[1]}</b></div>)}</div><h3 className="subheading">Daten aus der Plattform</h3><div className="card platform-stats">{[["Ø Fahrstunden bis Prüfung",`${detail.lessons} Std.`,72],["Ø Gesamtkosten",`${detail.cost.toLocaleString("de-DE")} €`,65],["Bestehensquote Theorie","84 %",84],["Bestehensquote Praxis",`${detail.pass} %`,detail.pass],["Wartezeit nächste Stunde","4,6 Tage",58]].map(([name,val,width]) => <div key={name}><span><small>{name}</small><b>{val}</b></span><ProgressBar value={Number(width)} /></div>)}</div><div className="search-prediction"><Icon name="spark" /><div><span className="eyebrow">Deine Prognose bei dieser Fahrschule</span><strong>Ca. {detail.weeks} Wochen · ca. {detail.personal.toLocaleString("de-DE")} €</strong><small>Basierend auf deinen Angaben und anonymisierten Ausbildungsdaten.</small></div></div><Button className="full" onClick={() => setForm(true)}>Anmeldung anfragen</Button><p className="free-note">Kostenlos und unverbindlich für Fahrschüler</p></div>}
      {sent && <div className="screen-pad request-success"><div className="success-check"><Icon name="check" size={32} /></div><span className="eyebrow">Erfolgreich übermittelt</span><h2>Anfrage gesendet</h2><p>Die Fahrschule meldet sich bei dir. Deine Anfrage ist jetzt auch im Fahrschulbüro sichtbar.</p><div className="card success-school"><Icon name="home" /><div><strong>{detail?.name}</strong><small>Klasse {license} · unverbindliche Anfrage</small></div></div><Button className="full" onClick={onStudent}>Weiter zur Fahrschüler-App <Icon name="arrow" /></Button><Button kind="ghost" className="full" onClick={onHome}>Zur Rollenwahl</Button></div>}
    </div>
    {info && <Modal onClose={() => setInfo(false)}><button className="modal-close" onClick={() => setInfo(false)}><Icon name="x" /></button><span className="modal-icon"><Icon name="info" /></span><h3>Unabhängiges Ranking</h3><p>Berücksichtigt werden ausschließlich echte Plattformdaten wie Ausbildungsdauer, Kosten, Wartezeiten und Bestehensquoten. Der monatliche Listungsbeitrag hat keinen Einfluss auf die Reihenfolge.</p><Button onClick={() => setInfo(false)}>Verstanden</Button></Modal>}
    {form && <Modal onClose={() => setForm(false)}><button className="modal-close" onClick={() => setForm(false)}><Icon name="x" /></button><span className="eyebrow">Unverbindliche Anmeldung</span><h3>Anfrage senden</h3><p>{detail?.name}</p><div className="request-form"><label><span>Name</span><input defaultValue="Sophie Keller" /></label><label><span>Geburtsdatum</span><input type="date" defaultValue="2007-05-18" /></label><label><span>E-Mail oder Telefon</span><input defaultValue="sophie.keller@beispiel.de" /></label></div><Button className="full" onClick={submit}>Anfrage verbindlich senden</Button><small className="muted">Es werden keine echten Daten übertragen.</small></Modal>}
  </div></div>;
}

const studentTabs = [
  ["Übersicht", "home"], ["Buchen", "calendar"], ["Theorie", "book"], ["Kosten", "wallet"], ["Profil", "user"],
] as [string, IconName][];

function StudentApp({ onHome, booking, setBooking, fresh = false }: { onHome: () => void; booking: boolean; setBooking: (v: boolean) => void; fresh?: boolean }) {
  const [tab, setTab] = useState("Übersicht");
  return <div className="app-stage"><div className="phone-shell">
    <MobileHeader title="Fahrschüler" onHome={onHome} />
    <div className="phone-content">
      {tab === "Übersicht" && <StudentOverview booking={booking} goBook={() => setTab("Buchen")} fresh={fresh} />}
      {tab === "Buchen" && <Booking booking={booking} setBooking={setBooking} />}
      {tab === "Theorie" && <Theory />}
      {tab === "Kosten" && <Costs />}
      {tab === "Profil" && <StudentProfile />}
    </div>
    <nav className="bottom-tabs">{studentTabs.map(([label, icon]) => <button key={label} onClick={() => setTab(label)} className={tab === label ? "active" : ""}><Icon name={icon} /><span>{label}</span></button>)}</nav>
  </div></div>;
}

function StudentOverview({ booking, goBook, fresh = false }: { booking: boolean; goBook: () => void; fresh?: boolean }) {
  return <div className="screen-pad">
    <div className="welcome-row"><div><span className="muted">Guten Morgen,</span><h2>Lena M.</h2></div><span className="class-badge">Klasse B</span></div>
    <section className="progress-hero card">
      <div className={fresh ? "ring fresh" : "ring"}><div><b>{fresh ? "0" : "72"}<span>%</span></b><small>Ausbildung</small></div></div>
      <div className="progress-copy"><span className="eyebrow">Dein Fortschritt</span><h3>{fresh ? <>Willkommen bei deiner<br />Fahrausbildung.</> : <>Du bist auf einem<br />richtig guten Weg.</>}</h3><p>{fresh ? "Deine Ausbildung startet jetzt." : "Noch ein paar Schritte bis zur Prüfungsreife."}</p></div>
    </section>
    <div className="prediction-grid">
      <div className="prediction-card dark"><span className="mini-icon"><Icon name="car" /></span><small>Prognose Fahrpraxis</small><strong>Noch ca. 8<br />Fahrstunden</strong></div>
      <div className="prediction-card yellow"><span className="mini-icon"><Icon name="calendar" /></span><small>Prüfungsreife</small><strong>Voraussichtlich<br />KW 47</strong></div>
    </div>
    <p className="ai-note"><Icon name="spark" size={16} /> Prognose auf Basis deines Fortschritts – die Entscheidung trifft dein Fahrlehrer.</p>
    <div className="section-title"><div><span className="eyebrow">Dein Termin</span><h3>Nächste Fahrstunde</h3></div>{!booking && <Button kind="ghost" onClick={goBook}>Buchen</Button>}</div>
    <div className="lesson-card"><div className="date-tile"><b>{booking ? "14" : "09"}</b><span>{booking ? "NOV" : "NOV"}</span></div><div><strong>{booking ? "Fr, 10:00 Uhr" : "Do, 16:30 Uhr"}</strong><span>{booking ? "Übungsfahrt" : "Überlandfahrt"} · 90 Min.</span><small>Mit Thomas Weber · VW Golf</small></div><Icon name="arrow" /></div>
    <div className="section-title"><div><span className="eyebrow">Einschätzung</span><h3>Deine Fähigkeiten</h3></div><span className="muted small">Aktuell</span></div>
    <div className="card ability-card">{abilityData.map(([name, value, tone]) => <div className="ability-row" key={name}><div><span>{name}</span><b>{value}%</b></div><ProgressBar value={Number(value)} tone={String(tone)} /></div>)}</div>
  </div>;
}

function Booking({ booking, setBooking }: { booking: boolean; setBooking: (v: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const days = [["Mo", "11"], ["Di", "12"], ["Mi", "13"], ["Do", "14"], ["Fr", "15"]];
  const slots = [{ day: 0, time: "09:00" }, { day: 1, time: "14:30" }, { day: 2, time: "11:00" }, { day: 3, time: "10:00" }, { day: 3, time: "15:30" }, { day: 4, time: "08:30" }];
  const confirm = () => { setBooking(true); setSuccess(true); setSelected(null); };
  return <div className="screen-pad">
    <span className="eyebrow">Terminplanung</span><h2>Fahrstunde buchen</h2><p className="muted intro">Freie Zeiten bei Thomas Weber</p>
    <div className="week-switch"><button><Icon name="arrow" /></button><strong>11. – 15. November</strong><button><Icon name="arrow" /></button></div>
    {booking && <div className="success-banner"><span><Icon name="check" /></span><div><strong>Deine Stunde ist gebucht</strong><small>Fr, 14. Nov. · 10:00 Uhr</small></div></div>}
    <div className="calendar-grid">
      {days.map(([day, date], i) => <div className="day-col" key={day}><div className={i === 3 ? "day-head today" : "day-head"}><span>{day}</span><b>{date}</b></div>{slots.filter(s => s.day === i).map(s => <button key={s.time} className="slot" onClick={() => setSelected(`${day}, ${date}. Nov. · ${s.time} Uhr`)}>{s.time}<small>frei</small></button>)}</div>)}
    </div>
    <div className="booking-info card"><Icon name="clock" /><div><strong>Bitte beachte die Stornofrist</strong><p>Bis 24 Stunden vor Beginn kannst du kostenfrei stornieren.</p></div></div>
    {selected && <Modal onClose={() => setSelected(null)}><button className="modal-close" onClick={() => setSelected(null)}><Icon name="x" /></button><span className="modal-icon"><Icon name="calendar" /></span><span className="eyebrow">Buchung bestätigen</span><h3>{selected}</h3><p>Übungsfahrt · 60 Minuten<br />mit Thomas Weber</p><div className="modal-actions"><Button onClick={confirm}>Verbindlich buchen</Button><Button kind="secondary" onClick={() => setSelected(null)}>Abbrechen</Button></div></Modal>}
    {success && <Modal onClose={() => setSuccess(false)}><div className="success-check"><Icon name="check" size={32} /></div><h3>Gebucht!</h3><p>Der Termin ist jetzt auch bei deinem Fahrlehrer und im Büro sichtbar.</p><Button onClick={() => setSuccess(false)}>Fertig</Button></Modal>}
  </div>;
}

function Theory() {
  const lessons = ["Grundregeln im Straßenverkehr", "Vorfahrt und Verkehrszeichen", "Geschwindigkeit & Abstand", "Umweltschutz", "Verhalten bei Unfällen"];
  return <div className="screen-pad"><span className="eyebrow">Online lernen</span><h2>Theorie</h2><div className="card theory-progress"><div><span>Dein Kursfortschritt</span><strong>9 <small>von 14 Lektionen</small></strong></div><div className="theory-circle">64%</div><ProgressBar value={64} /></div>
    <div className="section-title"><h3>Videolektionen</h3><span className="muted small">Alle anzeigen</span></div>
    <div className="card lesson-list">{lessons.map((name, i) => <button key={name}><span className={i < 3 ? "lesson-check done" : "lesson-check"}>{i < 3 ? <Icon name="check" size={16} /> : i + 7}</span><span><strong>{name}</strong><small>{i < 3 ? "Abgeschlossen" : `${18 + i * 3} Min.`}</small></span><Icon name="arrow" /></button>)}</div>
    <div className="question-card"><span className="mini-icon"><Icon name="book" /></span><div><span className="eyebrow">Prüfungsfragen</span><h3>Lernstand 78 %</h3><p>Deine aktuelle Schwäche: <b>Vorfahrt</b></p><Button>Jetzt weiter üben</Button></div></div>
  </div>;
}

function Costs() {
  return <div className="screen-pad"><span className="eyebrow">Volle Transparenz</span><h2>Deine Kosten</h2>
    <div className="cost-hero"><span>Bisher bezahlt</span><strong>1.980,00 €</strong><small>Alle Zahlungen sind aktuell</small></div>
    <div className="card cost-prediction"><div className="section-title"><div><span className="eyebrow">KI-Prognose</span><h3>Gesamtkosten ca. 3.100 €</h3></div><Icon name="spark" /></div><ProgressBar value={64} /><div className="cost-scale"><span>Bezahlt 1.980 €</span><span>Noch ca. 1.120 €</span></div></div>
    <div className="section-title"><h3>Bisherige Posten</h3><Button kind="ghost">Rechnung</Button></div>
    <div className="card transaction-list">{[["Grundbetrag", "05. Aug.", "450,00 €"], ["12 × Fahrstunde", "Aug. – Nov.", "1.020,00 €"], ["6 × Sonderfahrt", "Sep. – Nov.", "510,00 €"]].map(row => <div key={row[0]}><span className="transaction-icon"><Icon name="file" /></span><div><strong>{row[0]}</strong><small>{row[1]}</small></div><b>{row[2]}</b></div>)}</div>
  </div>;
}

function StudentProfile() {
  return <div className="screen-pad"><span className="eyebrow">Dein Konto</span><h2>Profil</h2><div className="profile-head card"><div className="avatar large">LM</div><div><h3>Lena M.</h3><span>Fahrschülerin · Klasse B</span><small>Ausbildungsbeginn: 05.08.2025</small></div></div>
    <h3 className="subheading">Ausbildung</h3><div className="card info-list"><div><span className="list-icon"><Icon name="home" /></span><p><small>Fahrschule</small><strong>Fahrschule Musterstadt</strong></p></div><div><span className="list-icon"><Icon name="user" /></span><p><small>Fahrlehrer</small><strong>Thomas Weber</strong></p></div></div>
    <h3 className="subheading">Dokumente</h3><button className="document-card"><span className="pdf">PDF</span><div><strong>Ausbildungsnachweis</strong><small>Aktualisiert am 07.11.2025</small></div><Icon name="arrow" /></button>
    <Button kind="secondary" className="full"><Icon name="logout" /> Zur Rollenwahl</Button>
  </div>;
}

const teacherTabs = [["Heute", "home"], ["Schüler", "users"], ["Kalender", "calendar"], ["Profil", "user"]] as [string, IconName][];
const baseLessons = [
  ["08:00", "Nico Bauer", "Übungsfahrt", "B · 45 Min."],
  ["09:15", "Sara Klein", "Autobahnfahrt", "B · 90 Min."],
  ["11:30", "Jonas Wolf", "Prüfungsvorbereitung", "B · 60 Min."],
  ["14:00", "Mia Neumann", "Überlandfahrt", "B · 90 Min."],
  ["16:30", "Lena M.", "Überlandfahrt", "B · 90 Min."],
];

function TeacherApp({ onHome, booking }: { onHome: () => void; booking: boolean }) {
  const [tab, setTab] = useState("Heute");
  return <div className="app-stage"><div className="phone-shell">
    <MobileHeader title="Fahrlehrer" onHome={onHome} />
    <div className="phone-content">{tab === "Heute" && <TeacherToday booking={booking} />}{tab === "Schüler" && <TeacherStudents />}{tab === "Kalender" && <TeacherCalendar booking={booking} />}{tab === "Profil" && <TeacherProfile />}</div>
    <nav className="bottom-tabs four">{teacherTabs.map(([label, icon]) => <button key={label} onClick={() => setTab(label)} className={tab === label ? "active" : ""}><Icon name={icon} /><span>{label}</span></button>)}</nav>
  </div></div>;
}

function TeacherToday({ booking }: { booking: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [stars, setStars] = useState<Record<string, number>>({});
  const lessons = booking ? [...baseLessons, ["Fr 10:00", "Lena M.", "Übungsfahrt · neu gebucht", "B · 60 Min."]] : baseLessons;
  return <div className="screen-pad"><div className="welcome-row"><div><span className="muted">Guten Morgen,</span><h2>Thomas</h2></div><div className="day-badge"><b>5</b><span>Stunden</span></div></div><div className="today-summary"><Icon name="calendar" /><div><strong>Donnerstag, 7. November</strong><span>08:00 – 18:00 Uhr · VW Golf</span></div></div>
    {booking && <div className="live-update"><span className="live-dot" /><strong>Neue Buchung von Lena</strong><small>Fr, 10:00 Uhr</small></div>}
    <div className="timeline">{lessons.map((lesson, i) => <div className={`timeline-row ${done.includes(lesson[1]) ? "completed" : ""}`} key={`${lesson[0]}${lesson[1]}`}><div className="time"><b>{lesson[0]}</b><span>{i < baseLessons.length ? ["09:00", "10:45", "12:30", "15:30", "18:00"][i] : "11:00"}</span></div><div className="timeline-line"><span /></div><div className="timeline-card"><div><strong>{lesson[1]}</strong><span>{lesson[2]}</span><small><Icon name="car" size={14} /> {lesson[3]}</small></div>{done.includes(lesson[1]) ? <span className="done-label"><Icon name="check" /> Gespeichert</span> : <Button kind="secondary" onClick={() => setActive(lesson[1])}>Stunde abschließen</Button>}</div></div>)}</div>
    {active && <Modal onClose={() => setActive(null)}><button className="modal-close" onClick={() => setActive(null)}><Icon name="x" /></button><span className="eyebrow">Stunde dokumentieren</span><h3>{active}</h3><p className="modal-sub">Wie lief die heutige Fahrstunde?</p>{["Verkehrsbeobachtung", "Fahrzeugbedienung", "Selbstständigkeit"].map(skill => <div className="rating-row" key={skill}><span>{skill}</span><div>{[1,2,3,4,5].map(n => <button onClick={() => setStars({...stars, [skill]: n})} className={(stars[skill] || 0) >= n ? "star active" : "star"} key={n}>★</button>)}</div></div>)}<label className="note-field"><span>Notiz (optional)</span><textarea placeholder="Kurze Beobachtung festhalten..." /></label><div className="signature"><span>Unterschrift Fahrschüler</span><em>Lena M.</em><small>Digital bestätigt</small></div><Button className="full" onClick={() => { setDone([...done, active]); setActive(null); }}>Dokumentation speichern</Button></Modal>}
  </div>;
}

function TeacherStudents() {
  const students = [["Lena M.", 72, "ca. 2 Wochen", "LM"], ["Jonas Wolf", 88, "ca. 1 Woche", "JW"], ["Sara Klein", 54, "ca. 5 Wochen", "SK"], ["Mia Neumann", 67, "ca. 3 Wochen", "MN"], ["Nico Bauer", 41, "ca. 7 Wochen", "NB"]];
  const [active, setActive] = useState<typeof students[number] | null>(null);
  return <div className="screen-pad"><span className="eyebrow">Meine Fahrschüler</span><h2>Schüler</h2><div className="search-field"><Icon name="search" /><input placeholder="Schüler suchen..." /></div><div className="student-list">{students.map(s => <button className="student-card card" key={s[0]} onClick={() => setActive(s)}><span className="avatar">{s[3]}</span><div><strong>{s[0]}</strong><small>Klasse B · <b>{s[1]} %</b></small><ProgressBar value={Number(s[1])} /></div><span className="prediction-badge">{s[2]}</span><Icon name="arrow" /></button>)}</div>
    {active && <Modal onClose={() => setActive(null)}><button className="modal-close" onClick={() => setActive(null)}><Icon name="x" /></button><div className="profile-head"><div className="avatar large">{active[3]}</div><div><h3>{active[0]}</h3><span>Klasse B · Fortschritt {active[1]} %</span></div></div><div className="detail-prediction"><Icon name="spark" /><div><small>Voraussichtlich prüfungsreif</small><strong>In {active[2]}</strong></div></div><h4>Fähigkeiten</h4>{abilityData.slice(0,4).map(([name, val, tone]) => <div className="ability-row compact" key={name}><div><span>{name}</span><b>{val}%</b></div><ProgressBar value={Number(val)} tone={String(tone)} /></div>)}<Button className="full" onClick={() => setActive(null)}>Detail schließen</Button></Modal>}
  </div>;
}

function TeacherCalendar({ booking }: { booking: boolean }) {
  const [blocked, setBlocked] = useState<string[]>([]);
  const times = ["08:00", "10:00", "12:00", "14:00", "16:00"];
  return <div className="screen-pad"><span className="eyebrow">Deine Verfügbarkeit</span><h2>Kalender</h2><div className="week-switch"><button><Icon name="arrow" /></button><strong>11. – 15. November</strong><button><Icon name="arrow" /></button></div><div className="teacher-calendar">{["Mo", "Di", "Mi", "Do", "Fr"].map((day, d) => <div key={day}><b>{day}</b>{times.map((time, i) => { const key = `${d}-${i}`; const occupied = (d + i) % 4 === 0 || (booking && d === 4 && i === 1); return <button key={time} className={occupied ? "cal-cell occupied" : blocked.includes(key) ? "cal-cell blocked" : "cal-cell free"} onClick={() => !occupied && setBlocked(blocked.includes(key) ? blocked.filter(k => k !== key) : [...blocked, key])}><small>{time}</small>{occupied ? "Termin" : blocked.includes(key) ? "Gesperrt" : "Frei"}</button>; })}</div>)}</div><div className="calendar-legend"><span><i className="free" /> Frei</span><span><i className="occupied" /> Belegt</span><span><i className="blocked" /> Gesperrt</span></div><p className="ai-note"><Icon name="lock" size={16} /> Tippe auf eine freie Zeit, um sie zu sperren.</p></div>;
}

function TeacherProfile() {
  return <div className="screen-pad"><span className="eyebrow">Dein Konto</span><h2>Profil</h2><div className="profile-head card"><div className="avatar large">TW</div><div><h3>Thomas Weber</h3><span>Fahrlehrer · Klasse B/BE</span><small>Fahrschule Musterstadt</small></div></div><div className="profile-stats"><div><b>28</b><span>Schüler</span></div><div><b>81 %</b><span>Auslastung</span></div><div><b>4,9</b><span>Bewertung</span></div></div><div className="card info-list"><div><span className="list-icon"><Icon name="car" /></span><p><small>Standardfahrzeug</small><strong>VW Golf · ES-DF 102</strong></p></div><div><span className="list-icon"><Icon name="calendar" /></span><p><small>Arbeitszeiten</small><strong>Mo – Fr, 08:00 – 18:00</strong></p></div></div></div>;
}

const officeNav = [["Dashboard", "home"], ["Schüler", "users"], ["Fahrschulsuche", "search"], ["Fahrlehrer", "user"], ["Fahrzeuge", "car"], ["Theorie", "book"], ["Abrechnung", "wallet"], ["Einstellungen", "settings"]] as [string, IconName][];

function OfficeApp({ onHome, booking, searchRequest, accepted, onAccept }: { onHome: () => void; booking: boolean; searchRequest: boolean; accepted: boolean; onAccept: () => void }) {
  const [page, setPage] = useState("Dashboard");
  const [menu, setMenu] = useState(false);
  return <div className="office-shell">
    <aside className={menu ? "sidebar open" : "sidebar"}><div className="sidebar-logo"><Logo /></div><span className="workspace-label">ARBEITSBEREICH</span><nav>{officeNav.map(([label, icon]) => <button className={page === label ? "active" : ""} key={label} onClick={() => { setPage(label); setMenu(false); }}><Icon name={icon} />{label}{label === "Schüler" && <span>86</span>}</button>)}</nav><div className="sidebar-bottom"><button onClick={onHome}><Icon name="logout" /> Rollenwahl</button><div className="user-chip"><div className="avatar">AM</div><div><strong>Anna Müller</strong><span>Verwaltung</span></div></div></div></aside>
    <div className="office-main"><header className="office-header"><button className="mobile-menu" onClick={() => setMenu(!menu)}><Icon name="menu" /></button><div><span className="eyebrow">Fahrschule Musterstadt</span><strong>{page}</strong></div><div className="header-actions"><button className="icon-btn"><Icon name="search" /></button><button className="icon-btn"><Icon name="bell" /></button><div className="avatar">AM</div></div></header>
      <main className="office-content">{page === "Dashboard" && <OfficeDashboard booking={booking} navigate={setPage} />}{page === "Schüler" && <OfficeStudents accepted={accepted} />}{page === "Fahrschulsuche" && <OfficeSchoolSearch searchRequest={searchRequest} accepted={accepted} onAccept={onAccept} />}{page === "Fahrlehrer" && <OfficeTeachers />}{page === "Fahrzeuge" && <OfficeVehicles />}{page === "Theorie" && <OfficeTheory />}{page === "Abrechnung" && <OfficeBilling />}{page === "Einstellungen" && <OfficeSettings />}</main>
    </div>
  </div>;
}

function PageHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="page-head"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></div>{children}</div>;
}

function OfficeDashboard({ booking, navigate }: { booking: boolean; navigate: (p: string) => void }) {
  const metrics = [["Aktive Schüler", "86", "+6 diesen Monat", "users"], ["Auslastung Fahrlehrer", "81 %", "+4 % zum Vormonat", "chart"], ["Buchungen diese Woche", booking ? "143" : "142", booking ? "Gerade aktualisiert" : "12 mehr als letzte Woche", "calendar"], ["Ausfallquote", "4 %", "−1,2 % zum Vormonat", "clock"]] as [string,string,string,IconName][];
  return <><PageHead eyebrow="Donnerstag, 7. November 2025" title="Guten Morgen, Anna."><Button onClick={() => navigate("Schüler")}><Icon name="plus" /> Schüler einladen</Button></PageHead>{booking && <div className="office-live"><span className="live-dot" /><b>Neue Buchung:</b> Lena M. · Fr, 14. Nov. um 10:00 Uhr <small>soeben</small></div>}
    <div className="metric-grid">{metrics.map((m, i) => <div className="metric-card" key={m[0]}><div className={`metric-icon tone-${i}`}><Icon name={m[3]} /></div><span>{m[0]}</span><strong>{m[1]}</strong><small>{m[2]}</small></div>)}</div>
    <div className="dashboard-grid"><section className="panel utilization"><div className="panel-head"><div><span className="eyebrow">Diese Woche</span><h3>Auslastung Fahrlehrer</h3></div><button>KW 45 <Icon name="arrow" /></button></div><div className="chart-area"><div className="axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>{[["Thomas", 88], ["Sandra", 76], ["Mehmet", 92], ["Julia", 68], ["David", 81]].map(([name, val]) => <div className="bar-col" key={name}><div className="bar-value">{val}%</div><div className="vertical-bar"><span style={{height: `${val}%`}} /></div><small>{name}</small></div>)}</div></section>
    <section className="panel ready-list"><div className="panel-head"><div><span className="eyebrow">KI-Prognose</span><h3>Bald prüfungsreif</h3></div><span className="spark-icon"><Icon name="spark" /></span></div>{[["Jonas Wolf", "JW", "ca. 1 Woche", 88], ["Lena M.", "LM", "ca. 2 Wochen", 72], ["Emil Koch", "EK", "ca. 2 Wochen", 79], ["Mia Neumann", "MN", "ca. 3 Wochen", 67]].map(s => <div className="ready-row" key={s[0]}><span className="avatar">{s[1]}</span><div><strong>{s[0]}</strong><small>Klasse B · {s[3]} %</small></div><span className="prediction-badge">{s[2]}</span></div>)}<Button kind="ghost" className="full" onClick={() => navigate("Schüler")}>Alle Schüler anzeigen <Icon name="arrow" /></Button></section></div>
    <section className="panel activity-panel"><div className="panel-head"><div><span className="eyebrow">Live</span><h3>Letzte Aktivitäten</h3></div><span className="status-live"><i /> Echtzeit</span></div><div className="activity-row"><span className="activity-icon green"><Icon name="check" /></span><div><strong>Fahrstunde abgeschlossen</strong><span>Thomas Weber mit Sara Klein · Autobahnfahrt</span></div><small>vor 8 Min.</small></div><div className="activity-row"><span className="activity-icon yellow"><Icon name="calendar" /></span><div><strong>{booking ? "Neue Buchung von Lena M." : "Neue Buchung von Mia Neumann"}</strong><span>{booking ? "Freitag, 10:00 Uhr bei Thomas Weber" : "Montag, 14:00 Uhr bei Julia Frank"}</span></div><small>{booking ? "soeben" : "vor 21 Min."}</small></div></section>
  </>;
}

function OfficeStudents({ accepted = false }: { accepted?: boolean }) {
  const [invite, setInvite] = useState(false);
  const [search, setSearch] = useState("");
  const data = [...(accepted ? [["Sophie Keller", "Klasse B", "Noch offen", "0 %", "Neu"]] : []), ["Lena M.", "Klasse B", "Thomas Weber", "72 %", "Aktiv"], ["Jonas Wolf", "Klasse B", "Thomas Weber", "88 %", "Prüfung"], ["Sara Klein", "Klasse B", "Thomas Weber", "54 %", "Aktiv"], ["Emil Koch", "Klasse A", "Sandra Beck", "79 %", "Aktiv"], ["Mia Neumann", "Klasse B", "Thomas Weber", "67 %", "Aktiv"], ["Lea Schmitt", "Klasse BE", "Mehmet Yilmaz", "34 %", "Pausiert"]];
  const filtered = data.filter(r => r[0].toLowerCase().includes(search.toLowerCase()));
  return <><PageHead eyebrow="Verwaltung" title="Schüler"><Button onClick={() => setInvite(true)}><Icon name="plus" /> Schüler einladen</Button></PageHead><div className="table-tools"><div className="search-field"><Icon name="search" /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Nach Namen suchen..." /></div><select><option>Alle Klassen</option><option>Klasse B</option></select><select><option>Alle Fahrlehrer</option><option>Thomas Weber</option></select><select><option>Alle Status</option><option>Aktiv</option></select></div><div className="data-table panel"><div className="table-row table-head"><span>Schüler</span><span>Klasse</span><span>Fahrlehrer</span><span>Fortschritt</span><span>Status</span></div>{filtered.map((r, i) => <button className="table-row" key={r[0]}><span className="name-cell"><i className="avatar">{r[0].split(" ").map(x => x[0]).join("")}</i><b>{r[0]}</b></span><span>{r[1]}</span><span>{r[2]}</span><span><b>{r[3]}</b><ProgressBar value={parseInt(r[3])} /></span><span><i className={`status-tag status-${i === 1 ? "exam" : i === 5 ? "pause" : "active"}`}>{r[4]}</i></span></button>)}</div>
    {invite && <Modal onClose={() => setInvite(false)}><button className="modal-close" onClick={() => setInvite(false)}><Icon name="x" /></button><span className="modal-icon"><Icon name="users" /></span><span className="eyebrow">Neuer Fahrschüler</span><h3>Schüler einladen</h3><p>Teile den persönlichen Link oder lass den QR-Code mit dem Smartphone scannen.</p><div className="qr-code">{Array.from({length: 49}).map((_, i) => <i className={(i * 7 + i * i) % 5 < 2 ? "dark" : ""} key={i} />)}</div><div className="invite-link"><span>app.digitalefahrschule.de/e/7K4M2</span><Button onClick={() => setInvite(false)}>Link kopieren</Button></div><small className="muted">Der Einladungslink ist 7 Tage gültig.</small></Modal>}
  </>;
}

function OfficeSchoolSearch({ searchRequest, accepted, onAccept }: { searchRequest: boolean; accepted: boolean; onAccept: () => void }) {
  const [listing, setListing] = useState(true);
  const [rejected, setRejected] = useState<string[]>([]);
  const requests = [
    ...(searchRequest && !accepted ? [["Sophie Keller", "heute, 10:42", "B"]] : []),
    ["Noah Hartmann", "06.11.2025", "B"],
    ["Amelie Roth", "05.11.2025", "BE"],
    ["Finn Wagner", "04.11.2025", "A"],
  ];
  return <><PageHead eyebrow="Region Esslingen" title="Fahrschulsuche"><Button kind="secondary" onClick={() => setListing(!listing)}>Listung verwalten</Button></PageHead>
    {accepted && <div className="license-notice"><Icon name="check" /><div><strong>Sophie Keller wurde als Schülerin übernommen.</strong><span>Die Lizenz pro Schüler wird ab Ausbildungsstart berechnet.</span></div></div>}
    <section className="listing-status panel"><div><span className={listing ? "listing-dot active" : "listing-dot"} /><div><span className="eyebrow">Öffentliches Profil</span><h3>{listing ? "Listung aktiv" : "Listung pausiert"}</h3><p>Ihre Fahrschule wird Fahrschülern in der Region angezeigt.</p></div></div><div><small>Monatlicher Listungsbeitrag</small><strong>49,00 €</strong><Button kind="secondary" onClick={() => setListing(!listing)}>{listing ? "Listung pausieren" : "Listung aktivieren"}</Button></div></section>
    <div className="metric-grid search-metrics">{[["Profilaufrufe diesen Monat","412","+18 %","search"],["Anfragen",searchRequest ? "24" : "23","+5 diese Woche","users"],["Daraus Anmeldungen",accepted ? "10" : "9","39 % Konversion","check"],["Rang in der Region","Platz 3","von 14 Fahrschulen","chart"]].map((m,i) => <div className="metric-card" key={m[0]}><div className={`metric-icon tone-${i}`}><Icon name={m[3] as IconName} /></div><span>{m[0]}</span><strong>{m[1]}</strong><small>{m[2]}</small></div>)}</div>
    <div className="search-office-grid"><section className="panel request-panel"><div className="panel-head"><div><span className="eyebrow">Direkt aus der Suche</span><h3>Neue Anfragen</h3></div><span className="status-live"><i /> Echtzeit</span></div>{requests.filter(r => !rejected.includes(r[0])).map((r,i) => <div className={i === 0 && searchRequest ? "request-row new" : "request-row"} key={r[0]}><span className="avatar">{r[0].split(" ").map(x => x[0]).join("")}</span><div><strong>{r[0]}</strong><small>{r[1]} · Klasse {r[2]}</small></div><Button kind="secondary" onClick={() => setRejected([...rejected, r[0]])}>Ablehnen</Button><Button onClick={r[0] === "Sophie Keller" ? onAccept : () => setRejected([...rejected, r[0]])}>Annehmen</Button></div>)}</section>
    <section className="panel rank-tips"><div className="panel-head"><div><span className="eyebrow">Plattformdaten</span><h3>So verbessern Sie Ihren Rang</h3></div><Icon name="spark" /></div>{[["Wartezeit senken","Aktuell 4,6 Tage · Region Ø 3,9 Tage"],["Stundenkontinuität erhöhen","12 % Ihrer Schüler warten länger als 7 Tage"],["Praxisquote stabilisieren","78 % bestanden · Region Ø 76 %"]].map((t,i) => <div className="tip-row" key={t[0]}><span>{i+1}</span><div><strong>{t[0]}</strong><small>{t[1]}</small></div></div>)}<p className="rank-note"><Icon name="info" /> Der Rang basiert nur auf Ausbildungsdaten und kann nicht gekauft werden.</p></section></div>
    <section className="panel profile-preview"><div className="panel-head"><div><span className="eyebrow">Profil-Vorschau</span><h3>So sehen Fahrschüler Ihre Fahrschule</h3></div><Button kind="ghost">Profil bearbeiten <Icon name="arrow" /></Button></div><div className="preview-body"><span className="rank-number">3</span><div><h3>Fahrschule Musterstadt</h3><p>Musterstraße 12 · 2,6 km entfernt</p><div className="school-badges"><span>Ø 32 Fahrstunden</span><span>Ø 3.180 €</span><span>78 % bestanden</span></div></div><div className="personal-prediction"><Icon name="spark" /><span><small>Persönliche Prognose</small><strong>Fertig in ca. 14 Wochen · ca. 3.090 €</strong></span></div></div></section>
  </>;
}

function OfficeTeachers() {
  const teachers = [["Thomas Weber", "TW", 88, "28 Schüler", "B, BE"], ["Sandra Beck", "SB", 76, "21 Schüler", "A, B"], ["Mehmet Yilmaz", "MY", 92, "25 Schüler", "B, C"], ["Julia Frank", "JF", 68, "19 Schüler", "B"], ["David Lorenz", "DL", 81, "23 Schüler", "B, BE"]];
  return <><PageHead eyebrow="Team" title="Fahrlehrer"><Button><Icon name="plus" /> Fahrlehrer anlegen</Button></PageHead><div className="teacher-office-grid">{teachers.map(t => <div className="panel teacher-office-card" key={t[0]}><div className="teacher-line"><span className="avatar large">{t[1]}</span><div><h3>{t[0]}</h3><span>Klassen {t[4]}</span></div><span className="status-tag status-active">Verfügbar</span></div><div className="util-row"><span>Wochenauslastung</span><b>{t[2]} %</b></div><ProgressBar value={Number(t[2])} /><div className="teacher-foot"><span><Icon name="users" /> {t[3]}</span><span><Icon name="calendar" /> Kalender</span></div></div>)}</div></>;
}

function OfficeVehicles() {
  const vehicles = [["VW Golf", "ES-DF 102", "Schaltgetriebe", "Im Einsatz", 78], ["VW ID.3", "ES-DF 104", "Automatik", "Verfügbar", 54], ["BMW 1er", "ES-DF 106", "Schaltgetriebe", "Im Einsatz", 86], ["Honda CB 650R", "ES-DF 201", "Klasse A", "Werkstatt", 31]];
  return <><PageHead eyebrow="Fuhrpark" title="Fahrzeuge"><Button><Icon name="plus" /> Fahrzeug hinzufügen</Button></PageHead><div className="vehicle-grid">{vehicles.map((v,i) => <div className="panel vehicle-card" key={v[0]}><div className="vehicle-visual"><Icon name="car" size={48} /><span className={`status-tag ${i === 3 ? "status-pause" : i === 1 ? "status-active" : "status-exam"}`}>{v[3]}</span></div><h3>{v[0]}</h3><p>{v[1]} · {v[2]}</p><div className="util-row"><span>Auslastung diese Woche</span><b>{v[4]} %</b></div><ProgressBar value={Number(v[4])} /></div>)}</div></>;
}

function OfficeTheory() {
  const rows = [["Lena M.", 9, 14, 78], ["Jonas Wolf", 14, 14, 92], ["Sara Klein", 7, 14, 69], ["Emil Koch", 12, 14, 84], ["Mia Neumann", 8, 14, 74]];
  return <><PageHead eyebrow="Ausbildungsnachweis" title="Theorie-Fortschritt"><Button kind="secondary"><Icon name="file" /> Exportieren</Button></PageHead><div className="panel theory-office"><div className="panel-head"><div><span className="eyebrow">Online-Lektionen</span><h3>Fortschritt der Fahrschüler</h3></div><span className="status-live"><i /> Automatisch synchronisiert</span></div><div className="theory-table">{rows.map(r => <div key={r[0]}><span className="avatar">{r[0].split(" ").map(x => x[0]).join("")}</span><strong>{r[0]}</strong><div><span>{r[1]} von {r[2]} Lektionen</span><ProgressBar value={Number(r[1])/14*100} /></div><b>{r[3]} % Lernstand</b><span className={r[1] === 14 ? "check-round done" : "check-round"}>{r[1] === 14 ? <Icon name="check" /> : r[1]}</span></div>)}</div></div></>;
}

function OfficeBilling() {
  const rows = [["RE-2025-184", "Lena M.", "420,00 €", "05.11.2025", "Bezahlt"], ["RE-2025-183", "Jonas Wolf", "510,00 €", "03.11.2025", "Offen"], ["RE-2025-182", "Sara Klein", "255,00 €", "01.11.2025", "Bezahlt"], ["RE-2025-181", "Mia Neumann", "340,00 €", "29.10.2025", "Überfällig"]];
  return <><PageHead eyebrow="Finanzen" title="Abrechnung"><Button><Icon name="plus" /> Neue Rechnung</Button></PageHead><div className="billing-metrics"><div className="panel"><span>Umsatz November</span><b>18.420,00 €</b><small>+8,4 % zum Vormonat</small></div><div className="panel"><span>Offene Rechnungen</span><b>4.270,00 €</b><small>12 Rechnungen</small></div><div className="panel"><span>Überfällig</span><b>680,00 €</b><small className="danger-text">2 Rechnungen prüfen</small></div></div><section className="panel platform-costs"><div className="panel-head"><div><span className="eyebrow">Plattformkosten</span><h3>Abrechnung Digitale Fahrschule</h3></div><span>November 2025</span></div><div><span className="cost-symbol"><Icon name="users" /></span><div><strong>Lizenzen pro Fahrschüler</strong><small>86 aktive Lizenzen × 8,90 €</small></div><b>765,40 €</b></div><div><span className="cost-symbol"><Icon name="search" /></span><div><strong>Listungsbeitrag Fahrschulsuche</strong><small>Monatliche Listung · Region Esslingen</small></div><b>49,00 €</b></div><footer><span>Summe Plattformkosten</span><strong>814,40 €</strong></footer></section><div className="data-table panel billing-table"><div className="table-row table-head"><span>Rechnung</span><span>Schüler</span><span>Betrag</span><span>Datum</span><span>Status</span></div>{rows.map((r,i) => <button className="table-row" key={r[0]}><span><b>{r[0]}</b></span><span>{r[1]}</span><span><b>{r[2]}</b></span><span>{r[3]}</span><span><i className={`status-tag ${i===3 ? "status-pause" : i===1 ? "status-exam" : "status-active"}`}>{r[4]}</i></span></button>)}</div></>;
}

function OfficeSettings() {
  const [saved, setSaved] = useState(false);
  return <><PageHead eyebrow="Konfiguration" title="Einstellungen">{saved && <span className="saved-label"><Icon name="check" /> Gespeichert</span>}</PageHead><div className="settings-grid"><section className="panel settings-panel"><h3>Fahrschule</h3><label><span>Name</span><input defaultValue="Fahrschule Musterstadt" /></label><label><span>Adresse</span><input defaultValue="Musterstraße 12, 73728 Esslingen" /></label><label><span>E-Mail</span><input defaultValue="buero@fahrschule-musterstadt.de" /></label><Button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}>Änderungen speichern</Button></section><section className="panel settings-panel"><h3>Benachrichtigungen</h3>{["Neue Buchungen", "Stornierungen", "Zahlungseingänge", "Prüfungsreife-Prognosen"].map((x,i) => <label className="toggle-row" key={x}><span>{x}</span><input type="checkbox" defaultChecked={i !== 2} /><i /></label>)}</section></div></>;
}

export default function App() {
  const [role, setRole] = useState<Role>("home");
  const [booking, setBooking] = useState(false);
  const [searchRequest, setSearchRequest] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [freshStudent, setFreshStudent] = useState(false);
  if (role === "student") return <StudentApp onHome={() => setRole("roleSelection")} booking={booking} setBooking={setBooking} fresh={freshStudent} />;
  if (role === "teacher") return <TeacherApp onHome={() => setRole("roleSelection")} booking={booking} />;
  if (role === "office") return <OfficeApp onHome={() => setRole("roleSelection")} booking={booking} searchRequest={searchRequest} accepted={accepted} onAccept={() => setAccepted(true)} />;
  if (role === "schoolSearch") return <SchoolSearchApp onHome={() => setRole("home")} onRequest={() => setSearchRequest(true)} onStudent={() => { setFreshStudent(true); setRole("student"); }} />;
  if (role === "roleSelection") return <RoleHome onChoose={setRole} onBack={() => setRole("home")} />;
  return <LandingHome onChoose={setRole} />;
}
