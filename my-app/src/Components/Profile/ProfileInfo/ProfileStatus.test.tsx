import React from "react";
// @ts-ignore
import { create } from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

export const renderComponent = (component:any) =>{
    return create(<Provider store={store}>{component}</Provider>)
}
//используем describe, для объединения нескольких тестов в одну группу
//it или test не имеет значения

describe("ProfileStatus component", () => {
    test("span should be displayed", () => {
        const component = renderComponent(<ProfileStatus/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test("after creation input shouldn't be displayed", () => {
        const component = renderComponent(<ProfileStatus/>);
        const root = component.root;
        expect(()=> {
            const input = root.findByType('input');
        }).toThrow();
    });
    test("span should contain correct status", () => {
        const component = renderComponent(<ProfileStatus/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('no status');
        // expect(span.children[0]).toBe('no status' || status);
    });
    test("input should be displayed instead of span", () => {
        // const onClickChange = jest.fn();
        const {status} = store.getState().profile
        const component = renderComponent(<ProfileStatus/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe(status);
    });
});