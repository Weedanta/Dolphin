Add-Type -AssemblyName System.Drawing

function Resize-Image($srcPath, $destPath, $width, $height) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $dest = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($dest)
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($src, 0, 0, $width, $height)
    $dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $dest.Dispose()
    $src.Dispose()
}

$src = "src/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png"
Resize-Image $src "public/favicon-16x16.png" 16 16
Resize-Image $src "public/favicon-32x32.png" 32 32
Resize-Image $src "public/apple-touch-icon.png" 180 180
Resize-Image $src "public/android-chrome-192x192.png" 192 192
Resize-Image $src "public/android-chrome-512x512.png" 512 512
Copy-Item "public/assets/logo.ico" "public/favicon.ico"
Write-Host "Favicon set successfully generated!"
