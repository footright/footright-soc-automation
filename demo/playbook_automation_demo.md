# Platform-Agnostic Playbook Demo

## Playbook: Phishing Alert Automation

### Steps

1. Ingest alert from the client's SIEM, email security platform, or ticketing workflow
2. Extract indicators (URL, IP, sender, attachment metadata)
3. Enrich with threat intelligence
4. Send normalized data to AI for classification
5. If malicious:
   - Block domain or sender using the client's tools
   - Quarantine email if supported
   - Notify user and security team
6. Close, escalate, or route for analyst approval

## Outcome

- Manual work reduced significantly without requiring a specific SOAR platform
