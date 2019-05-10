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

const Text = styled.Text`
    font-weight: 600;
    font-size: 20px;
    margin-vertical: 20px;
    margin-horizontal: 20px;
`;

const CompleteText = styled(Text)`
    color : #bbb;
    text-decoration-line: line-through;
`

const UncompleteText = styled(Text)`
    color :  #353839;
`

const Radio = styled.View`
    width: 30px;
    height: 30px;
    border-width: 3px;
    border-radius: 15px;
    margin-left: 30px;
    margin-right: 30px;
`

const RadioComplete = styled(Radio)`
    border-color: #bbb;
`
const RadioUncomplete = styled(Radio)`
    border-color: #F23657;
`

export default class ToDo extends Component{
    static propTypes = {};
    render(){
        const { id, text, isCompleted, uncomplete, complete } = this.props;
        return (
            <ContainerView>
                { isCompleted ? <CompleteText>{text}</CompleteText> : <UncompleteText>{text}</UncompleteText> }
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
            </ContainerView>
        );
    }
}


ToDo.propTypes = {}