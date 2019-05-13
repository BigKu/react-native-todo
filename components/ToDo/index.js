import React, { Component } from "react";
import PropTypes from "prop-types";
import { 
    Dimensions,
    TouchableOpacity
 } from "react-native";
import styled from "styled-components/native"

const { height, width } = Dimensions.get('window');

const ContainerView = styled.View`
    border-bottom-color: #bbb;
    border-bottom-width: 1px;
    width: ${ width - 50 };
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const BasicText = styled.Text`
    font-weight: 600;
    font-size: 20px;
    margin-vertical: 20px;
    flex: 1;
`;

const CompleteText = styled(BasicText)`
    color : #bbb;
    text-decoration-line: line-through;
`

const UncompleteText = styled(BasicText)`
    color :  #353839;
`

const BasicRadio = styled.View`
    width: 30px;
    height: 30px;
    border-width: 3px;
    border-radius: 15px;
    margin-right: 30px;
`

const RadioComplete = styled(BasicRadio)`
    border-color: #bbb;
`
const RadioUncomplete = styled(BasicRadio)`
    border-color: #F23657;
`

export default class ToDo extends Component{
    static propTypes = {};
    render(){
        const { id, text, isCompleted, uncomplete, complete } = this.props;
        return (
            <ContainerView>
                {/* <Text
                style={[
                    styles.text,
                    isCompleted ? styles.completedText : styles.uncompletedText
                ]}
                >
                {text}
                </Text> */}
                <TouchableOpacity
                    onPressOut={() => (isCompleted ? uncomplete(id) : complete(id))}
                >
                { isCompleted ? <RadioComplete /> : <RadioUncomplete />}
                {/* <View
                    style={[
                    styles.radio,
                    isCompleted ? styles.radioComplete : styles.radioUncomplete
                    ]}
                /> */}
                </TouchableOpacity>
                { isCompleted ? <CompleteText>{text}</CompleteText> : <UncompleteText>{text}</UncompleteText> }
            </ContainerView>
        );
    }
}


ToDo.propTypes = {}