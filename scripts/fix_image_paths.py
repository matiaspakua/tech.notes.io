#!/usr/bin/env python3
"""
Fix all image path typos:
- iimages/ → images/
- mages/ → images/ (when in markdown image syntax)
"""

from pathlib import Path

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"

def main():
    print("🔧 Fixing all image path typos...\n")

    total_files = 0
    total_fixes = 0

    for md_file in sorted(PAGES_ROOT.rglob('*.md')):
        content = md_file.read_text(encoding='utf-8')
        original = content

        # Fix iimages/ → images/
        content = content.replace('iimages/', 'images/')

        # Fix mages/ → images/ (be careful not to break real words)
        # Look for patterns like (../../mages/ or ../../../mages/
        import re
        content = re.sub(r'\(([^)]*?)mages/', r'\1images/', content)

        if content != original:
            md_file.write_text(content, encoding='utf-8')

            # Count fixes
            fixes = (original.count('iimages/') +
                    original.count('mages/'))

            if fixes > 0:
                total_files += 1
                total_fixes += fixes

                display_path = md_file.relative_to(REPO_ROOT)
                print(f"✅ {display_path}")
                print(f"   Fixed: {fixes} typo(s)\n")

    print("=" * 80)
    print(f"📊 Summary:")
    print(f"   Files modified: {total_files}")
    print(f"   Total typos fixed: {total_fixes}")
    print(f"\n✅ All image path typos have been corrected!")
    print(f"   Format: iimages/ or mages/ → images/")

if __name__ == '__main__':
    main()
