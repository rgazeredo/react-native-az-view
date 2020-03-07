import React from "react";
import { SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Spinner from "react-native-loading-spinner-overlay";

export default class AzView extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Spinner
          visible={this.props.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#FFFFFF" }}
        />
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={100}
        >
          <ScrollView style={{ height: "100%" }}>
            {this.props.children}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

AzView.propTypes = {
  isLoading: PropTypes.bool.isRequired
};
