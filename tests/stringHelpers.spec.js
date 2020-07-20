import stringHelpers from '../src/functions/helpers/strings';

describe('String Helpers', () => {
    let name = 'Foo Bar';

    it('formats uppercase', async () => {
        expect(stringHelpers.uppercase(name)).toEqual('FOO BAR');
    });

    it('formats studly_case', async () => {
        expect(stringHelpers.studly_case(name)).toEqual('FooBar');
    });

    it('formats title_case', async () => {
        expect(stringHelpers.title_case(name)).toEqual('Foo Bar');
    });

    it('formats inline_case', async () => {
        expect(stringHelpers.inline_case(name)).toEqual('foo bar');
    });

    it('formats snake_case', async () => {
        expect(stringHelpers.snake_case(name)).toEqual('foo_bar');
    });

    it('formats studly_snake_case', async () => {
        expect(stringHelpers.studly_snake_case(name)).toEqual('Foo_Bar');
    });

    it('formats camel_case', async () => {
        expect(stringHelpers.camel_case(name)).toEqual('fooBar');
    });

    it('formats kebab_case', async () => {
        expect(stringHelpers.kebab_case(name)).toEqual('foo-bar');
    });

    it('formats pluralize', async () => {
        expect(stringHelpers.pluralize(name)).toEqual('Foo Bars');
    });
});
