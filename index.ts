import { Subscribable } from './Subscribable';

const sub = new Subscribable();

sub.emit('TEST');
sub.emit('TEST');

function identity<T>(arg: T): T {
  return arg;
}

class Test {
  method<T>(arg: T): T {
    return arg;
  }
}

const ok = new Test();

ok.method<string>('e');
