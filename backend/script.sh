# Create a temp folder for exported Windows certs
mkdir -p /tmp/win-certs

# Use PowerShell in Windows to export all root CAs
powershell.exe -Command 'Export-Certificate -Cert Store://Root/* -FilePath C:\temp\wsl-certs.p7b'

# Convert Windows path to WSL path and copy into WSL
cp /mnt/c/temp/wsl-certs.p7b /tmp/win-certs/

# Install p7bto PEM converter
sudo apt update && sudo apt install -y openssl

# Convert the .p7b bundle into PEM format
openssl pkcs7 -print_certs -in /tmp/win-certs/wsl-certs.p7b -out /tmp/win-certs/wsl-certs.pem

# Split PEM into individual .crt files
awk 'BEGIN {c=0;} /BEGIN CERTIFICATE/ {c++} { print > "/tmp/win-certs/cert" c ".crt"}' /tmp/win-certs/wsl-certs.pem

# Copy all certs into Ubuntu's CA directory
sudo cp /tmp/win-certs/*.crt /usr/local/share/ca-certificates/

# Update CA store
sudo update-ca-certificates

