import React, { Component } from "react";
import PropTypes from "prop-types";
import { 
    Dimensions,
    TouchableOpacity
 } from "react-native";
import styled, { css } from "styled-components/native"

const { height, width } = Dimensions.get('window');

const ContainerView = styled.View`
    border-bottom-color: #bbb;
    border-bottom-width: 1px;
    width: ${ width - 50 };
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const todoTextCss = css`
    font-weight: 600;
    font-size: 20px;
    margin-vertical: 20px;
`;

const TodoText = styled.Text`
   ${todoTextCss};
`
const completeTextCss = css`
    color : #bbb;
    text-decoration-line: line-through;
`
// const CompleteText = styled(TodoText)`
//     ${completeTextCss};
// `

const uncompleteTextCss = css`
    color : #353839;
`
// const UncompleteText = styled(TodoText)`
//     ${uncompleteTextCss};
// `

const BasicRadioView = styled.View`
    width: 30px;
    height: 30px;
    border-width: 3px;
    border-radius: 15px;
    margin-right: 30px;
`

const RadioCompleteView = styled(BasicRadioView)`
    border-color: #bbb;
`
const RadioUncompleteView = styled(BasicRadioView)`
    border-color: #F23657;
`

const ColumnView = styled.View`
    width: ${width / 2 }px;
    flex-direction: row;
    align-items: center;
`

const ActionsView = styled.View`
    flex-direction: row;
`

const ActionContainerView = styled.View`
    margin-horizontal: 5;
`

const ActionText = styled.Text`
    font-size: 15px;
`

const EditingTextInput = styled.TextInput`
    ${todoTextCss};
    width: ${width / 1.5}px;
    margin-vertical: 15px;
    padding-bottom: 5px;
    ${
        props => props.completedStyle
        ? completeTextCss
        : uncompleteTextCss
    }
`

const TodoTextView = styled.Text`
    ${todoTextCss};
    ${props => {
        if(props.completedText === true) {
            return completeTextCss;
        } else if (props.completedText === false) {
            return uncompleteTextCss;
        } else {
            return null;
        }
    }}
`;

export default class ToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    static propTypes = {};
    render(){
        const { id, text, isCompleted, uncomplete, complete } = this.props;
        const { isEditing, toDo } = this.state
        return (
            <ContainerView>
                <ColumnView>
                    <TouchableOpacity onPressOut={() => (isCompleted ? uncomplete(id) : complete(id))}>
                    { isCompleted ? <RadioCompleteView /> : <RadioUncompleteView />}
                    </TouchableOpacity>
                    { isEditing ? ( 
                                    <EditingTextInput
                                        multiline={true}
                                        onChangeText={this._controlText}
                                        onEndEditing={this._endEditing}
                                        value={toDo}
                                        completedStyle={isCompleted}
                                    />
                                    ) : (
                                    <TodoTextView completedText = {isCompleted}>{text}</TodoTextView>) }
                </ColumnView> 
                    { isEditing ? ( <ActionsView>
                                        <TouchableOpacity onPressOut={this._endEditing}>
                                            <ActionContainerView>
                                                <ActionText>✅</ActionText>
                                            </ActionContainerView>
                                        </TouchableOpacity>
                                    </ActionsView>
                                    ) : (
                                    <ActionsView>
                                        <TouchableOpacity onPressOut={this._startEditing}>
                                            <ActionContainerView>
                                                <ActionText>✏️</ActionText>
                                            </ActionContainerView>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ActionContainerView>
                                                <ActionText>❌</ActionText>
                                            </ActionContainerView>
                                        </TouchableOpacity>
                                    </ActionsView>
                    )}
            </ContainerView>
        );
    }

    _startEditing = () => {
        const { text } = this.props;
        this.setState({
            isEditing: true,
            toDo: text
        });
    };

    _controlText = text => {
        this.setState({
            toDo: text
        });
    };

    _endEditing = () => {
        const { toDo } = this.state;
        const { updateToDo, id } = this.props;
        updateToDo(id, toDo);
        this.setState({
            isEditing: false
        });
    };
}


ToDo.propTypes = {}