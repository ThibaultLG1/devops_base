resource "aws_iam_openid_connect_provider" "github_actions" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["d89e3bd43d5d909b47a18977aa9d5ce36cee184c"]

  lifecycle {
    ignore_changes = [thumbprint_list]
  }
}


data "tls_certificate" "github" {
  url = var.provider_url
}
