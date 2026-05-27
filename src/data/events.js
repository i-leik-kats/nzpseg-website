// ─── EVENTS DATA ───────────────────────────────────────────────────────────
// Edit this file to update event information on the website.
// After editing, commit and push to GitHub — Netlify will auto-deploy.

// The next / upcoming journal club shown on the home page hero and events page.
export const upcomingEvent = {
  dayLabel: "Fri · 29 May 2026",
  time: "7:30",
  timeSuffix: "pm",
  type: "Journal Club",
  title: "Spare-part reconstruction in sarcoma surgery",
  description:
    "Presented by Kryan Fawkner, third year medical student",
  // Hero sidebar fields
  when: "Friday 29 May, 7:30pm",
  format: "Online",
  host: "Jashan Saini — Research Coordinator",
};

// The featured upcoming event (Careers Evening or similar big event).
// Set dateAnnounced to false if the date isn't confirmed yet.
export const featuredEvent = {
  eyebrow: "Careers",
  title: "NZPSEG Careers Evening",
  description:
    "An evening with plastic surgeons working across New Zealand. Pathways onto the training programme, the realities of the speciality, electives, research, and a long Q&A. Open to all medical students.",
  details: {
    DATE: "Thursday 23 July, 6:30–8pm",
    VENUE: "University of Auckland, Grafton Campus",
  },
  // Optional image (place in public/assets/ and set path here)
  image: null, // e.g. "/assets/careers-evening-2026.jpg"
};

// Coming-up teaser shown in the hero sidebar
export const comingUp = "NZPSEG Careers Evening — Semester 2, 2026";

// Past events — newest first
export const pastEvents = [
  {
    date: "2026 · May 12",
    type: "Journal Club",
    title: "Training the Plastic Surgeon: Comparing Australasian and United States Pathways Amid Service Demand",
    who: "Presented by Ella Philp & Isaac Liu, 5th year medical students, University of Auckland",
    location: "Online",
  },
  {
    date: "2026 · Apr 21",
    type: "Journal Club",
    title: "Regional Osteopenia and Muscle Atrophy in Patients with Brachial Plexus Injury, a cross-sectional study",
    who: "Presented by Jashan Saini, 3rd year medical student, University of Auckland",
    location: "Online",
  },
];
