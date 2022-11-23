/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddproduct = /* GraphQL */ `
  subscription OnCreateAddproduct(
    $filter: ModelSubscriptionAddproductFilterInput
  ) {
    onCreateAddproduct(filter: $filter) {
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
export const onUpdateAddproduct = /* GraphQL */ `
  subscription OnUpdateAddproduct(
    $filter: ModelSubscriptionAddproductFilterInput
  ) {
    onUpdateAddproduct(filter: $filter) {
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
export const onDeleteAddproduct = /* GraphQL */ `
  subscription OnDeleteAddproduct(
    $filter: ModelSubscriptionAddproductFilterInput
  ) {
    onDeleteAddproduct(filter: $filter) {
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
export const onCreateAddDistributor = /* GraphQL */ `
  subscription OnCreateAddDistributor(
    $filter: ModelSubscriptionAddDistributorFilterInput
  ) {
    onCreateAddDistributor(filter: $filter) {
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
      backcountry
      email
      sponsorId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAddDistributor = /* GraphQL */ `
  subscription OnUpdateAddDistributor(
    $filter: ModelSubscriptionAddDistributorFilterInput
  ) {
    onUpdateAddDistributor(filter: $filter) {
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
      backcountry
      email
      sponsorId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAddDistributor = /* GraphQL */ `
  subscription OnDeleteAddDistributor(
    $filter: ModelSubscriptionAddDistributorFilterInput
  ) {
    onDeleteAddDistributor(filter: $filter) {
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
      backcountry
      email
      sponsorId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddAdmin = /* GraphQL */ `
  subscription OnCreateAddAdmin($filter: ModelSubscriptionAddAdminFilterInput) {
    onCreateAddAdmin(filter: $filter) {
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
export const onUpdateAddAdmin = /* GraphQL */ `
  subscription OnUpdateAddAdmin($filter: ModelSubscriptionAddAdminFilterInput) {
    onUpdateAddAdmin(filter: $filter) {
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
export const onDeleteAddAdmin = /* GraphQL */ `
  subscription OnDeleteAddAdmin($filter: ModelSubscriptionAddAdminFilterInput) {
    onDeleteAddAdmin(filter: $filter) {
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
