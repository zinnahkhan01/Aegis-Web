# Aegis-Web

Aegis-Web is the public-facing landing page and product-information site for the Aegis-AI ecosystem. It is currently a React 19 + Vite single-page application styled with Tailwind CSS, with Lucide icons.

> **Current status:** The visual landing-page prototype and its main sections are in place. The production build succeeds. This repository does not, by itself, contain or prove the working Aegis desktop/mobile applications, downloadable release binaries, a waitlist service, or a live agent backend. Product claims, links, and release details must be verified before public launch.

## Run locally

### Requirements

- Node.js version compatible with the installed Vite 8 toolchain.
- npm.

### Install and run

```bash
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run preview` | Serve the last production build locally for review. |
| `npm run lint` | Run Oxlint. |

There is currently no test script or automated test suite configured in `package.json`.

## Production master plan

This roadmap separates the work into gated phases. Complete a phase's exit criteria before treating the next phase as production-ready. The current project is at the **prototype / scope-validation stage**; the phase labels below describe the work that remains, not work already completed.

### Phase 0 — Confirm product scope and truthful claims

**Goal:** Decide what this website is actually selling or announcing, and distinguish implemented product capabilities from concepts.

1. Identify the exact product(s) represented by this site: landing page only, downloadable Windows application, Android companion, iOS beta, or some subset.
2. Confirm which capabilities exist in releasable software today and which are planned, experimental, or unavailable.
3. Audit every factual claim in the UI and data, including version numbers, release dates, system status, agent counts, performance metrics, encryption, privacy, security protections, and platform compatibility.
4. Remove, qualify, or substantiate claims that cannot be evidenced. A polished UI, sample simulator output, or placeholder value is not evidence of a production capability.
5. Decide the launch audience, supported regions/languages, support channel, and whether the site is public, beta, or waitlist-only.

**Your part:** Provide the real product status and approve the exact public claims. Mark every advertised platform and feature as **available**, **beta**, **planned**, or **not offered**.

**Exit criteria:** There is an approved, evidence-backed product/claims inventory and a clearly defined launch scope.

### Phase 1 — Requirements, ownership, and release inputs

**Goal:** Gather the product and operational inputs needed to build and launch the site.

1. Name the product owner who approves copy, scope, and release readiness.
2. Decide the canonical domain, public brand/contact details, support route, privacy contact, and legal entity or publisher name.
3. Supply approved product copy, screenshots/video, logo/brand assets, platform requirements, release notes, and support/FAQ answers.
4. For each real downloadable artifact, provide its platform, version, filename, file size, supported OS, authoritative download location, and release owner.
5. Decide whether visitors need a waitlist, contact form, analytics, newsletter, account system, or no data collection. Avoid collecting personal data without a defined purpose and retention policy.
6. Identify who owns DNS, hosting, release storage, email delivery, and any required vendor accounts.

**Your part:** Make the product, domain, hosting, email/waitlist, data-collection, and release-ownership decisions. Provide access through the appropriate secure invitations; do not paste passwords, API keys, signing keys, or private tokens into source files or chat.

**Exit criteria:** Required assets, owners, decisions, and access requests are documented; no launch-blocking product question is left implicit.

### Phase 2 — Content, UX, and legal readiness

**Goal:** Make the public experience accurate, accessible, and ready for real visitors.

1. Approve page structure, calls to action, platform labels, FAQ, release notes, and error/empty states.
2. Replace template wording and any inaccurate, duplicated, malformed, or placeholder copy.
3. Confirm the download and waitlist journeys on desktop and mobile, including what happens when a platform is unsupported or a release is unavailable.
4. Prepare privacy notice, terms, cookie/analytics disclosure if applicable, product disclaimers, and contact/support details with qualified review where required.
5. Define accessible names, keyboard behavior, focus order, contrast, reduced-motion behavior, and screen-reader expectations for navigation, dialogs, accordions, and forms.
6. Specify the supported browsers/devices and translated content, if multilingual support is in scope.

**Your part:** Approve final wording and legal documents, identify the authoritative support destination, and provide translated copy if more than one language will launch.

**Exit criteria:** Content and user journeys are approved; legal and accessibility requirements are known rather than assumed.

### Phase 3 — Frontend production hardening

**Goal:** Turn the existing React/Vite presentation into a reliable, maintainable production frontend.

1. Review all current sections and interactions against the approved requirements; remove dead controls, misleading simulated behavior, and placeholder destinations.
2. Make navigation, modal open/close, Escape-key handling, focus management, form validation, clipboard feedback, and mobile-menu behavior reliable.
3. Add responsive and accessibility checks for all supported breakpoints and interaction states.
4. Add automated checks appropriate to the site: component or unit tests for important logic, browser-based end-to-end tests for critical journeys, and accessibility checks.
5. Remove unused imports/props and resolve lint warnings; make lint and build part of required CI checks.
6. Check bundle size, image/video loading, font loading, metadata, social sharing cards, favicon, semantic HTML, and browser console/network errors.
7. Define environment-specific configuration without putting secrets in client-side variables. Anything delivered to the browser must be treated as public.

**Your part:** Approve supported browsers/devices and any intentional animation or accessibility trade-offs. Provide design/brand assets in their final formats.

**Exit criteria:** No known dead/placeholder interaction remains in the approved scope; CI checks pass; critical journeys work with keyboard and on mobile.

### Phase 4 — Backend and third-party integrations

**Goal:** Connect only the services that the approved product scope requires.

1. Choose whether the site remains static or needs a backend. Do not add a backend merely to make a prototype look functional.
2. If a waitlist/contact form is required, choose the service and data flow; define validation, abuse/rate protection, consent, retention, deletion, and failure behavior.
3. Implement a real success state only after the service confirms the submission; show actionable errors when it fails.
4. If downloads need a release API or signed links, define the trusted source and permissions. Never trust a version/hash entered only in browser code.
5. Set up development/staging/production configuration and secret storage in the hosting/provider secret manager.
6. Document data flows and service owners; review vendor terms, privacy implications, and availability limits.

**Your part:** Select/approve vendors and data-retention policy, create service accounts, and grant least-privilege access through secure provider workflows. Keep credentials and signing material out of the repository.

**Exit criteria:** Each integration has an owner, documented data flow, tested success/failure behavior, and production configuration managed outside source control.

### Phase 5 — Real downloads and release integrity

**Goal:** Make the download hub deliver the correct, verifiable releases—or clearly state that a release is not available.

1. Obtain actual signed release artifacts from the product release owner; confirm the site is authorized to distribute them.
2. Store binaries in an appropriate release/object-storage service, not as generated text files or fake executable/APK extensions.
3. Configure platform-specific download links to the authoritative artifacts and verify access control, content type, filename, size, and download behavior.
4. Compute SHA-256 from each final artifact in the release pipeline. Publish that exact hash alongside that exact version and artifact.
5. Verify code-signing/publisher identity and malware scanning through the release process; document who signs and approves each artifact.
6. Tie release notes, version labels, compatibility, and hashes to a single reviewed release manifest/source of truth.
7. Test unavailable, withdrawn, and previous-version links; provide a clear status instead of silently substituting another file.

**Your part:** Supply or arrange delivery of genuine approved artifacts, signing/publisher details, release notes, and verified compatibility information. A frontend-only developer cannot manufacture or validate the Aegis application release.

**Exit criteria:** Every advertised download resolves to the intended approved binary and its displayed version/hash matches the release record. If no artifact is ready, the download CTA is explicitly gated or marked unavailable.

### Phase 6 — Security, privacy, and abuse readiness

**Goal:** Reduce risk to visitors and ensure public security/privacy statements are supportable.

1. Review dependencies and lockfile; establish update and vulnerability-triage ownership.
2. Review form/API validation, rate limiting, spam/abuse controls, CORS/headers, redirects, and any server-side access controls.
3. Configure HTTPS, secure response headers, content-security policy where compatible, and safe external-link behavior.
4. Ensure secrets, personal data, and sensitive release material are not exposed in client bundles, logs, source maps, or public storage.
5. Confirm privacy notice, consent, retention, deletion, and incident contact match actual data flows.
6. Validate security claims against implementation and independent evidence where appropriate; remove unsupported “zero telemetry,” encryption, or sandbox guarantees.
7. Define vulnerability reporting and incident response contacts and procedures.

**Your part:** Provide the approved privacy/security policy, incident contact, data-retention decisions, and qualified review for legal or security claims. Arrange an independent security assessment if the risk or launch requirements call for one.

**Exit criteria:** No known critical/high launch blocker remains; data handling and security claims are documented and reviewed; incident ownership is assigned.

### Phase 7 — Quality assurance and release candidate

**Goal:** Prove the release candidate works as users will experience it.

1. Run clean dependency installation, lint, production build, automated tests, and staging deployment from a clean checkout.
2. Test each supported browser/device, narrow and wide viewports, keyboard-only operation, screen-reader basics, and reduced-motion preference.
3. Exercise every critical journey: navigation, downloads, release notes, requirements, FAQ, modal dismissal, form validation/submission, and service errors.
4. Verify links, metadata, image/video paths, caching, MIME types, 404 behavior, and refresh/deep-link behavior on the actual hosting platform.
5. Check performance and accessibility against agreed targets; record results and fix regressions before release.
6. Confirm no secrets or internal/debug data are present in deployed assets; inspect the final production bundle and network requests.
7. Create a release checklist with owner, commit/revision, artifact versions, test evidence, known issues, and rollback target.

**Your part:** Arrange product-owner/UAT testing and sign off on actual wording, downloads, requirements, and platform behavior. Decide whether any known issue blocks launch.

**Exit criteria:** Staging passes the agreed functional, compatibility, accessibility, and security checks; release owner approves the candidate.

### Phase 8 — Production deployment and operations

**Goal:** Deploy safely and make it possible to detect and recover from problems.

1. Choose hosting/CDN and establish separate preview/staging/production environments.
2. Connect the canonical domain and DNS; configure HTTPS, redirects, caching, compression, and SPA fallback behavior.
3. Set least-privilege deployment permissions and protected production release workflow.
4. Define monitoring for uptime, failed downloads/forms, client errors, and integration failures without collecting unnecessary personal data.
5. Set alert owners, severity levels, support hours, and escalation path.
6. Test rollback to a known-good deployment and recovery of links/configuration before launch.
7. Publish only after the release owner confirms the launch gate; keep a record of deployment revision and time.

**Your part:** Own or assign hosting/domain/billing access, approve production DNS changes and launch timing, and name a person/team responsible for alerts and rollback decisions.

**Exit criteria:** HTTPS production is verified; monitoring and alert ownership work; rollback has been exercised; production owner approves release.

### Phase 9 — Launch, review, and ongoing maintenance

**Goal:** Maintain trust and reliability after launch.

1. Perform a final smoke test on the public domain, including real downloads and any live form/integration.
2. Monitor errors, service health, and user feedback closely during the launch window.
3. Publish a support and release-update process; keep version, compatibility, FAQ, and hashes synchronized with product releases.
4. Triage reported issues, privacy requests, vulnerabilities, and broken downloads with named owners and response expectations.
5. Review dependency/security advisories, accessibility, performance, and content regularly and after material product changes.
6. Retire old releases and stale claims safely; preserve redirect/update behavior where users may rely on existing links.

**Your part:** Provide ongoing product/release updates, review user feedback, respond to support/security reports, and renew vendor/domain ownership as needed.

**Exit criteria:** A named team owns support, monitoring, releases, dependency updates, and policy reviews; the site remains aligned with the actual product.

## Launch gates

Do **not** announce the site as a production download portal until all applicable gates pass:

- Product scope and public claims have an accountable approver.
- Every advertised binary is real, authorized, reviewed, and linked to its verified hash.
- Forms and data collection behave as described, or are clearly identified as unavailable.
- Privacy/security/legal content reflects actual implementation and has appropriate review.
- CI, staging, browser/device checks, accessibility review, and critical journey tests pass.
- Production hosting, HTTPS, monitoring, alert ownership, and rollback are ready.
- Product owner and release owner have explicitly approved launch.

## Current project snapshot

Based on the current repository inspection:

- Main landing-page sections, styling, static data, and several client-side interactions are present.
- `npm run build` completes successfully.
- `npm run lint` completes but reports unused imports/props/parameters that should be cleaned up in the frontend-hardening phase.
- No automated test script/suite is currently configured.
- Download actions currently generate text stub files rather than serving real Windows or Android release artifacts.
- The waitlist currently displays a simulated success state and does not persist or send submissions to a service.
- The command playground displays predefined simulation data; it is not connected to a live Aegis agent.
- The download URLs and other release metadata need verification against real release sources.
- The existing product-facing security/privacy claims need evidence and owner approval before public launch.

This snapshot is a starting point, not a substitute for rechecking the repository, product, and deployment configuration when each phase begins.
