import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import {createContext, useState} from 'react';
import {QueryClient, QueryClientProvider, useQueryClient} from "react-query";
export const MyUserContext = createContext();

function App() {
  const queryClient = new QueryClient()
    const [title, setTitle] = useState("")
  return (
    <QueryClientProvider client={queryClient} >
        <MyUserContext.Provider  value={{
            title: title,
            changeTitle: (titleNew) => { setTitle(titleNew)}
        }}>
            <RouterProvider router={router} />
        </MyUserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;


