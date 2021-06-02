/* eslint-disable no-undef */
/// <reference types='cypress' />

import {
  initiatePostMethod,
  initiateGetMethod,
  initiatePutMethod,
  initiateDeleteMethod,
  getUrl,
} from '../Utility';

let postResponse: any = '';
let id: any = '';
let getResponse: any = '';
let putResponse: any = '';
let deleteResponse: any = '';
let url: any = '';

describe('Post Call API Test Suite', () => {
  it('Product Api Call request and verifying the status code for post call', async () => {
    url = getUrl();
    await initiatePostMethod(url).then((response: any) => {
      postResponse = JSON.parse(JSON.stringify(response));
      expect(postResponse.status).to.eq(201);
      id = postResponse.body.id;
     
    });
  });

  it('Verify that the productName captured in response is equal to the productName created using post call', () => {
    expect(postResponse.body.productName).equal(Cypress.env('productName'));
  });

  it('Verify that the description captured in response is equal to the description created using post call', () => {
    expect(postResponse.body.description).equal(Cypress.env('description'));
  });

  it('Verify that the category captured in response is equal to the category created using post call', () => {
    expect(postResponse.body.category).equal(Cypress.env('category'));
  });

  it('Verify that the productType captured in response is equal to the productType created using post call', () => {
    expect(JSON.stringify(postResponse.body.productType)).equal(
      JSON.stringify(Cypress.env('productType'))
    );
  });
});

describe('Get Call API Test Suite', () => {
  it('Product Api Call request and verifying the status code for Get call', async () => {
    await initiateGetMethod(id, url).then((response: any) => {
      getResponse = JSON.parse(JSON.stringify(response));
      expect(getResponse.status).to.eq(200);
    });
  });

  it('Verify that the productName captured in get call response is equal to the productName created using Post call', () => {
    expect(getResponse.body.productName).equal(postResponse.body.productName);
  });

  it('Verify that the description captured in get cal  response is equal to the description created using Post call', () => {
    expect(getResponse.body.description).equal(postResponse.body.description);
  });

  it('Verify that the category captured in get call response is equal to the category created using Post call', () => {
    expect(getResponse.body.category).equal(postResponse.body.category);
  });

  it('Verify that the productType captured in get call response is equal to the productType created get post call', () => {
    expect(JSON.stringify(getResponse.body.productType)).equal(
      JSON.stringify(postResponse.body.productType)
    );
  });
});

describe('Put Call API Test Suite', () => {
  it('Product Api Call request and verifying the status code for put call', async () => {
    await initiatePutMethod(id, url).then((response: any) => {
      putResponse = JSON.parse(JSON.stringify(response));
      expect(putResponse.status).to.eq(200);
    });
  });

  it('Verify that the productName captured in response is equal to the productName updated using put call', () => {
    expect(putResponse.body.productName).equal(
      Cypress.env('productNameUpdated')
    );
  });

  it('Verify that the category captured in response is equal to the category name updated using put call', () => {
    expect(putResponse.body.category).equal(Cypress.env('categoryNameUpdated'));
  });
});

describe('Delete Call API Test Suite', () => {
  it('Product Api Call request and verifying the status code for delete call', async () => {
    await initiateDeleteMethod(id, url).then((response: any) => {
      deleteResponse = JSON.parse(JSON.stringify(response));
      expect(deleteResponse.status).to.eq(200);
    });
  });
});
