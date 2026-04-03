# AI SOC Automation Architecture

```text
[Client Alert Sources]
  -> SIEM, EDR, Email Security, IAM, Cloud, Ticketing
        ->
[Discovery and Inventory Layer]
  -> Identify tools, APIs, workflows, alert volume, and bottlenecks
        ->
[Normalization Layer]
  -> Convert alerts into a common internal schema
        ->
[AI Triage Engine]
  -> Classify alert
  -> Enrich context
  -> Assign severity
  -> Recommend next action
        ->
[Execution Layer]
  -> Existing SOAR, ticketing, chat, email, scripts, or manual review queue
        ->
[Analyst / Client Team]
  -> Approve, contain, escalate, close, and optimize
```

## Design Principle

Footright is not tied to one SIEM or SOAR. The solution is designed to sit on top of the client's existing environment, inventory what is already in place, normalize incoming alerts, and apply AI-driven triage and orchestration using the tools the client already owns.
