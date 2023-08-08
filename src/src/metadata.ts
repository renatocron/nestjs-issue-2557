/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./votolegal/login/dto/login.dto"), { "AllFieldsRequired": { email: { required: true, type: () => String }, name: { required: true, type: () => String } }, "FieldPickEmail": {}, "PartialAllThenPickEmail": {}, "PickEmailThenPartial": {}, "ExtendAllButName": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./votolegal/login/login.controller"), { "LoginController": { "AllFieldsRequired": { type: String }, "FieldPickEmail": { type: String }, "PartialAllThenPickEmail": { type: String }, "PickEmailThenPartial": { type: String }, "ExtendAllButName": { type: String } } }]] } };
};