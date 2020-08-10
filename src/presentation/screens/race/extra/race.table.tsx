import {FlatList, RefreshControl, StyleSheet, Text, View} from "react-native";
import React from "react";
import {IAppState} from "infrastructure/store";
import {connect} from "react-redux";
import {Colors} from "core/theme/colors.theme";
import {RaceModel} from "models/race.model";
import {ItemRace} from "./item-race.component";

type Props = {
    isLoading: boolean;
    races: Array<RaceModel>;
}

type State = {}

export class RaceTableContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    keyExtractor = (item: RaceModel) => item.round.toString();

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
        const {races} = this.props;
        return (
            <FlatList
                refreshControl={this.refreshControlRender()}
                contentContainerStyle={styles.container}
                data={races}
                renderItem={(props) => (
                    <ItemRace
                        {...props}
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
            </View>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    races: state.drivers.races,
    isLoading: state.standings.isLoading
});

export const RaceTable = connect(
    mapStateToProps
)(RaceTableContainer);

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    container: {},
    emptyContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})