import React from "react";
// @ts-ignore
import { create } from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {Header} from "../../Header/Header";
import {App} from "../../../App";
import {AuthDataConnector} from "../../Header/HeaderContainer";


//используем describe, для объединения нескольких тестов в одну группу
//it или test не имеет значения

describe("ProfileStatus component", () => {
    test("span should be displayed", () => {
        const component = create(<AuthDataConnector/>);
        const instance = component.getInstance();
        const span = instance.findByType('span');
        expect(span.length).toBe(1);
    });
});