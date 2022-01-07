import React from "react";
// @ts-ignore
import { create } from "react-test-renderer";
import {renderComponent} from "../Profile/ProfileInfo/ProfileStatus.test";
import {Header} from "./Header";



//используем describe, для объединения нескольких тестов в одну группу
//it или test не имеет значения

describe("Header component", () => {
    test("data from props should be in the state", () => {
        const data = {
            id:'123',
            email:'kirill.zarya@inbox.ru',
            login: 'Websturman'
        }
        const component = renderComponent(<Header data={data} isAuth={true}/>);
        const instance = component.root;
        expect(instance.findByType(Header).props.data.id).toBe('123');
        expect(instance.findByType(Header).props.isAuth).toBe(true);
    });
});