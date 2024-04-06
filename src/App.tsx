import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Resume from './routes/Resume';
import Root from './routes/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Resume />,
        },
        {
          path: "index.html",
          element: <Resume />,
        },
      ],
    },
  ]);
  
  return (
    <MantineProvider>
      <RouterProvider router={router}/>
    </MantineProvider>
  )
}

export default App;
