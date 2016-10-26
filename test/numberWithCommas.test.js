import test from 'ava';
import numberWithCommas from '../src/numberWithCommas';

test('should return a function', (t) => {
  t.is(typeof numberWithCommas, 'function');
});

test('test positive number', (t) => {
  t.is(numberWithCommas(1), '1');
  t.is(numberWithCommas(100), '100');
  t.is(numberWithCommas(1000), '1,000');
  t.is(numberWithCommas(10000), '10,000');
});

test('test negative number', (t) => {
  t.is(numberWithCommas(-1), '-1');
  t.is(numberWithCommas(-100), '-100');
  t.is(numberWithCommas(-1000), '-1,000');
  t.is(numberWithCommas(-10000), '-10,000');
});

test('test float number', (t) => {
  t.is(numberWithCommas(1000.1), '1,000.1');
  t.is(numberWithCommas(1000.100), '1,000.1');
  t.is(numberWithCommas(1000.1001), '1,000.1,001');
});
