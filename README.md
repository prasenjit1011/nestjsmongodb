
```bash

sudo apt-get install awscl
npx serverless offline
rm package-lock.json && rm -rf node_modules && npm install && npm install --package-lock-only && git add package-lock.json && git commit -m "Fix: update lockfile to match package.json" && git push


aws sqs send-message   --queue-url https://sqs.us-east-1.amazonaws.com/466015320752/lambdaproductcreate.fifo   --message-body '{"type": "test", "time": "'$(date)'"}'  --message-group-id "group1"

aws sqs receive-message   --queue-url https://sqs.us-east-1.amazonaws.com/466015320752/lambdaproductcreate.fifo   --max-number-of-messages 1   --wait-time-seconds 5   --attribute-names All   --message-attribute-names All



```


