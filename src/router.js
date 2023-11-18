import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App";
import { indexLoader, showLoader, usersLoader } from "./loaders";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import { createAction, updateAction, deleteAction } from "./actions";
import Login from "./auth/Login";
import Register from "./auth/Register";

const router = createBrowserRouter(
createRoutesFromElements(
    <>
        <Route path="/" element={<App />}>
            <Route path="" element={<Index />} loader={indexLoader} />
            <Route path="event/:id" element={<Show />} loader={showLoader} />
            <Route path="new" element={<New />} />
            <Route path="create" action={createAction} />
            <Route path="update/:id" action={updateAction} />
            <Route path="delete/:id" action={deleteAction} />

            <Route path='login' element={<Login />} loader={usersLoader} />
            <Route path='register' element={<Register />} loader={usersLoader} />
        </Route>
    </>
));

export default router;