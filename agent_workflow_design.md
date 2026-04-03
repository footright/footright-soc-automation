# Agent Workflow Design

## Objective

This document describes how Footright should structure the agent-driven workflow that sits between alert ingestion and downstream analyst or automation actions.

## Workflow Overview

1. Receive alert from source system
2. Normalize the event into a shared schema
3. Enrich the alert with required context
4. Run agent triage and decision support
5. Apply routing or approval logic
6. Trigger the next system action
7. Capture analyst feedback and workflow outcome

## Functional Stages

### 1. Intake

The intake layer should:

- accept alerts from API, webhook, polling, or routed events
- assign a unique workflow identifier
- validate required fields
- reject or quarantine malformed payloads

### 2. Normalization

The normalization step should:

- map source-specific fields into a common schema
- preserve raw event data for traceability
- label missing fields and confidence gaps

### 3. Enrichment

The enrichment step should gather:

- asset context
- user context
- prior incident history
- threat intelligence where relevant
- workflow metadata needed for routing

### 4. Agent Triage

The agent should produce:

- event summary
- likely classification
- severity recommendation
- key reasoning points
- recommended next action
- confidence indicator

### 5. Policy And Control

Business logic around the agent should determine:

- whether the result is auto-routed
- whether analyst review is required
- whether a downstream action is blocked pending approval
- how exceptions and low-confidence cases are handled

### 6. Downstream Execution

The system should support one or more of these actions:

- create or update a ticket
- notify an analyst channel
- trigger a playbook
- create a case note
- request approval for response action

### 7. Feedback Loop

Analyst outcomes should be captured to improve:

- prompt quality
- severity consistency
- routing logic
- false-positive reduction
- future workflow prioritization

## Design Rules

- Keep agent reasoning separate from connector code
- Prefer deterministic policy checks around the agent
- Preserve full auditability of inputs, outputs, and actions
- Make low-confidence outcomes visible instead of silently acting on them
- Design every stage so it can fail safely without losing the full incident record

## Recommended Initial Agent Scope

The first production agent should focus on:

- alert summarization
- severity recommendation
- routing recommendation
- analyst handoff support

Containment and identity-changing actions should stay outside direct agent control until governance and approvals are established.

## Reference Architecture

`Source alert -> Normalization -> Enrichment -> Agent triage -> Policy checks -> Ticket or playbook action -> Analyst feedback`
