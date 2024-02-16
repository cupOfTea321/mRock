// import React from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { useLazyQuery } from '@reduxjs/toolkit/query/react';
//
// // Создаем срез (slice) для хранения состояния лоадера
// const loaderSlice = createSlice({
//     name: 'loader',
//     initialState: false,
//     reducers: {
//         showLoader: (state) => true,
//         hideLoader: (state) => false,
//     },
// });
//
// // Создаем хранилище
// const store = configureStore({
//     reducer: {
//         [loaderSlice.name]: loaderSlice.reducer,
//     },
// });
//
// // Создаем хук для использования состояния и диспетчера
// const useLoader = () => {
//     const loading = useSelector((state) => state.loader);
//     const dispatch = useDispatch();
//     const showLoader = () => dispatch(loaderSlice.actions.showLoader());
//     const hideLoader = () => dispatch(loaderSlice.actions.hideLoader());
//
//     return { loading, showLoader, hideLoader };
// };
//
// // Компонент, который будет отображать глобальный лоадер
// const GlobalLoader = () => {
//     const { loading } = useLoader();
//
//     return loading ? 'Здесь может быть ваш глобальный компонент лоадера' : null;
// };
//
// // Компонент, ко торый загружает контент
// const ContentComponent = () => {
//     const { showLoader, hideLoader } = useLoader();
//     const [getData, { isLoading }] = useLazyQuery({
//         query: ...,
//         onBeforeSend: () => showLoader(),
//         onSuccess: () => hideLoader(),
//         onError: () => hideLoader(),
//     });
//
//     return (
//         <div>
//             <button onClick={getData}>Загрузить данные</button>
//             {isLoading ? 'Загрузка данных...' : 'Данные загружены'}
//         </div>
//     );
// };
//
// const App = () => {
//     return (
//         <Provider store={store}>
//             <GlobalLoader />
//             <ContentComponent />
//         </Provider>
//     );
// };
//
// export default App;
