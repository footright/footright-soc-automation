# Integration Readiness Checklist

## Objective

Use this checklist before building production automation for a client environment.

## Tooling Readiness

- [ ] Primary alert source identified
- [ ] Secondary alert sources documented
- [ ] Ticketing or case destination identified
- [ ] Enrichment sources confirmed
- [ ] Existing SOAR platform documented, or no-SOAR path selected

## Access And Security

- [ ] API availability confirmed for required tools
- [ ] Webhook support confirmed where relevant
- [ ] Authentication method documented
- [ ] Service account or integration account available
- [ ] Required permissions approved
- [ ] Logging and audit requirements documented
- [ ] Data handling constraints documented

## Workflow Readiness

- [ ] Highest-volume alert type selected
- [ ] Current analyst workflow mapped
- [ ] Escalation path documented
- [ ] Human approval points defined
- [ ] Allowed automated actions confirmed
- [ ] Rollback or manual override path defined

## Data Readiness

- [ ] Required alert fields available from source system
- [ ] Asset and user context sources identified
- [ ] Severity mapping approach defined
- [ ] Required enrichment inputs available
- [ ] Normalized event schema agreed

## Delivery Readiness

- [ ] Minimum viable workflow defined
- [ ] Success metrics agreed
- [ ] Test cases collected from real alerts or realistic samples
- [ ] Sandbox, pilot, or limited rollout path identified
- [ ] Stakeholders assigned for validation and signoff

## Operational Readiness

- [ ] Exception handling path defined
- [ ] Ownership for connector failures assigned
- [ ] Monitoring or health-check approach defined
- [ ] Analyst feedback loop included
- [ ] Tuning cadence agreed

## Exit Criteria

The integration is ready to build when:

- required systems are accessible
- the first workflow is clearly scoped
- approval and security boundaries are understood
- test and validation paths are available
- the client agrees on what success looks like
