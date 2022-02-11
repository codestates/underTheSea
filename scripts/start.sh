#!/bin/bash
cd /home/ubuntu/underTheSea/server

export DATABASE_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USERNAME --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')
export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export GOOGLE_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names GOOGLE_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export GOOGLE_SECRET_ID=$(aws ssm get-parameters --region ap-northeast-2 --names GOOGLE_SECRET_ID --query Parameters[0].Value | sed 's/"//g')
export BUCKET_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names BUCKET_NAME --query Parameters[0].Value | sed 's/"//g')
export BUCKET_REGION=$(aws ssm get-parameters --region ap-northeast-2 --names BUCKET_REGION --query Parameters[0].Value | sed 's/"//g')
export BUCKET_ACCESS_KEY=$(aws ssm get-parameters --region ap-northeast-2 --names BUCKET_ACCESS_KEY --query Parameters[0].Value | sed 's/"//g')
export BUCKET_SECRET_KEY=$(aws ssm get-parameters --region ap-northeast-2 --names BUCKET_SECRET_KEY --query Parameters[0].Value | sed 's/"//g')

sudo kill -9 $(sudo lsof -t -i:80)
authbind --deep pm2 start index.js