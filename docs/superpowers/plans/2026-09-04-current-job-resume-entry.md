# Current Job Resume Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the five bullets in the current Magpie work-experience entry with the approved senior full-stack and web-automation copy.

**Architecture:** Make one targeted content-only edit to the existing static HTML. Preserve the surrounding structure, title, employer, dates, and all other resume sections; verify the diff and parse the result with Python’s standard-library HTML parser.

**Tech Stack:** HTML, Python standard library, Git

## Global Constraints

- Preserve the official `Fullstack Engineer` job title, employer, location, and dates.
- Keep the existing five-bullet structure and HTML styling.
- Use the approved wording exactly, including literal `[X]` impact-metric markers for the candidate to complete.
- Do not modify other resume sections.
- Add no dependencies or abstractions.

---

### Task 1: Replace the Current Job Bullets

**Files:**
- Modify: `cv/index.html:100-130`

**Interfaces:**
- Consumes: The existing first `work-item` section for Magpie.
- Produces: The same section and HTML structure with five updated list-item bodies.

- [ ] **Step 1: Capture the pre-edit boundary**

Run:

```bash
git diff --exit-code -- cv/index.html
```

Expected: exit code 0 and no output, confirming the CV has no pre-existing edits.

- [ ] **Step 2: Replace only the five Magpie list-item bodies**

Use the existing `<li class="relative pl-4">` and icon spans unchanged, replacing their text with:

```html
Architected and operated distributed e-commerce data collection systems across Shopee, TikTok, and Lazada, combining browser automation, API interception, mobile RPC workers, and regional RabbitMQ queues to process [X]+ tasks per day.

Built resilient scraping workflows with CAPTCHA resolution, session management, retries, failure classification, and automated recovery, improving successful extraction by [X%] and reducing manual intervention by [X%].

Developed secure internal, administrative, and freelancer-facing platforms with role-based access, operational dashboards, extension management, and multi-region payout workflows used by [X]+ users.

Designed ETL and orchestration pipelines using Windmill, Airflow, BigQuery, and Google Cloud Storage to validate, transform, and deliver [X]+ records per day.

Tech stack: TypeScript, Bun, Next.js, Python, Playwright, WXT, RabbitMQ, PostgreSQL, BigQuery, Docker, PM2, Windmill, Airflow, and Google Cloud.
```

The `[X]` strings above are intentional resume metric markers, not unfinished implementation-plan instructions.

- [ ] **Step 3: Verify HTML parsing and bullet count**

Run:

```bash
python - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

class Check(HTMLParser):
    def error(self, message):
        raise AssertionError(message)

html = Path('cv/index.html').read_text()
Check().feed(html)
magpie = html.split('| Magpie - Singapore', 1)[1].split('</section>', 1)[0]
assert magpie.count('<li class="relative pl-4">') == 5
assert 'Architected and operated distributed e-commerce data collection systems' in magpie
assert 'Tech stack: TypeScript, Bun, Next.js, Python' in magpie
print('Magpie entry: 5 bullets; HTML parsed')
PY
```

Expected:

```text
Magpie entry: 5 bullets; HTML parsed
```

- [ ] **Step 4: Verify the scoped diff**

Run:

```bash
git diff --check && git diff --stat && git diff -- cv/index.html
```

Expected: no whitespace errors; `cv/index.html` is the only modified implementation file; the diff changes only the five Magpie bullet bodies.

- [ ] **Step 5: Commit the update**

```bash
git add cv/index.html
git commit -m "docs: strengthen current job resume entry"
```
