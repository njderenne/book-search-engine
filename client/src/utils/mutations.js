import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
             }
        }
    }
`; 

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput) {
        saveBook(input: $bookInput) {
            _id
            bookCount
            savedBooks {
                bookId
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: Int!) {
        deleteBook(bookId: $bookId) {
            _id
            bookCount
            savedBooks {
                bookId
                title
            }
        }
    }
`;