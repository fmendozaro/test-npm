const proxies = {
    proxyObj: new Proxy({age: 5, height: 4},
        {
            get(targetObj, property){
                console.log(`getting the ${property} property`);
                console.log(targetObj[property]);
            }
        }),
    sayHello: () => console.log('Hello proxy')
};

module.exports = proxies;