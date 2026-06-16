#!/usr/bin/env python3
import os
import sys
from pathlib import Path

PAGES_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io/pages")

print("Starting aggressive image path fixes...")
fixed_files = 0
fixed_count = 0

for md_file in sorted(PAGES_ROOT.rglob("*.md")):
    try:
        # Read file with explicit UTF-8 encoding
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Apply replacements
        content = content.replace('iimages/', 'images/')
        content = content.replace('mages/', 'images/')
        content = content.replace('](../../../iimages/', '](../../../images/')
        content = content.replace('](../../iimages/', '](../../images/')
        content = content.replace('](../iimages/', '](../images/')
        content = content.replace('](iimages/', '](images/')

        # Only write if changed
        if content != original:
            with open(md_file, 'w', encoding='utf-8') as f:
                f.write(content)

            changes = original.count('iimages/') + original.count('mages/')
            if changes > 0:
                print(f"✅ Fixed {changes} typos in {md_file.relative_to(PAGES_ROOT)}")
                fixed_files += 1
                fixed_count += changes

    except Exception as e:
        print(f"⚠️ Error processing {md_file}: {e}", file=sys.stderr)

print(f"\n{'='*60}")
print(f"Summary: {fixed_count} typos fixed in {fixed_files} files")
print("✅ Done!")
