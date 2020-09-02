import { getHookSelector } from '../helpers/selectorHelper';

const TODO_INPUT_SELECTOR = 'todo-input';
const TODO_BUTTON_SELECTOR = 'todo-add-button';
const TODO_ITEM_SELECTOR = 'todo-item';
const TODO_ACTIVE_BUTTON_SELECTOR = 'todo-active-button';

const TODO_SEARCH_INPUT_SELECTOR = 'todo-search-input';
const TODO_SEARCH_BUTTON = 'todo-search-button';

const getTodoInput = () => cy.get(getHookSelector(TODO_INPUT_SELECTOR));
const getTodoAddButton = () => cy.get(getHookSelector(TODO_BUTTON_SELECTOR));
const getActiveFilterButton = () => cy.get(getHookSelector(TODO_ACTIVE_BUTTON_SELECTOR));
const getTodoItems = () => cy.get(getHookSelector(TODO_ITEM_SELECTOR));

const getSearchButton = () => cy.get(getHookSelector(TODO_SEARCH_BUTTON));
const getTodoSearchInput = () => cy.get(getHookSelector(TODO_SEARCH_INPUT_SELECTOR));


const addItems = () => {
  getTodoInput().type('test1');
  getTodoAddButton().click();
  getTodoInput().type('test2');
  getTodoAddButton().click();
  getTodoInput().type('abc1');
  getTodoAddButton().click();
  getTodoInput().type('test4');
  getTodoAddButton().click();
};

describe('Todo List', () => {
  describe('Mobile View Port', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('user should be able to add todo items into list', () => {
      addItems();
      getTodoItems().should('have.length', 4);
    });

    it('user should be able to complete the items', () => {
      addItems();
      cy.contains('test1').click();
      cy.contains('test1').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
      cy.contains('test4').click();
      cy.contains('test1').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
      getActiveFilterButton().click();
      getTodoItems().should('have.length', 2);
    });

    it('user should be able to search in the items', () => {
      addItems();
      getTodoSearchInput().type('abc');
      getSearchButton().click();
      getTodoItems().should('have.length', 1);
    });
    it('user should able to see searched text as highlighted', () => {
      addItems();
      getTodoSearchInput().type('abc');
      getSearchButton().click();
      cy.contains('abc').should('have.css', 'background', 'rgb(255, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box');
      // wait for video to visualise
      cy.wait(1000);
    });
  });
});
