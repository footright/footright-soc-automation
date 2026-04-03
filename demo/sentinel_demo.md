# Sentinel AI Triage Demo

## Use Case: Suspicious Login Alert

### Step 1: Alert Trigger

- Multiple failed login attempts detected

### Step 2: Automation Rule

- Trigger Logic App

### Step 3: AI Processing

Send to OpenAI:

```json
{
  "alert": "Multiple failed logins from IP X",
  "user": "admin@company.com",
  "location": "Unknown"
}
```

### Step 4: AI Output

- Classification: Suspicious
- Severity: High
- Reason: Impossible travel plus brute force pattern

### Step 5: Action

- Tag incident
- Assign to analyst
- Trigger containment (optional)
