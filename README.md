
```bash

sudo apt-get install awscl
npx serverless offline

curl ifconfig.me

mysql -h your-db-instance-name.rds.amazonaws.com -u your_user -p


```



2. Go to AWS Console → EC2 → Security Groups
Visit: https://console.aws.amazon.com/ec2/

In the left sidebar under "Network & Security", click on Security Groups
Find the security group used by your RDS instance (you can find this from the RDS instance settings under "Connectivity & Security" > "VPC security groups")
🔹 3. Edit Inbound Rules of the Security Group
Click on the Security Group, then:
Go to the Inbound Rules tab
Click Edit inbound rules
Add a new rule:

Field	Value
Type	MySQL/Aurora
Protocol	TCP
Port Range	3306
Source	Custom
CIDR/IP	203.0.113.25/32 (your IP/32)


"typeorm:migration:run": "typeorm migration:run -d src/*/entities/*.entity.ts",
"typeorm:migration:generate": "typeorm migration:generate",
    "typeorm:migration:run": "typeorm migration:run -d ./src/*/entities/*.entity.ts",