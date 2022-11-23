/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddproduct = /* GraphQL */ `
  mutation CreateAddproduct(
    $input: CreateAddproductInput!
    $condition: ModelAddproductConditionInput
  ) {
    createAddproduct(input: $input, condition: $condition) {
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
export const updateAddproduct = /* GraphQL */ `
  mutation UpdateAddproduct(
    $input: UpdateAddproductInput!
    $condition: ModelAddproductConditionInput
  ) {
    updateAddproduct(input: $input, condition: $condition) {
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
export const deleteAddproduct = /* GraphQL */ `
  mutation DeleteAddproduct(
    $input: DeleteAddproductInput!
    $condition: ModelAddproductConditionInput
  ) {
    deleteAddproduct(input: $input, condition: $condition) {
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
export const createAddDistributor = /* GraphQL */ `
  mutation CreateAddDistributor(
    $input: CreateAddDistributorInput!
    $condition: ModelAddDistributorConditionInput
  ) {
    createAddDistributor(input: $input, condition: $condition) {
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
export const updateAddDistributor = /* GraphQL */ `
  mutation UpdateAddDistributor(
    $input: UpdateAddDistributorInput!
    $condition: ModelAddDistributorConditionInput
  ) {
    updateAddDistributor(input: $input, condition: $condition) {
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
export const deleteAddDistributor = /* GraphQL */ `
  mutation DeleteAddDistributor(
    $input: DeleteAddDistributorInput!
    $condition: ModelAddDistributorConditionInput
  ) {
    deleteAddDistributor(input: $input, condition: $condition) {
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
export const createAddAdmin = /* GraphQL */ `
  mutation CreateAddAdmin(
    $input: CreateAddAdminInput!
    $condition: ModelAddAdminConditionInput
  ) {
    createAddAdmin(input: $input, condition: $condition) {
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
export const updateAddAdmin = /* GraphQL */ `
  mutation UpdateAddAdmin(
    $input: UpdateAddAdminInput!
    $condition: ModelAddAdminConditionInput
  ) {
    updateAddAdmin(input: $input, condition: $condition) {
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
export const deleteAddAdmin = /* GraphQL */ `
  mutation DeleteAddAdmin(
    $input: DeleteAddAdminInput!
    $condition: ModelAddAdminConditionInput
  ) {
    deleteAddAdmin(input: $input, condition: $condition) {
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
