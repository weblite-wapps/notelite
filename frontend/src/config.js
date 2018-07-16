export default process.env.NODE_ENV === 'development' ? {
  sevrer: 'https://localhost:3090',
} : {
  sevrer: 'https://weblite.me:3090',
}
