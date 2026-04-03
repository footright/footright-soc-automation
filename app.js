const scenarios = [
  {
    id: "suspicious-login",
    name: "Suspicious Login",
    subtitle: "Impossible travel and brute force pattern",
    payload: {
      source: "Client SIEM or identity platform",
      alert: "Multiple failed logins followed by a successful login",
      user: "admin@company.com",
      ip: "185.220.101.44",
      location: "Unknown / impossible travel",
      host: "Identity login service"
    },
    output: {
      classification: "Suspicious",
      severity: "High",
      confidence: "0.93",
      reasoning: "Multiple failed logins, unexpected location, and impossible-travel behavior indicate probable account compromise activity.",
      recommended_action: "Escalate to analyst, trigger MFA reset review, and isolate privileged sessions if confirmed."
    },
    steps: [
      { title: "Alert Triggered", detail: "The client's existing alert source detects repeated failed logins and unusual geolocation." },
      { title: "Workflow Starts", detail: "A connector, webhook, or automation rule sends normalized alert data to the AI Triage Engine." },
      { title: "AI Decision", detail: "The model evaluates context, assigns severity, and drafts recommended actions." },
      { title: "Execution Response", detail: "The result is sent to the client's SOAR, ticketing system, or analyst queue." }
    ]
  },
  {
    id: "phishing-email",
    name: "Phishing Email",
    subtitle: "Suspicious sender, URL extraction, domain blocking",
    payload: {
      source: "Client email security or SIEM workflow",
      alert: "User reported suspicious email with credential harvesting link",
      sender: "payroll-update@security-checks.co",
      url: "hxxps://m365-auth-check[.]com",
      user: "finance@company.com",
      mailbox: "Microsoft 365"
    },
    output: {
      classification: "Malicious",
      severity: "High",
      confidence: "0.97",
      reasoning: "Brand impersonation, credential-harvesting indicators, and suspicious domain age support a phishing verdict.",
      recommended_action: "Quarantine message, block sender and domain, notify impacted user, and search for similar emails."
    },
    steps: [
      { title: "Alert Ingested", detail: "The email alert arrives from the client's mail security stack or user report workflow." },
      { title: "Indicators Extracted", detail: "URLs, sender, headers, and user context are gathered for enrichment." },
      { title: "AI Classification", detail: "The model scores maliciousness and explains the likely phishing pattern." },
      { title: "Automated Action", detail: "The client's existing tools launch containment steps and document the case for analyst review." }
    ]
  },
  {
    id: "endpoint-isolation",
    name: "Endpoint Isolation",
    subtitle: "EDR-driven containment with analyst guardrails",
    payload: {
      source: "Client EDR platform",
      alert: "Suspicious PowerShell spawned from Office process",
      host: "FIN-LAPTOP-22",
      user: "jane.doe@company.com",
      process: "powershell.exe -enc ...",
      severity_hint: "Elevated"
    },
    output: {
      classification: "Needs Containment",
      severity: "Critical",
      confidence: "0.9",
      reasoning: "The Office-to-PowerShell chain and encoded command pattern suggest hands-on-keyboard or malware execution behavior.",
      recommended_action: "Isolate endpoint, preserve telemetry, notify IR lead, and validate user activity."
    },
    steps: [
      { title: "EDR Detection", detail: "The client's endpoint tool flags suspicious execution behavior on a finance workstation." },
      { title: "Context Enrichment", detail: "Host criticality, user role, and recent activity are added before triage." },
      { title: "AI Recommendation", detail: "The model identifies likely malicious tradecraft and raises containment urgency." },
      { title: "Containment Path", detail: "The playbook uses the client's existing response path to isolate the endpoint and open an incident for human validation." }
    ]
  }
];

const scenarioList = document.getElementById("scenarioList");
const runDemoButton = document.getElementById("runDemoButton");
const scenarioTitle = document.getElementById("scenarioTitle");
const scenarioStatus = document.getElementById("scenarioStatus");
const alertPayload = document.getElementById("alertPayload");
const aiOutput = document.getElementById("aiOutput");
const stepper = document.getElementById("stepper");

let selectedScenario = scenarios[0];
let activeTimeouts = [];

function clearTimers() {
  activeTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
  activeTimeouts = [];
}

function formatJson(data) {
  return JSON.stringify(data, null, 2);
}

function renderScenarioButtons() {
  scenarioList.innerHTML = "";

  scenarios.forEach((scenario) => {
    const button = document.createElement("button");
    button.className = `scenario-button${scenario.id === selectedScenario.id ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `${scenario.name}<span>${scenario.subtitle}</span>`;
    button.addEventListener("click", () => {
      selectedScenario = scenario;
      scenarioStatus.textContent = "Ready";
      renderScenarioButtons();
      renderScenario();
    });
    scenarioList.appendChild(button);
  });
}

function renderSteps(activeIndex = -1) {
  stepper.innerHTML = "";

  selectedScenario.steps.forEach((step, index) => {
    const item = document.createElement("div");
    item.className = `step${index <= activeIndex ? " active" : ""}`;
    item.innerHTML = `<strong>${step.title}</strong>${step.detail}`;
    stepper.appendChild(item);
  });
}

function renderScenario() {
  scenarioTitle.textContent = selectedScenario.name;
  alertPayload.textContent = formatJson(selectedScenario.payload);
  aiOutput.textContent = "{\n  \"status\": \"Awaiting run\"\n}";
  renderSteps();
}

function runDemo() {
  clearTimers();
  renderScenario();
  scenarioStatus.textContent = "Running";

  selectedScenario.steps.forEach((step, index) => {
    const timeoutId = setTimeout(() => {
      renderSteps(index);

      if (index === 1) {
        aiOutput.textContent = "{\n  \"status\": \"Analyzing context...\"\n}";
      }

      if (index === selectedScenario.steps.length - 1) {
        aiOutput.textContent = formatJson(selectedScenario.output);
        scenarioStatus.textContent = "Complete";
      }
    }, 700 * (index + 1));

    activeTimeouts.push(timeoutId);
  });
}

renderScenarioButtons();
renderScenario();
runDemoButton.addEventListener("click", runDemo);
