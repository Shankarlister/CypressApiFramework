/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable init-declarations */
/// <reference types='cypress' />

/**
 * This mwhod is used to initiate the Post api call
 * @param urlActual 
 */
 export function initiatePostMethod(url: any): Promise<Cypress.Response> {
  return new Promise(function (resolve) {
    // eslint-disable-next-line init-declarations
    let request: any;
    {
      request = cy.request({
        method: 'POST',
        url: url,
        headers: {
          "content-type": "application/json",
        },
        body: {
          productName: Cypress.env("productName"),
          price: Cypress.env("price"),
          description: Cypress.env("description"),
          category: Cypress.env("category"),
          productType: Cypress.env("productType"),
        },
      });
      request.then((response: any) => {
        resolve(response);
      });
    }
  });
}

/**
 * This method is used to get the url based on the environment mode
 */
export function getUrl():String {

  return Cypress.env("mode")==='dev'?Cypress.env("dev_url"):Cypress.env("qa_url");
}


/**
 * This method is used to initiate the Get api call
 * @param id 
 * @param urlActual 
 */
export function initiateGetMethod(id: any, url: any): Promise<Cypress.Response> {
  return new Promise(function (resolve) {
    let request: any;
    {
      request = cy.request({
        method: "GET",
        url: url + "/" + id,
        headers: {
          "content-type": "application/json",
        },
      });

      request.then((response: any) => {
        resolve(response);
      });
    }
  });
}

/**
 * This method is used to initiate the Put api call
 * @param id 
 * @param urlActual 
 */
export function initiatePutMethod(id: any,url: any): Promise<Cypress.Response> {
  return new Promise(function (resolve) {
    // eslint-disable-next-line init-declarations
    let request: any;
    {
      request = cy.request({
        method: "PUT",
        url: url + "/" + id,
        headers: {
          "content-type": "application/json",
        },
        body: {
          productName: Cypress.env("productNameUpdated"),
          category: Cypress.env("categoryNameUpdated"),
        },
      });
      request.then((response: any) => {
        resolve(response);
      });
    }
  });
}

/**
 * This method is used to initiate the Delete api call
 * @param id 
 * @param urlActual 
 */
export function initiateDeleteMethod( id: any, url: any): Promise<Cypress.Response> {
  return new Promise(function (resolve) {
    let request: any;
    {
      request = cy.request({
        method: "DELETE",
        url: url + "/" + id,
        headers: {
          "content-type": "application/json",
        },
        failOnStatusCode: false,
      });

      request.then((response: any) => {
        resolve(response);
      });
    }
  });
}
