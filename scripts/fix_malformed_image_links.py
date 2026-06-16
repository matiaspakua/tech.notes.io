#!/usr/bin/env python3
"""
Fix all malformed image links that are missing opening parenthesis.
Examples:
- ![text]../../iimages/file.png) → ![text](../../images/file.png)
- ![]../../iimages/file.png) → ![](../../images/file.png)
"""

import re
from pathlib import Path

PAGES_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io/pages")

print("Fixing malformed image links...\n")

total_files = 0
total_fixes = 0

for md_file in sorted(PAGES_ROOT.rglob("*.md")):
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Fix pattern: ![text]../../ → ![text](../../
        # This regex finds image alt text followed by ] then relative path
        content = re.sub(r'!\[([^\]]*)\](\.\./[^)]*\))', r'![\1](\2)', content)

        # Also fix iimages/ and mages/ typos
        content = content.replace('iimages/', 'images/')
        content = content.replace('mages/', 'images/')

        if content != original:
            with open(md_file, 'w', encoding='utf-8') as f:
                f.write(content)

            changes = original.count('iimages/') + original.count('mages/')
            # Count malformed links
            malformed_count = len(re.findall(r'!\[[^\]]*\]\(?\.\./[^)]*\)', original)) - len(
                re.findall(r'!\[[^\]]*\]\(?\.\./[^)]*\)', content))

            if changes > 0 or malformed_count > 0:
                display_path = md_file.relative_to(PAGES_ROOT)
                print(f"✅ {display_path}")
                if changes > 0:
                    print(f"   Fixed: {changes} image path typo(s)")
                if malformed_count > 0:
                    print(f"   Fixed: {malformed_count} malformed link(s)")
                total_files += 1
                total_fixes += changes + malformed_count

    except Exception as e:
        print(f"⚠️ Error in {md_file}: {e}")

print("\n" + "=" * 80)
print(f"📊 Summary:")
print(f"   Files modified: {total_files}")
print(f"   Total fixes: {total_fixes}")
print(f"\n✅ All image link issues corrected!")

