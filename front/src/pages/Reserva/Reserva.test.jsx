import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Reserva from './Reserva'
import { BrowserRouter } from "react-router-dom";


describe('Reserva', () => {
    let component;
    beforeEach(() => {
        let auth = {
            jwt: "Aaaaaaaaaaaaaaaaaa"
        }
        let authString = JSON.stringify(auth)
        localStorage.setItem("auth", authString )
        component = render(
            <BrowserRouter>
                <Reserva />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
    })
})
