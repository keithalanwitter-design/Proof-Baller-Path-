# PROOF — Player development, proven weekly.

A thesis, a brand, and a website for the business youth basketball training should be.

Built for Storm Basketball (Belleville, IL) — October 2026.
This repo is a working thesis, not a finished company. Brand, pricing, and copy are
Muse's recommendations for Keith to revise, test, and own.

---

## THE PROBLEM — what’s actually broken

The youth training industry sells **sessions**. Sessions don’t develop players.
Five disconnects, each backed by research (see `docs/research-brief.md` for sources):

### 1. The Hour Myth
A training client gets 1–2 expert-coached hours out of a 168-hour week. The industry
sells those 1–2 hours; the other **166 are unmanaged** — by every program. Deliberate
practice explains only ~12–18% of performance variance (Macnamara et al.), and most
damning of all: **zero published studies measure between-session practice assignments
in youth sport.** The layer where development actually happens is so unmanaged the
science doesn’t even study it.

### 2. The Black Box
Parents spend $1,000–$2,300/year on basketball and cannot see development happening.
Cost is now the #1 quit driver (23%) — but “not worth it” is what invisibility sounds
like. Retention isn’t a moment; it’s a slow, invisible drift starting month 2–3, when
a parent silently asks: *“Is this actually working?”* Nobody answers them.

### 3. The Plateau Machine
Reps without feedback don’t transfer. Blocked drills look productive in practice and
disappear in games (the performance-vs-learning distinction: Shea & Morgan; Guadagnoli
& Lee’s Challenge Point Framework). A kid doing the same solo shooting routine between
sessions plateaus **by design**.

### 4. The Motivation Trap
~70% of kids quit organized sports by age 13. Sustained effort needs autonomy, competence,
and relatedness (Deci & Ryan) — and controlling accountability (public leaderboards,
shame, pressure) predicts dropout. Most “accountability” products are built to kill the
motivation they need.

### 5. The 90-Day Cliff
26% of new lesson clients never book a second session; the median trainer keeps 24%
past 90 days. The between-session system matters most as a **front-loaded retention
engine** — win the first 90 days or lose the customer.

## THE FIX — what the business should actually sell

**Don’t sell sessions. Sell development — and development happens between sessions.**

The product is a weekly three-party proof loop:

- **Monday — Coach assigns.** The week’s work: designed, varied, game-like. ~20 min/day,
  calibrated to the player, load-managed (never exceeding a 2:1 organized-to-free-play ratio).
- **Midweek — Player submits proof.** A 30-second clip, sent by text. No app to install.
- **Coach responds — bandwidth-style.** Timestamped feedback on the 1–2 things that matter
  in that clip. Not every-rep correction (the evidence says targeted beats constant, and
  it’s the only feedback load that survives at 30+ kids).
- **Sunday — Parent sees the report.** Assigned / done / feedback given / next week.
  The black box, opened weekly.

Design principles (non-negotiable):
1. **Human coach in the loop, always.** Pure app/remote without a coach doesn’t sustain
   (see: HomeCourt’s $8.5M → entertainment pivot). The labor is the moat, not the obstacle.
2. **Private progress, never public shaming.** Streaks and visible growth for the kid;
   no public leaderboards (the evidence says they backfire).
3. **Player choice inside structure.** Autonomy sustains effort; the coach designs the menu,
   the player picks.
4. **Rent the tech, don’t build it.** Phone clips + text + timestamped comments (or OnForm
   as an upgrade path). Keith is not a software company; the moat is the system.
5. **Front-load the first 90 days.** Onboarding is habit formation, not assessment.

## THE BUSINESS MODEL

**The between-system is not a standalone product.** Parents buy what they can see
(sessions). Selling “accountability without sessions” fights buyer psychology. Instead:
every membership includes the system. The system is *why the sessions are worth it* —
and why kids actually improve.

| Tier | Price | What’s included |
|---|---|---|
| **PROOF** | $149/mo | 1 small-group session/week + full between-system: weekly assignment, video proof review, timestamped coach feedback, parent weekly report |
| **PROOF+** | $229/mo | 2 sessions/week + everything in Proof + monthly 15-min 1:1 film check-in + priority (48h) feedback |

Why this pricing: small-group training memberships benchmark $119–500/mo nationally;
$149/$229 sits accessibly for the Belleville market while the between-system justifies
the premium over session-only competitors. Tiers differ by **session volume + feedback
priority** — the system itself is the brand and never an upsell.

**Roster cap: 36.** The loop is human work — assign, review, report, every week.
The cap is honest scarcity: it’s what keeps the feedback real. (This is also the moat:
national brands can’t scale this cheaply, so they automate it or luxury-price it.)

Unit sketch: 36 members × ~$175 blended = ~$6,300/mo recurring from the membership base,
before privates, camps, and team training. The between-system is the retention engine
that keeps month-to-month members past the 90-day cliff (15 mo median → the goal is 24+).

## WHAT’S DELIBERATELY NOT IN V1

- **No AI video analysis build.** Rent tools; the system is the product.
- **No app.** A phone and texting beat an install nobody completes.
- **No public leaderboards.** Private streaks only.
- **No “virtual-only” tier.** The system rides with sessions.
- **No fake testimonials on the site.** The site shows a *sample parent report* instead —
  product proof, not invented quotes.

## OPEN QUESTIONS FOR KEITH

1. Brand: does PROOF resonate, or does it fold back into Baller Path / Storm?
2. Pricing: $149/$229 vs. your current $79/$149 — is the Belleville market ready?
3. Roster cap: is 36 the right number for your actual week?
4. Feedback cadence: every player every week, or rotation (e.g., deep feedback biweekly)?
5. The 5th-grade team: does the team get the system as a pilot cohort?

---

## This repo

- `index.html` — the brand site (single page, premium build)
- `css/style.css`, `js/main.js` — design system + interactions
- `assets/` — art-directed imagery
- `docs/research-brief.md` — the full research behind the thesis (sources cited)

Live: `https://keithalanwitter-design.github.io/proof/` (GitHub Pages)
