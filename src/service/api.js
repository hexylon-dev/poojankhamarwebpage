
import http from './http';
export const CreateContactUsResponseApi = (body) => {
    return http.post({
        url: `/v1/contactus_responses`,
        data: body,
        messageSettings: { hideSuccessMessage: true },
    });
};