import { expect, test, afterEach, vi } from 'vitest';
import { randomTyperOrder, shuffledTyperOrder } from './orders';

test('shuffledTyperOrder nothing', () => {
	expect(shuffledTyperOrder([])).toBeUndefined();
});

test('shuffledTyperOrder [foo]', () => {
	expect(shuffledTyperOrder(['foo'])).toBe('foo');
});

test('shuffledTyperOrder [foo, bar] fixed seed', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	vi.spyOn(Math, 'random').mockImplementation(() => 0.99);
	expect(shuffledTyperOrder(['foo', 'bar'])).toBe('bar');
	expect(shuffledTyperOrder(['foo', 'bar'])).toBe('foo');
	expect(shuffledTyperOrder(['foo', 'bar'])).toBe('bar');
	expect(shuffledTyperOrder(['foo', 'bar'])).toBe('foo');
});

test('shuffledTyperOrder [foo, bar] keep last input in memory', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	vi.spyOn(Math, 'random').mockImplementation(() => 0.99);
	expect(shuffledTyperOrder(['foo', 'bar'])).toBe('bar');
	expect(shuffledTyperOrder([])).toBe('foo');
	expect(shuffledTyperOrder([])).toBeUndefined();
});

test('shuffledTyperOrder [foo, bar, qux] in memory', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	vi.spyOn(Math, 'random').mockImplementation(() => 0.99);
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('qux');
	// Will change shuffle result
	vi.spyOn(Math, 'random').mockImplementation(() => 0);
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('bar');
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('foo');

	// second roll
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('foo');
	// Will change shuffle result
	vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('qux');
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('bar');

	// thrid roll
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('bar');
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('qux');
	expect(shuffledTyperOrder(['foo', 'bar', 'qux'])).toBe('foo');
});

//

test('randomTyperOrder nothing', () => {
	expect(randomTyperOrder([])).toBeUndefined();
});

test('randomTyperOrder [foo]', () => {
	expect(randomTyperOrder(['foo'])).toBe('foo');
});

test('randomTyperOrder [foo, bar]', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.99);
	expect(randomTyperOrder(['foo', 'bar'])).toBe('bar');
	vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.5);
	expect(randomTyperOrder(['foo', 'bar'])).toBe('bar');
	vi.spyOn(Math, 'random').mockImplementationOnce(() => 0);
	expect(randomTyperOrder(['foo', 'bar'])).toBe('foo');
});
