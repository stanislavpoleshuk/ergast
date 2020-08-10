import {FlatList, RefreshControl, StyleSheet, View} from "react-native";
import React from "react";
import {IAppState} from "infrastructure/store";
import {connect} from "react-redux";
import {DriverStandingModel} from "models/standing.model";
import {StandingsPagination} from "screens/standings/extra/standings.pagination";
import {ItemStanding} from "screens/standings/extra/item-standing.component";
import {Colors} from "core/theme/colors.theme";
import {DriverModel} from "models/driver.model";

type Props = {
    isLoading: boolean;
    data: Array<DriverStandingModel>;
    onItemPress: (driver: DriverModel) => void;
}

type State = {}

export class StandingsTableContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    keyExtractor = (item: DriverStandingModel) => item.Driver.code.toString();

    private refreshControlRender() {
        const {isLoading} = this.props;
        return (
            <RefreshControl
                colors={[Colors.black]}
                refreshing={isLoading}
            />
        );
    }

    private tableRender = (): React.ReactElement => {
        const {data, onItemPress} = this.props;
        return (
            <FlatList
                refreshControl={this.refreshControlRender()}
                contentContainerStyle={styles.containerStyle}
                data={data}
                renderItem={(props) => (
                    <ItemStanding
                        {...props}
                        onPress={onItemPress}
                    />
                )}
                keyExtractor={this.keyExtractor}
            />
        )
    }

    render(): React.ReactElement {
        return (
            <View style={styles.content}>
                {this.tableRender()}
                <StandingsPagination/>
            </View>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    data: state.standings.data,
    isLoading: state.standings.isLoading
});

export const StandingsTable = connect(
    mapStateToProps
)(StandingsTableContainer);

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    containerStyle: {}
})