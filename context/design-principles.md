# Résonance Citoyenne - Design Principles & Checklist

## I. Core Design Philosophy & Strategy

*   [ ] **Citizens First (Citoyens d'Abord):** Prioritize accessibility for ALL citizens (18-100+ years, all digital literacy levels). Every design decision must serve democratic participation.
*   [ ] **Warmth & Humanity (Chaleur & Humanité):** Create a welcoming, "à la bonne franquette" experience that feels like a community gathering, not a government form.
*   [ ] **Trust & Transparency (Confiance & Transparence):** Design must convey legitimacy, security, and democratic integrity. Every vote counts and is protected.
*   [ ] **Resonance Over Transaction (Résonance sur Transaction):** This is about connection, not completion. Design should evoke emotional engagement with civic issues.
*   [ ] **Simplicity & Clarity (Simplicité & Clarté):** Quadratic voting is complex; the interface must be dead simple. No jargon, clear labels, obvious actions.
*   [ ] **Organic & Alive (Organique & Vivant):** Avoid cold, rigid, "dashboard" aesthetics. Use soft shapes, warm colors, breathing animations.
*   [ ] **Accessibility (WCAG AA+, RGAA 4.1):** Full compliance with French accessibility standards. High contrast, keyboard navigation, screen reader optimized.
*   [ ] **Mobile-First Democracy:** Most citizens will participate via smartphone. Design for touch, small screens, and one-handed use.

## II. Design System Foundation (Tokens & Core Components)

### Color Palette

*   [ ] **Define a Warm Color Palette:**
    *   [ ] **Primary - Orange Chaleureux:** `#FF6B35` (passion citoyenne, énergie, action)
    *   [ ] **Secondary - Terracotta:** `#E07A5F` (humanité, ancrage, terre)
    *   [ ] **Accent - Jaune Miel:** `#F4A261` (optimisme, lumière, clarté)
    *   [ ] **Nature - Vert Forêt:** `#2A9D8F` (croissance, vie collective, espoir)
    *   [ ] **Trust - Bleu Ciel:** `#457B9D` (confiance, horizon, ouverture)
*   [ ] **Define Neutral Palette (Warm Grays):**
    *   [ ] Fond Crème: `#F8F4F0` (warm background, not cold white)
    *   [ ] Texte Charbon: `#3D405B` (soft black for text)
    *   [ ] Gris Chaud: `#81858C` (secondary text, borders)
    *   [ ] Gris Claire: `#E5E5E5` (dividers, subtle borders)
*   [ ] **Semantic Colors:**
    *   [ ] Success (Vote confirmé): `#2E7D32` (vert nature)
    *   [ ] Warning (Crédits bas): `#F57C00` (orange attention)
    *   [ ] Error (Erreur): `#D32F2F` (rouge, used sparingly)
    *   [ ] Info (Information): `#0288D1` (bleu info)
*   [ ] **Dark Mode Palette:** Create warm dark mode (not pure black, use `#1A1A1A` charcoal)
*   [ ] **Accessibility Check:** ALL color combinations MUST meet WCAG AA minimum (4.5:1 for text, 3:1 for UI). Aim for AAA (7:1) where possible.

### Typography

*   [ ] **Establish a Dual-Font System:**
    *   [ ] **Display Font - Fraunces:** Variable serif font for headings, hero text, emotional moments
        *   Weights: Regular (400), SemiBold (600), Bold (700)
        *   Use "Soft" axis for warmth
        *   Google Fonts: `font-family: 'Fraunces', serif;`
    *   [ ] **Body Font - Inter:** Clean sans-serif for readability and accessibility
        *   Weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
        *   Excellent screen readability, extensive language support
        *   Google Fonts: `font-family: 'Inter', sans-serif;`
    *   [ ] **Accent Font - Caveat (Optional):** Handwriting font for citizen quotes, testimonials, personal notes
        *   Weight: Regular (400), Bold (700)
        *   Use sparingly for authenticity
        *   Google Fonts: `font-family: 'Caveat', cursive;`
*   [ ] **Define Typographic Scale:**
    *   [ ] Hero (H0): 56px / 3.5rem - Fraunces Bold (homepage hero only)
    *   [ ] H1: 48px / 3rem - Fraunces Bold (line-height: 1.2)
    *   [ ] H2: 36px / 2.25rem - Fraunces SemiBold (line-height: 1.3)
    *   [ ] H3: 28px / 1.75rem - Fraunces SemiBold (line-height: 1.4)
    *   [ ] H4: 24px / 1.5rem - Inter Bold (line-height: 1.4)
    *   [ ] Body Large: 18px / 1.125rem - Inter Regular (line-height: 1.6)
    *   [ ] Body (Default): 16px / 1rem - Inter Regular (line-height: 1.6)
    *   [ ] Body Small: 14px / 0.875rem - Inter Regular (line-height: 1.5)
    *   [ ] Caption: 12px / 0.75rem - Inter Medium (line-height: 1.4)
*   [ ] **Line Height for Readability:** 1.6 for body text, 1.2-1.4 for headings
*   [ ] **Never use text smaller than 14px** (accessibility requirement)

### Spacing System

*   [ ] **Define 8px Base Unit:**
    *   [ ] 4px (0.25rem) - xxs (tight internal spacing)
    *   [ ] 8px (0.5rem) - xs (component internal)
    *   [ ] 12px (0.75rem) - sm (small gaps)
    *   [ ] 16px (1rem) - md (default spacing) ⭐ Most common
    *   [ ] 24px (1.5rem) - lg (section spacing)
    *   [ ] 32px (2rem) - xl (major sections)
    *   [ ] 48px (3rem) - 2xl (page sections)
    *   [ ] 64px (4rem) - 3xl (hero spacing)
*   [ ] **Generous White Space:** Use ample spacing to reduce cognitive load and create breathing room

### Border Radius (Organic Shapes)

*   [ ] **Define Soft, Organic Radii:**
    *   [ ] Small: 8px (inputs, small buttons)
    *   [ ] Medium: 12px (cards, most components) ⭐ Default
    *   [ ] Large: 16px (modals, hero cards)
    *   [ ] XL: 24px (special feature cards)
    *   [ ] Full: 9999px (pills, badges, avatar)
*   [ ] Avoid sharp corners (0px) except for specific design intentions

### Core UI Components

*   [ ] **Buttons (with Warm Styling):**
    *   [ ] Primary: Orange `#FF6B35`, white text, bold, 16px, padding 12px 24px, radius 12px, min-height 48px (touch target)
        *   [ ] Hover: Darken 10%, lift 2px, soft shadow
        *   [ ] Active: Scale 0.98
        *   [ ] Disabled: Gray `#E5E5E5`, gray text `#81858C`
    *   [ ] Secondary: Border 2px orange, white bg, orange text
    *   [ ] Ghost/Tertiary: Transparent bg, orange text, hover light orange bg
    *   [ ] Destructive: Red `#D32F2F` (use sparingly)
    *   [ ] All buttons must include icon option (leading or trailing)
*   [ ] **Input Fields:**
    *   [ ] Height: 48px (accessible)
    *   [ ] Padding: 12px 16px
    *   [ ] Border: 2px solid `#E5E5E5`
    *   [ ] Border radius: 8px
    *   [ ] Focus: Orange border `#FF6B35`, subtle shadow `0 0 0 3px rgba(255,107,53,0.1)`
    *   [ ] Error: Red border `#D32F2F`, error message below in red
    *   [ ] Labels: Inter SemiBold 16px, above input, required asterisk in orange
    *   [ ] Placeholder text: `#81858C`, helpful examples
    *   [ ] Helper text: 14px, `#81858C`, below input
*   [ ] **Cards (Organic, Paper-like):**
    *   [ ] Background: White or `#F8F4F0` (cream)
    *   [ ] Border radius: 12px
    *   [ ] Shadow: Soft organic shadow `0 2px 8px rgba(0,0,0,0.08)`, NOT hard shadows
    *   [ ] Border-left: 4px colored stripe for categories (orange, green, blue, etc.)
    *   [ ] Padding: 24px
    *   [ ] Gap between cards: 16px
    *   [ ] Hover: Lift to `0 4px 16px rgba(0,0,0,0.12)`, scale 1.01
*   [ ] **Proposition Card (Core Component):**
    *   [ ] Title: H3 Fraunces, orange `#FF6B35`
    *   [ ] Summary: Body text, 2-3 lines max, truncate with "Lire plus"
    *   [ ] Category badge: Small pill, colored bg, white text, 12px
    *   [ ] Vote count display: Large number, Fraunces, neutral color
    *   [ ] Vote slider: Organic slider with labels "Chuchotement → Cri du cœur"
    *   [ ] Credit cost: Real-time display "⚡ Coût: X crédits"
    *   [ ] CTA button: "💙 Faire résonner" (primary orange button)
*   [ ] **Vote Slider (Custom Component):**
    *   [ ] Range: 0-10 votes
    *   [ ] Track: 8px height, gray `#E5E5E5`, rounded
    *   [ ] Fill: Orange gradient as you slide
    *   [ ] Thumb: 32px circle, white, shadow, easy to grab (mobile)
    *   [ ] Labels: "0 - Silence" on left, "10 - Cri du cœur" on right
    *   [ ] Real-time feedback: Number displays, credit calculation updates live
    *   [ ] Animation: Track "pulses" with orange waves when dragging
*   [ ] **Credit Wallet (Persistent Component):**
    *   [ ] Position: Top-right corner (desktop), bottom sticky (mobile)
    *   [ ] Design: Card with wallet icon 💰, large number display
    *   [ ] "42 / 100 crédits"
    *   [ ] Progress bar: Orange fill, gray track
    *   [ ] Animation: Credits "fly out" when voting, "fly in" when canceling
    *   [ ] Warning state: <10 credits = orange border + gentle pulse
*   [ ] **Badges/Tags:**
    *   [ ] Small pills (radius: 9999px)
    *   [ ] Padding: 4px 12px
    *   [ ] Font: Inter Medium 12px
    *   [ ] Categories: Each gets a color (Education=blue, Health=green, etc.)
    *   [ ] Status badges: Colored dot + text
*   [ ] **Modals/Dialogs:**
    *   [ ] Max-width: 600px
    *   [ ] Border radius: 16px
    *   [ ] Backdrop: `rgba(0,0,0,0.5)` with blur (if supported)
    *   [ ] Padding: 32px
    *   [ ] Close button: Top-right, large (44x44px), clear X icon
    *   [ ] Animations: Fade in + scale from 0.95 to 1, 250ms
*   [ ] **Navigation (Top Bar):**
    *   [ ] Height: 72px
    *   [ ] Background: White with subtle shadow
    *   [ ] Logo: Left, Résonance Citoyenne with icon
    *   [ ] Menu items: Inter SemiBold 16px, hover orange underline
    *   [ ] Credit wallet: Right side
    *   [ ] Mobile: Hamburger menu (44x44px), full-screen drawer
*   [ ] **Tables (Admin/Results):**
    *   [ ] Clean, minimal styling
    *   [ ] Headers: Inter Bold, 14px, gray bg `#F8F4F0`
    *   [ ] Rows: 16px padding, border-bottom 1px `#E5E5E5`
    *   [ ] Hover: Light orange bg `rgba(255,107,53,0.05)`
    *   [ ] Zebra striping: Optional, use subtle cream `#F8F4F0`
    *   [ ] Sort indicators: Clear up/down arrows
*   [ ] **Tooltips:**
    *   [ ] Background: Charcoal `#3D405B`
    *   [ ] Text: White, 14px
    *   [ ] Padding: 8px 12px
    *   [ ] Border radius: 8px
    *   [ ] Arrow pointing to element
    *   [ ] Appear on hover (desktop) or tap-and-hold (mobile)
*   [ ] **Loading Indicators:**
    *   [ ] Spinner: Orange `#FF6B35`, 40px, smooth rotation
    *   [ ] Skeleton screens: Gray `#E5E5E5` with shimmer animation
    *   [ ] Progress bars: Orange fill on gray track
    *   [ ] Text: "Chargement de l'Agora..." (friendly, not "Loading...")
*   [ ] **Icons:**
    *   [ ] Library: Lucide Icons (clean, modern, open-source)
    *   [ ] Size: 20px default, 24px for prominent actions
    *   [ ] Style: Rounded, 2px stroke
    *   [ ] Color: Inherit from context or orange for primary actions
    *   [ ] Always pair with text labels (accessibility)
*   [ ] **Avatars (Future - User Profiles):**
    *   [ ] Circle: 40px default, 64px large
    *   [ ] Border: 2px white (if on colored bg)
    *   [ ] Fallback: Initials on colored background

## III. Layout, Visual Hierarchy & Structure

*   [ ] **Responsive Grid System:**
    *   [ ] Desktop: 12-column grid, 24px gutters, max-width 1200px
    *   [ ] Tablet: 8-column grid, 20px gutters
    *   [ ] Mobile: 4-column grid, 16px gutters
    *   [ ] Breakpoints:
        *   [ ] Mobile: 320px - 767px
        *   [ ] Tablet: 768px - 1023px
        *   [ ] Desktop: 1024px - 1439px
        *   [ ] Large: 1440px+
*   [ ] **Strategic White Space:**
    *   [ ] Never cram elements
    *   [ ] Minimum 16px between interactive elements
    *   [ ] Generous padding inside cards (24px)
    *   [ ] Section spacing: 48px+ on desktop
*   [ ] **Clear Visual Hierarchy:**
    *   [ ] Primary action (vote button) = largest, orange, prominent
    *   [ ] Secondary actions = smaller, ghost style
    *   [ ] Titles = Fraunces, bold, orange
    *   [ ] Body = Inter, regular, charcoal
*   [ ] **Consistent Alignment:**
    *   [ ] Left-align text (French reading direction)
    *   [ ] Right-align numbers (credits, votes)
    *   [ ] Center-align hero sections and CTAs
*   [ ] **Main Layout Structure:**
    *   [ ] Top navigation bar (72px height, sticky)
    *   [ ] Main content area: Max-width 1200px, centered, 24px side padding
    *   [ ] Optional sidebar: For filters on desktop (collapsed on mobile)
    *   [ ] Footer: Simple, links to About, Contact, Legal, Social
*   [ ] **Mobile-First Approach:**
    *   [ ] Design for 375px width first
    *   [ ] Touch targets: Minimum 44x44px (Apple HIG, WCAG)
    *   [ ] Bottom sticky bar for primary actions on mobile
    *   [ ] Collapsible filters in drawer
    *   [ ] Single-column layouts
    *   [ ] Larger text on mobile (18px body)

## IV. Interaction Design & Animations

*   [ ] **Purposeful Micro-interactions:**
    *   [ ] Buttons: Lift on hover (2px), scale on active (0.98)
    *   [ ] Cards: Lift + shadow on hover
    *   [ ] Inputs: Border color change + shadow on focus
    *   [ ] Slider: Track "pulses" with orange wave when dragging
    *   [ ] Vote confirmation: Confetti burst (soft, not overwhelming)
    *   [ ] Credit wallet: Number count-up/down animation
*   [ ] **Animation Timing:**
    *   [ ] Fast (150ms): Hover states, button presses
    *   [ ] Normal (250ms): Card transitions, modal appearances
    *   [ ] Slow (400ms): Page transitions, complex animations
    *   [ ] Easing: `cubic-bezier(0.4, 0.0, 0.2, 1)` (Material Design standard)
*   [ ] **Loading States:**
    *   [ ] Skeleton screens for initial page loads (gray shimmer)
    *   [ ] Spinners for in-component actions (orange, 40px)
    *   [ ] Progress bars for multi-step processes
    *   [ ] Optimistic UI: Show vote immediately, update if error
*   [ ] **Transitions:**
    *   [ ] Modals: Fade + scale (0.95 → 1.0)
    *   [ ] Drawers: Slide from side
    *   [ ] Toasts: Slide down from top
    *   [ ] Page transitions: Fade (if using client-side routing)
*   [ ] **Avoid Distraction:**
    *   [ ] No auto-playing videos
    *   [ ] No flashing elements (seizure risk + accessibility)
    *   [ ] Respect `prefers-reduced-motion` media query
    *   [ ] Disable all animations if user prefers reduced motion
*   [ ] **Keyboard Navigation:**
    *   [ ] Tab order: Logical left-to-right, top-to-bottom
    *   [ ] Focus indicators: 2px orange outline, 2px offset
    *   [ ] Skip to content link: Hidden but accessible
    *   [ ] Escape key: Close modals, cancel actions
    *   [ ] Enter/Space: Activate buttons, submit forms
    *   [ ] Arrow keys: Navigate sliders, select options

## V. Specific Module Design Tactics

### A. Vote Quadratique Module (Core Experience)

*   [ ] **Proposition List View:**
    *   [ ] Filters at top: Category pills, search bar
    *   [ ] Sort options: "Plus récent", "Plus de résonance", "Aléatoire"
    *   [ ] Grid: 1 column mobile, 2 columns tablet, 2-3 columns desktop
    *   [ ] Each card: Title, summary, category, vote count, your allocation, CTA
*   [ ] **Vote Allocation Interface:**
    *   [ ] Slider: 0-10 range, organic design, clear labels
    *   [ ] Real-time credit calculation: "3 votes = 9 crédits"
    *   [ ] Visual feedback: Track pulses, card border glows orange
    *   [ ] Confirm button: "💙 Faire résonner ma voix"
*   [ ] **Credit Management:**
    *   [ ] Persistent wallet display: Top-right (desktop), bottom-sticky (mobile)
    *   [ ] Warning at <10 credits: Gentle pulse, orange border
    *   [ ] Zero credits: Disable voting, show "Répartis tes crédits autrement"
*   [ ] **Quadratic Formula Explanation:**
    *   [ ] Tooltip on "?" icon: "Pourquoi n² ?"
    *   [ ] Modal with visual explanation: Simple chart showing 1→1, 2→4, 3→9
    *   [ ] Friendly language: "Plus tu votes fort, plus ça coûte cher"

### B. Résultats (Results Transparency Module)

*   [ ] **Aggregate Display:**
    *   [ ] Top proposals: Large cards with vote totals
    *   [ ] Visualization: Concentric circles (resonance waves), not bar charts
    *   [ ] Size = total votes, color = category
    *   [ ] Interactive: Hover to see breakdown
*   [ ] **Anonymity Guarantee:**
    *   [ ] Clear badge: "Votes anonymes & sécurisés 🔒"
    *   [ ] Only show aggregate totals, never individual votes
    *   [ ] Explanation: "Personne ne peut voir ton vote individuel"
*   [ ] **Participation Stats:**
    *   [ ] "1,247 citoyens ont participé"
    *   [ ] "12,489 votes exprimés"
    *   [ ] "42 propositions actives"
    *   [ ] Use Fraunces for big numbers, make them proud

### C. Mon Profil (Citizen Profile)

*   [ ] **Vote History:**
    *   [ ] Timeline view: Past allocations
    *   [ ] Can update votes until deadline
    *   [ ] Show credits spent per cycle
*   [ ] **Impact Display:**
    *   [ ] "Tes votes ont contribué à X propositions"
    *   [ ] Badges for participation (gamification, optional)
*   [ ] **Settings:**
    *   [ ] Notifications: Email, SMS alerts for new proposals
    *   [ ] Accessibility: Font size, contrast mode, reduced motion
    *   [ ] Language: French + future internationalization

### D. Page d'Accueil (Homepage - Invitation)

*   [ ] **Hero Section:**
    *   [ ] Large heading (H0 Fraunces): "La place où ta voix compte"
    *   [ ] Subheading: Explain quadratic voting in 2 sentences
    *   [ ] Primary CTA: "🌊 Rejoindre l'Agora" (huge orange button)
    *   [ ] Background: Authentic photo of citizens (hands raised, B&W with orange tint)
*   [ ] **How It Works (3 Steps):**
    *   [ ] 1. "Tu reçois 100 crédits par an"
    *   [ ] 2. "Tu choisis tes combats (vote quadratique)"
    *   [ ] 3. "Ta voix fait résonner la démocratie"
    *   [ ] Visual: Simple icons or illustrations (warm, organic style)
*   [ ] **Social Proof:**
    *   [ ] Testimonials: 2-3 short quotes in Caveat font
    *   [ ] "Marie, 34 ans, Lyon: 'J'ai enfin l'impression de compter'"
    *   [ ] Photos: Real citizens, diverse, smiling
*   [ ] **Stats (Live):**
    *   [ ] "1,247 citoyens actifs"
    *   [ ] "42 propositions en cours"
    *   [ ] "12,489 votes exprimés"
    *   [ ] Update in real-time (if possible)
*   [ ] **Footer CTA:**
    *   [ ] "Prêt·e à faire partie du mouvement ?"
    *   [ ] Button: "Créer mon compte citoyen"

## VI. CSS & Styling Architecture

*   [ ] **Choose Tailwind CSS (Utility-First):**
    *   [ ] Recommended for fast development + design tokens integration
    *   [ ] Configure `tailwind.config.js` with custom tokens:
        ```js
        colors: {
          orange: { DEFAULT: '#FF6B35', light: '#FF8C5C', dark: '#E55A24' },
          terracotta: '#E07A5F',
          honey: '#F4A261',
          forest: '#2A9D8F',
          sky: '#457B9D',
          cream: '#F8F4F0',
          charcoal: '#3D405B',
          gray: '#81858C'
        },
        fontFamily: {
          display: ['Fraunces', 'serif'],
          body: ['Inter', 'sans-serif'],
          accent: ['Caveat', 'cursive']
        },
        spacing: {
          // 8px base
        },
        borderRadius: {
          'card': '12px',
          'button': '8px',
          'modal': '16px'
        }
        ```
*   [ ] **Alternative: CSS Modules + Sass:**
    *   [ ] If not using Tailwind, use BEM naming
    *   [ ] Define design tokens as Sass variables
    *   [ ] Create mixins for common patterns (card, button, etc.)
*   [ ] **Integrate Design Tokens:**
    *   [ ] All colors, fonts, spacing as variables
    *   [ ] Never use magic numbers in components
    *   [ ] Reference tokens: `bg-orange`, `text-charcoal`, `p-md`
*   [ ] **Maintainability:**
    *   [ ] Component-based architecture (React, Vue, Svelte)
    *   [ ] Scoped styles per component
    *   [ ] Shared styles in global CSS or design system package
*   [ ] **Performance:**
    *   [ ] Purge unused CSS in production
    *   [ ] Use CSS containment for heavy components
    *   [ ] Lazy-load fonts with `font-display: swap`
    *   [ ] Critical CSS inlined for above-the-fold content

## VII. Accessibility Standards (RGAA 4.1 + WCAG 2.1 AA)

*   [ ] **Color Contrast:**
    *   [ ] Text: Minimum 4.5:1 (AA), aim for 7:1 (AAA)
    *   [ ] UI components: Minimum 3:1
    *   [ ] Never rely on color alone to convey information
    *   [ ] Test with contrast checker tools
*   [ ] **Keyboard Navigation:**
    *   [ ] All interactive elements accessible via Tab
    *   [ ] Logical tab order (left-to-right, top-to-bottom)
    *   [ ] Visible focus indicators (2px orange outline, 2px offset)
    *   [ ] Escape closes modals
    *   [ ] Enter/Space activates buttons
*   [ ] **Screen Reader Support:**
    *   [ ] Semantic HTML: `<nav>`, `<main>`, `<article>`, `<button>`
    *   [ ] ARIA labels for icons: `aria-label="Voter pour cette proposition"`
    *   [ ] ARIA live regions for dynamic updates: "X crédits restants"
    *   [ ] Alt text for all images (descriptive, not decorative)
    *   [ ] Skip to content link at top
*   [ ] **Forms:**
    *   [ ] Labels associated with inputs: `<label for="...">`
    *   [ ] Required fields marked: `*` in orange + `aria-required="true"`
    *   [ ] Error messages: `aria-describedby` linking to error text
    *   [ ] Inline validation with clear feedback
*   [ ] **Touch Targets:**
    *   [ ] Minimum 44x44px for all interactive elements (WCAG, Apple HIG)
    *   [ ] Adequate spacing between touch targets (8px minimum)
*   [ ] **Responsive Text:**
    *   [ ] Text resizable to 200% without loss of function
    *   [ ] Use relative units (rem, em) not fixed px
    *   [ ] Respect user's font size preferences
*   [ ] **Motion Sensitivity:**
    *   [ ] Respect `prefers-reduced-motion` media query
    *   [ ] Disable all animations if user prefers reduced motion
    *   [ ] Provide toggle in settings: "Réduire les animations"
*   [ ] **Language:**
    *   [ ] `<html lang="fr">` for French content
    *   [ ] Clear, simple language (avoid jargon)
    *   [ ] Reading level: Accessible to 16+ year olds

## VIII. Tone, Voice & Microcopy

*   [ ] **Voice: Warm, Direct, Friendly ("À la bonne franquette")**
    *   [ ] Use "tu" not "vous" (friendly, inclusive)
    *   [ ] Speak like a friend, not a bureaucrat
    *   [ ] Encourage, don't command
*   [ ] **Avoid:**
    *   [ ] "Soumettre votre vote" → Use "Faire résonner ma voix"
    *   [ ] "Identifiant utilisateur" → Use "Ton pseudo"
    *   [ ] "Paramètres" → Use "Mes réglages"
    *   [ ] "Valider" → Use "Confirmer" or "C'est bon !"
*   [ ] **Use:**
    *   [ ] "Rejoins-nous !" not "S'inscrire"
    *   [ ] "L'Agora" not "Tableau de bord"
    *   [ ] "Tes crédits" not "Solde de crédits"
    *   [ ] "Faire résonner" not "Voter"
*   [ ] **Microcopy Examples:**
    *   [ ] Loading: "On réveille l'Agora..." not "Chargement..."
    *   [ ] Error: "Oups, un petit couac ! On règle ça ensemble ?" not "Erreur 500"
    *   [ ] Success: "C'est dans la boîte ! 🎉" not "Opération réussie"
    *   [ ] Empty state: "Personne encore ? Soit le premier !" not "Aucun résultat"
    *   [ ] Confirmation: "Ta voix compte ❤️" not "Vote enregistré"
    *   [ ] Low credits: "Plus que 8 crédits, choisis bien !" not "Solde faible"

## IX. General Best Practices

*   [ ] **Iterative Design & Testing:**
    *   [ ] Test with real citizens (diverse ages, digital literacy)
    *   [ ] User testing sessions: Can they vote in <2 minutes?
    *   [ ] A/B test CTAs, button labels, explanations
    *   [ ] Iterate based on feedback
*   [ ] **Clear Information Architecture:**
    *   [ ] Max 3 levels of navigation
    *   [ ] Primary actions always visible
    *   [ ] Search accessible from anywhere
*   [ ] **Responsive Design:**
    *   [ ] Mobile-first development
    *   [ ] Test on real devices (iPhone SE, Android budget phones)
    *   [ ] Works on slow 3G connections
*   [ ] **Performance:**
    *   [ ] First Contentful Paint < 1.5s
    *   [ ] Largest Contentful Paint < 2.5s
    *   [ ] Cumulative Layout Shift < 0.1
    *   [ ] Optimize images (WebP, lazy loading)
    *   [ ] Minify CSS/JS
*   [ ] **Documentation:**
    *   [ ] Maintain component library (Storybook or similar)
    *   [ ] Document design decisions (why orange? why Fraunces?)
    *   [ ] Update this checklist as the design evolves
*   [ ] **Inclusivity:**
    *   [ ] Avoid gendered language
    *   [ ] Represent diverse citizens in imagery
    *   [ ] Accessible to people with disabilities
    *   [ ] Works for all ages (18-100+)
*   [ ] **Security & Trust:**
    *   [ ] HTTPS everywhere (padlock in browser)
    *   [ ] Clear privacy policy (linked in footer)
    *   [ ] No tracking without consent
    *   [ ] Secure vote encryption (communicate this visually)

## X. Implementation Notes for AI Assistants (Claude Code)

**When working on Résonance Citoyenne:**
1. **ALWAYS reference this file** before making UI/UX decisions
2. **Prioritize accessibility** over aesthetics in all trade-offs
3. **Use design tokens** (never hardcode colors, spacing, fonts)
4. **Test keyboard navigation** after every UI change
5. **Consider mobile experience** first (most users on phones)
6. **Validate color contrast** for all text/UI combinations
7. **Add ARIA labels** for screen readers on all interactive elements
8. **Respect user motion preferences** (`prefers-reduced-motion`)
9. **Use warm, friendly language** in all microcopy
10. **Ask**: "Does this design choice serve democratic participation?"

**Design Decision Framework:**
- If it adds **clarity**: ✅ Yes
- If it adds **visual appeal only**: ⚠️ Reconsider
- If it improves **accessibility**: ✅ Absolutely yes
- If it increases **cognitive load**: ❌ No
- If it makes voting **faster**: ✅ Yes
- If it builds **trust**: ✅ Yes
- If it feels **cold/corporate**: ❌ No, warm it up

**When in doubt:**
- Choose warmth over precision
- Choose clarity over cleverness
- Choose accessibility over aesthetics
- Choose human over machine
