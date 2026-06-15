#!/usr/bin/env python3
"""
Validate links in markdown files and report broken ones.
Usage: python3 scripts/validate_links.py pages/books/indice_libros.md
"""

import os
import re
import sys
from pathlib import Path
from urllib.parse import unquote

def extract_links(markdown_content):
    """Extract markdown links [text](path) from content."""
    pattern = r'\[([^\]]+)\]\(([^)]+)\)'
    return re.findall(pattern, markdown_content)

def resolve_path(base_file, link_path):
    """Resolve relative path from base markdown file."""
    # Handle external URLs
    if link_path.startswith('http://') or link_path.startswith('https://'):
        return link_path, True  # External link, always valid

    # Decode URL-encoded paths
    link_path = unquote(link_path)

    # Get directory of base file
    base_dir = os.path.dirname(base_file)

    # Resolve the path
    resolved = os.path.normpath(os.path.join(base_dir, link_path))

    return resolved, os.path.exists(resolved)

def validate_file(filepath):
    """Validate all links in a markdown file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    links = extract_links(content)
    results = []

    for text, path in links:
        resolved_path, exists = resolve_path(filepath, path)
        results.append({
            'text': text,
            'path': path,
            'resolved': resolved_path,
            'exists': exists,
            'is_external': path.startswith('http')
        })

    return results

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/validate_links.py <markdown_file>")
        sys.exit(1)

    filepath = sys.argv[1]

    if not os.path.exists(filepath):
        print(f"Error: File not found: {filepath}")
        sys.exit(1)

    results = validate_file(filepath)

    broken = [r for r in results if not r['is_external'] and not r['exists']]
    working = [r for r in results if r['exists'] or r['is_external']]

    print(f"\n📊 Link Validation Report: {filepath}")
    print(f"{'='*80}")
    print(f"Total links: {len(results)}")
    print(f"✅ Working/External: {len(working)}")
    print(f"❌ Broken: {len(broken)}\n")

    if broken:
        print("BROKEN LINKS:")
        print(f"{'-'*80}")
        for r in broken:
            print(f"\n❌ [{r['text']}]({r['path']})")
            print(f"   Resolved: {r['resolved']}")
            # Check if file exists with different name
            base_dir = os.path.dirname(r['resolved'])
            if os.path.exists(base_dir):
                similar = os.listdir(base_dir)
                similar = [s for s in similar if s.endswith('.md') and not s.startswith('.')]
                if similar:
                    print(f"   📂 Similar files in {os.path.basename(base_dir)}/:")
                    for s in similar[:5]:  # Show first 5
                        print(f"      - {s}")

    print(f"\n{'='*80}")
    if broken:
        print(f"⚠️  Found {len(broken)} broken links")
        return 1
    else:
        print("✅ All links are valid!")
        return 0

if __name__ == '__main__':
    sys.exit(main())
