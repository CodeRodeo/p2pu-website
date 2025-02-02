terraform {
  backend "s3" {
    bucket = "sysadmin"
    region = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "random_pet" "bucket" {}

resource "aws_s3_bucket" "website" {
  bucket = "p2pu-website-${random_pet.bucket.id}"
  acl    = "public-read"
  force_destroy = true

  website {
    index_document = "index.html"
  }
}

output "site_url" {
  value = aws_s3_bucket.website.website_endpoint
}

output "bucket" {
  value = aws_s3_bucket.website.bucket
}
