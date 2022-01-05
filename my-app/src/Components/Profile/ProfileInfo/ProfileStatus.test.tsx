import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProfileStatus} from "./ProfileStatus";

//используем describe, для объединения нескольких тестов в одну группу
//it или test не имеет значения

describe('ProfileStatus component', ()=> {
    it('ProfileStatus renders', () => {
        render(<ProfileStatus />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });
})
