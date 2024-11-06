# React Product Filter Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It demonstrates a product catalog with an efficient and interactive filtering system, optimized for performance, responsive design, and includes various enhancements like sorting and user feedback.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!  
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and copy all the configuration files and transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Features Implemented

This app provides a product catalog with a comprehensive filtering and sorting system. Key features include:

### 1. **Data Fetching**

- Fetch product data from mock data for testing purposes.
- Handle pagination efficiently if the dataset is large to avoid performance issues.

### 2. **Filter Options**

- Display a set of available filters in a sidebar or filter panel:
  - Category
  - Brand
  - Price Range (slider)
  - Rating
- Allow users to apply multiple filters at once.

### 3. **Real-Time Filtering**

- Implement real-time filtering as users interact with the filter options.
- Use debouncing to prevent unnecessary renders or API calls when filtering by text input (e.g., price range or search).

### 4. **Responsive Design**

- Ensure the filtering system works seamlessly on both mobile and desktop devices.
- Implement a collapsible filter menu for smaller screens using React state to manage the visibility of filters.

### 5. **User Feedback**

- Display a loading spinner (using `react-spinners` or custom component) while fetching data or applying filters.
- Show a "No products found" message if no products match the current filter criteria.

### 6. **Optimization**

- Optimize filtering and rendering processes for better performance, particularly when dealing with large datasets.
- Minimize unnecessary re-renders by leveraging React hooks and memoization techniques.

### 7. **Sort Options (Bonus)**

- Add sorting functionality to allow users to sort products by:
  - Price (low to high, high to low)
  - Rating
  - Popularity
- Ensure sorting integrates with the filter options, updating the product list accordingly.

### 8. **Extra (Bonus)**

- Implement `localStorage` to save user filter and sorting preferences so that they persist even when the user revisits the page or refreshes the browser.

### 9. **Testing (Required)**

- Implement unit tests using Jest or React Testing Library to check the functionality of the filtering system. Tests should cover:
  - **Rendering of Components**: Ensure the product catalog and filter components render correctly.
  - **Filter Logic**: Verify that the filtering logic works as expected and correctly filters the product list based on user input (category, price range, brand, rating).
  - **Real-Time Updates**: Test that the filtering system updates in real-time as the user changes filter values.
  - **No Products Found**: Test the behavior when no products match the filter criteria.
  - **Sorting Functionality**: If sorting is implemented, test that it works as expected.

---

## Learning Resources

- To learn more about React, check out the [React Documentation](https://reactjs.org/).
- To learn about Create React App, visit the [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started).

## Development Notes

- For better performance, consider using **React Context API** or **Redux** for state management if the app grows beyond the current scope.
- **Debouncing** is critical for performance, especially when applying multiple filters, so ensure that it's implemented efficiently.
- Consider testing the app in different screen sizes to ensure a seamless mobile experience.

---
