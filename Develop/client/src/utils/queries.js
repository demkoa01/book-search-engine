// GET_ME -> executes the me query set up using Apollo
import gql from "graphql-tag";

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                title
                bookId
                authors
                description
                image
                link
            }
        }
    }
`;