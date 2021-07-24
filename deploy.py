import boto3

#replicating this CLI input:
## aws s3 cp --recursive --exclude ".*" --acl public-read ./ s3://www.wkbonline.net/

files = ["home.html","wkbonline.js"]

aws_access_key_id = input("Access key ID: ")
aws_secret_access_key = input("Secret access key: ")
my_session = boto3.Session(
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name="us-east-2"
    )
s3 = my_session.resource('s3')

for x in files:
    object = s3.Object('www.wkbonline.net',x)
    put_file = open(x,"r").read().encode("utf-8")
    object.put(
        ACL = "public-read",
        Body = put_file,
        ContentType='text/html'
    )
