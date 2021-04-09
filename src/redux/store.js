import {createStore,applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
//специальное расширение для браузера, которое позволяет легко дебажить redux приложения -
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
// Redux Thunk это middleware библиотека, которая позволяет вам вызвать action creator, возвращая при этом функцию вместо объекта.
// Функция принимает метод dispatch как аргумент, чтобы после того, как асинхронная операция завершится,
// использовать его для диспатчинга обычного синхронного экшена, внутри тела функции.


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;

// Метод composeWithDevTools это улучшеный метод compose, который автоматически добавляет devtools к всему, что мы передали ему внутрь.
// Внутри мы вызываем applyMiddleware, которая принимает в качесте аргументов middleware и применяет их.
// То есть теперь если мы захотим добавить еще какую-то middleware, мы просто добавим ее через запятую.
// Пока же мы применили только middleware thunk для асинхронных екшенов.
//
// Такой код обычно дублируется из проекта в проект и особо не отличается.

// redux-devtools. Это специальное расширение для браузера, которое позволяет легко дебажить redux приложения.



