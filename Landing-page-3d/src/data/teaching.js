// Teaching highlights shown in the "Teaching" section (websites only, no textbooks).
//
// HOW TO MAINTAIN (no database needed)
//   Add a card / course / day : copy a neighbouring object, edit it.
//   Remove                    : delete the object.
//   Then commit + push (or edit this file on github.com and commit there): the site redeploys itself.
//
// Card fields
//   id, audience (small label), title, description, meta (small line, optional),
//   tint (true = light-blue card, use for at most one card),
//   links   buttons on the card: [{ label, href, internal? }], first one is the primary button,
//           internal: true = a route inside this site (#/...), opens in the same tab,
//   courses (optional) groups of playgrounds, shown collapsed so the page stays calm:
//           [{ id, title, repo (GitHub link), playgrounds: [[label, href], ...] }]
//           Each playground opens inside this site at #/aion/<course id>/<position>.

// Address of the Latihan Python website that is shown inside this site at #/latihan.
export const LATIHAN_URL = 'https://latihan-usg.vercel.app/';

export const MATERIALS = [
    {
        id: 'latihan-python',
        audience: 'Formal education',
        title: 'Latihan Python',
        description:
            'A coding practice website for a programming course: students write and run Python right in the browser and move on by passing coding challenges. Already used by students.',
        meta: 'Algorithms & programming · Bahasa Indonesia',
        tint: false,
        links: [
            // internal: opens inside this site (see components/pages/LatihanPage.jsx)
            { label: 'Open website', href: '#/latihan', internal: true },
            { label: 'Source', href: 'https://github.com/attoyibi/latihan-python-usg' },
        ],
        courses: [],
    },
    {
        id: 'aion',
        audience: 'Corporate training',
        title: 'Teaching materials, playgrounds and tasks for AION',
        description:
            'I help AION build corporate learning for German learners: study material, interactive playgrounds and tasks with exportable working documents. Three courses are published, one playground per course day.',
        meta: 'English and German',
        tint: true,
        links: [],
        courses: [
            {
                id: 'customer-success',
                title: 'Customer Success · Retention Lab',
                repo: 'https://github.com/orgs/AION-CS/repositories',
                playgrounds: [
                    ['Day 1', 'https://aion-cs-day1.vercel.app/'],
                    ['Day 2', 'https://aion-cs-day2.vercel.app/'],
                    ['Day 3', 'https://day3-sandy.vercel.app'],
                    ['Day 4', 'https://day4-ecru.vercel.app'],
                    ['Day 5', 'https://day5-snowy.vercel.app'],
                    ['Day 6', 'https://day6-rho.vercel.app'],
                    ['Day 7', 'https://day7-pi.vercel.app'],
                    ['Day 8', 'https://day8-liart.vercel.app/'],
                    ['Day 9', 'https://day9-six.vercel.app/'],
                    ['Day 10', 'https://day10-omega.vercel.app/'],
                    ['Day 11', 'https://day11-inky.vercel.app/'],
                    ['Day 12', 'https://day12-xi.vercel.app/'],
                    ['Day 13', 'https://day13-eosin.vercel.app/'],
                    ['Day 14', 'https://day14-mu.vercel.app/'],
                    ['Day 15', 'https://day15-one.vercel.app/'],
                    ['Day 16', 'https://day16-five.vercel.app/'],
                ],
            },
            {
                id: 'ux',
                title: 'UX · Class playgrounds',
                repo: null,
                playgrounds: [
                    ['Day 9', 'https://aion-uiux-day-9-gamification.netlify.app/'],
                    ['Day 10', 'https://claude.ai/public/artifacts/61147ebd-56cb-489f-a3c9-bc48a910abe1'],
                    ['Day 11', 'https://aion-uiux-day11-ui-voice.netlify.app/'],
                    ['Day 12 (a)', 'https://storied-duckanoo-da5583.netlify.app/'],
                    ['Day 12 (b)', 'https://poetic-sprite-62cb39.netlify.app/'],
                    ['Day 13', 'https://aion-ux-day-13-inclusive-design-pat.vercel.app/'],
                    ['Day 14', 'https://aion-ux-day14.vercel.app/'],
                    ['Day 15', 'https://aion-ux-day15-tracking.vercel.app/#/debrief'],
                    ['Day 16', 'https://aion-ux-day16-immersive-prototyping.vercel.app/'],
                ],
            },
            {
                id: 'green-it',
                title: 'Green IT',
                repo: 'https://github.com/orgs/AION-Green-IT/repositories',
                playgrounds: [
                    ['Day 1', 'https://aion-green-it-day1-green-it-as-a-le.vercel.app/'],
                    ['Day 2', 'https://aion-green-it-day2-it-as-an-environ.vercel.app/learn/'],
                    ['Day 3', 'https://aion-green-it-day3.netlify.app/'],
                    ['Day 4', 'https://aion-green-it-day4-eq68.vercel.app/module-3/level-1/'],
                    ['Day 5', 'https://aion-green-it-day5.vercel.app/'],
                    ['Day 6', 'https://aion-green-it-day6-final-data-cente.vercel.app/'],
                    ['Day 7', 'https://aion-green-it-day7.vercel.app/'],
                    ['Day 8', 'https://aion-green-it-day8-v2.vercel.app/'],
                    ['Day 9', 'https://aion-green-it-day9.vercel.app/'],
                    ['Day 10', 'https://aion-green-it-day10.vercel.app/'],
                    ['Day 11', 'https://aion-green-it-day11.vercel.app/'],
                    ['Day 12', 'https://aion-green-it-day12.vercel.app/'],
                    ['Day 13', 'https://aion-green-it-day13.vercel.app/'],
                    ['Day 14', 'https://aion-green-it-day14.vercel.app/'],
                    ['Day 15', 'https://aion-green-it-day15.vercel.app/'],
                    ['Day 16', 'https://aion-green-it-day16.vercel.app/'],
                ],
            },
        ],
    },
];
