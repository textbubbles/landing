# CLAUDE.md — textbubbles/landing (PUBLIC)

This is the **marketing site** at https://textbubbles.com. The repo is **public** and the rendered site is what anyone — customers, prospects, competitors, journalists — sees first.

## Public-only rule

Every page, image, screenshot, copy block, and asset under `app/`, `components/`, `public/` is shipped to the open web. **Never include internal details.**

This file itself is shipped publicly — it must not enumerate the internal names it's protecting against. Keep guidance abstract.

### What MUST NOT appear in this repo

Anything that reveals **how** the product is built, not **what** it does:

- The names of the libraries, frameworks, runtimes, queues, databases, caches, providers, or encryption schemes we depend on internally
- The names of internal services, containers, processes, hostnames, or any "behind the scenes" infrastructure
- Architectural choices: multi-tenancy model, sidecar topology, where state lives, deployment shape
- "Built with X" footers, stack badges, or any marketing-of-the-stack
- Provider / vendor risk language — never reveal that a feature has a stability caveat or which third party powers it
- Cost-of-goods leakage — infra costs, per-message provider fees, hardware specifics
- Roadmap dates, quarter-level commitments, or "v1 / v2" hints
- Customer names or logos without a press kit / co-marketing approval on file
- Screenshots of the admin panel or any internal tooling (admin URLs include real customer data)

### What IS fine

- Product positioning, features, and benefits in **customer-outcome language**: "Send text and rich media on iMessage, SMS, and WhatsApp from one API."
- Public API surface (link out to `docs.textbubbles.com` rather than re-documenting here)
- Channel capabilities at the user-visible level: "iMessage with SMS fallback, WhatsApp, group chats, reactions"
- Customer testimonials with permission, generic industry social proof
- Pricing pages (when approved)
- Marketing screenshots of the *consumer-facing* messaging experience (the fan side), never internal tooling

### When in doubt

Ask: "Could this sentence run in a TechCrunch article without revealing how we're built?" If no, push it back to the infra runbook or the personal vault.

## Auto-deploy

Pushes to `main` deploy to Cloudflare Pages automatically — no staging gate. Each commit is live within minutes.
