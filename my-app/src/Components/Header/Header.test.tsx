import React from "react";
// @ts-ignore
import { create } from "react-test-renderer";
import {Header} from "./Header";
import {HeaderContainer} from "./HeaderContainer";



//используем describe, для объединения нескольких тестов в одну группу
//it или test не имеет значения

describe("Header component", () => {
    test("data from props should be in the state", () => {
        const data = {
            id:'123',
            email:'kirill.zarya@inbox.ru',
            login: 'Websturman'
        }
        const component = create(<HeaderContainer data={data} isAuth={true}/>);
        const instance = component.getInstance()
        expect(instance.state.data.id).toBe('123');
        expect(instance.state.isAuth).toBe(true);
    });
});