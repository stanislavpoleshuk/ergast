import React from "react";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from 'react-redux';
import configureStore, {IAppState} from "infrastructure/store";
import {Store} from "redux";
import {persistStore} from "redux-persist";

type Props = {}

export class StoreProvider extends React.Component<Props> {
    private store: Store<IAppState>;
    private persistor: any;

    constructor(props: Props) {
        super(props);
        this.createStore = this.createStore.bind(this);
        this.createStore();
    }

    private createStore(): void {
        this.store = configureStore();
        this.persistor = persistStore(this.store);
    }

    render(): React.ReactElement {
        const {children} = this.props;
        return (
            <Provider store={this.store}>
                <PersistGate
                    persistor={this.persistor}
                    children={children}
                />
            </Provider>
        )
    }
}