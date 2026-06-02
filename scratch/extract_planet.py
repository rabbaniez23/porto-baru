import re

with open(r'd:\Pekerjaan\portofolio\scratch\raw_page.html', 'r', encoding='utf-8') as f:
    content = f.read()

print("=== HERO SECTION MARKUP ===")
match = re.search(r'<section[^>]*class="[^"]*main-hero[^"]*"[^>]*>.*?</section>', content, re.DOTALL | re.IGNORECASE)
if match:
    hero_text = match.group(0)
else:
    idx = content.find('class="main-hero"')
    if idx != -1:
        hero_text = content[idx:idx+4000]
    else:
        hero_text = "Hero not found!"

with open(r'd:\Pekerjaan\portofolio\scratch\hero_markup.html', 'w', encoding='utf-8') as f_out:
    f_out.write(hero_text)

print("Saved to d:\\Pekerjaan\\portofolio\\scratch\\hero_markup.html")






