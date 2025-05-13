// cluster-main.js
const cluster = require('node:cluster');
const os = require('os');
const numCPUs = os.cpus().length;
console.clear();


if (cluster.isPrimary || cluster.isMaster) {
  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking for ${numCPUs} CPUs...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);
  require('./dist/main.js'); // <- Runs compiled NestJS app
}
