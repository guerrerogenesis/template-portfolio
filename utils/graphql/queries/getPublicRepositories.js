import { gql } from "@apollo/client";

export const GET_MY_GITHUB_REPOSITORIES = gql`
  query GetRepositories {
    viewer {
      repositories(first: 10, privacy: PUBLIC) {
        nodes {
          name
          description
          isPrivate
          url
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          homepageUrl
          repositoryTopics(first: 100) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;
