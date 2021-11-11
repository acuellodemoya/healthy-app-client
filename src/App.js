import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './state/store/store'

export const App = () => {
    return (
        <div>
            <Provider store={ store }>
                <AppRouter/>
            </Provider>
        </div>
    )
}
