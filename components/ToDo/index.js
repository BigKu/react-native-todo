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

const basicTextCss = css`
    font-weight: 600;
    font-size: 20px;
    margin-vertical: 20px;
`;

const BasicText = styled.Text`
   ${basicTextCss};
`
const completeTextCss = css`
    color : #bbb;
    text-decoration-line: line-through;
`
const CompleteText = styled(BasicText)`
    ${completeTextCss};
`

const uncompleteTextCss = css`
    color : #353839;
`
const UncompleteText = styled(BasicText)`
    ${uncompleteTextCss};
`

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
    ${basicTextCss};
    width: ${width / 1.5}px;
    margin-vertical: 15px;
    padding-bottom: 5px;
    ${
        props => props.completedStyle
        ? completeTextCss
        : uncompleteTextCss
    }

`
export default class ToDo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true
        };
    }

    static propTypes = {};
    render(){
        const { id, text, isCompleted, uncomplete, complete } = this.props;
        const { isEditing } = this.state
        return (
            <ContainerView>
                <ColumnView>
                    <TouchableOpacity onPressOut={() => (isCompleted ? uncomplete(id) : complete(id))}>
                    { isCompleted ? <RadioCompleteView /> : <RadioUncompleteView />}
                    </TouchableOpacity>
                    { isEditing ? (<EditingTextInput
                                    multiline={true}
                                    onChangeText={(text)=>(console.log(text))}
                                    onEndEditing={() => {console.log('End Editing')}}
                                    value={text}
                                    completedStyle={isCompleted}
                                    />) : (isCompleted ? <CompleteText>{text}</CompleteText> : <UncompleteText>{text}</UncompleteText>) }
                </ColumnView> 
                    { isEditing ? (<ActionsView>
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
}


ToDo.propTypes = {}