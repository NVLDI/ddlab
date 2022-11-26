/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddproduct = /* GraphQL */ `
  query GetAddproduct($id: ID!) {
    getAddproduct(id: $id) {
      id
      productCode
      productName
      diamondShape
      shapeCutting
      diamondColor
      diamondCarat
      diamondClarity
      certificateNo
      msrp
      currency
      image
      createdAt
      updatedAt
    }
  }
`;
export const listAddproducts = /* GraphQL */ `
  query ListAddproducts(
    $filter: ModelAddproductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddproducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productCode
        productName
        diamondShape
        shapeCutting
        diamondColor
        diamondCarat
        diamondClarity
        certificateNo
        msrp
        currency
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddDistributor = /* GraphQL */ `
  query GetAddDistributor($id: ID!) {
    getAddDistributor(id: $id) {
      id
      firstname
      lastname
      nicNo
      address
      state
      country
      zipCode
      occupation
      username
      password
      confirmPassword
      phoneNo
      bankName
      accountNo
      shiftCode
      bankAddress
      bankcountry
      email
      sponsorId
      sponsorName
      contactNo
      createdAt
      updatedAt
    }
  }
`;
export const listAddDistributors = /* GraphQL */ `
  query ListAddDistributors(
    $filter: ModelAddDistributorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddDistributors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        nicNo
        address
        state
        country
        zipCode
        occupation
        username
        password
        confirmPassword
        phoneNo
        bankName
        accountNo
        shiftCode
        bankAddress
        bankcountry
        email
        sponsorId
        sponsorName
        contactNo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddAdmin = /* GraphQL */ `
  query GetAddAdmin($id: ID!) {
    getAddAdmin(id: $id) {
      id
      firstname
      lastname
      username
      password
      confirmPassword
      phoneNo
      createdAt
      updatedAt
    }
  }
`;
export const listAddAdmins = /* GraphQL */ `
  query ListAddAdmins(
    $filter: ModelAddAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        username
        password
        confirmPassword
        phoneNo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
