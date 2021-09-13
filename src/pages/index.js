import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <>
    <Layout>
      <head>
        <title>
          Kingshuk Deb | Portfolio
        </title>
      </head>
      <a href="#"><ScrollToTop smooth color="#fff" style={{padding: '1rem', backgroundColor: 'hsl(267, 60%, 30%)'}}/></a>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Technologies />
      <Projects />
      <Acomplishments />
    </Layout>
    </>
  );
};

export default Home;
