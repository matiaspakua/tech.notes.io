#!/usr/bin/env python3
"""
Fix markdown heading hierarchy issues.
Ensures every file has an H1 heading before any H2+ headings.
"""

import os
import re
from pathlib import Path

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"

def extract_title_from_frontmatter(content):
    """Extract title from markdown frontmatter."""
    match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if match:
        fm = match.group(1)
        title_match = re.search(r'title:\s*["\']?([^"\'\n]+)["\']?', fm)
        if title_match:
            return title_match.group(1).strip()
    return None

def has_h1(content):
    """Check if content has H1 heading."""
    return bool(re.search(r'^# [^\s]', content, re.MULTILINE))

def has_h2_before_h1(content):
    """Check if there's H2 before H1."""
    # Get position of first H1
    h1_match = re.search(r'^# ', content, re.MULTILINE)
    h1_pos = h1_match.start() if h1_match else float('inf')

    # Get position of first H2
    h2_match = re.search(r'^## ', content, re.MULTILINE)
    h2_pos = h2_match.start() if h2_match else float('inf')

    return h2_pos < h1_pos

def fix_heading_hierarchy(file_path):
    """Add H1 heading if missing."""
    content = file_path.read_text(encoding='utf-8')

    if has_h1(content):
        return False  # Already has H1

    # Extract title from frontmatter
    title = extract_title_from_frontmatter(content)

    if not title:
        return False  # Can't determine title

    # Find where to insert H1 (after frontmatter)
    fm_end = content.find('---\n', 4)  # Find second ---
    if fm_end == -1:
        return False

    insert_pos = fm_end + 4  # Position after ---\n

    # Insert H1 heading
    h1_heading = f"\n# {title}\n\n"
    new_content = content[:insert_pos] + h1_heading + content[insert_pos:]

    file_path.write_text(new_content, encoding='utf-8')
    return True

def main():
    fixed_count = 0
    skipped_count = 0

    print("🔧 Fixing heading hierarchy issues...\n")

    for md_file in sorted(PAGES_ROOT.glob('**/*.md')):
        if not has_h1(md_file.read_text(encoding='utf-8')):
            success = fix_heading_hierarchy(md_file)

            if success:
                rel_path = md_file.relative_to(REPO_ROOT)
                print(f"✅ {rel_path}")
                fixed_count += 1
            else:
                skipped_count += 1

    print(f"\n{'='*80}")
    print(f"✅ Fixed: {fixed_count}")
    print(f"⏭️  Skipped (no title found): {skipped_count}")

if __name__ == '__main__':
    main()
