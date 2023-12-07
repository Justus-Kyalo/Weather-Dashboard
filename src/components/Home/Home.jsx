import "./Home.css";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";
import DailyWeather from "../DailyWeather/DailyWeather";

const Home = ({ data, forecast }) => {
  return (
    <main>
      <section>
        <SideNav />
      </section>
      <section className="main-section">
        <section className="left-section">
          <div>
            <Profile />
          </div>
          <div>
            <DailyWeather data={data} forecast={forecast} />
          </div>
        </section>
        <section className="right-section"></section>
      </section>
    </main>
  );
};

export default Home;
