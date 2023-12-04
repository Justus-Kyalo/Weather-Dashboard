import "./Home.css";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import DailyWeather from "../DailyWeather/DailyWeather";

const Home = () => {
  return (
    <main>
      <section>
        <SideNav />
      </section>
      <section className="left-section">
        <Profile />
        <DailyWeather />
      </section>
    </main>
  );
};

export default Home;
