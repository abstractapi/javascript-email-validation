import * as core from 'javascript-core';

export class AbstractEmailValidation {
    static apiKey;

    static configure = (apiKey) => {
        this.apiKey = apiKey;
    }

    static verify = (email) => {
        if (!email) {
            throw new Error('Email is not provided.')
        }

        const self = this;

        return core.makeApiCall('emailvalidation', self.apiKey, `email=${email}`)
            .then(response => {
                // modify response so it returns Boolean instead of object
                let modifiedResponse = response;
                modifiedResponse['is_catchall_email'] = response.is_catchall_email.value;
                modifiedResponse['is_disposable_email'] = response.is_disposable_email.value;
                modifiedResponse['is_free_email'] = response.is_free_email.value;
                modifiedResponse['is_mx_found'] = response.is_mx_found.value;
                modifiedResponse['is_role_email'] = response.is_role_email.value;
                modifiedResponse['is_smtp_valid'] = response.is_smtp_valid.value;
                modifiedResponse['is_valid_format'] = response.is_valid_format.value;

                return modifiedResponse;
            }).catch(error => {
                return error;
            });
    };
}
