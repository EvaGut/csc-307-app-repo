import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = -2  ;
  const got = mut.div(-4, 2);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 2;
  const got = mut.div(-4, -2);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = Infinity;
  const got = mut.div(4, 0);
  expect(got).toBe(expected);
});


test('Testing div -- success', () => {
  const expected = 4.35 ;
  const got = mut.div(4.35, 1);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 2 ;
  const got = mut.div(5, 2.5);
  expect(got).toBe(expected);
}); 

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("0numbersinthistest");
  expect(got).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("0 numbersinthistest");
  expect(got).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("numbersinthistest  0");
  expect(got).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("numbersinthistestI");
  expect(got).toBeFalsy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("numbersinthistest  10");
  expect(got).toBeTruthy();
});

test('Testing containsNumbers -- success', () => {
  const got = mut.containsNumbers("numbersinthistest  ");
  expect(got).toBeFalsy();
}); // the bug is that the space is seen as a number when it is not 


