# Export Trade Financing Syndicate Agreement — Template

Use this template for new syndicate financing agreements.

**Precedence — two contract types:**
| Type | DAO fee on proceeds | Rationale |
|------|---------------------|-----------|
| **Shipment financing contract** | 20% | Direct cacao shipment; DAO charges 20% for fund management. |
| **Operational fund contract** | None (0%) | Fund invests in other AGLs; those AGLs already charge 20%. No double-charging. |

---

## Source data

Before drafting, pull shipment details from:
- **Shipment Ledger Listing**: https://docs.google.com/spreadsheets/d/1GE7PUq-UT6x2rBN-Q2ksogbWpgyuh2SaxJyG_uEK6PU/edit?gid=483234653#gid=483234653
- Columns: Shipment ID, Shipment Date, Status, Description, Cargo Size, Cacao (kg), Transaction Type, Capital Injection, Ledger URL, TrueSight DAO URL, Ledger spreadsheet URL

---

## Placeholders for template

| Placeholder | Description |
|-------------|-------------|
| `[AGL_ID]` | e.g. AGL14, AGL15 |
| `[DATE]` | Agreement date |
| `[SHIPMENT_DESCRIPTION]` | From Ledger "Description" column |
| `[CARGO_SIZE]` | e.g. 40 KG |
| `[CACAO_KG]` | e.g. 40 |
| `[FINANCING_AMOUNT]` | Total amount (BRL or USD) |
| `[COST_SCHEDULE]` | Itemized cost table |
| `[LEDGER_URL]` | e.g. https://agroverse.shop/agl14 |
| `[LEDGER_SPREADSHEET_URL]` | Full Google Sheets URL for ledger |
| `[AGREEMENT_TYPE]` | "cacao shipment" or "operational fund" (no cacao collateral) |

---

## Template body (cacao shipment)

```
EXPORT TRADE FINANCING SYNDICATE AGREEMENT

Date:
[DATE]

To:
Syndicate Members

RE: EXPORT TRADE FINANCING SYNDICATE AGREEMENT — [AGL_ID]

We are pleased to present this Export Trade Financing Syndicate Agreement (the "Agreement") to raise funds for financing a shipment detailed in section 3.1 from Brazil to the USA. This Agreement is entered into by and between TrueTech Inc, acting on behalf of TrueSight DAO, and the Syndicate Members collectively referred to as the "Parties."

1. PURPOSE
The purpose of this Agreement is to establish a syndicate for the financing of the export trade from Brazil to the USA, specifically to provide TrueTech Inc, acting on behalf of TrueSight DAO, with the necessary funds to facilitate the procurement, transportation, and related expenses of [SHIPMENT_DESCRIPTION].

2. SYNDICATE MEMBERS AND CONTRIBUTIONS
2.1 The Syndicate Members agree to contribute the funds specified in Exhibit A to this Agreement, which represents their respective proportional share in the total financing amount required for the cacao shipment.
2.2 Each Syndicate Member's contribution is subject to be held in escrow pending the successful completion of the financing and the fulfillment of all conditions precedent outlined in this Agreement.

3. TERMS AND CONDITIONS
3.1 Financing Amount:
The total financing amount required for the cacao shipment is [FINANCING_AMOUNT]. Additional financing requirements may arise as operations proceed, and these will be reported and managed in accordance with section 3.10.

Cost Schedule
[COST_SCHEDULE]

3.2 Profit-Based Repayment:
TrueTech Inc, acting on behalf of TrueSight DAO, shall retain 20% of the net profit as a management fee, and distribute the remaining 80% of the net profit to the Syndicate Members (financiers) in proportion to their capital contributions, upon complete sale of the shipment. Net profit is calculated by deducting all associated costs, including procurement, transportation, insurance, packaging, warehousing, marketing, and any other expenses related to the sale of the cacao.
In the event that total revenue from sales does not cover the initial financing capital, any shortfall between the capital injected and the USD returned will be compensated at an exchange rate of 1 USD to 1 TDG. This rate is based on the prevailing net asset value per TDG token at the time of drafting the contract.

3.3 Security:
TrueTech Inc, acting on behalf of TrueSight DAO, shall pledge the contents of the shipment being imported into the USA for sale as collateral for the financing in favor of the Syndicate Members.

3.4 Syndicate Lead:
Zhiwen Teh shall be appointed as the Syndicate Lead, responsible for overseeing the financing, ensuring compliance with the terms of this Agreement, and facilitating communications between TrueTech Inc, acting on behalf of TrueSight DAO, and the Syndicate Members.
Logs of transactions performed on shipment will be maintained at: [LEDGER_URL]

3.5 Covenants:
TrueTech Inc, acting on behalf of TrueSight DAO, shall provide timely updates on the progress of the cacao shipment, including confirmation of approval and necessary permits from relevant authorities, insurance coverage, and compliance with all applicable laws and regulations.
Updates will be provided in both:
● TrueSight DAO WhatsApp channel TownHall (restricted to TDG token holders)
● Thereafter on the [AGL_ID] ledger (publicly available): [LEDGER_URL]

3.6 Offer to Purchase:
TrueTech Inc, acting on behalf of TrueSight DAO for the purpose of conducting cacao circles, may make an offer to purchase cacao from a Syndicate Member at their financing amount plus a 20% markup. The Syndicate Member has the option to accept or decline this offer.
TrueTech Inc, acting on behalf of TrueSight DAO, is restricted from making purchase offers when TrueTech Inc does not have proof of sufficient liquidity to make purchases. The following online documents are the source of proof:
● Funds managed on Solana Blockchain
● Funds managed off chain by private individuals which have been pre-committed to financing such purchases

3.7 Withdrawal of Cacao Stake:
Syndicate Members may elect to withdraw a portion or sub-portion of their cacao ownership that remains unsold and has not been converted to cash. In the event of withdrawal, the withdrawing Syndicate Member shall incur a withdrawal fee equal to 20% of the cost of the cacao, plus the associated freighting and packaging material costs that have already been incurred. Additionally, the withdrawing member shall bear the shipping cost for the inventory to their designated location.

3.8 Transfer of Cacao Ownership Under DAO Management:
Syndicate Members have the option to transfer ownership of their shipment to other DAO members at cost. The cost is calculated as the original cost of inventory, plus the associated freighting cost and packaging materials. In this transaction, 20% of the transacted amount paid by the new owner to the existing owner is charged by DAO to facilitate the transaction.

3.9 Provisions for Losses:
If total sales revenue falls short of the originally financed amount plus the 20% markup that syndicate members would receive, USDT/USD will be distributed based on their ownership share. Any shortfall will be compensated with TDG at an exchange rate of 1 USD = 1 TDG.

3.10 Additional Financing for Expenses and Profit Distribution:
TrueTech Inc, acting on behalf of TrueSight DAO, shall report any additional financing required for expenses not covered under the initial financing agreement in the TownHall channel, accessible to TDG token holders. These reports shall be subsequently updated on the [AGL_ID] ledger, ensuring transparency and accountability for all Syndicate Members.
In the event that additional financing is required to cover expenses or operating needs related to the sale of the cacao shipment, additional financiers may participate by injecting capital. The proceeds from the retail sales of the shipment shall be distributed proportionately to the total amount of capital injected by each financier, including both initial Syndicate Members and additional financiers. The profit distribution will be calculated based on each financier's proportional share of the total capital contributed, ensuring fairness and transparency.
This clause acknowledges that the syndicate financing is open-ended, allowing additional financiers to contribute to covering expenses and operating needs as they arise during operations. The distribution of proceeds will be proportional to the amount financed by each participant, ensuring equitable returns based on capital contributions.

4. TERM AND TERMINATION
4.1 This Agreement shall become effective upon the execution where the initial required amount has been financed by Syndicate Members and remain in force until the successful fulfillment of all obligations under this Agreement.
4.2 This Agreement may be terminated by written agreement between TrueTech Inc, acting on behalf of TrueSight DAO, and the Syndicate Members or terminated automatically upon the completion of repayment of the financed amount in accordance with the terms agreed upon.

5. GOVERNING LAW
This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, United States.

6. CONFIDENTIALITY
All Parties shall maintain the confidentiality of any non-public information shared during the negotiation and execution of this Agreement unless required by law or with prior written consent from the relevant Parties.

7. FINANCING
7.1 Financing Terms
Within US: For syndicate members within the United States, please use Venmo for financing. Transfer predetermined USD amount directly to our Venmo account @garyjob.
7.2 Financing Deadline:
Financing should be completed within 5 business days of the financing call. Failure to complete financing within this timeframe will result in the release of the financing slot for other potential financiers.

IN WITNESS WHEREOF
The Parties have caused this Export Trade Financing Syndicate Agreement to be duly executed as of the date mentioned above.

Signatures
TrueTech Inc (on behalf of TrueSight DAO): Zhiwen Teh, President, TrueTech Inc
Syndicate Members: Zhiwen Teh, Syndicate Lead, Investment Syndicate

Exhibit A: Syndicate Members Financing Roster
Amount to be financed: [AMOUNT]
[Table: Syndicate Financier Name | Financed Amount (USD) | Financier Initial]
Location of [AGL_ID]: [LEDGER_URL]
```

---

## Operational fund variant (no cacao collateral)

For agreements like AGL15 (mixed-use operational fund that invests in other AGLs):
- **Section 1 PURPOSE:** Describe operational uses (procurement, production, freighting, domestic shipping, vehicle gasoline, retailers consignment, investment in other AGLs, etc.).
- **Section 3.1:** Use "operational fund" and itemized expense categories instead of cacao cost schedule.
- **Section 3.3 SECURITY:** No physical cacao collateral; state that the fund is secured by DAO governance and ledger transparency.
- **Section 3.2 Profit-Based Repayment — NO 20% fee:** Operational funds that invest in other AGLs do **not** charge the 20% DAO fee on proceeds. The underlying shipment AGLs already charge 20%. Financiers receive their proportional share of capital and returns without an additional fee layer. State this explicitly to avoid double-charging.
- **Section 3.6–3.8:** Omit cacao-specific clauses (offer to purchase, withdrawal of cacao stake, transfer of cacao ownership).
- **Section 3.9 Provisions for Losses:** No "20% markup" language; shortfall compensated with TDG.
