import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-between py-[20px] px-[40px] background">
      <div>
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export { App };
