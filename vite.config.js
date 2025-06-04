export default {
  base: '/quiz/',
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization'
    }
  },
  build: {
    target: 'esnext'
  },
  publicDir: 'input'  // Serve the input directory as static files
}
