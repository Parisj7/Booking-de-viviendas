import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import MisFavoritosPage from './MisFavoritosPage'
import { BrowserRouter } from "react-router-dom";
import { FavsContext } from "../../context/FavsContext";


describe('FavoritosPage', () => {
    let component;
    let infoContext = {
        favs: []
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <FavsContext.Provider value={infoContext}>
                    <MisFavoritosPage />
                </FavsContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Parece que aún no tienes ningún producto favorito')
    })
})
