for (const sig of ['SIGTERM', 'SIGINT']) {
  process.on(sig, () => {
    console.log(`\n${sig} received, shutting down...`);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10_000).unref();
  });
}
if (p.startsWith('/api/') && method === 'GET') { ... }const origin = req.headers.origin;
if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
res.setHeader('Vary', 'Origin');const server = createServer((req, res) => {
  handle(req, res).catch((err) => {
    console.error('Unhandled handler error:', err);
    if (!res.headersSent) {
      res.writeHead(500, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    } else {
      res.end();
    }
  });
});