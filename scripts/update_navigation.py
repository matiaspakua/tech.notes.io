#!/usr/bin/env python3
"""
Update navigation: adds parent-child links to all nested markdown files.

For each directory with nested .md files:
1. Identifies the parent page (usually the directory itself)
2. Adds index section with links to all child pages
3. Ensures each child links back to parent
4. Respects existing structure and doesn't break anything
"""

import os
import re
from pathlib import Path
from collections import defaultdict

PAGES_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io/pages")

def get_rel_url(from_file: Path, to_file: Path) -> str:
    """Get relative markdown link from one file to another."""
    rel = os.path.relpath(to_file, from_file.parent)
    return rel.replace(".md", "")

def extract_title(content: str) -> str:
    """Extract title from markdown frontmatter or heading."""
    # Try frontmatter
    match = re.search(r'^title:\s*"?([^"\n]+)"?', content, re.MULTILINE)
    if match:
        return match.group(1).strip()

    # Try first H1
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if match:
        return match.group(1).strip()

    return "Untitled"

def has_nav_back_to_parent(content: str, parent_name: str = None) -> bool:
    """Check if file has a navigation back link (not just to home)."""
    # Only count as "nav back" if it links to a parent (not just /tech.notes.io)
    lines = content.split('\n')
    for line in lines:
        if '←' in line and 'Inicio' not in line and 'tech.notes.io' not in line:
            return True
    return False

def get_nav_back_section(content: str) -> tuple[str, int]:
    """Extract the nav-back section and its line number."""
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '←' in line and ('Volver' in line or 'Inicio' in line or 'Back' in line):
            return line, i
    return None, -1

def add_nav_back_to_child(content: str, parent_rel_url: str, parent_title: str) -> str:
    """Add navigation back link to child page."""
    # Skip if already has nav back to parent (not just to home)
    if has_nav_back_to_parent(content):
        return content

    # Find insertion point: after frontmatter and title
    lines = content.split('\n')

    # Find end of frontmatter
    fm_end = 0
    if lines[0].strip() == '---':
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                fm_end = i + 1
                break

    # Find end of main title (first H1)
    title_end = fm_end
    for i in range(fm_end, len(lines)):
        if lines[i].startswith('# '):
            title_end = i + 1
            break

    # Insert nav back after title
    nav_link = f"[← {parent_title}]({parent_rel_url})\n"
    lines.insert(title_end, "")
    lines.insert(title_end + 1, nav_link)

    return '\n'.join(lines)

def process_directory(dir_path: Path):
    """Process a directory with nested markdown files."""
    md_files = sorted(dir_path.glob("*.md"))

    if len(md_files) < 2:
        return  # Need at least 2 files: parent + child

    # Identify parent file (usually has dir name or is index-like)
    parent_file = None
    dir_name = dir_path.name

    # Prefer file matching directory name
    for f in md_files:
        if f.stem == dir_name or f.stem.replace('_', ' ').lower() == dir_name.replace('_', ' ').lower():
            parent_file = f
            break

    # Fallback: longest file (likely overview)
    if not parent_file:
        parent_file = max(md_files, key=lambda f: f.stat().st_size)

    child_files = [f for f in md_files if f != parent_file]

    if not child_files:
        return

    print(f"\n📁 Processing: {dir_path.relative_to(PAGES_ROOT)}")
    print(f"  Parent: {parent_file.name}")
    print(f"  Children: {[f.name for f in child_files]}")

    # Update parent file: add index section
    with open(parent_file, 'r', encoding='utf-8') as f:
        parent_content = f.read()

    parent_title = extract_title(parent_content)

    # Build index section
    index_section = "\n## Índice de temas\n\n"
    for child in child_files:
        child_title = extract_title(child.read_text(encoding='utf-8'))
        child_rel = get_rel_url(parent_file, child)
        index_section += f"- [{child_title}]({child_rel})\n"

    # Check if index already exists (avoid duplicates)
    if "## Índice de temas" not in parent_content and "## Contenidos" not in parent_content:
        # Add index before first ## that's not part of frontmatter
        lines = parent_content.split('\n')
        insert_pos = len(lines)

        for i, line in enumerate(lines):
            if i > 20 and line.startswith('## ') and '---' not in lines[:i]:
                insert_pos = i
                break

        # Insert before first section or at end
        if insert_pos < len(lines):
            lines.insert(insert_pos, index_section)
        else:
            lines.append(index_section)

        parent_content = '\n'.join(lines)
        with open(parent_file, 'w', encoding='utf-8') as f:
            f.write(parent_content)
        print(f"  ✓ Updated parent with index section")

    # Update child files: add navigation back
    for child in child_files:
        with open(child, 'r', encoding='utf-8') as f:
            child_content = f.read()

        if not has_nav_back_to_parent(child_content):
            parent_rel = get_rel_url(child, parent_file)
            child_content = add_nav_back_to_child(child_content, parent_rel, parent_title)

            with open(child, 'w', encoding='utf-8') as f:
                f.write(child_content)
            print(f"    ✓ Added nav back to {child.name}")

def main():
    """Scan all directories and update navigation."""
    print("🔄 Scanning for nested markdown structures...\n")

    directories_processed = set()

    # Walk through all directories
    for root, dirs, files in os.walk(PAGES_ROOT):
        # Skip hidden and system dirs
        dirs[:] = [d for d in dirs if not d.startswith('.')]

        root_path = Path(root)

        # Only process if has markdown files
        if any(f.endswith('.md') for f in files):
            # Check if has subdirectories with markdown
            has_nested = False
            for subdir in dirs:
                subdir_path = root_path / subdir
                if any(Path(subdir_path).glob('*.md')):
                    has_nested = True
                    break

            if has_nested:
                for subdir in dirs:
                    subdir_path = root_path / subdir
                    if any(Path(subdir_path).glob('*.md')):
                        if subdir_path not in directories_processed:
                            process_directory(subdir_path)
                            directories_processed.add(subdir_path)

    print("\n✅ Navigation update complete!")

if __name__ == '__main__':
    main()
