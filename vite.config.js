export default ({ mode }) => {
  const config = {
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

  // Development configuration
  if (mode === 'development') {
    config.base = '/'
  }
  // Production configuration
  else {
    config.base = '/quiz/'  // Serve from the dist directory in production
  }

  return config
}
