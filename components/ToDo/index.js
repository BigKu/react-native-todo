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
export default class ToDo extends Component{
    static propTypes = {};
    render(){
        const { id, text, isCompleted, uncomplete, complete } = this.props;
        return (
            <ContainerView>
                <ColumnView>
                    <TouchableOpacity onPressOut={() => (isCompleted ? uncomplete(id) : complete(id))}>
                    { isCompleted ? <RadioCompleteView /> : <RadioUncompleteView />}
                    </TouchableOpacity>
                    { isCompleted ? <CompleteText>{text}</CompleteText> : <UncompleteText>{text}</UncompleteText> }
                </ColumnView>
                <ActionsView>
                    <TouchableOpacity>
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
            </ContainerView>
        );
    }
}


ToDo.propTypes = {}