#!/usr/bin/env python3
"""
Brutal image path fix - directly replace all known patterns.
"""

from pathlib import Path

PAGES_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io/pages")

def fix_file(file_path):
    """Fix all image typos in a file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # List of all patterns to fix
    fixes = [
        # Fix iimages typos in all path depths
        ('iimages/', 'images/'),
        # Fix mages typos (but be careful not to break words)
        (')mages/', ')images/'),
        ('](../../mages/', '](../../images/'),
        ('](../../../mages/', '](../../../images/'),
        ('](../mages/', '](../images/'),
        ('](mages/', '](images/'),
    ]

    for old, new in fixes:
        content = content.replace(old, new)

    # Write back if changed
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return original.count('iimages/') + sum(original.count(old) for old, _ in fixes[1:])
    return 0

print("🔧 Brutal image path fix in progress...\n")

total_files = 0
total_fixes = 0

for md_file in sorted(PAGES_ROOT.rglob("*.md")):
    fixes = fix_file(md_file)
    if fixes > 0:
        total_files += 1
        total_fixes += fixes
        display_path = md_file.relative_to(PAGES_ROOT)
        print(f"✅ {display_path} — {fixes} fix(es)")

print("\n" + "=" * 80)
print(f"📊 Summary: {total_fixes} typos fixed in {total_files} files")
print("✅ All image paths corrected!")
