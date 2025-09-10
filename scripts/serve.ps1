# Simple static file server using PowerShell
param(
  [string]$Root = "c:\\Users\\wingdoodles\\Desktop\\WebDev\\QuantumCollective",
  [int]$Port = 8080
)

Add-Type -AssemblyName System.Net.Http
$listener = New-Object System.Net.HttpListener
$prefix = "http://*:$Port/"
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving $Root at $prefix"

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.AbsolutePath.TrimStart('/')
    if ([string]::IsNullOrEmpty($path)) { $path = "apps/demo/index.html" }
    $localPath = Join-Path $Root $path

    if (Test-Path $localPath) {
      $bytes = [System.IO.File]::ReadAllBytes($localPath)
      $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
      $mime = switch ($ext) {
        ".html" { "text/html" }
        ".js" { "application/javascript" }
        ".css" { "text/css" }
        default { "application/octet-stream" }
      }
      $context.Response.ContentType = $mime
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $context.Response.OutputStream.Close()
    } else {
      $context.Response.StatusCode = 404
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $context.Response.OutputStream.Close()
    }
  }
} finally {
  $listener.Stop()
}