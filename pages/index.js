import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import About from "@components/about";
import Experiences from "@components/experiences/experiences";
import Education from "@components/education/education";
import Header from "@components/header";
import Projects from "@components/projects/projects";
import { useRouter } from "next/router";
import Metadata from "@components/metadata";

import createApolloClient from "@utils/graphql/client";
import { GET_MY_GITHUB_REPOSITORIES } from "@utils/graphql/queries/getPublicRepositories";

export async function getStaticProps({ locale }) {
  const apiUrl = "https://api.github.com"; // Define la URL base de la API
  const client = createApolloClient(apiUrl);

  let repositories = [];
  let repositoriesData = [];
  let isError = false;
  let msgError = "";
  try {
    const { data } = await client.query({
      query: GET_MY_GITHUB_REPOSITORIES,
      variables: {
        page: 10, // Número de repositorios a consultar
      },
    });

    repositoriesData = data.viewer.repositories.nodes;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    isError = true;
    msgError = error.message;
  }
  repositories = repositoriesData.map(repo => ({
    name: repo.name,
    description: repo.description || null,
    private: repo.isPrivate,
    url: repo.url,
    language: repo.primaryLanguage?.name || null,
    stars: repo.stargazers?.total_count || 0,
    web_link: repo.homepageUrl || null,
    topics: repo.repositoryTopics?.nodes || [],
  }));

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "global"])),
      repositories,
      isError,
      msgError,
    },
  };
}

export default function Home({ repositories, isError, msgError }) {
  isError &&
    console.log("Error fetching GitHub repositories: \n[" + msgError + "]"); //Aviso sobre consulta a API de GitHub
  const { t } = useTranslation(["home", "global"]);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{t("global:pageTitle")}</title>
        <Metadata t={t} />
      </Head>
      <main className=" flex justify-between flex-col lg:flex-row px-6 lg:px-24 ">
        <div className="flex flex-col justify-between h-screen m-auto lg:m-1 lg:max-w-5xl z-2 font-mono text-sm  lg:flex-row ">
          <Header t={t} router={router} />
        </div>
        <div className="flex justify-center flex-col max-w-xl mx-auto lg:mx-0 lg:w-1/2 lg:mt-32">
          <About content={t} />
          <Experiences content={t} />
          <Education content={t} />
          <Projects content={t} repositories={repositories} />
        </div>
      </main>
    </div>
  );
}
