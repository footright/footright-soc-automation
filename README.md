# Footright AI SOC Automation

This repository packages Footright LLC's go-to-market and delivery starter kit for selling AI-powered SOC automation directly to end-user clients across enterprise and SMB segments.

## Brand Notes

- Company name: `Footright LLC`
- Demo identity: `Footright AI SOC Automation`
- Before publishing, replace placeholder contact references with your real email, website, and scheduling link

## Ideal Buyers

- Enterprise security teams with Microsoft Sentinel, Splunk, or mature SIEM/SOAR tooling
- Mid-market companies that need automation but lack enough SOC headcount
- SMBs using managed security, Microsoft security tools, or limited internal security staff
- CISOs, Directors of Security, Security Operations Managers, and IT leaders owning response workflows

## Core Value Proposition

- Reduce alert fatigue with AI-assisted triage
- Automate repetitive Tier 1 workflows
- Improve MTTR with guided response actions
- Standardize analyst decisions and escalation quality
- Help lean teams operate like a larger SOC without adding headcount first

## Structure

- `connectors_strategy.md`: connector planning approach for client environments
- `integration_readiness_checklist.md`: pre-build readiness checklist for integrations
- `minimum_viable_integration_model.md`: lean deployment model for the first production workflow
- `agent_workflow_design.md`: agent-stage workflow design from intake through action
- `offer/`: core service offer, pricing, and packaging
- `demo/`: architecture, assessment templates, and platform-agnostic demo narratives
- `sales/`: outreach, discovery, and closing assets for direct client selling
- `case_study/`: sample proof narrative for proposals and sales calls
- `playbooks/`: example SOC automation playbooks
- `agents/`: prompt for an AI triage agent

## How To Use

1. Start with [soc_offer.md](C:\Users\moses\ai-soc-automation-agency\offer\soc_offer.md) to choose the right package for SMB, mid-market, or enterprise buyers.
2. Open [index.html](C:\Users\moses\ai-soc-automation-agency\index.html) to run the clickable client demo locally in a browser.
3. Use [alert_triage_demo.md](C:\Users\moses\ai-soc-automation-agency\demo\alert_triage_demo.md), [playbook_automation_demo.md](C:\Users\moses\ai-soc-automation-agency\demo\playbook_automation_demo.md), and [architecture.md](C:\Users\moses\ai-soc-automation-agency\demo\architecture.md) to walk prospects through workflow examples tied to their existing tools.
4. Customize the sales scripts for the target company, buyer role, and pain points.
5. Adapt the sample playbooks to the customer's SIEM, SOAR, EDR, and email security stack.
6. Reuse the triage agent prompt as a base prompt for OpenAI-driven alert classification and recommended actions.
7. Start each client engagement with [environment_assessment.md](C:\Users\moses\ai-soc-automation-agency\demo\environment_assessment.md) and [tool_inventory_template.md](C:\Users\moses\ai-soc-automation-agency\demo\tool_inventory_template.md).
8. Use [connectors_strategy.md](C:\Users\moses\ai-soc-automation-agency\connectors_strategy.md), [integration_readiness_checklist.md](C:\Users\moses\ai-soc-automation-agency\integration_readiness_checklist.md), and [minimum_viable_integration_model.md](C:\Users\moses\ai-soc-automation-agency\minimum_viable_integration_model.md) to scope the first client deployment.
9. Use [agent_workflow_design.md](C:\Users\moses\ai-soc-automation-agency\agent_workflow_design.md) when designing how alerts move from ingestion to triage, routing, and approval.

## Hosting

- For a fast shareable demo link, upload this folder to GitHub and enable GitHub Pages, or import it into Vercel as a static site.
- The demo entry point is [index.html](C:\Users\moses\ai-soc-automation-agency\index.html).

## Selling Motion

- Lead with alert fatigue, analyst capacity, and MTTR improvement
- Position the solution as augmentation, not analyst replacement
- Start with 1 to 2 high-volume use cases to prove value quickly
- Show measurable outcomes within the first 30 to 45 days
- Expand into additional playbooks, integrations, and reporting once trust is established
