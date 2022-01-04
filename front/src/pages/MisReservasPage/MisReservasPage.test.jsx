import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import MisReservasPage from './MisReservasPage'
import { BrowserRouter } from "react-router-dom";


describe('MisReservasPage', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <MisReservasPage reservas={[]}/>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
    })
})
