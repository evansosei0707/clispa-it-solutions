import { client } from "./lib/client";
import { projectsQuery } from "./lib/query";
import { servicesQuery } from "./lib/query";

const URL = "http://locahost:3000";

async function getServicesData() {
  const servicesQueryData = await client.fetch(servicesQuery);

  return servicesQueryData;
}

async function getProjectsData() {
  const projectsQueryData = await client.fetch(projectsQuery);

  return projectsQueryData;
}

export default async function sitemap() {
  const servicesData: Promise<singleServicePageDataTypes[]> = getServicesData();
  const projectsData: Promise<ProjectsListType[]> = getProjectsData();

  const [servicesUrls, projectsUrls] = await Promise.all([
    servicesData,
    projectsData,
  ]);

  const services = servicesUrls.map(({ serviceSlug, _updatedAt }) => ({
    url: `${URL}/services/${serviceSlug}`,
    lastModified: _updatedAt,
  }));

  const projects = projectsUrls.map(({ projectSlug, _updatedAt }) => ({
    url: `${URL}/projects/${projectSlug}`,
    lastModified: _updatedAt,
  }));

  const routes = ["", "/services", "/projects", "/about", "/contact"].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...services, ...projects];
}
