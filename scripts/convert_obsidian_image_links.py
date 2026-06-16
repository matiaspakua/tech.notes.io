#!/usr/bin/env python3
"""
Convert Obsidian-format image links (![[image.png]]) to GitHub Pages format (![](path/to/image.png)).
Supports both Obsidian and GitHub Pages simultaneously.
"""

import re
from pathlib import Path
from typing import Tuple

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"
IMAGES_ROOT = REPO_ROOT / "images"

def calculate_relative_path(from_file: Path, to_dir: Path) -> str:
    """Calculate relative path from a markdown file to the images directory."""
    try:
        rel_path = to_dir.relative_to(from_file.parent)
        return str(rel_path).replace('\\', '/')
    except ValueError:
        # If relative_to fails, use a more complex calculation
        from_parts = from_file.parent.parts
        to_parts = to_dir.parts

        # Find common ancestor
        common_length = 0
        for i, (a, b) in enumerate(zip(from_parts, to_parts)):
            if a == b:
                common_length = i + 1
            else:
                break

        # Build relative path
        up_count = len(from_parts) - common_length
        down_parts = to_parts[common_length:]

        rel_parts = ['..'] * up_count + list(down_parts)
        return '/'.join(rel_parts)

def convert_obsidian_links(file_path: Path) -> Tuple[int, str]:
    """
    Convert Obsidian image links to GitHub Pages format.

    Returns:
        Tuple of (count converted, relative path to images)
    """
    content = file_path.read_text(encoding='utf-8')
    original_content = content

    # Calculate relative path to images directory
    rel_path = calculate_relative_path(file_path, IMAGES_ROOT)

    # Pattern to find Obsidian image links
    pattern = r'!\[\[([^\]]+)\]\]'

    def replace_func(match):
        image_name = match.group(1)
        # Convert to GitHub Pages format
        new_link = f'![{image_name}]({rel_path}/{image_name})'
        return new_link

    # Replace all occurrences
    new_content = re.sub(pattern, replace_func, content)

    # Count conversions
    conversions = len(re.findall(pattern, original_content))

    # Write back if changed
    if new_content != original_content:
        file_path.write_text(new_content, encoding='utf-8')

    return conversions, rel_path

def main():
    print("🔄 Converting Obsidian image links to GitHub Pages format...\n")

    total_converted = 0
    files_modified = 0

    # Find all markdown files with Obsidian image links
    for md_file in sorted(PAGES_ROOT.rglob('*.md')):
        content = md_file.read_text(encoding='utf-8')

        if '![[' in content:
            conversions, rel_path = convert_obsidian_links(md_file)

            if conversions > 0:
                files_modified += 1
                total_converted += conversions

                # Show relative path
                display_path = md_file.relative_to(REPO_ROOT)
                print(f"✅ {display_path}")
                print(f"   Converted: {conversions} image link(s)")
                print(f"   Path to images: {rel_path}/\n")

    print("=" * 80)
    print(f"📊 Summary:")
    print(f"   Files modified: {files_modified}")
    print(f"   Total images converted: {total_converted}")
    print(f"\n✅ All Obsidian image links have been converted!")
    print(f"   Format: ![[image.png]] → ![image.png](path/to/images/image.png)")

if __name__ == '__main__':
    main()
