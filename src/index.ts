import app from './app';

function startServer() {
  try {
    const server = app.listen(8000, () => console.log(`http://localhost:3000`));
    server.on('error', () => process.exit(1));
  } catch (error) {
    process.exit(1);
  }
}

void startServer();
