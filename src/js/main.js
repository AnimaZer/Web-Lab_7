'use strict';
import '../css/style.css';
import _ from 'lodash';
window.onload = function () {

  var listingBlock = {
    className: 'listing-block',
    blockName: 'Listing:',
    classSelect: 'listing-select',
    option: ['apple', 'orange']
  };
  //     var storeBlock = [
  //   {className: 'store-block'},
  //   {blockName: 'Store:'},
  //   {classSelect: 'store-select'},
  // ];

  var template = document.getElementById('template').innerHTML;
  var html = _.template(template)(listingBlock);
  // document.querySelector('.listing-block')
  // var str = document.querySelector('#template').textContent;

  // var tmpl = document.getElementById('template').innerHTML;
  // var html = _.template(str)({
    // data: data
  // });
  // document.querySelector('.app').prepend(list(listingBlock));
  document.querySelector('.app').innerHTML = html;
  // alert(list(data));
  // document.write(test);

  const listingElements = ['apple', 'orange'];
  const storeElements = [];

  function addToStoreElements(element) {
    let elemID = listingElements.indexOf(element);
    if (elemID > -1) {
      storeElements.push(element);
      listingElements.splice(elemID, 1);
    }
  }

  function deleteListingElement(element) {
    let elemID = listingElements.indexOf(element);
    if (elemID > -1) {
      listingElements.splice(elemID, 1);
    }
  }

  function deleteStoreElement(element) {
    let elemID = storeElements.indexOf(element);
    if (elemID > -1) {
      storeElements.splice(elemID, 1);
    }
  }

  function clearListingElements() {
    listingElements.splice(0, listingElements.length);
  }

  function clearStoreElements() {
    storeElements.splice(0, storeElements.length);
  }

  function sortStoreElements() {
    storeElements.sort();
  }

  function createListingElement() {
    let element = window.prompt('Введите название: ');
    if (element) {
      listingElements.push(element);
    }
  }

  function updateUI() {
    let storeSelect = document.querySelector('.store-select');
    let listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (let i = 0; i < listingElements.length; i++) {
      let newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (let i = 0; i < storeElements.length; i++) {
      let newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  let addBtn = document.querySelector('#add-btn');
  let deleteListingElem = document.querySelector('#delete-listing-element-btn');
  let deleteStoreElem = document.querySelector('#delete-store-element-btn');
  let clearListing = document.querySelector('#clear-listing-btn');
  let clearStore = document.querySelector('#clear-store-btn');
  let createElem = document.querySelector('#create-element-btn');
  let sortStore = document.querySelector('#sort-store-btn');

  addBtn.onclick = function () {
    let selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  deleteListingElem.onclick = function () {
    let selectedOption = document.querySelector('.listing-select option:checked');
    deleteListingElement(selectedOption.innerText);
    updateUI();
  };

  deleteStoreElem.onclick = function () {
    let selectedOption = document.querySelector('.store-select option:checked');
    deleteStoreElement(selectedOption.innerText);
    updateUI();
  };

  clearListing.onclick = function () {
    clearListingElements();
    updateUI();
  };

  clearStore.onclick = function () {
    clearStoreElements();
    updateUI();
  };

  createElem.onclick = function () {
    createListingElement();
    updateUI();
  };

  sortStore.onclick = function () {
    sortStoreElements();
    updateUI();
  };
};