# TrueSight DAO LLC — Entity Legal Documents (Próspera ZEDE, Honduras)

Index of the formation / governance / authorization documents for **TrueSight DAO LLC**, a
Limited Liability Company organized under the Roatán Common Law Code (RCLC) § 3707 of
Próspera ZEDE, Roatán, Islas de la Bahía, Republic of Honduras.

> **Machine-readable version:** [`agentic_ai_context/entity_registry.json`](https://github.com/TrueSightDAO/agentic_ai_context/blob/main/entity_registry.json) — same document set, structured for tooling (entity particulars, registration number, per-doc md5/URL, open items).

## ⭐ Registry identifier

The Prospera ZEDE official seal stamped on the Certificate of Organization (pages 2 and 4)
reads:

> **PROSPERA ZEDE « OFFICIAL RESIDENT PERMIT NO. 86901452542528**

- **Number: `86901452542528`**
- Label on the stamp is literally **"Official Resident Permit No."** — recorded here verbatim.
  Confirm with the ePróspera portal whether the *entity* registration number differs from this
  resident-permit number, and reconcile.

_Note: this number is baked into an embedded seal image, not the PDF text layer — so plain text
extraction of the certificate shows the reserved-for-registry band blank. OCR the seal image._

## Document inventory

| # | Document | File | Date | Notes |
|---|---|---|---|---|
| 1 | **Certificate of Organization** (bilingual EN/ES) — formation/charter instrument, organizer-signed, with PZ seal | `notarizations/20261014131753_gary_teh_truesight_dao_llc_prospera_certificate_of_organization.pdf` | Signed 2026-07-07 | "Approved" stamp. Registry band text is blank in the text layer, but the **official PZ seal (pages 2 & 4) carries Resident Permit No. 86901452542528**. |
| 2 | **Operating Agreement — FINAL v1.0** (DAZ-sealed, 15 pp) | `notarizations/20261014131824_gary_teh_truesight_dao_llc_prospera_operating_agreement_final_v1.0.pdf` | Version 1.0, effective 2026-07-01; sealed 2026-10-14 | The executed/sealed By-Laws. Every page carries a **DAZ digital-signature seal** (`eaf871ac…` + `3a92ea1f…`, attributed to garyjob@truesight.me). |
| 3 | **Operating Agreement — source (Markdown + PDF)** | `agentic_ai_context/PROSPERA_ENTITY_OPERATING_AGREEMENT.md` (+ `.pdf`) | v1.0 eff. 2026-07-01 | The `.md` is textually v1.0. ⚠️ the repo `.pdf` is still **DRAFT v0.1** (14 pp, no seal) — stale; replace with #2. |
| 4 | **Entity Application Approved** (ePróspera approval email) | `notarizations/20260708023012_gary_teh_prospera_entity_application_approved.pdf` | 2026-07-07 (email) | Automated approval notice to garyjob@truesight.me. |
| 5 | **Power of Attorney — Procuração Pública** (Zhiwen Teh → Paloma Pinheiro Lecheta) | `notarizations/20261013111620_zhiwen_teh_procuracao_publica_paloma_pinheiro_lecheta_brazil_setup.pdf` | Notarized 2026-10-13 (8º Tabelião de Notas, São Paulo) | Authorizes Paloma to **set up the Brazilian arm** of the export operations: constitute Brazilian companies, sign atos constitutivos, obtain CNPJ, register foreign investment (RDE-IED), operate bank accounts, represent before Receita Federal / BACEN / CVM / Juntas Comerciais, and sub-delegate. Prazo indeterminado. Validation code `UE6ZM-73YHZ-DNBAE-PJBWE`. |

## Key entity particulars

**From the Certificate of Organization (#1):**
- **Entity type:** Limited Liability Company (LLC)
- **Entity name:** TrueSight DAO LLC
- **Status:** Approved
- **Próspera registry identifier:** Resident Permit No. **86901452542528** (PZ official seal)
- **Principal office:** Av. dos Merlins, 156 – Jurere Internacional, 88053-370, Florianópolis, Brazil
  (same as the registered agent's address — box "Yes" checked)
- **Registered agent:** Prospera Employment Solutions LLC (PES),
  Beta Building, Oficina 6, Próspera ZEDE, St. John's Bay, Islas de Bahía, 34101, Honduras
- **Organizer:** Hugo Alain Charles Mathecowitsch,
  Alameda Franca 1570, Apto 142, São Paulo, SP, 01422000, Brazil
- **Legal basis:** Roatán Common Law Code (RCLC) § 3707 — Uniform Limited Liability Company Act (ULLCA)
- **Registry contact:** ots@prosperazede.hn

**From the Operating Agreement (#2/#3):**
- **Governing instrument:** manager-managed LLC; the "manager" is the **Governor Board** —
  top-10 contributors by trailing-180-day TDG, auto re-seated each solstice/equinox
- **Managing Member / President (non-rotating continuity signatory):** Gary Teh (Zhiwen Teh), CPF [redacted — in sealed original]
- **Members:** TDG holders on the Main Ledger; Units proportional to TDG, fixed by Snapshots on each Seating Date
- **Voting:** 1 Unit = 1 vote on entity (ULLCA) matters; DAO Proposal Process for DAO matters
- **Dispute resolution:** Próspera Arbitration Center (pac.hn), RCLC § 2-1-37
- **Tax:** Próspera Business Income Tax ~1%; Retail VAT ~2.5% (within Próspera)
- **Trade structure:** triangular — Brazil Export Partners (Black King / Coopercabruca / CEPOTX) →
  Company (Próspera) → U.S. Import Partner (TrueTech Inc, a Delaware C-corp)

**From the Power of Attorney (#5):**
- **Grantor:** Zhiwen Teh (Gary Teh), CPF [redacted — in sealed original], resident in Singapore
- **Attorney-in-fact:** Paloma Pinheiro Lecheta, CPF [redacted — in sealed original], resident in Florianópolis, SC
- **Scope:** full Brazilian entity-formation and representation mandate (see #5 row),
  expressly to stand up the Brazilian arm of the Agroverse export flow

## Open items

- **Confirm** whether the entity registration number differs from Resident Permit No.
  86901452542528 (the seal is labelled "Resident Permit No."). Pull the registered entity record
  from the ePróspera portal and reconcile.
- **Replace the stale `agentic_ai_context/PROSPERA_ENTITY_OPERATING_AGREEMENT.pdf`**
  (DRAFT v0.1) with the FINAL v1.0 (doc #2).
- **Reconcile** the Operating Agreement's bracketed placeholders — `[REGISTERED AGENT NAME]`
  (§2.3), `[PRÓSPERA REGISTERED OFFICE ADDRESS]` (§2.3), the `[SEATING DATE]` in the Schedule A /
  Signature Block, and the "confirm exact spelling/suffix against the filed Certificate of
  Organization" note (p.1) — against doc #1.
- **Archive the Brazilian entity's output docs** once Paloma completes the setup (contrato social /
  estatuto, CNPJ card, RDE-IED registration) here or in a Brazil-entity subfolder.

_Archived by Sophia Truesight (admin+sophia@truesight.me)._
