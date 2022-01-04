terraform {
  source = "git::git@github.com:terraform-aws-modules/terraform-aws-autoscaling.git?ref=v4.1.0"
}

include {
  path = find_in_parent_folders()
}

dependencies {
  paths = ["../aws-data", "../digital-booking-vpc", "../sg-back", "../alb_2"]
}

dependency "aws-data" {
  config_path = "../aws-data"
}

dependency "digital-booking-vpc" {
  config_path = "../digital-booking-vpc"
}

dependency "sg-back" {
  config_path = "../sg-back"
}

dependency "alb_2" {
  config_path = "../alb_2"
}

###########################################################
# View all available inputs for this module:
# https://registry.terraform.io/modules/terraform-aws-modules/autoscaling/aws/4.1.0?tab=inputs
###########################################################
inputs = {
  # Determines whether to create launch template or not
  # type: bool
  create_lt = true

  # The number of Amazon EC2 instances that should be running in the autoscaling group
  # type: number
  desired_capacity = 1

  # `EC2` or `ELB`. Controls how health checking is done
  # type: string
  health_check_type = "EC2"

  # The AMI from which to launch the instance
  # type: string
  image_id = dependency.aws-data.outputs.amazon_linux2_aws_ami_id

  # The type of the instance to launch
  # type: string
  instance_type = "t2.micro"

  # The maximum size of the autoscaling group
  # type: number
  max_size = 1

  # The minimum size of the autoscaling group
  # type: number
  min_size = 0

  # Name used across the resources created
  # type: string
  name = "game-grouse"

  # A list of security group IDs to associate
  # type: list(string)
  security_groups = [dependency.sg-back.outputs.security_group_id]

  # A set of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing
  # type: list(string)
  target_group_arns = dependency.alb_2.outputs.target_group_arns

  # Determines whether to use a launch template in the autoscaling group or not
  # type: bool
  use_lt = true

  # A list of subnet IDs to launch resources in. Subnets automatically determine which availability zones the group will reside. Conflicts with `availability_zones`
  # type: list(string)
  vpc_zone_identifier = dependency.digital-booking-vpc.outputs.public_subnets

  
}
