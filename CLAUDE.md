# Résonance Citoyenne - Project Instructions for Claude Code

## Project Overview

**Résonance Citoyenne** is an experimental civic engagement platform designed to explore and discover what truly resonates with citizens. It's a space for collective debate, experimentation, and finding shared values. The platform may explore various democratic mechanisms like quadratic voting as one potential tool among others, but the core mission is about facilitating authentic civic dialogue and discovering collective resonance.

**Mission**: Create a space where citizens can experiment, debate, and discover what truly resonates within their community. Digital democracy tools like quadratic voting are potential paths to explore, not predetermined solutions.

**Core Values**:
- **Warmth & Humanity**: Convivial, welcoming, "à la bonne franquette"
- **Openness to Experimentation**: Testing different civic engagement methods, learning together
- **Universal Accessibility**: For ages 18-100+, all digital literacy levels
- **Collective Resonance**: Connection, vibration, discovering what moves us together
- **Authentic Dialogue**: Real conversations, genuine debate, finding common ground
- **Democratic Exploration**: Not prescriptive, but exploratory and adaptive

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing

## Design System Quick Reference

### Colors (Warm & Accessible)
```
Primary:
- Orange Chaleureux: #FF6B35 (passion, energy, action)
- Terracotta: #E07A5F (humanity, earth)
- Jaune Miel: #F4A261 (optimism, clarity)

Secondary:
- Vert Forêt: #2A9D8F (nature, growth)
- Bleu Ciel: #457B9D (trust, horizon)

Neutrals:
- Crème: #F8F4F0 (warm background)
- Charcoal: #3D405B (text)
- Gris Chaud: #81858C (secondary text)

Semantic:
- Success: #2E7D32 (green)
- Warning: #F57C00 (orange)
- Error: #D32F2F (red)
- Info: #0288D1 (blue)
```

### Typography
```
Display: Fraunces (serif) - Headings, emotional moments
Body: Inter (sans-serif) - Readable text, UI
Accent: Caveat (handwriting) - Quotes only, use sparingly

Scale:
- Hero: 56px (3.5rem) Fraunces Bold
- H1: 48px (3rem) Fraunces Bold
- H2: 36px (2.25rem) Fraunces SemiBold
- H3: 28px (1.75rem) Fraunces SemiBold
- Body: 16px (1rem) Inter Regular (minimum size)
- Small: 14px (0.875rem) Inter Regular
- Caption: 12px (0.75rem) Inter Medium (minimum)
```

### Spacing (8px base unit)
```
xxs: 4px, xs: 8px, sm: 12px, md: 16px ⭐
lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px
```

### Border Radius (Organic)
```
Small: 8px, Medium: 12px ⭐, Large: 16px, Full: 9999px
```

### Key Components
- **Buttons**: Orange #FF6B35, white text, 12px 24px padding, 12px radius, min 48px height
- **Cards**: White bg, 12px radius, soft shadow, 4px colored left border, 24px padding
- **Inputs**: 48px height, 2px border, 8px radius, orange focus ring
- **Vote Slider**: 0-10 range, orange track, organic design, "Chuchotement → Cri du cœur"

## Accessibility Requirements (CRITICAL)

- **WCAG 2.1 AA minimum** (aim for AAA)
- **RGAA 4.1** (French standard)
- Color contrast: 4.5:1 minimum for text, 7:1 ideal
- Touch targets: Minimum 44x44px
- Keyboard navigation: All interactive elements
- Focus indicators: 2px orange outline, 2px offset
- ARIA labels: All icons and interactive elements
- Screen reader: Semantic HTML, descriptive labels
- Reduced motion: Respect `prefers-reduced-motion`
- Text resize: Support 200% zoom without breaking

## Tone & Voice

**Language**: French, "tu" form (friendly, not formal "vous")
**Style**: Warm, direct, encouraging, "à la bonne franquette"

**Examples:**
✅ "Rejoins l'Agora et fais entendre ta voix"
✅ "Ta voix compte ❤️"
✅ "Oups, un petit couac ! On règle ça ensemble ?"
✅ "Faire résonner ma voix" (not "Voter")

❌ "Inscrivez-vous pour accéder à la plateforme"
❌ "Soumettre votre vote"
❌ "Erreur 500"

## Technology Stack

### Frontend
- **Framework**: [To be decided - React/Next.js recommended]
- **Styling**: Tailwind CSS (utility-first, design tokens in config)
- **Icons**: Lucide Icons (rounded, 2px stroke)
- **Animations**: Framer Motion or CSS transitions
- **Fonts**: Google Fonts (Fraunces, Inter, Caveat)

### Responsive Approach
- **Mobile-first**: Design for 375px width first
- **Breakpoints**:
  - Mobile: 320-767px
  - Tablet: 768-1023px
  - Desktop: 1024-1439px
  - Large: 1440px+

## Development Guidelines

### When building UI components:
1. **Always reference** `/context/design-principles.md` for specifications
2. **Check** `/context/style-guide.md` for brand colors, typography, spacing
3. **Use design tokens** (never hardcode colors like `#FF0000`, use `text-orange` or CSS variables)
4. **Test keyboard navigation** after every interactive component
5. **Validate contrast** for all text/background combinations
6. **Add ARIA labels** for screen readers
7. **Mobile-first**: Build for small screens first, enhance for desktop
8. **Warm & human**: Prioritize organic shapes, soft shadows, friendly language

### Component Checklist
Before marking a component complete:
- [ ] Matches design specifications in `/context/design-principles.md`
- [ ] Uses design tokens (colors, spacing, typography)
- [ ] Keyboard accessible (Tab, Enter, Escape work)
- [ ] Visible focus indicators (2px orange outline)
- [ ] ARIA labels on interactive elements
- [ ] Touch targets minimum 44x44px
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Color contrast WCAG AA (4.5:1 minimum)
- [ ] Respects `prefers-reduced-motion`
- [ ] Tested in browser with Playwright

## Core Features to Explore

### 1. Civic Dialogue Space
- Topic cards for discussion (title, description, category, engagement level)
- Various interaction mechanisms (could include voting, commenting, prioritization)
- Flexible engagement tools (adaptable based on experimentation)
- Clear explanations of any mechanism being tested

### 2. Resonance Discovery Module
- Visualize collective sentiment (various visualization methods to explore)
- Show participation patterns and community engagement
- Transparency in all interactions (while respecting privacy)

### 3. Citizen Space
- Participation history
- Personal reflections and contributions
- Settings (notifications, accessibility, language)
- Community connections

### 4. Homepage - Invitation to Explore
- Hero section (large heading, photo of citizens, primary CTA: "Rejoins l'expérimentation")
- What is Résonance? (experimental civic space, not a fixed platform)
- Current experiments and discussions
- Community stats (citizens exploring, active discussions)

## Questions?

If unsure about design decisions:
1. Check `/context/design-principles.md` first
2. Check `/context/style-guide.md` for brand guidelines
3. Ask: "Does this choice serve democratic participation?"
4. Prioritize: Accessibility > Aesthetics
5. Choose: Warmth > Precision, Clarity > Cleverness

---

**Remember**: We're not building a fixed platform, we're creating an **experimental space for civic exploration**. Every design choice should feel warm, human, open, and inviting to experimentation. We're discovering what resonates together. 🌊
