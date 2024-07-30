import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/producContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "MyStore Ecom",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default About;
