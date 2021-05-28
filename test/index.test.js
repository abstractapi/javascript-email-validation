import 'regenerator-runtime/runtime';
import {AbstractEmailValidation} from '../src'

const API_KEY = process.env.EMAIL_VALIDATION_API_KEY;

test('Should throw error when no key is configured', () => {
    let thrownError;
    try {
        AbstractEmailValidation.verify('email@email.com')
    }
    catch(error) {
        thrownError = error;
    }

    let expectedErrorObj = new Error('No api key is set.');
    expect(thrownError).toEqual(expectedErrorObj);
});


test('Should throw error when email is empty', () => {
    AbstractEmailValidation.configure(API_KEY);

    let thrownError;
    try {
        AbstractEmailValidation.verify()
    }
    catch(error) {
        thrownError = error;
    }

    let expectedErrorObj = new Error('Email is not provided.');
    expect(thrownError).toEqual(expectedErrorObj);
});

test('Request OK when everything is set up correctly', async () => {
    AbstractEmailValidation.configure(API_KEY);
    let response = await AbstractEmailValidation.verify('johnsmith@gmail.com')

    expect(response.email).toBe('johnsmith@gmail.com')
});