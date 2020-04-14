import { ToUppercasePipe } from './to-uppercase.pipe';

describe('ToUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
