# SOC Environment Assessment

## Objective

Before deploying automation, Footright inventories the client's SOC environment, identifies existing tooling and gaps, and designs the AI workflow to fit the current stack instead of forcing a platform change.

## Assessment Areas

### 1. Alert Sources

- SIEM platform
- EDR platform
- Email security platform
- IAM and identity providers
- Cloud security tooling
- Ticketing or case management platform

### 2. Workflow and Operations

- Highest-volume alert types
- Current escalation process
- Existing playbooks
- Analyst queues and ownership
- Manual response bottlenecks

### 3. Integration Readiness

- API availability
- Webhooks
- Native connectors
- Access model and permissions
- Logging and audit requirements

### 4. Automation Readiness

- Existing SOAR platform or none
- Approval requirements for response actions
- Allowed automated actions
- Required human checkpoints

## Deliverable

The output is a recommended integration and automation plan showing:

- what tools already exist
- what workflows can be automated first
- where AI triage fits
- what minimum tooling is required
- how to deliver value without forcing rip-and-replace
