# AI SOC Automation Architecture

```text
[Microsoft Sentinel]
    -> (alerts)
[Logic App / Automation Rule]
    ->
[AI Triage Engine (OpenAI API)]
    -> Classify alert
    -> Enrich data
    -> Assign severity
[Swimlane SOAR]
    -> Execute playbook
    -> Notify analyst
    -> Auto-response (optional)
```
