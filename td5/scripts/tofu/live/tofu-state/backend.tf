terraform {
  backend "s3" {
    bucket         = "bucketthibaultdevops"  #
    key            = "tofu/terraform.tfstate"
    region         = "eu-west-3"  # 
    encrypt        = true
    dynamodb_table = "tablethibaultdevops"  # 
  }
}
