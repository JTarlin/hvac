//component import
import Hero from "./Hero/Hero";
import TriFold from "./TriFold/TriFold";

//import styling
import "./Home.scss";

export default function Home() {

    return (
        <main>
            <Hero />
            <TriFold />
        </main>
    )
}