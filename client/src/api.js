const APIURL = './api/items';

export async function getItems() {
    return fetch(APIURL)
    .then(res => {
        if(!res.ok) {
            if(res.status >= 400 && res.status < 500) {
                return res.json()
                .then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }
            else {
                let err = {errorMessage: 'server is not responding'};
                throw err;
            }
        }
        return res.json();
    })
}

export async function createItem(val) {
    return fetch(APIURL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(val)
    })
    .then(res => {
        if(!res.ok) {
            if(res.status >= 400 && res.status < 500) {
                return res.json()
                .then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
            }
            else {
                let err = {errorMessage: 'server is not responding'};
                throw err;
            }
        }
        return res.json();
    })
}

export async function removeItem(id) {
    const deleteURL = APIURL+ '/' + id;
        return fetch(deleteURL, {
            method: 'delete',
        })
        .then(res => {
            if(!res.ok) {
                if(res.status >= 400 && res.status < 500) {
                    return res.json()
                    .then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                }
                else {
                    let err = {errorMessage: 'server is not responding'};
                    throw err;
                }
            }
            return res.json();
        })
}
