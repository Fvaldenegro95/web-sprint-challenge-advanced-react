import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name/i);
    userEvent.type(firstName, 'Felipe');

    const lastName = screen.getByLabelText(/Last Name/i);
    userEvent.type(lastName, 'Valdenegro');

    const address = screen.getByLabelText(/Address/i);
    userEvent.type(address, '1234 Main St');

    const city = screen.getByLabelText(/City/i)
    userEvent.type(city, 'cityville')

    const state = screen.getByLabelText(/State/i)
    userEvent.type(state, 'stateville')  
    
    const zip = screen.getByLabelText(/Zip/i)
    userEvent.type(zip, 'zip code')      

    const button = screen.getByRole('button')
    userEvent.click(button);

    await waitFor(() => {
        const successMessage = screen.queryByTestId('successMessage');
        expect(successMessage).toBeInTheDocument();
    })


});
