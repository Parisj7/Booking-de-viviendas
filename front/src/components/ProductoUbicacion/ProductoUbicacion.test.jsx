import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoUbicacion from './ProductoUbicacion'
import { BrowserRouter } from "react-router-dom";


describe('ProductoUbicacion', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProductoUbicacion />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Muy bueno')
    })
})
