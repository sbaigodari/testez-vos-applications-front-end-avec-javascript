/**
* @jest-environment jsdom
*/
import '@testing-library/dom';
import {getByRole, getByTestId,getByLabelText,getByText} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { screen, configure } from '@testing-library/jest-dom'
import SignInPage from './../signIn/index';

beforeEach(()=>{
    document.body.innerHTML = SignInPage.render();
})

afterEach(()=>{
    document.body.innerHTML = '';
})


describe('SignIn Integration Test Suites',()=>{


    it('should display main title',()=>{

        expect(getByTestId(document.body,'main-title')).toHaveTextContent('Façadia');

    });


    it('should display form title',()=>{

        expect(getByTestId(document.body,'sign-in-form-title')).toHaveTextContent('Veuillez vous connecter');

    });


    it('should display email label',()=>{

        expect(getByLabelText(document.body,'Votre addresse e-mail')).toBeTruthy();

    });

    it('should display email input',()=>{

        expect(getByTestId(document.body,'user-email')).toBeTruthy();

    });

    it('should display password label',()=>{

        expect(getByLabelText(document.body,'Votre mot de passe')).toBeTruthy();

    });


    it('should display password input',()=>{

        expect(getByTestId(document.body,'user-password')).toBeTruthy();

    });


    it('should display connexion button',()=>{

        expect(getByRole(document.body,'button')).toBeTruthy();

    });

})