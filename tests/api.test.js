const request = require('request-promise');
let basePath = 'http://localhost:8080';

let listOptions = {
    method: 'GET',
    url: basePath + '/list/',
    headers: {
        'content-type': 'application/json'
    },
    json: true
};

test('New Stack is Empty', (done) => {
    request(listOptions).then((res) => {
        expect(res).toEqual(expect.arrayContaining([]));
        done();
    }).catch((error)=>{
        done(error);
    });
});


test('To have [1] after pushing 1', (done) => {
    request({
        method: 'POST',
        url: basePath + '/push/',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            n: 1
        },
        json: true
    }).then(() => {
        request(listOptions).then((res) => {
            expect(res).toEqual(expect.arrayContaining([1]));
            done();
        }).catch((error)=>{
            done(error);
        });
    }, (err) => {
        done(err);
    });
});

test('To have [2,1] after pushing 2', (done) => {
    request({
        method: 'POST',
        url: basePath + '/push/',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            n: 2
        },
        json: true
    }).then(() => {
        request(listOptions).then((res) => {
            expect(res).toEqual(expect.arrayContaining([2,1]));
            done();
        }).catch((error)=>{
            done(error);
        });
    }, (err) => {
        done(err);
    });
});

test('To pop 2', (done) => {
    request({
        method: 'POST',
        url: basePath + '/pop/',
        headers: {
            'content-type': 'application/json'
        },
        json: true
    }).then((res) => {
        expect(res).toEqual(2);
        done();
    }, (err) => {
        done(err);
    });
});

test('Stack is Empty after clear', (done) => {
    request({
        method: 'DELETE',
        url: basePath + '/clear/',
        headers: {
            'content-type': 'application/json'
        },
        json: true
    }).then(() => {
        request(listOptions).then((res) => {
            expect(res).toEqual(expect.arrayContaining([]));
            done();
        }).catch((error)=>{
            done(error);
        });
    }, (err) => {
        done(err);
    });
});

test('To pop undefined if stack is empty', (done) => {
    request({
        method: 'POST',
        url: basePath + '/pop/',
        headers: {
            'content-type': 'application/json'
        },
        json: true
    }).then((res) => {
        expect(res).toBeUndefined();
        done();
    }, (err) => {
        done(err);
    });
});