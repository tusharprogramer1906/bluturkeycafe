import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SLUGS = [
    "birthday-party-ideas",
    "coffee-brewing-methods",
    "perfect-date-cafe",
    "specialty-coffee-guide",
]

for slug in SLUGS:
    p = ROOT / "app" / "blog" / slug / "page.tsx"
    s = p.read_text(encoding="utf-8")
    m = re.search(r'<article className="prose[\s\S]*?</article>', s)
    if not m:
        print("FAIL", slug)
        continue
    body = m.group(0)
    comp = f"""export default function BlogArticleContent() {{
  return (
{body}
  );
}}
"""
    out = ROOT / "components" / "blog" / "articles" / f"{slug}.tsx"
    out.write_text(comp, encoding="utf-8")
    print("OK", slug)
