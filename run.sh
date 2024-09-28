docker stop f2lb-website
docker rm f2lb-website
docker build . -t f2lb-website-image
docker run --name f2lb-website -p 3000:3000 -d f2lb-website-image