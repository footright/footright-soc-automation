# Connectors Strategy

## Purpose

This document defines how Footright should approach integrations for client SOC automation programs without forcing tool replacement or overbuilding early in the engagement.

## Strategy Principles

- Integrate into the client's existing stack before proposing new platforms
- Prioritize connectors that support the first production workflow, not the entire future-state roadmap
- Favor APIs and webhooks over brittle UI-driven automations
- Keep the integration layer tool-agnostic so the AI workflow can be reused across clients
- Separate ingestion, decisioning, and action connectors so each can evolve independently
- Start with low-risk read and routing actions before moving into containment actions

## Connector Categories

### 1. Ingestion Connectors

Used to pull or receive signals into the Footright workflow.

- SIEM alerts
- EDR detections
- Email security alerts
- IAM and identity events
- Cloud security findings
- Threat intelligence lookups
- Ticketing or case events

### 2. Enrichment Connectors

Used to add context that improves triage quality.

- Asset and CMDB data
- User and identity context
- Threat intelligence feeds
- GeoIP and IP reputation services
- Vulnerability and exposure context
- Historical incident and ticket context

### 3. Action Connectors

Used to route or execute next steps after AI triage.

- SOAR playbooks
- Ticket creation and updates
- ChatOps notifications
- Analyst queue assignment
- Email notifications
- EDR containment actions
- IAM disable or reset actions

## Prioritization Model

Rank connectors using the following order:

1. Required for the first high-volume workflow
2. Low-friction authentication and permissions model
3. Reliable API or webhook support
4. Clear audit trail and rollback options
5. Reusable across multiple workflows

## Recommended Rollout

### Phase 1: Minimum Viable Connectivity

- One primary alert source
- One enrichment source
- One routing destination
- Human-in-the-loop approval for response actions

### Phase 2: Operational Expansion

- Add a second alert source or adjacent security tool
- Reuse the same normalized event model
- Add case management updates and analyst feedback capture
- Introduce guided response actions

### Phase 3: Controlled Automation

- Add approved containment actions
- Expand to cross-platform playbooks
- Introduce metrics, exception handling, and health monitoring
- Formalize change management and governance checkpoints

## Preferred Connector Paths

### Best Case

- Native API
- Event-driven webhook
- Service account with scoped permissions
- Structured JSON payloads

### Acceptable

- Scheduled polling against a stable API
- Email or ticket ingestion when API options are limited
- Export/import patterns for low-maturity environments

### Avoid When Possible

- Manual copy-paste operations as a dependency
- Browser automation for core production flows
- Connectors that require broad admin privileges for simple read actions
- One-off custom logic that cannot be reused across clients

## Design Guardrails

- Normalize inbound alerts into a shared schema before agent processing
- Keep connector-specific mappings outside the core triage logic
- Log every inbound event, enrichment call, and downstream action
- Support idempotent processing so retries do not create duplicate actions
- Design for partial failure so a broken connector does not collapse the full workflow

## Output

Each client engagement should end connector planning with:

- a prioritized connector list
- the required authentication and approvals
- the first workflow dependencies
- known risks and fallbacks
- a short-term build plan and later-phase roadmap
