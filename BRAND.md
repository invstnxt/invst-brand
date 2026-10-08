# BRAND.md — paste-along context for every UI-building Claude Code session

> Map of every brand file in this repo + the gate that enforces them: `docs/brand/README.md`.
> Public mirror for sessions without repo access: https://github.com/invstnxt-org/invst-brand (v8 governs; website CSS is off).
> The public website's CSS is NOT the standard (it drifts from v8); never scrape invst.com for tokens.

Every INVST OS and Vela screen follows INVST Brand Standards 2026 v8. Non-negotiables:

1. **Font: Montserrat, everywhere.** Wire via next/font/google (see tailwind.brand.ts comment).
   Montserrat Bold (700/800) for headings and emphasis. No other typefaces in-app.
2. **Primary green #A9CF38** for primary buttons, active nav states, focus rings, progress, and
   positive status. Hover: #8FB32A. Subtle fills/selected rows: #F4F8E8.
3. **Neutrals:** black #000000 for headings/primary text, #5A5A5A for secondary text and labels,
   #D3D3D3 for borders and disabled states, white backgrounds. The UI is white/black/grey with
   green accents — clean, confident, uncluttered.
4. **Secondary palette is functional only:** #D21404 errors/overdue/NIGO, #B92222 destructive
   hover, #4B9CD3 informational, #FEE50F warnings (sparingly), #FFBF00 pending/attention.
   Secondary colors never used as decorative brand accents.
5. **FORBIDDEN in-app:** #08FF08 (Racing sub-brand only) and #002C5F (Colts sub-brand only).
6. **Wordmark:** use /public/brand/invst-logo.png (dark wordmark + green V) on light surfaces.
   In text, the company name is always all caps: INVST. Tagline where used:
   "Making Money Work For You".
7. **Copy tone:** clear, confident, professional. No unsubstantiated superlatives ("best", "#1",
   "top") anywhere in UI copy — this is an SEC marketing-rule discipline, and internal screens
   get screenshotted.
8. **Compliance surfaces are brand surfaces:** anything client-visible (Vela, generated documents,
   emails) shows required disclosures cleanly — compliance is part of the brand, per the standards.

Session instruction: "Use the tokens in tailwind.brand.ts and the rules in BRAND.md for all
styling. Do not introduce new colors or fonts."
