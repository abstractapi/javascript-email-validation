import 'regenerator-runtime/runtime';
import {AbstractEmailValidation} from '../src'
const mocks = require('./mocks.js')

const API_KEY = 'ENTER YOUR KEY';

function mockFetch(status, data) {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        onreadystatechange: jest.fn(),
        readyState: 4,
        status,
        responseText: JSON.stringify(data),
    };

    const xhrMockClass = () => xhrMockObj;

    global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    setTimeout(() => {
        xhrMockObj.onreadystatechange();
    }, 0);
}


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
    mockFetch(200, mocks);

    AbstractEmailValidation.configure(API_KEY);
    let response = await AbstractEmailValidation.verify('johnsmith@gmail.com')

    expect(response.email).toBe('johnsmith@gmail.com')
});