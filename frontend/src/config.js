export default process.env.NODE_ENV === 'development' ? {
  sevrer: 'https://localhost:4120',
} : {
  sevrer: 'https://wapp.weblite.me/notelite',
}
