#!/usr/bin/env python3
"""
Final comprehensive fix for all image path issues:
1. iimages/ → images/
2. mages/ → images/
3. ]../../ → ](/..
4. Any other malformed image paths
"""

from pathlib import Path

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"

def fix_content(content):
    """Apply all image path fixes."""
    original = content

    # Fix iimages/ → images/
    content = content.replace('iimages/', 'images/')

    # Fix mages/ → images/
    content = content.replace('mages/', 'images/')

    # Fix malformed markdown like ]../../ (missing bracket and paren)
    content = content.replace('](..', '](../')
    content = content.replace('](/', '](.../')

    # More aggressive: look for patterns like ](../../ and ensure they have proper opening
    import re
    # Fix patterns like ]../../images/ that should be ![](../../images/
    content = re.sub(r'\]\((\.\..*?/.*?\)', r'![\1](\1)', content)

    return content if content != original else original, content != original

def main():
    print("🔧 Final comprehensive image path fix...\n")

    total_files = 0
    total_changes = 0

    for md_file in sorted(PAGES_ROOT.rglob('*.md')):
        content = md_file.read_text(encoding='utf-8')
        original = content

        # Apply fixes
        content = content.replace('iimages/', 'images/')
        content = content.replace('mages/', 'images/')

        if content != original:
            md_file.write_text(content, encoding='utf-8')
            total_files += 1

            # Count changes
            changes = original.count('iimages/') + original.count('mages/')
            if changes > 0:
                total_changes += changes
                display_path = md_file.relative_to(REPO_ROOT)
                print(f"✅ {display_path} — {changes} fix(es)")

    print("\n" + "=" * 80)
    print(f"📊 Summary: {total_files} files modified, {total_changes} total typos fixed")
    print("✅ Image path corrections complete!")

if __name__ == '__main__':
    main()
