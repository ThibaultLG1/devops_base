terraform {
  backend "s3" {
    bucket         = "bucketthibaultdevops" # Remplace par ton bucket S3
    key            = "td5/scripts/tofu/live/lambda-sample/terraform.tfstate" # Clé unique pour cet état
    region         = "eu-west-3" # Remplace par ta région AWS
    encrypt        = true
    dynamodb_table = "tablethibaultdevops" # Remplace par ta table DynamoDB
  }
}
