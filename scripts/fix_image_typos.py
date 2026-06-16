#!/usr/bin/env python3
"""
Fix image path typos: 'mages/' → 'images/'
This corrects a common typo where 'images' was misspelled as 'mages'.
"""

import re
from pathlib import Path

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"

def fix_image_typos(file_path: Path) -> int:
    """
    Fix 'mages/' typo to 'images/' in image links.

    Returns:
        Number of fixes made
    """
    content = file_path.read_text(encoding='utf-8')
    original_content = content

    # Replace 'mages/' with 'images/'
    new_content = content.replace('mages/', 'images/')

    # Count replacements
    fixes = original_content.count('mages/') - new_content.count('mages/')

    # Write back if changed
    if new_content != original_content:
        file_path.write_text(new_content, encoding='utf-8')

    return fixes

def main():
    print("🔧 Fixing image path typos (mages/ → images/)...\n")

    total_fixed = 0
    files_modified = 0

    # Find all markdown files with the typo
    for md_file in sorted(PAGES_ROOT.rglob('*.md')):
        content = md_file.read_text(encoding='utf-8')

        if 'mages/' in content:
            fixes = fix_image_typos(md_file)

            if fixes > 0:
                files_modified += 1
                total_fixed += fixes

                display_path = md_file.relative_to(REPO_ROOT)
                print(f"✅ {display_path}")
                print(f"   Fixed: {fixes} typo(s)\n")

    print("=" * 80)
    print(f"📊 Summary:")
    print(f"   Files modified: {files_modified}")
    print(f"   Total typos fixed: {total_fixed}")
    print(f"\n✅ All image path typos have been fixed!")

if __name__ == '__main__':
    main()
