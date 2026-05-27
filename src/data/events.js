// ─── EVENTS DATA ───────────────────────────────────────────────────────────
// Edit this file to update event information on the website.
// After editing, commit and push to GitHub — Netlify will auto-deploy.

// The next / upcoming journal club shown on the home page hero and events page.
export const upcomingEvent = {
  dayLabel: "Fri · 27 May 2026",
  time: "7:30",
  timeSuffix: "pm",
  type: "Journal Club · Fortnightly",
  title: "Spare-part reconstruction in sarcoma surgery",
  description:
    "Presented by a member of the NZPSEG committee · open to all medical students. Online — link shared with the mailing list.",
  // Hero sidebar fields
  when: "Friday 27 May, 7:30pm",
  format: "Online — link via mailing list",
  host: "NZPSEG Committee",
};

// The featured upcoming event (Careers Evening or similar big event).
// Set dateAnnounced to false if the date isn't confirmed yet.
export const featuredEvent = {
  eyebrow: "Featured · Upcoming",
  title: "NZPSEG Careers Evening",
  description:
    "An evening with plastic surgeons working across New Zealand. Pathways onto the training programme, the realities of the speciality, electives, research, and a long Q&A. Open to all medical students.",
  details: {
    DATE: "To be announced — Semester 2, 2026",
    VENUE: "Auckland — University of Auckland (TBC)",
    LIVESTREAM: "Yes — for Otago, Wellington & Christchurch",
    RSVP: "Opens 8 weeks prior",
  },
  // Optional image (place in public/assets/ and set path here)
  image: null, // e.g. "/assets/careers-evening-2026.jpg"
};

// Coming-up teaser shown in the hero sidebar
export const comingUp = "NZPSEG Careers Evening — Semester 2, 2026";

// Past events — newest first
// Add entries here once events have been run, e.g.:
// { date: "2026 · Jun", title: "Event title", who: "Presenter name", location: "Auckland" }
export const pastEvents = [];
