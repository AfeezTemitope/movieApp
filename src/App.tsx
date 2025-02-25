import NavBar from "./components/NavBar.tsx";
import BackgroundImageSection from "./components/BackgroundImageSection.tsx";
import TrendingMovie from "./components/TrendingMovie.tsx";
import TvShows from "./components/TvShows.tsx";
import Footer from "./components/Footer.tsx"
function App() {

  return (
        <>
            <NavBar />
            <BackgroundImageSection />
            <TrendingMovie />
            <TvShows />
            <Footer/>

        </>

  )
}

export default App
