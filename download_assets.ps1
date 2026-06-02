# download_assets.ps1
# Script to download assets from paralleluniverse.com.ua with corrected paths

$themeBase = "https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth"
$uploadBase = "https://paralleluniverse.com.ua/wp-content/uploads"

# Create directories
New-Item -ItemType Directory -Path "asset" -Force | Out-Null
New-Item -ItemType Directory -Path "asset/font" -Force | Out-Null
New-Item -ItemType Directory -Path "asset/js" -Force | Out-Null
New-Item -ItemType Directory -Path "asset/js/gsap" -Force | Out-Null
New-Item -ItemType Directory -Path "public" -Force | Out-Null
New-Item -ItemType Directory -Path "public/images" -Force | Out-Null
New-Item -ItemType Directory -Path "public/fonts" -Force | Out-Null

Write-Host "Downloading Stylesheets and Scripts..."
Invoke-WebRequest -Uri "$themeBase/style.css" -OutFile "asset/style.css" -ErrorAction SilentlyContinue
Invoke-WebRequest -Uri "$themeBase/assets/css/media.css" -OutFile "asset/media.css" -ErrorAction SilentlyContinue
Invoke-WebRequest -Uri "$themeBase/assets/css/plugins.css" -OutFile "asset/plugins.css" -ErrorAction SilentlyContinue
Invoke-WebRequest -Uri "$themeBase/assets/css/fancybox.css" -OutFile "asset/fancybox.css" -ErrorAction SilentlyContinue
Invoke-WebRequest -Uri "$themeBase/assets/css/lenis.css" -OutFile "asset/lenis.css" -ErrorAction SilentlyContinue
Invoke-WebRequest -Uri "$themeBase/js/scripts.js" -OutFile "asset/js/scripts.js" -ErrorAction SilentlyContinue

# Download Fonts
Write-Host "Downloading Fonts..."
$fonts = @(
    "fonts.css", "style.css", "Bounded-Variable.ttf", 
    "Haval-Regular.woff2", "Haval-Regular.woff", "Haval-Regular.ttf", "Haval-Regular.eot",
    "Haval-Medium.woff2", "Haval-Medium.woff", "Haval-Medium.ttf", "Haval-Medium.eot",
    "Haval-Light.woff2", "Haval-Light.woff", "Haval-Light.ttf", "Haval-Light.eot",
    "Haval-MediumSlanted.woff2", "Haval-MediumSlanted.woff", "Haval-MediumSlanted.ttf", "Haval-MediumSlanted.eot"
)

foreach ($font in $fonts) {
    Write-Host "  -> $font"
    Invoke-WebRequest -Uri "$themeBase/assets/fonts/$font" -OutFile "asset/font/$font" -ErrorAction SilentlyContinue
    # Also put in public/fonts for React dev server
    Copy-Item -Path "asset/font/$font" -Destination "public/fonts/$font" -ErrorAction SilentlyContinue
}

# Download Icon Fonts (icomoon)
Write-Host "Downloading icomoon icon fonts..."
New-Item -ItemType Directory -Path "asset/font/fonts" -Force | Out-Null
New-Item -ItemType Directory -Path "public/fonts/fonts" -Force | Out-Null
$icomoonFonts = @("icomoon.eot", "icomoon.ttf", "icomoon.woff", "icomoon.svg")
foreach ($ico in $icomoonFonts) {
    Write-Host "  -> $ico"
    Invoke-WebRequest -Uri "$themeBase/assets/fonts/fonts/$ico" -OutFile "asset/font/fonts/$ico" -ErrorAction SilentlyContinue
    Copy-Item -Path "asset/font/fonts/$ico" -Destination "public/fonts/fonts/$ico" -ErrorAction SilentlyContinue
}

# Download Images from image.txt URLs
Write-Host "Downloading Images..."
$images = @(
    "bg.png", "border.svg", "circle1.svg", "circle2.svg", 
    "footer2.png", "footer.png", "gear1.png", "gear2.png", "gear3.png", 
    "line.png", "lines2.png", "lines.png", "main1.png", 
    "mount1.png", "mount2.png", "planet1.png", "planet2.png", 
    "planet3.png", "planet4.png", "portal.png"
)

foreach ($img in $images) {
    Write-Host "  -> $img"
    Invoke-WebRequest -Uri "$themeBase/images/$img" -OutFile "public/images/$img" -ErrorAction SilentlyContinue
}

# Download uploads (sculptures etc.)
Write-Host "Downloading Uploads..."
$uploads = @(
    "2021/03/e1.jpg",
    "2024/02/rsh-24247.jpg",
    "2024/02/rsh-24408.jpg",
    "2024/02/rsh-24470.jpg",
    "2024/03/rsh-24361.jpg",
    "2024/03/rsh-24501.jpg",
    "2024/04/rsh-24488.jpg",
    "2025/06/logo.svg",
    "2025/06/w1.jpg",
    "2025/06/w2.jpg",
    "2025/06/w3.jpg"
)

foreach ($up in $uploads) {
    $filename = Split-Path $up -Leaf
    Write-Host "  -> $filename"
    Invoke-WebRequest -Uri "$uploadBase/$up" -OutFile "public/images/$filename" -ErrorAction SilentlyContinue
}

# Recreate image.txt in workspace root
$imageTxtContent = @"
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/bg.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/border.svg
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/circle1.svg
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/circle2.svg
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/footer2.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/footer.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/gear1.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/gear2.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/gear3.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/line.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/lines2.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/lines.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/main1.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/mount1.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/mount2.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet1.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet2.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet3.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/planet4.png
https://paralleluniverse.com.ua/wp-content/themes/e-parallel-smooth/images/portal.png
https://paralleluniverse.com.ua/wp-content/uploads/2021/03/e1.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2024/02/rsh-24247.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2024/02/rsh-24408.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2024/02/rsh-24470.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2024/03/rsh-24361.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2024/03/rsh-24501.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2024/04/rsh-24488.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2025/06/logo.svg
https://paralleluniverse.com.ua/wp-content/uploads/2025/06/w1.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2025/06/w2.jpg
https://paralleluniverse.com.ua/wp-content/uploads/2025/06/w3.jpg
"@
Set-Content -Path "image.txt" -Value $imageTxtContent

Write-Host "Download Complete!"
