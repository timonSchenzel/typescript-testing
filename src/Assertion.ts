import { AssertionContract } from './AssertionContract';

export class Assertion implements AssertionContract
{
    baz = 1;

    foo()
    {
        return new Assertion;
    }
}

window.Assertion = Assertion;
