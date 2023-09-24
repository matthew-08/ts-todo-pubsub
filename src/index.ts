const target = {
  message1: 'hello',
  message2: 'everyone',
};

class Test {
  foo: 1 = 1;
  bar: 2 = 2;

  method() {}
}

const ok = new Test();

const proxy = new Proxy(ok, {
  get(target, prop, receiver) {
    console.log(prop);
    if (prop === 'foo') {
      return 'PROXIED';
    }
    return Reflect.get(target, prop, receiver);
  },
});

console.log(proxy.method());
