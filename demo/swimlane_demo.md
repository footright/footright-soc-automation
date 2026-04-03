# Swimlane Playbook Demo

## Playbook: Phishing Alert Automation

### Steps

1. Ingest alert from SIEM
2. Extract indicators (URL, IP, sender)
3. Enrich with threat intelligence
4. Send to AI for classification
5. If malicious:
   - Block domain
   - Quarantine email
   - Notify user
6. Close or escalate

## Outcome

- Manual work reduced by about 80%
