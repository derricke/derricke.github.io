#!/bin/bash

# Load API key from .env if not set
if [ -z "$TINYPNG_API_KEY" ]; then
  TINYPNG_API_KEY=$(grep TINYPNG_API_KEY .env | cut -d '=' -f2)
fi

if [ -z "$TINYPNG_API_KEY" ]; then
  echo "Error: TINYPNG_API_KEY not found in .env or environment."
  exit 1
fi

IMAGE_DIR="public/images"

for img in "$IMAGE_DIR"/*.{png,jpg,jpeg}; do
  if [ -f "$img" ]; then
    echo "Compressing $img..."
    
    # Request compression
    RESPONSE=$(curl -s --user api:$TINYPNG_API_KEY \
      --data-binary @"$img" \
      https://api.tinify.com/shrink)
    
    # Extract URL of compressed image
    DOWNLOAD_URL=$(echo "$RESPONSE" | grep -oP '"url":"\K[^"]+')
    
    if [ -n "$DOWNLOAD_URL" ]; then
      echo "Downloading compressed image from $DOWNLOAD_URL..."
      curl -s -o "$img.tmp" "$DOWNLOAD_URL"
      mv "$img.tmp" "$img"
      echo "Done with $img"
    else
      echo "Failed to compress $img. Response: $RESPONSE"
    fi
  fi
done
