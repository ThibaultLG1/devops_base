provider "aws" {
  region = "eu-west-3"
}

module "function" {
  source = "git::https://github.com/BTajini/devops-base.git//td3/tofu/modules/lambda"

  name = var.name
  src_dir = "${path.module}/src"
  runtime = "nodejs20.x"
  handler = "index.handler"

  memory_size = 128
  timeout     = 5

  environment_variables = {
    NODE_ENV = "production"
  }
}

module "gateway" {
  source = "git::https://github.com/BTajini/devops-base.git//td3/tofu/modules/api-gateway"

  name = var.name
  function_arn       = module.function.function_arn
  api_gateway_routes = ["GET /"]
}
