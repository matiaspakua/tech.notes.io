#!/usr/bin/env python3
"""
Fix image references and URL issues found in audit.

Fixes:
1. Image references with wrong relative paths
2. http:// → https://
"""

import re
from pathlib import Path

REPO_ROOT = Path("/Users/matiasmiguez/workspace/tech.notes.io")
PAGES_ROOT = REPO_ROOT / "pages"
IMAGES_ROOT = REPO_ROOT / "images"

# Map of common broken image paths to their correct versions
# These are based on manual inspection + audit findings
IMAGE_FIXES = {
    # Images in root /images folder
    r'Normdist_regression\.png': 'images/Normdist_regression.png',
    r'Feature_Learning_Diagram\.png': 'images/Feature_Learning_Diagram.png',
    r'supervised_vs_no_supervised\.png': 'images/supervised_vs_no_supervised.png',
    r'deep_learning\.png': 'images/deep_learning.png',
    r'Colored_neural_network\.jpeg': 'images/Colored_neural_network.jpeg',
    r'AI-ML-DL\.jpeg': 'images/AI-ML-DL.jpeg',
    r'ml_clasificacion_svm\.png': 'images/ml_clasificacion_svm.png',
    r'example-image\.png': 'images/example-image.png',
    r'resumen_linkedin_2024\.png': 'images/resumen_linkedin_2024.png',
    r'lego_model_modern_architecture\.png': 'images/lego_model_modern_architecture.png',
    r'conways_law_example\.jpeg': 'images/conways_law_example.jpeg',
    r'building_confuse\.png': 'images/building_confuse.png',
    r'iot_diagram\.png': 'images/iot_diagram.png',
    r'diagramas_secuancia\.png': 'images/diagramas_secuancia.png',
    r'drawio_landing_page\.png': 'images/drawio_landing_page.png',
    r'desgin-thinking\.png': 'images/desgin-thinking.png',
    r'post_linkedin_voyayer\.png': 'images/post_linkedin_voyayer.png',
    r'demo_time_going_wrong\.png': 'images/demo_time_going_wrong.png',
    r'download\.png': 'images/download.png',
    r'spring_data_schema\.svg': 'images/spring_data_schema.svg',
    r'query_methods_rules\.png': 'images/query_methods_rules.png',
    r'query_method_verify_at_bootstrap\.png': 'images/query_method_verify_at_bootstrap.png',
    r'query_native\.png': 'images/query_native.png',
    r'spring-overview\.png': 'images/spring-overview.png',
    r'test-pyramid\.jpg': 'images/test-pyramid.jpg',
    r'tdd-cycle\.png': 'images/tdd-cycle.png',
    r'crud-rest-api\.png': 'images/crud-rest-api.png',
    r'git_flow\.jpeg': 'images/git_flow.jpeg',
    r'xp_programming\.jpeg': 'images/xp_programming.jpeg',
    r'sistema_solar_trajectoria_planetas_real\.png': 'images/sistema_solar_trajectoria_planetas_real.png',
    r'sistema_solar_copernico\.png': 'images/sistema_solar_copernico.png',
    r'durable_execution_complexity\.png': 'images/durable_execution_complexity.png',
    r'durable_execution_monolito_transaccion\.png': 'images/durable_execution_monolito_transaccion.png',
    r'durable_execution_transaccional\.png': 'images/durable_execution_transaccional.png',
}

def fix_file(file_path: Path) -> tuple[bool, int]:
    """Fix image and URL references in a file."""
    try:
        content = file_path.read_text(encoding='utf-8')
    except Exception as e:
        print(f"  ✗ Cannot read {file_path.name}: {e}")
        return False, 0

    original = content
    changes = 0

    # Fix http:// → https://
    if 'http://' in content and 'http://localhost' not in content:
        content = re.sub(r'http://(?!localhost)', 'https://', content)
        changes += content.count('https://') - original.count('https://')

    # Fix image paths
    for broken_pattern, correct_path in IMAGE_FIXES.items():
        # Match in markdown: ![alt](broken_path)
        pattern = rf'!\[([^\]]*)\]\({broken_pattern}\)'
        if re.search(pattern, content):
            content = re.sub(pattern, rf'![\1]({correct_path})', content)
            changes += 1

        # Match in HTML: src="broken_path"
        pattern = rf'src=[\"\']?{broken_pattern}[\"\']?'
        if re.search(pattern, content):
            content = re.sub(pattern, f'src="{correct_path}"', content)
            changes += 1

    if changes > 0:
        file_path.write_text(content, encoding='utf-8')
        return True, changes

    return False, 0

print("🔧 Fixing image references and URLs...\n")

fixed_files = 0
total_changes = 0

for md_file in sorted(PAGES_ROOT.glob('**/*.md')):
    success, changes = fix_file(md_file)
    if success:
        file_short = str(md_file).replace(str(PAGES_ROOT) + '/', '')
        print(f"  ✓ {file_short} ({changes} changes)")
        fixed_files += 1
        total_changes += changes

print(f"\n✅ Fixed {fixed_files} files, {total_changes} total changes")
