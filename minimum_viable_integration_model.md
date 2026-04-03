# Minimum Viable Integration Model

## Purpose

The minimum viable integration model defines the smallest production-worthy setup Footright should deploy to prove value quickly in a client SOC.

## Core Idea

Do not wait for full-stack integration maturity. Deliver one complete workflow that can ingest, analyze, route, and measure outcomes using the client's existing tools.

## Minimum Required Components

### 1. One Alert Source

Choose the highest-volume or highest-pain signal source, such as:

- SIEM alert stream
- EDR detection feed
- Email security alert source

### 2. One Normalization Layer

Convert raw alerts into a common event format with:

- alert type
- source system
- severity
- asset and user identifiers
- timestamps
- available context fields

### 3. One Agent Decision Step

Apply an AI triage agent that can:

- classify likely true positive or false positive
- assign or refine severity
- summarize reasoning
- recommend next action

### 4. One Output Path

Send the result to one operational destination:

- ticketing system
- analyst queue
- chat channel
- SOAR workflow trigger

### 5. One Human Control

Include a human checkpoint for:

- containment actions
- identity-impacting actions
- workflow exceptions
- uncertain classifications

## What This Model Must Prove

- alerts can be ingested reliably
- the agent produces useful, reviewable decisions
- outputs fit the client's existing workflow
- analysts save time without losing control
- results can be measured

## Success Metrics

- triage time reduction
- percent of alerts auto-routed
- false-positive handling improvement
- analyst acceptance of recommendations
- volume handled without workflow breakage

## Deployment Pattern

### Pilot

- limited alert scope
- low-risk response path
- close analyst review

### Stabilize

- tune prompt and logic
- fix field mapping issues
- refine escalation and routing

### Expand

- add second workflow
- add additional enrichment
- introduce approved response actions

## Anti-Patterns

- integrating every client tool before proving one workflow
- embedding connector logic directly inside the agent prompt
- automating containment before governance is ready
- measuring success only by technical completion instead of analyst impact

## Output

Every Footright deployment should be able to describe its minimum viable integration model in one sentence:

`One alert source, one normalized event model, one triage decision step, one operational output, and one human control point.`
