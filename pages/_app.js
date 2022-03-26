import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Component {...pageProps} />
    <footer>
      <p>&copy; 2022 Omkar Adhali</p>
    </footer>
  </div>)
}

export default MyApp
