#!/usr/bin/env python3
"""
Fix broken links in the repository.
Handles: URL-encoded filenames, missing files, and anchor links.
"""

import os
import re
from pathlib import Path
from urllib.parse import unquote

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"

def get_all_headings(file_path):
    """Extract all headings from a markdown file as anchors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        headings = set()
        # Match # Heading format
        for match in re.finditer(r'^#{1,6}\s+(.+)$', content, re.MULTILINE):
            heading = match.group(1).strip()
            # Convert to anchor format (lowercase, spaces to hyphens, remove special chars)
            anchor = heading.lower()
            anchor = re.sub(r'[^\w\s-]', '', anchor)  # Remove special chars
            anchor = re.sub(r'\s+', '-', anchor)  # Replace spaces with hyphens
            headings.add(anchor)

        return headings
    except:
        return set()

def fix_broken_link(file_path, link_match, old_link):
    """Attempt to fix a broken link in a file."""
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Case 1: URL-encoded filenames (e.g., Claude%20Code.md → Claude Code.md)
    if '%20' in old_link or '%' in old_link:
        decoded_link = unquote(old_link)
        target_path = (file_path.parent / decoded_link).resolve()
        if target_path.exists():
            # Replace the old link with the decoded version
            new_content = content.replace(f']({old_link})', f']({decoded_link})')
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True, f"Fixed URL encoding: {old_link} → {decoded_link}"

    # Case 2: Check if anchor link target exists
    if '#' in old_link:
        parts = old_link.split('#')
        if len(parts) == 2:
            file_part, anchor = parts

            # If no file part, it's an anchor in the same file
            if not file_part:
                headings = get_all_headings(file_path)
                if anchor not in headings:
                    # Try similar anchors
                    similar = [h for h in headings if anchor.lower() in h.lower()]
                    if similar:
                        new_anchor = similar[0]
                        new_link = f"#{new_anchor}"
                        new_content = content.replace(f']({old_link})', f']({new_link})')
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        return True, f"Fixed anchor: {old_link} → {new_link}"
            else:
                # Check target file for anchor
                target_path = (file_path.parent / file_part).resolve()
                if target_path.exists():
                    target_headings = get_all_headings(target_path)
                    if anchor not in target_headings:
                        # Try to find similar anchor
                        similar = [h for h in target_headings if anchor.lower() in h.lower()]
                        if similar:
                            new_anchor = similar[0]
                            new_link = f"{file_part}#{new_anchor}"
                            new_content = content.replace(f']({old_link})', f']({new_link})')
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            return True, f"Fixed anchor: {old_link} → {new_link}"

    return False, "Could not auto-fix"

def main():
    # Read AUDIT.md to get list of broken links
    audit_file = REPO_ROOT / "AUDIT.md"
    with open(audit_file, 'r', encoding='utf-8') as f:
        audit_content = f.read()

    # Extract broken links
    broken_links = []
    for line in audit_content.split('\n'):
        if 'Link target not found:' in line:
            # Extract filename and line number
            match = re.search(r'`pages/([^:]+):(\d+)`.*Link target not found: (.+)', line)
            if match:
                file_part = match.group(1)
                line_num = int(match.group(2))
                link = match.group(3).strip()

                # Remove special markdown formatting
                if link.startswith('\\'):
                    continue  # Skip escaped anchors

                broken_links.append({
                    'file': f'pages/{file_part}',
                    'line': line_num,
                    'link': link
                })

    print(f"Found {len(broken_links)} broken links to fix")

    # Group by file
    by_file = {}
    for item in broken_links:
        if item['file'] not in by_file:
            by_file[item['file']] = []
        by_file[item['file']].append(item)

    fixed_count = 0
    failed_count = 0

    for file_path_str, links in sorted(by_file.items()):
        file_path = REPO_ROOT / file_path_str
        if not file_path.exists():
            print(f"\n⚠️  File not found: {file_path_str}")
            continue

        print(f"\n📝 {file_path_str}")
        for item in links:
            success, msg = fix_broken_link(file_path, None, item['link'])
            if success:
                print(f"  ✅ {msg}")
                fixed_count += 1
            else:
                print(f"  ❌ Line {item['line']}: {item['link']} - {msg}")
                failed_count += 1

    print(f"\n{'='*80}")
    print(f"Fixed: {fixed_count}")
    print(f"Failed: {failed_count}")

if __name__ == '__main__':
    main()
