import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/items";

// adding an item
export const addItem = (item) => axios.post(REST_API_BASE_URL, item);

// deleting an item
export const deleteItem = (itemId) => axios.delete(REST_API_BASE_URL + "/" + itemId);

// listing all items
export const listItems = () => axios.get(REST_API_BASE_URL);

// getting an item by id
export const getItem = (itemId) => axios.get(REST_API_BASE_URL + "/" + itemId);

// updating an item by id
export const updateItem = (itemId, item) => axios.put(REST_API_BASE_URL + "/" + itemId, item);


