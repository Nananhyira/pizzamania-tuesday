import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPizza from "./components/AboutPizza";
import PizzaTypes from "./components/PizzaTypes";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutPizza title="Pizza" />
			<PizzaTypes title="Pizza" />
			<Footer />
		</>
	);
}

export default App;
