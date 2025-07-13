import { useParams } from "react-router";
import { servicesContent } from "../constants";
import ServicesHero from "../sections/ServicesHero";
import ServiceProjectShowcase from "../sections/ServiceProjectShowcase";
import ServicesLink from "../sections/ServicesLink";

const Services = () => {
  const { service } = useParams();
  console.log(service, "services pro");

  const { title, description, projects } = servicesContent[service];

  return (
    <main>
      <ServicesHero title={title} description={description} />
      <ServiceProjectShowcase projects={projects} />
      <ServicesLink />
    </main>
  );
};

export default Services;
