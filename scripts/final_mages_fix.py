#!/usr/bin/env python3
"""
Final fix for remaining mages/ typos (the ' only when it's part of an image path error).
"""

from pathlib import Path
import re

PAGES_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io/pages")

print("🔧 Final mages/ typo fix...\n")

total_files = 0
total_fixes = 0

for md_file in sorted(PAGES_ROOT.rglob("*.md")):
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix pattern: any occurrence of mages/ that's NOT part of images/
    # Use negative lookbehind to ensure it's not preceded by 'i'
    content = re.sub(r'(?<!i)mages/', 'images/', content)

    if content != original:
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(content)

        fixes = original.count('mages/') - content.count('mages/')
        if fixes > 0:
            total_files += 1
            total_fixes += fixes
            display_path = md_file.relative_to(PAGES_ROOT)
            print(f"✅ {display_path} — {fixes} fix(es)")

print("\n" + "=" * 80)
print(f"📊 Summary: {total_fixes} typos fixed in {total_files} files")
print("✅ Final image path corrections complete!")
