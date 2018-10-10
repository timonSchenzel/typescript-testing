import { Assertion } from './Assertion';

export = class Test
{
    assertions: Array<Assertion> = [];

    constructor(public greeting: string)
    {

    }

    addAssertion(assertion: Assertion)
    {
        this.assertions.push(assertion);
    }
};
